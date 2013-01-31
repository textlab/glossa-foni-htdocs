<?php

// TODO enable this
/*
  This sets up the path to the corpora and database configuration.
  $base_config is sourced from paths.conf.
*/
include('paths.inc');

$comment = "#";

if ($config_file == '') { exit(1); }

$fp = fopen($config_file, "r");

while (!feof($fp)) {
  $line = trim(fgets($fp));
  if ($line && !preg_match("/^$comment/i", $line)) {
    $pieces = explode("=", $line);
    $option = trim($pieces[0]);
    $value = trim($pieces[1]);
    $base_config[$option] = $value;
  }
}

fclose($fp);


// set up paths
$root = getGlossaRootURI();

$configdir = $base_config['config_dir'];
$htmlRoot = $root;
$cgiRoot = '/cgi-bin' . $root;
$favicon = '/favicon.ico';

?>
