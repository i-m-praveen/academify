<?php
// Copy this file to smtp-config.php on the server and fill in your SMTP details.
// Best place: ONE LEVEL ABOVE public_html (e.g. /home/USER/smtp-config.php) so it is never web-accessible.
// Second-best: next to contact.php inside public_html (.htaccess blocks direct access).
// Never commit the real smtp-config.php to Git.
return [
    'host'       => 'smtp.example.com',
    'port'       => 465,                 // 465 = SSL, 587 = STARTTLS
    'encryption' => 'ssl',               // 'ssl' or 'tls' (STARTTLS)
    'username'   => 'noreply@yourdomain.com',
    'password'   => 'YOUR_SMTP_PASSWORD',
    'from_email' => 'noreply@yourdomain.com',   // usually the same as username
    'from_name'  => 'Academify Website',
    'to_email'   => '',                  // optional: overrides the recipient baked in at build time
];
