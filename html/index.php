
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0//EN"  "http://www.w3.org/TR/REC-html40/strict.dtd">
<html>
 <head>
<?php 
$test = False;
if($_GET['test'] == 'true'){$test = True;}
if ( $_GET['corpus'] == 'run' ){
?><META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8"><?php
	}
elseif ( $_GET['corpus'] == 'subtitles' ){
?><META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8"><?php
	}
elseif ( $_GET['corpus'] == 'quran_mono' ){
?><META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8"><?php
	}
elseif ( $_GET['corpus'] == 'quran_parallel' ){
?><META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8"><?php
	}
elseif ( $_GET['corpus'] == 'uncorpora' ){
?><META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8"><?php
	}
elseif ( $_GET['corpus'] == 'japanese_test' ){
?><META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8"><?php
	}
elseif ( $_GET['corpus'] == 'japanese_s_test' ){
?><META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8"><?php
	}
elseif ( $_GET['corpus'] == 'politikk' ){
?><META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8"><?php
	}
elseif ( $_GET['corpus'] == 'hula' ){
?><META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8"><?php
	}
elseif ( $_GET['corpus'] == 'skriv' ){
?><META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8"><?php
	}
elseif ( $_GET['corpus'] == 'mak' ) {
?><META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=ISO-8859-5"><?php
}
elseif ( $_GET['corpus'] == 'latvian' ) {
?><META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=CP1257"><?php
}
else{
?><META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=ISO-8859-1"><?php
}

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

if(!$uilang){
    $uilang = 'no';
}
if($corpus == 'ruija'){$_GET['corpus'] = 'kven';$corpus = 'kven';}
if($corpus == 'scandiasyn' || $corpus == 'amerikanorsk' || $corpus == 'scandiademo' || $corpus == 'kven' || $corpus == 'omc4' || $corpus == 'taus' || $corpus == 'engl2' || $corpus == 'run' || $corpus == 'sls' || $corpus == 'subtitles'){ $uilang = 'en'; }

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

<?php 

// * get menus * // 

if ( $corpus == 'hula' ) {
  echo "<script language='javascript' src='" . $htmlRoot . "/js/hula.js'></script>";
}
elseif ( $corpus == 'subtitles' ) {
  echo "<script language='javascript' src='" . $htmlRoot . "/js/subtitles_no.js'></script>";
  echo "<script language='javascript' src='" . $htmlRoot . "/js/subtitles_en.js'></script>";
}
elseif ( $corpus == 'politikk' ) {
  echo "<script language='javascript' src='" . $htmlRoot . "/js/politikk.js'></script>";
}
elseif ( $corpus == 'test' ) {
  echo "<script language='javascript' src='" . $htmlRoot . "/js/test.js'></script>";
}
elseif ( $corpus == 'omc' ) {
  echo "<script language='javascript' src='" . $htmlRoot . "/js/omc_en.js'></script>";
  echo "<script language='javascript' src='" . $htmlRoot . "/js/omc_fr.js'></script>";

  echo "<script language='javascript' src='" . $htmlRoot . "/js/omc_de.js'></script>";
  echo "<script language='javascript' src='" . $htmlRoot . "/js/omc_nl.js'></script>";

  echo "<script language='javascript' src='" . $htmlRoot . "/js/omc_no.js'></script>";

  echo "<script language='javascript' src='" . $htmlRoot . "/js/omc_po.js'></script>";

}
elseif ( $corpus == 'omc4' ) {
  echo "<script language='javascript' src='" . $htmlRoot . "/js/omc4_en.js'></script>";
  echo "<script language='javascript' src='" . $htmlRoot . "/js/omc4_fr.js'></script>";

  echo "<script language='javascript' src='" . $htmlRoot . "/js/omc4_de.js'></script>";
  echo "<script language='javascript' src='" . $htmlRoot . "/js/omc4_nl.js'></script>";

  echo "<script language='javascript' src='" . $htmlRoot . "/js/omc4_no.js'></script>";
  echo "<script language='javascript' src='" . $htmlRoot . "/js/omc4_po.js'></script>";
}
elseif ( $corpus == 'run' ) {
  echo "<script language='javascript' src='" . $htmlRoot . "/js/run_no.js'></script>";
  echo "<script language='javascript' src='" . $htmlRoot . "/js/run_ru.js'></script>";
  echo "<script language='javascript' src='" . $htmlRoot . "/js/run_en.js'></script>";
  echo "<script language='javascript' src='" . $htmlRoot . "/js/run_bg.js'></script>";
  echo "<script language='javascript' src='" . $htmlRoot . "/js/run_bc.js'></script>";
  echo "<script language='javascript' src='" . $htmlRoot . "/js/run_pl.js'></script>";
  echo "<script language='javascript' src='" . $htmlRoot . "/js/run_fr.js'></script>";
  echo "<script language='javascript' src='" . $htmlRoot . "/js/run_it.js'></script>";
  echo "<script language='javascript' src='" . $htmlRoot . "/js/run_se.js'></script>";
  echo "<script language='javascript' src='" . $htmlRoot . "/js/run_de.js'></script>";
}
elseif ( $corpus == 'sami' ) {

}
elseif ($corpus == 'nota' ) {
  echo "<script language='javascript' src='" . $htmlRoot . "/js/nota.js'></script>";

}
elseif ($corpus == 'demo' ) {
  echo "<script language='javascript' src='" . $htmlRoot . "/js/demo.js'></script>";

}
elseif ($corpus == 'upus' ) {
  echo "<script language='javascript' src='" . $htmlRoot . "/js/upus.js'></script>";

}
elseif ($corpus == 'upus2' ) {
  echo "<script language='javascript' src='" . $htmlRoot . "/js/upus2.js'></script>";

}
elseif ($corpus == 'scandiasyn') {
  echo "<script type='text/javascript' src='" . $htmlRoot ."/js/extras.js'></script>";
  echo "<script language='javascript' src='" . $htmlRoot . "/js/scandiasyn.js'></script>";
  echo "<link rel='stylesheet' type='text/css' href='" . $htmlRoot . "/html/extras.css' />";
}
elseif ($corpus == 'amerikanorsk') {
  echo "<script type='text/javascript' src='" . $htmlRoot ."/js/extras.js'></script>";
  echo "<script language='javascript' src='" . $htmlRoot . "/js/amerikanorsk.js'></script>";
  echo "<link rel='stylesheet' type='text/css' href='" . $htmlRoot . "/html/extras.css' />";
}
elseif ($corpus == 'sls') {
  echo "<script type='text/javascript' src='" . $htmlRoot ."/js/extras.js'></script>";
  echo "<script language='javascript' src='" . $htmlRoot . "/js/sls.js'></script>";
  echo "<link rel='stylesheet' type='text/css' href='" . $htmlRoot . "/html/extras.css' />";
}
elseif ($corpus == 'scandiademo') {
  echo "<script language='javascript' src='" . $htmlRoot . "/js/scandiademo.js'></script>";

}
elseif ($corpus == 'kven') {
  echo "<script language='javascript' src='" . $htmlRoot . "/js/kven.js'></script>";

}
elseif ($corpus == 'engl2') {
  echo "<script language='javascript' src='" . $htmlRoot . "/js/engl2.js'></script>";

}
elseif ($corpus == 'bigbrother' ) {
  echo "<script language='javascript' src='" . $htmlRoot . "/js/bigbrother.js'></script>";
  
}
elseif ($corpus == 'taus') {
  echo "<script language='javascript' src='" . $htmlRoot . "/js/taus.js'></script>";

}
elseif ( $corpus == 'elevtekster' ) {
  echo "<script language='javascript' src='" . $htmlRoot . "/js/elevtekster.js'></script>";
}
elseif ( $corpus == 'bokmal' ) {
  echo "<script language='javascript' src='" . $htmlRoot . "/js/bokmal.js'></script>";

}
elseif ( $corpus == 'bokmal_test' ) {
  echo "<script language='javascript' src='" . $htmlRoot . "/js/bokmal_test.js'></script>";

}
elseif ( $corpus == 'samno' ) {
  echo "<script language='javascript' src='" . $htmlRoot . "/js/samno_samisk.js'></script>";
  echo "<script language='javascript' src='" . $htmlRoot . "/js/samno_norsk.js'></script>";

}
elseif ( $corpus == 'bul' ) {
  echo "<script language='javascript' src='" . $htmlRoot . "/js/bul.js'></script>";
}
elseif ( $corpus == 'euro_news_fr1' ) {
  echo "<script language='javascript' src='" . $htmlRoot . "/js/euro_news_fr1.js'></script>";
}
elseif ( $corpus == 'euro_news_fr2' ) {
  echo "<script language='javascript' src='" . $htmlRoot . "/js/euro_news_fr2.js'></script>";
}
elseif ( $corpus == 'euro_news_fr3' ) {
  echo "<script language='javascript' src='" . $htmlRoot . "/js/euro_news_fr3.js'></script>";
}
elseif ( $corpus == 'euro_news_fr4' ) {
  echo "<script language='javascript' src='" . $htmlRoot . "/js/euro_news_fr4.js'></script>";
}
elseif ( $corpus == 'usenet' ) {
  echo "<script language='javascript' src='" . $htmlRoot . "/js/usenet.js'></script>";
}
elseif ( $corpus == 'mak' ) {
  echo "<script language='javascript' src='" . $htmlRoot . "/js/mak.js'></script>";
}
elseif ( $corpus == 'latvian' ) {
  echo "<script language='javascript' src='" . $htmlRoot . "/js/latvian.js'></script>";
}
elseif ( $corpus == 'musikk' ) {
  echo "<script language='javascript' src='" . $htmlRoot . "/js/musikk.js'></script>";

}
elseif ( $corpus == 'mme' ) {
  echo "<script language='javascript' src='" . $htmlRoot . "/js/mme.js'></script>";

}
elseif ( $corpus == 'quran_mono' ) {
  echo "<script language='javascript' src='" . $htmlRoot . "/js/quran_mono.js'></script>";

}
elseif ( $corpus == 'quran_parallel' ) {
  echo "<script language='javascript' src='" . $htmlRoot . "/js/quran_mono.js'></script>";
	echo "<script language='javascript' src='" . $htmlRoot . "/js/quran_eng.js'></script>";

}
elseif ( $corpus == 'japanese_test' ) {
  echo "<script language='javascript' src='" . $htmlRoot . "/js/japanese_test.js'></script>";

}
elseif ( $corpus == 'japanese_s_test' ) {
  echo "<script language='javascript' src='" . $htmlRoot . "/js/japanese_s_test.js'></script>";

}
elseif ( $corpus == 'uncorpora' ) {
  echo "<script language='javascript' src='" . $htmlRoot . "/js/uncorpora_ar.js'></script>";
  echo "<script language='javascript' src='" . $htmlRoot . "/js/uncorpora_en.js'></script>";
  echo "<script language='javascript' src='" . $htmlRoot . "/js/uncorpora_es.js'></script>";
  echo "<script language='javascript' src='" . $htmlRoot . "/js/uncorpora_fr.js'></script>";
  echo "<script language='javascript' src='" . $htmlRoot . "/js/uncorpora_ru.js'></script>";
  echo "<script language='javascript' src='" . $htmlRoot . "/js/uncorpora_zh.js'></script>";
}
elseif ( $corpus == 'damos' ) {
  echo "<script language='javascript' src='" . $htmlRoot . "/js/damos.js'></script>";
}
elseif ( $corpus == 'skriv' ) {
  echo "<script language='javascript' src='" . $htmlRoot . "/js/skriv.js'></script>";

}


?>

 <script language="javascript">
  var player_type = 'flash';
  var title = "<title>" + conf['title'] + "</title>";
  document.write(title);

 </script>
</head>
<body>
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

<?php 



if ( $corpus == 'politikk' ) {
  include("politikk.inc");
}
elseif ( $corpus == 'subtitles' ) {
  include("hula.inc");
}
elseif ( $corpus == 'hula' ) {
  include("hula.inc");
}
elseif ( $corpus == 'test' ) {
  include("test.inc");
}
elseif ( $corpus == 'omc' ) {
  include("omc.inc");
}
elseif ( $corpus == 'omc4' ) {
  include("omc.inc");
}
elseif ( $corpus == 'run' ) {
  include("run.inc");
}
elseif ( $corpus == 'sami' ) {

}
elseif ( $corpus == 'nota') {
  include("nota.inc");
}
elseif ( $corpus == 'demo') {
  include("demo.inc");
}
elseif ( $corpus == 'amerikanorsk') {
  include("amerikanorsk.inc");
}
elseif ( $corpus == 'scandiasyn' || $corpus == 'scandiademo') {
  include("scandiasyn.inc");
}
elseif ( $corpus == 'sls' ) {
  include("sls.inc");
}
elseif ( $corpus == 'kven' ) {
  include("kven.inc");
}
elseif ( $corpus == 'engl2' ) {
  include("engl2.inc");
}
elseif ( $corpus == 'bigbrother' ) {
  include("bigbrother.inc");
}
 elseif ( $corpus == 'upus' ) { 
  include("upus.inc");
}
elseif ( $corpus == 'upus2' ) {
  include("upus2.inc");
}
 elseif ( $corpus == 'taus' ) {
  include("taus.inc");
}
elseif ( $corpus == 'elevtekster' ) {
  include("elevtekster.inc");
}
elseif ( $corpus == 'bokmal' ) {
  include("bokmal.inc");
}
elseif ( $corpus == 'bokmal_test' ) {
  include("bokmal_test.inc");
}
elseif ( $corpus == 'samno' ) {
  include("samno.inc");
}

elseif ( $corpus == 'bul' ) {
  include("bul.inc");
}
elseif ( $corpus == 'euro_news_fr1' ) {
  include("euro_news_fr1.inc");
}
elseif ( $corpus == 'euro_news_fr2' ) {
  include("euro_news_fr2.inc");
}
elseif ( $corpus == 'usenet' ) {
  include("usenet.inc");
}
elseif ( $corpus == 'mak' ) {
  include("mak.inc");
}
elseif ( $corpus == 'latvian' ) {
  include("latvian.inc");
}
elseif ( $corpus == 'musikk' ) {
  include("musikk.inc");
}
elseif ( $corpus == 'mme' ) {
  include("mme.inc");
}
elseif ( $corpus == 'skriv' ) {
  include("skriv.inc");
}

?>



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
				<input type="button" id="show_texts_alt" onClick="setAction('profiles.dev.php');" value="<?php /*echo $lang[$uilang]['show_texts']*/ echo "Show Test" ?>" /><br><br>
      <?php
    }
 if($corpus == 'kven' || $corpus=='nota' || $corpus=='upus' || $corpus=='scandiasyn' || $corpus == 'amerikanorsk' || $corpus=='scandiademo' || $corpus=='sls' || $corpus=='upus2' || $corpus=='demo' || $corpus=='bigbrother' || $corpus == 'taus' || $corpus == 'engl2'){
?>
   <input type="button" id="show_texts_alt" onClick="setAction('profiles.php');" value="<?php /*echo $lang[$uilang]['show_texts']*/ echo "Show informants" ?>" /><br><br>
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
//if($corpus != 'nota'){
  if($corpus != 'skriv') {
?>
<input type="button" id="save_subcorpus" onClick="setAction('<?php echo $cgiRoot ?>/meta_save_choose.cgi');" 
<?php 

     echo "value=\"" . $lang[$uilang]['save_subcorpus'] . "\""; 

?>
 />

<?php
  }
//}
?>
<br><br>

<?php
//if($corpus != 'nota' and $corpus != 'demo'){
  if($corpus != 'skriv'){
    echo "<a id='choose_subcorpus' href='" . $cgiRoot . "subcorpus_choose.cgi?corpus=" . $corpus . "'>";
 echo $lang[$uilang]['choose_subcorpus'];
    echo "</a>";
  }
//}
?>
</td></tr>
<?php } ?>

<?php
#if($corpus != 'nota' and $corpus != 'demo'){
?>



<tr><td valign='top' style="background-color:#efefef;border-width:1px;border-style:solid;border-color:#afaeae">

<?php if(strpos($corpus, 'euro_news_fr') === false) { ?>
<span class="txt">
Display: 
<select name='structDisplay'>
<option></option>
<script language='javascript'>printDisplayOptions()</script>
</select>
<?php
#}
?>

&nbsp; &nbsp; &nbsp;
Search within: 
<select name='searchWithin'>
<option></option>
 <option value="last"> - last search - </option>
</select>

</span>

</td>
<td>
  Flash<input type="radio" name="player" value="flash" checked="true" onchange="player_type = this.value;" />&nbsp;
QT<input type="radio" name="player" value="qt" onchange="player_type = this.value;" />
</td>
</tr>
<?php
}
?>

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
<img src="http://omilia.uio.no/img/tri.png" alt="caution"><br />
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
<a target="_blank" href='http://www.hf.uio.no/tekstlab'><img style='border-style: none' src='http://omilia.uio.no/img/logo.png' /></a>
</td>
</tr></table>
</td>
</tr>


</table>

</form>


</td>
<td valign='top'>

<?php

if ( $corpus == 'test' ) {
  include("test_cred.inc");
}
elseif ( $corpus == 'omc' ) {
  include("omc_cred.inc");
}
elseif ( $corpus == 'omc4' ) {
  include("omc_cred.inc");
}
elseif ( $corpus == 'run' ) {
  include("run_cred.inc");
}
elseif ( $corpus == 'sami' ) {

}
elseif ( $corpus == 'bokmal' ) {

}
elseif ( $corpus == 'samno' ) {
  include("samno_cred.inc");
}
elseif ( $corpus == 'upus' ) {
  include("upus_cred.inc");
}
elseif ( $corpus == 'taus' ) {
  include("taus_cred.inc");
}

elseif ( $corpus == 'snakkis' ) {
  include("snakkis_cred.inc");
}

elseif ( $corpus == 'nota') {
  include("nota_cred.inc");
}

elseif ( $corpus == 'demo' ) {
  include("demo_cred.inc");
}
elseif ( $corpus == 'scandiasyn' || $corpus == 'scandiasyn' ) {
  include("scandiasyn_cred.inc");
}
elseif ( $corpus == 'amerikanorsk' ) {
  include("amerikanorsk_cred.inc");
}
elseif ( $corpus == 'sls' ) {
  include("sls_cred.inc");
}
elseif ( $corpus == 'kven' ) {
  include("kven_cred.inc");
}
elseif ( $corpus == 'engl2' ) {
  include("engl2_cred.inc");
}
elseif ( $corpus == 'bigbrother' ) {
  include("bigbrother_cred.inc");
}
elseif ( $corpus == 'euro_news_fr1' ) {
  include("euro_news_fr1_cred.inc");
}
elseif ( $corpus == 'euro_news_fr2' ) {
  include("euro_news_fr2_cred.inc");
}
elseif ( $corpus == 'euro_news_fr3' ) {
  include("euro_news_fr3_cred.inc");
}
elseif ( $corpus == 'euro_news_fr4' ) {
  include("euro_news_fr4_cred.inc");
}
elseif ( $corpus == 'skriv' ) {
  include("skriv_cred.inc");
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
