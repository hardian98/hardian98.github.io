<?php

$user_agent = $_SERVER['HTTP_USER_AGENT'];

// Mendapatkan jenis perangkat
$device_type = 'Unknown';
if (preg_match('/(Android|iPhone|iPad|iPod)/i', $user_agent)) {
  $device_type = 'Mobile';
} elseif (preg_match('/(Windows|Macintosh|Linux)/i', $user_agent)) {
  $device_type = 'Desktop';
}

// Mendapatkan sistem operasi
$os = 'Unknown';
if (preg_match('/Windows/i', $user_agent)) {
  $os = 'Windows';
} elseif (preg_match('/Macintosh/i', $user_agent)) {
  $os = 'Mac OS X';
} elseif (preg_match('/Linux/i', $user_agent)) {
  $os = 'Linux';
}

// Mendapatkan browser
$browser = 'Unknown';
if (preg_match('/Chrome/i', $user_agent)) {
  $browser = 'Chrome';
} elseif (preg_match('/Firefox/i', $user_agent)) {
  $browser = 'Firefox';
} elseif (preg_match('/Safari/i', $user_agent)) {
  $browser = 'Safari';
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Informasi Perangkat</title>
</head>
<body>
  <h1>Informasi Perangkat</h1>
  <ul>
    <li>Jenis Perangkat: <?php echo $device_type; ?></li>
    <li>Sistem Operasi: <?php echo $os; ?></li>
    <li>Browser: <?php echo $browser; ?></li>
  </ul>
</body>
</html>
