<?php
// Copy this file to smtp-config.php on the server and fill in your SMTP details.
// Best place: ONE LEVEL ABOVE public_html (e.g. /home/USER/smtp-config.php) so it is never web-accessible.
// Second-best: next to contact.php inside public_html (.htaccess blocks direct access).
// Never commit the real smtp-config.php to Git.
return [
    'host'       => 'smtp.gmail.com',
    'port'       => 587,                 // 465 = SSL, 587 = STARTTLS
    'encryption' => 'ssl',               // 'ssl' or 'tls' (STARTTLS)
    'username'   => 'teamacademify@gmail.com',
    'password'   => 'mvuewlvybijmzxfj',
    'from_email' => 'teamacademify@gmail.com',   // usually the same as username
    'from_name'  => 'Academify Team',
    'to_email'   => 'teamacademify@gmail.com, pk.knit4697@gmail.com',                  // optional: overrides the recipient baked in at build time
];
