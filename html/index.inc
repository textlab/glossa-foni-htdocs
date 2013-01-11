<?php

// What is this used for ? This is not in the foni code
/*
$config_file = '../../../cgi-bin/glossa/paths.conf';
$comment = "#";

$fp = fopen($config_file, "r");

while (!feof($fp)) {
  $line = trim(fgets($fp));
  if ($line && !ereg("^$comment", $line)) {
    $pieces = split("[ \t]+", $line);
    $option = trim($pieces[0]);
    $value = trim($pieces[1]);
    $config_values[$option] = $value;
  }
}

fclose($fp);
*/

// set up paths
$root = getGlossaRootURI();

$configdir = $config_values['conf'];
$htmlRoot = $root;
$cgiRoot = '/cgi-bin' . $root;
$favicon = '/favicon.ico';

?>
