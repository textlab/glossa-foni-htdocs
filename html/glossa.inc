<?php

/*
  Extracts the root URI from the URL of the page in the HTTP header.
  Strips of the trailing 'html/index.php' components.

  Not reusable outside the html directory.
 */
function getGlossaRootURI() {
  $path = $_SERVER["REQUEST_URI"];
  $root = join('/', array_slice(explode('/', $path), 0, -2)) . '/';

  return $root;
}

/*
  Simple sanitization of a given request parameter.
  TODO: Do this properly with a library function or similar
 */
function sanitizeParameter($param) {
  // return ereg_replace("[^A-Za-z0-9]", "", $param);
  return pg_escape_string($param);
}

// * initialize * //
function printJsHead() {
  global $htmlRoot;
  global $corpus;
  global $cgiRoot;
  global $subcorpus;
  echo "<script language='JavaScript' src='" . $htmlRoot . "/js/dommenu-0.3.5/domLib.js'></script>\n"
    . "<script language='JavaScript' src='" . $htmlRoot . "/js/dommenu-0.3.5/domMenu.js'></script>\n"
    . "<script language='JavaScript' src='" . $htmlRoot . "/js/language" . ($corpus == 'run' ? '_utf8' : '') . ".js'></script>\n"
    . "<script language='JavaScript' src='" . $htmlRoot . "/js/meta.js'></script>\n"
    . "<script language='JavaScript' src='" . $htmlRoot . "/js/widgets.js'></script>\n"
    . "<script language='JavaScript' src='" . $htmlRoot . "/js/auxfns.js'></script>\n"
    . "<script language='Javascript'>var Menu=new Array;</script>\n"
    . "<script language='JavaScript' src='" . $htmlRoot . "/js/misc.js'></script>\n"
    . "<script language='JavaScript' src='" . $cgiRoot . "/javascript_arrays_from_database.cgi?corpus=" 
    . $corpus . "&subcorpus=" 
    . $subcorpus . "'></script>\n"
    . "<script language='JavaScript' src='" . $htmlRoot . "/js/shortcuts.js'></script>\n"
    . "<script language='JavaScript' src='" . $htmlRoot . "/js/" . $corpus . ".conf.js'></script>\n"
    . "<script language='JavaScript' src='" . $htmlRoot . "/js/dynamic_form_dev.js'></script>\n\n";

  if (0 or $corpus == 'nota' or $corpus == 'demo') {
    echo "<script language='JavaScript' src='" . $htmlRoot . "/js/gui.js'></script>\n";
  }
}



?>
