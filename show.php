<?php
require 'config.php';

$file = file($filename);

$count = count($file);

for($i = $count; $i-- > 0;) {
    echo $file[$i];
    echo "<br>";
}

?>