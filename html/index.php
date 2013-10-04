<?php

/**
 * Retrieves a value from the json config for the various corpora.
 *
 * @param string $corpus_name The name of the corpus as specified by Glossa.
 * @param string $key         The config key (e.g. "charset", "js", etc.)
 *
 * @return Either the value for the key from the specified corpus name
 * (if both corpus name and key exists), or the value for the key from
 * the default corpus config (if either the corpus name or the key is
 * unknown).
 */
function get_corpus_config($corpus_name, $key) {
    $conf_all = json_decode(file_get_contents('index_config.json'), true);
    
    // Retrieve corpus configuration for $corpus_name or 'default'
    $conf_corpus = array_key_exists($corpus_name, $conf_all) ?
        $conf_all[$corpus_name] : $conf_all['default'];

    $conf_value = array_key_exists($key, $conf_corpus) ?
        $conf_corpus[$key] : $conf_all['default'][$key];

    return $conf_value;
}

function print_corpus_charset($corpus_name) {
    print get_corpus_config($corpus_name, 'charset');
}

function print_corpus_menu_scripts($corpus_name, $html_root) {
  $script_names = get_corpus_config($corpus_name, 'js');
  foreach ($script_names as $fn) {
    print "<script language='javascript' src='" . $html_root . "/js/" . $fn . "'></script>";
  }
}

function include_corpus_tables($corpus_name) {
    $inc_names = get_corpus_config($corpus_name, 'inc');
    foreach ($inc_names as $fn) {
        include($fn);
    }
}

?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0//EN"  "http://www.w3.org/TR/REC-html40/strict.dtd">
<html>
    <head>
        <META HTTP-EQUIV="Content-Type"
              CONTENT="text/html; charset=<?php print_corpus_charset($_GET['corpus']); ?>">

<?php
// include shared functions
include("glossa.inc");

/* 
   initialize Glossa 
   set up corpus var, base urls and paths
*/
// this file sets up site specific settings
include('index.inc');
// params
$corpus = sanitizeParameter($_GET['corpus']);
$uilang = sanitizeParameter($_GET['uilang']);
$def_base_corpus = strtoupper($corpus);
$subcorpus = sanitizeParameter($_GET['subcorpus']);

if($corpus == 'ruija'){$_GET['corpus'] = 'kven';$corpus = 'kven';}

$uilang = get_corpus_config($corpus, 'uilang');
$speech = get_corpus_config($corpus, 'mode') == "speech" ? true : false;
$dual   = get_corpus_config($corpus, 'dual');

?>
 <!--<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.7.0/build/reset/reset-min.css">-->
 <link rel="shortcut icon" href="http://tekstlab.uio.no/favicon.ico" type="image/ico" />
 <link rel="stylesheet" type="text/css" href="<?php echo $htmlRoot ?>/html/CE.css">
 <script type="text/javascript" src="http://www.google.com/jsapi"></script>
<?php printJsHead();   // ** Glossa ** //   ?>

<script language='javascript'>
  var charset='iso-8859-1';
  if (conf['charset']) {
    charset=conf['charset'];
  }

var a = "<meta http-equiv='Content-Type' content='text/html;charset=" + charset + "' >";
 document.write(a);

</script>

<?php print_corpus_menu_scripts($corpus, $htmlRoot); ?>

 <script language="javascript">
  var player_type = 'flash';
  var title = "<title>" + conf['title'] + "</title>";
  document.write(title);

 </script>
</head>
<body>
<?php echo "<b>$subcorpus</b>";?>
<div style="background-color:gray;color:white">
<table width='100%' border='0'>
<tr>
 <td><b>
 <b>
 <script language="javascript">document.write(conf['corpus_name'])</script></b>
 </b>
 </td>
 <td width='200px'>

 </td>
 <td>
 Glossa (<!--<?php echo "<a id='stored_results' target='_blank' href='" . $cgiRoot . "/get_hits.cgi?corpus=" . $corpus . "&player='+player_type>my&nbsp;results</a> | "; ?>-->
	 <?php echo "<a id='stored_results' target='_blank' onclick=\"var the_url='" . $cgiRoot . "/get_hits.cgi?corpus=" . $corpus . "&player='+player_type; window.open(the_url);return false;\">my&nbsp;results</a> | "; ?>
 <?php echo "<a id='annotations' target='_blank' href='" . $cgiRoot . "/annotation_sets.cgi?corpus=" . $corpus . "'>my&nbsp;annotations</a> | "; ?>

 <?php
 if($corpus=='engl2' || $corpus=='kven' || $corpus=='nota' || $corpus=='upus' || $corpus=='scandiasyn' || $corpus == 'amerikanorsk' || $corpus=='sls' || $corpus=='scandiademo' || $corpus=='upus2' || $corpus=='demo' || $corpus=='bigbrother'){
     echo "<span id='statistics'>statistics</span>&nbsp;|&nbsp;";
     echo "<span id='full_query'>full&nbsp;query</span>&nbsp|&nbsp";
 }
 else{?>
 
 <?php echo "<a id='statistics' target='_blank' href='" . $htmlRoot . "/html/stats.php?corpus=" . $corpus . "&base_corpus=" . $def_base_corpus . "'>statistics</a> | "; ?>
 <?php echo "<a id='full_query' target='_blank' href='" . $htmlRoot . "/html/index_dev.php?fullQuery=yes&corpus=" . $corpus . "'>full&nbsp;query</a> | "; ?>

 <?php
 }
 ?>
 <?php echo "<a id='help' target='_new' href='" . $htmlRoot . "/html/GLOSSA_manual.html'>help</a>"; ?> )
 <?php
 if(0 and $corpus == 'nota' or $corpus == 'demo' ){
     ?>
     <span style='color: yellow;cursor: pointer;' id='lang' onclick='toggleLang();'>Norsk</span>
     <?php
 }
 ?>
</td>
 <td width='10%'>
 </td>
    <td align='right'>
    translations&nbsp;
    </td>
    <td>
    <div id="branding">
    <script type="text/javascript">
      google.load('language', "1");
    </script>
    <script>google.language.getBranding('branding');</script>
    </div>
    </td>
 </tr>
</table>
</div>

 <table>
<tr>
<td>

<?php
if($test){
  echo "<form action=\"$cgiRoot/query_dev.joel.cgi\" method=\"POST\" onSubmit=\"submitForm(); return false\"  onReset=\"hideAll()\">\n";
}
else{
  echo "<form action=\"$cgiRoot/query_dev.cgi\" method=\"POST\" onSubmit=\"submitForm(); return false\"  onReset=\"hideAll()\">\n";
}
?>
<!-- 
        !!!!  tabellstrukturen i glossa_text.inc bУИr vУІre uavhengig .... 
-->

<table id="query_table" cellpadding="10" cellspacing="10" border="0">

<?php include('glossa_text.inc') // * Glossa * // ?>

     <td style="background-color:#efefef;border-width:1px;border-style:solid;border-color:#afaeae">
     <script language="javascript">

       document.write("<input id='search' type='submit' value='");
     //document.write("<input type='button' onClick='submitForm()' value='");

       document.write(strings[language]['search']);
       document.write("'>");
    </script><br><br>
     <script language="javascript">
       document.write("<input id='reset' type='button' onClick='window.location.reload()()' value='");
       document.write(strings[language]['reset']);
       document.write("'>");

    </script>
     </td>
</tr>




<?php if(strpos($corpus, 'euro_news_fr') === false) { ?>
<!--
<div id="phoney" style="z-index:500;top:0px;left:0px;border-style:solid;visibility:hidden;">HERE I AM!<br/><br/>LALALAALA!
  <span id="close"><a href="javascript:setVisible('phoney')" style="text-decoration: none"><strong>close</strong></a></span>
   <iframe frameborder="0" width="100%" height="90%" id="phonetics"></iframe> 
</div>
-->
<tr><td style="background-color:#efefef;border-width:1px;border-style:solid;border-color:#afaeae" valign="top">

<?php include_corpus_tables($corpus); ?>

</td>



 <!-- felles --> 
<td valign='top' style="background-color:#efefef;border-width:1px;border-style:solid;border-color:#afaeae">
<?php

 $lang['en']['show_texts']='Show texts'; 
 $lang['en']['save_subcorpus']='Save subcorpus'; 
 $lang['en']['choose_subcorpus']='Choose subcorpus'; 
 $lang['no']['show_texts']='Vis tekster'; 
 $lang['no']['save_subcorpus']='Lagre subkorpus'; 
 $lang['no']['choose_subcorpus']='Velg subkorpus'; 

?>


<?php
    if($test){
?>
      <script>alert('test');</script>
      <input type="button" id="show_texts_alt" onClick="setAction('profiles.dev.php');" value="<?php echo "Show Test" ?>" /><br><br>
<?php
    }
?>



<?php
// ------------ Show texts/informants
if($speech){
?>
   <input type="button" id="show_texts_alt" onClick="setAction('profiles.php');" value="<?php echo "Show informants" ?>" /><br><br>
<?php
    }

 elseif($corpus == 'run'){
?>
<input type="button" id="show_texts" onClick="setAction('<?php echo $cgiRoot; ?>/meta_direct.cgi');" value="<?php echo $lang[$uilang]['show_texts'] ?>" /><br><br>
   <input type="button" id="show_external_database" onClick="window.open('http://www.nevmenandr.net/run/');" value="Show external text list" /><br><br>
<?php
     }

 else{
?>
<input type="button" id="show_texts" onClick="setAction('<?php echo $cgiRoot; ?>/meta_direct.cgi');" value="<?php echo $lang[$uilang]['show_texts'] ?>" /><br><br>
<?php
     }
// ------------ End of show texts/informants
?>

 

<?php
// ------------- Subcorpus
    if($corpus != 'skriv' && $corpus != 'norm') {
?>
      <input type="button" id="save_subcorpus" onClick="setAction('<?php echo $cgiRoot ?>/meta_save_choose.cgi');" <?php echo "value=\"" . $lang[$uilang]['save_subcorpus'] . "\""; ?> />
<?php
    }
?>


<br><br>
<?php
  if($corpus != 'skriv' && $corpus != 'norm'){
    echo "<a id='choose_subcorpus' href='" . $cgiRoot . "subcorpus_choose.cgi?corpus=" . $corpus . "'>";
    echo $lang[$uilang]['choose_subcorpus'];
    echo "</a>";
  }
// ------------- End of subcorpus
?>


</td></tr>
<?php
    }
?>










<!-- begining of Display, Search within, Flash and QT bit -->
<?php if(strpos($corpus, 'euro_news_fr') === false) { ?>
<tr>

<?php if(!$speech){ ?>

<td valign='top' style="background-color:#efefef;border-width:1px;border-style:solid;border-color:#afaeae">
<span class="txt">
Display:&nbsp;<select name='structDisplay'><option></option><script language='javascript'>printDisplayOptions()</script></select>&nbsp; &nbsp; &nbsp;
Search within: <select name='searchWithin'><option></option> <option value="last"> - last search - </option></select>
</span>
</td>

	     <?php }
	 else{ ?>

<td>
Flash<input type="radio" name="player" value="flash" checked="true" onchange="player_type = this.value;" />&nbsp;
QT<input type="radio" name="player" value="qt" onchange="player_type = this.value;" />
</td>

  <?php  } ?>

</tr>
    <?php } ?>

<!-- end of Display, Search within, Flash and QT bit -->





<tr><td><font color='red'><b>

<script language='javascript'>
if (domLib_isOpera) { document.write("The Glossa interface has some minor problems with The Opera browser.<br> We recommend using Firefox (or Internet Explorer).") }
//if (domLib_isSafari) { document.write("The Glossa interface has some problems with The Safari browser. <br>We recommend using Firefox (or Internet Explorer).") }
if (domLib_isKonq) { document.write("The Glossa interface has significant problems with The Konqueror browser. <br>We recommend using Firefox (or Internet Explorer).") }
</script>

<table border="0">
<?php
  if($corpus == 'scandiasyn' || $corpus == 'scandiademo'){
?>
<tr>
<td>
<a target='_blank' href='http://ordbok.nada.kth.se:8070/ordbog_module/ordbog'>
<img border='0' src='img/tvsl.jpg' /><br />
Multilingual Dictionary
</a>
<hr />
</td>
</tr>
<?php
  }
?>
<tr>
<td valign="top">
<img src="img/tri.png" alt="caution"><br />
<!-- Denne Glossaversjonen er under utvikling.<br /> -->
This version of Glossa is undergoing development.
</td>
<td width="330" valign="top" align="right">
<?php
  if($uilang != 'no'){
?>
<!-- Glossa does not work correctly in Safari.<br /> -->
Please report bugs and errors <a href="https://nettskjema.uio.no/answer.html?fid=40969&lang=no" target="_blank">here</a><br /><br />
<?php}
  else{
?>
<!-- Rapporter feil og mangler <a href="https://nettskjema.uio.no/answer.html?fid=40969&lang=no" target="_blank">her</a><br /><br /> -->
<?php
}
?>
<a target="_blank" href='http://www.hf.uio.no/tekstlab'><img style='border-style: none' src='img/logo.png' /></a>
</td>
</tr></table>
</td>
</tr>


</table>

</form>


</td>
<td valign='top'>

<?php
   // include corpus branding template
   $credentials_names = get_corpus_config($corpus, 'credentials');
    foreach ($credentials_names as $fn) {
        include($fn);
    }
 ?>

</td>
</tr>
</table>

<script language="javascript">
setFocus();
<?php
 if($corpus == 'nota'){
     ?> 
 toggleLang();
     <?php
 }
 ?>
<?php
 if($corpus == 'scandiademo'){
   ?>
   document.getElementById('string_0_1').value='sk';
   addOpt('w','start','start of word');
   <?php
 }
 ?>

</script>


<br>
<br><br><br><br><br><br><br><br><br><br><br><hr />

</div>
</body>
</html>
