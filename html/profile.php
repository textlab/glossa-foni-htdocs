<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0//EN"  "http://www.w3.org/TR/REC-html40/strict.dtd">
<html>
 <head>
<!--
  <script language="JavaScript" src="../js/showtag.js"></script>
  <script language="JavaScript" src="../js/AC_QuickTime.js"></script>
-->
  <script language="JavaScript" src="http://www.tekstlab.uio.no/scandiasyn/base/javascripts/coordinates.js"></script>
  <script language="JavaScript" src="../js/map.js"></script>
 <!-- <script src="http://maps.google.com/maps?file=api&v=2&key=ABQIAAAABOQZp7gkH59Jdv6kfvOgMRQYPi-Hp0DOMqQTFM9AoSBoOW8SyxSMtSp1H3Novb0kQR0YJOqH2WJ53w&sensor=true" type="text/javascript"></script> -->
  <script src="http://maps.google.com/maps?file=api&amp;v=2&amp;key=ABQIAAAAaVWyOXil_wBIKCXq_wS0UBR4DJD8zcGKufBGwxJPn5uXqzL8mBR8Ajv0cm2FCxEKxlAqq54IfrFkow&amp;sensor=false.js" type="text/javascript"></script>
 
  <link href="http://tekstlab.uio.no/glossa//html/tags.css" rel="stylesheet" type="text/css"></link>
  <style>
body {
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    font-family: verdana, arial, helvetica, sans-serif;
    color: #000; /* was ccc */
    font-size: 10px;
    line-height: 16px;
    margin-top: 12px;
    margin-bottom: 10px;
    background-color: #fff;
}
div.txt{
	position: absolute;
	top: 0px;
	left:0px;
	padding: 5px;
	border: 0px solid #000;
	background: #fff;
	width: 500px;
        height: 260px; 
}
div.iframe{
	position: absolute;
	top: 0px;
	left:0px;
	padding: 0px;
	border: 0px solid #000;
	background: #fff;
	width: 560px;
        height: 260px;
}
div.mov{
	position: absolute;
	top: 0px;
	left:530px;
	padding: 5px;
	border: 0px solid #000;
/*	background: #fff;
	width: 500px; 
	height: 250px; 
	float: right; */
}
div.ctrl{
	position: absolute;
	top: 0px;
        left:864px;
	padding: 5px;
	border: 0px solid #000;
	background: #fff;
	width: 100px;
	height: 260px;

}
table.res{
/*	width: 100%; */
	border : 0px solid #aaa;
	font-size:9px;
	background-color:#fff;
}
  </style>
  <?php
  if ($_GET['corpus'] == "skriv" || $_GET['corpus'] == "norm") {
    print ('<meta http-equiv="content-type" content="text/html; charset=utf-8">');
  }
  ?>
</head>
<body onunload="GUnload()">

<?php

include('glossa.inc');
include('index.inc');

$texts["no"]["tit"] = "<h4>Informasjon om informant <i>%s</i> i %skorpuset</h4>\n";
$texts["en"]["tit"] = "<h4>Informant details for <i>%s</i> in the %s corpus</h4>\n";
$texts["en"]["sorry"] = "<h4>Sorry, no data available on informant <i>%s</i>.</h4>";
$texts["no"]["sorry"] = "<h4>Beklager, ingen opplysninger om informant <i>%s</i> i databasen.</h4>";


$tid  = $_GET['tid'];
$corpus  = $_GET['corpus'];

$conf = "$configdir/$corpus/cgi.conf";

$file = fopen($conf, "r") or exit ("Kan ikke åpne konfigurasjonsfila: $conf");

while(!feof($file)){
    $line = fgets($file);
    if (preg_match('/^\#/', $line)){ continue; }
    $split = preg_split('/=/', $line);
    $conf_array[trim($split[0])] = trim($split[1]);
}

fclose($file);

$lang = $conf_array["lang"];

if($conf_array["lang"] == 'no'){

    print "<h4>Informasjon om informant <i>$tid</i> i " . ucfirst($corpus) . "korpuset</h4>\n";

}
else{print "<h4>Informant details for <i>$tid</i> in the " . ucfirst($corpus) . " corpus</h4>\n";}

$database = $base_config["db_name"];
$user = $base_config["db_uname"];
$pass = $base_config["db_pwd"];
$dbhost = $base_config["db_host"];

if ($corpus == "skriv" || $corpus == "norm") {
  $tablesuffix = "text";
} else {
  $tablesuffix = "author";
}

$meta = $conf_array["meta_${tablesuffix}"];
$alias = $conf_array["meta_${tablesuffix}_alias"];

$meta_string = preg_replace ( "/ /", ",", $meta );
$meta = preg_split("/ /", $meta);

$alias = preg_split("/[,\t]+/", $alias);

$table = strtoupper($corpus).$tablesuffix;

$session = mysql_connect ($dbhost . ':/var/lib/mysql/mysql.sock', $user, $pass)
     or die ('I cannot connect to the database using because: '
             . mysql_error());

mysql_select_db ($database, $session);

$profile = "SELECT $meta_string FROM $table WHERE tid = '$tid'";
$loc = "SELECT place FROM $table WHERE tid = '$tid'";
#print "<b>" . $profile . "</b><br /><b>" . $loc . "</b><hr />";

$profile = mysql_query($profile);
$profile = mysql_fetch_row($profile);

$loc = mysql_query($loc);
$loc = mysql_fetch_row($loc);
$loc = $loc[0];

if(!$profile){

    printf($texts[$lang]["sorry"], $tid);

}
else{
    if ($corpus != "skriv" && $corpus != "norm") {
      print "<table>\n<tr>\n<td valign='top'>\n";
    }
    print "<table border='0' cellspacing='0'>\n";
    $row = 0;
    foreach ($alias as $val){

        if (ucfirst($val) == "Elevnummer") {
            $student_code_row = $row;
        }
	print "<tr><td><b>" . ucfirst($val) . "</b></td><td><span id='td" . $row++ . "'></span></td></tr>\n";

    }
    print "</table>\n";
    if ($corpus != "skriv" && $corpus != "norm") {
?>
    </td>
    <td>
    <div id="map_canvas" style="width: 340px; height: 420px"></div>
    </td>
    <td valign="top">
     <div id="zoom" style="display:none;cursor:pointer" onclick="animate();">[+]</div>
     <div id="out" style="display:none;cursor:pointer" onclick="out();">[-]</div>
    </td>
    </tr>
    </table>
<?php
    }

    $row = 0;
?><script language="javascript"><?php
    foreach ( $profile as $col ){
      if ($row == $student_code_row) {
        $student_code = $col;
      }
?>

	td = document.getElementById('td<?php echo $row++ ?>');
        td.innerHTML = '<?php echo $col ?>';
<?php
    }
?>
</script>
    <?php

    // SKRIV
    $questionnaire = "skriv/sporreskjema/$student_code.txt";
    if (file_exists("/var/www/html/$questionnaire")) {
      print "<a href=\"#\" onclick=\"window.open('/$questionnaire', '_blank')\">Sp&oslash;rreskjema</a>";
    }
}

if($loc){
  $loc = iconv("ISO-8859-1", "UTF-8", $loc);
?>

<script language="javascript">
  var loca = <?php echo "\"$loc\""; ?>;
  if(coordinates[loca]){
    document.getElementById("zoom").style.display="block";
    document.getElementById("out").style.display="block";
    init();
    move(loca);
  }
</script>

<?php
}
?>

</body>
</html>
