<?php
require 'config.php';

$sender = $_POST['sender'];
$text = $_POST['message'];

$message = "\n$sender написал: $text";

$file = fopen($filename, 'a');
fwrite($file, $message);
fclose($file);

?>