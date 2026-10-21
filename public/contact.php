<?php
// Contact / demo-request handler for the static Academify site.
// __CONTACT_EMAIL__ is replaced at build time (scripts/postbuild.mjs) with siteConfig.email.
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

const RECIPIENT = '__CONTACT_EMAIL__';

function respond(int $status, array $body): void {
    http_response_code($status);
    echo json_encode($body);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['error' => 'Method not allowed.']);
}

$data = json_decode(file_get_contents('php://input'), true);
if (!is_array($data)) {
    respond(400, ['error' => 'Invalid request body.']);
}

// Strip control characters / newlines from single-line values (prevents header injection).
$line = fn($v) => trim(preg_replace('/[\r\n\t\x00-\x1F]+/', ' ', (string)($v ?? '')));
$name         = $line($data['name'] ?? '');
$organization = $line($data['organization'] ?? '');
$email        = $line($data['email'] ?? '');
$phone        = $line($data['phone'] ?? '');
$interest     = $line($data['interest'] ?? '');
$message      = trim((string)($data['message'] ?? ''));

$interests = [
    'olympiad-hosting'   => 'Olympiad hosting',
    'question-bank'      => 'Institutional question bank',
    'practice-analytics' => 'Daily practice & analytics',
    'other'              => 'Other',
];

$errors = [];
if (mb_strlen($name) < 2)          $errors['name'] = 'Please enter your full name.';
if (mb_strlen($organization) < 2)  $errors['organization'] = 'Please enter your organization name.';
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors['email'] = 'Please enter a valid email address.';
if ($phone !== '' && (mb_strlen($phone) < 7 || mb_strlen($phone) > 20)) $errors['phone'] = 'Please enter a valid phone number.';
if (!isset($interests[$interest])) $errors['interest'] = "Please select what you're interested in.";
if (mb_strlen($message) < 10)      $errors['message'] = 'Please tell us a bit more (at least 10 characters).';
if (mb_strlen($message) > 5000 || mb_strlen($name) > 200 || mb_strlen($organization) > 200 || mb_strlen($email) > 200) {
    $errors['message'] = 'One of the fields is too long.';
}
if ($errors) {
    respond(422, ['error' => 'Validation failed.', 'issues' => $errors]);
}

// ---- SMTP (preferred) --------------------------------------------------------------------------
// Looks for smtp-config.php one level above this folder, then next to this file. See smtp-config.sample.php.
function load_smtp_config(): ?array {
    foreach ([dirname(__DIR__) . '/smtp-config.php', __DIR__ . '/smtp-config.php'] as $f) {
        if (is_file($f)) {
            $c = include $f;
            if (is_array($c) && !empty($c['host']) && !empty($c['username'])) return $c;
        }
    }
    return null;
}

function smtp_cmd($fp, string $cmd, array $ok): void {
    if ($cmd !== '') fwrite($fp, $cmd . "\r\n");
    $r = '';
    while (($l = fgets($fp, 515)) !== false) {
        $r .= $l;
        if (strlen($l) < 4 || $l[3] === ' ') break;
    }
    if (!in_array((int)substr($r, 0, 3), $ok, true)) throw new RuntimeException('SMTP error: ' . trim($r));
}

// Accepts an array or a comma/semicolon-separated string; returns only valid, de-duplicated addresses.
function parse_recipients($v): array {
    $list = is_array($v) ? $v : preg_split('/[,;\s]+/', (string)$v);
    return array_values(array_unique(array_filter(array_map("trim", $list), fn($a) => filter_var($a, FILTER_VALIDATE_EMAIL))));
}

function smtp_send(array $c, array $recipients, string $subject, string $body, string $replyName, string $replyEmail): void {
    $port = (int)($c['port'] ?? 465);
    $enc  = strtolower($c['encryption'] ?? ($port === 465 ? 'ssl' : 'tls'));
    $fp = @stream_socket_client(($enc === 'ssl' ? 'ssl://' : 'tcp://') . $c['host'] . ':' . $port, $errno, $errstr, 15);
    if (!$fp) throw new RuntimeException("SMTP connect failed: $errstr");
    stream_set_timeout($fp, 15);
    $domain = preg_replace('/[^a-z0-9.\-]/i', '', $_SERVER['HTTP_HOST'] ?? 'localhost');
    $fromEmail = $c['from_email'] ?? $c['username'];
    $fromName  = $c['from_name'] ?? 'Academify Website';
    try {
        smtp_cmd($fp, '', [220]);
        smtp_cmd($fp, "EHLO $domain", [250]);
        if ($enc === 'tls') {
            smtp_cmd($fp, 'STARTTLS', [220]);
            if (!stream_socket_enable_crypto($fp, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) throw new RuntimeException('STARTTLS failed');
            smtp_cmd($fp, "EHLO $domain", [250]);
        }
        smtp_cmd($fp, 'AUTH LOGIN', [334]);
        smtp_cmd($fp, base64_encode($c['username']), [334]);
        smtp_cmd($fp, base64_encode($c['password'] ?? ''), [235]);
        smtp_cmd($fp, "MAIL FROM:<$fromEmail>", [250]);
        foreach ($recipients as $r) smtp_cmd($fp, "RCPT TO:<$r>", [250, 251]);
        smtp_cmd($fp, 'DATA', [354]);
        $msg = 'From: =?UTF-8?B?' . base64_encode($fromName) . "?= <$fromEmail>\r\n"
             . 'Reply-To: =?UTF-8?B?' . base64_encode($replyName) . "?= <$replyEmail>\r\n"
             . "To: " . implode(", ", array_map(fn($r) => "<$r>", $recipients)) . "\r\n"
             . 'Subject: =?UTF-8?B?' . base64_encode($subject) . "?=\r\n"
             . 'Date: ' . date('r') . "\r\n"
             . "MIME-Version: 1.0\r\nContent-Type: text/plain; charset=UTF-8\r\nContent-Transfer-Encoding: base64\r\n\r\n"
             . chunk_split(base64_encode($body));
        fwrite($fp, $msg . "\r\n.\r\n");
        smtp_cmd($fp, '', [250]);
        fwrite($fp, "QUIT\r\n");
    } finally {
        fclose($fp);
    }
}

$subject = 'New demo request: ' . $organization;
$body = "New demo request from the website\n\n"
      . "Name: $name\nOrganization: $organization\nEmail: $email\n"
      . 'Phone: ' . ($phone !== '' ? $phone : '-') . "\n"
      . 'Interested in: ' . $interests[$interest] . "\n\nMessage:\n$message\n";

$smtp = load_smtp_config();
if ($smtp) {
    try {
        $to = parse_recipients(!empty($smtp["to_email"]) ? $smtp["to_email"] : RECIPIENT);
        if (!$to) throw new RuntimeException("No valid recipient configured");
        smtp_send($smtp, $to, $subject, $body, $name, $email);
    } catch (Throwable $e) {
        error_log('contact.php: ' . $e->getMessage());
        respond(500, ['error' => 'Unable to send message.'] + (!empty($smtp['debug']) ? ['detail' => $e->getMessage()] : []));
    }
    respond(200, ['ok' => true]);
}

// ---- Fallback: PHP mail() when no SMTP config exists --------------------------------------------
$host = preg_replace('/^www\./', '', preg_replace('/[^a-z0-9.\-]/i', '', $_SERVER['HTTP_HOST'] ?? 'localhost'));
$from = 'noreply@' . $host;

$headers = [
    'From' => "Academify Website <$from>",
    'Reply-To' => "$name <$email>",
    'Content-Type' => 'text/plain; charset=UTF-8',
    'X-Mailer' => 'PHP/' . phpversion(),
];

$sent = mail(RECIPIENT, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, $headers, '-f' . $from);
if (!$sent) {
    respond(500, ['error' => 'Unable to send message.']);
}
respond(200, ['ok' => true]);
