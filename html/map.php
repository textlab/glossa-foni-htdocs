<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0//EN"  "http://www.w3.org/TR/REC-html40/strict.dtd">
<html>
 <head>
  <script language="JavaScript" src="http://www.tekstlab.uio.no/scandiasyn/base/javascripts/coordinates.js"></script>
  <script language="JavaScript" src="../js/map.js"></script>
  <script src="http://maps.google.com/maps?file=api&amp;v=2&amp;sensor=false&amp;key=ABQIAAAABOQZp7gkH59Jdv6kfvOgMRTy7FyIA8wknwhtGJqtCU5xoOO9chRv1od4COyxZwIQZlBrHd1DDpjcaQ" type="text/javascript"></script>
<!--  <script src="http://maps.google.com/maps?file=api&v=2&key=ABQIAAAABOQZp7gkH59Jdv6kfvOgMRQYPi-Hp0DOMqQTFM9AoSBoOW8SyxSMtSp1H3Novb0kQR0YJOqH2WJ53w&sensor=true" type="text/javascript"></script> -->
  <script language="JavaScript">
  </script>
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
</head>
<body onunload="GUnload()">
  <div id="map_canvas" style="position: absolute; top: 10px; left: 10px; width: 650px; height: 540px"></div>
  <div id="legend" style="position: absolute; top: 10px; left: 670px; background-color: azure; width: 160px; height: 540px;"><b>Legend</b><br /><br /></div>

<?php
include('glossa.inc')
include('index.inc')

// gets
$infs  = $_GET['informants'];
$corpus  = $_GET['corpus'];

//conf
$conf = "$configdir/$corpus/cgi.conf";
$file = fopen($conf, "r") or exit ("Kan ikke åpne konfigurasjonsfila: $conf");
while(!feof($file)){
    $line = fgets($file);
    if (ereg('^\#', $line)){ continue; }
    $split = split('=', $line);
    $conf_array[trim($split[0])] = trim($split[1]);
}
fclose($file);
$database = $base_config["db_name"];
$user = $base_config["db_uname"];
$pass = $base_config["db_pwd"];
$dbhost = $base_config["db_host"];

//init
$table = strtoupper($corpus)."author";
$infs = preg_replace('/\(__UNDEF__\)/', '(No phonetic)', $infs);
$tid = preg_replace('/\([^\)]+\),/', '\' or tid = \'', $infs); # ie valle_03gm(jeg), => valle_03gm' or tid = '
$tidses = split(",", $infs);

//db
$session = mysql_connect ($dbhost . ':/var/lib/mysql/mysql.sock', $user, $pass)
     or die ('I cannot connect to the database using because: '
             . mysql_error());

mysql_select_db ($database, $session);


$hit_colour = array();
$place_hits = array();
foreach($tidses as $t){
  preg_match('/([^\(]+)\(([^\)]+)/', $t, $matches);
  $el_tid = $matches[1];
  $el_hit = $matches[2]; #the token
  $match = "SELECT place FROM $table WHERE tid = '$el_tid'";
  $match = mysql_query($match);
  $match = mysql_fetch_row($match);
  $place = $match[0];
  $place_hits[$place][$el_hit]++;
  $hit_colour[$el_hit]++;
}

$colours = array("purple","yellow","blue","white","green","red","orange","brown");

shuffle($colours);

foreach(array_keys($hit_colour) as $hit){
  $colour = array_pop($colours);
  if(!$colour){$colour = "gray";}
  $hit_colour[$hit] = $colour;
}

/*
foreach(array_keys($place_hits) as $place){

  echo "P: $place, ";
  foreach(array_keys($place_hits[$place]) as $ord){ echo "O: $ord, ";}
  echo "<br />";

}
*/

$loc = "SELECT distinct place FROM $table WHERE tid = '$tid'";

#echo "<b>$loc</b>";
$loc = mysql_query($loc);

?>


<script language="javascript">
  //  var markerColours = ["purple","yellow","blue","white","green","black","orange","gray","brown","red"];
  var map = new GMap2(document.getElementById("map_canvas"));
  map.setCenter(new GLatLng(62.5,3.0), 4);
GEvent.addListener(map,"click", function(overlay, latlng) {     
    if (latlng) { 
      var myHtml = "The GPoint value is: " + map.fromLatLngToDivPixel(latlng) + " at zoom level " + map.getZoom();
      map.openInfoWindow(latlng, myHtml);
    }
  });
    map.addControl(new GSmallMapControl());
    map.addControl(new GMapTypeControl()); 
  var tinyIcon = new GIcon();
  tinyIcon.image = "http://labs.google.com/ridefinder/images/mm_20_red.png";
  tinyIcon.shadow = "http://labs.google.com/ridefinder/images/mm_20_shadow.png";
  tinyIcon.iconSize = new GSize(12, 20);
  tinyIcon.shadowSize = new GSize(22, 20);
  tinyIcon.iconAnchor = new GPoint(6, 20);
  tinyIcon.infoWindowAnchor = new GPoint(5, 1);

// Set up our GMarkerOptions object literal
  markerOptions = { icon:tinyIcon };

<?php
$overlap = false;
while($loca = mysql_fetch_row($loc)){

    $locaUTF8 = iconv("ISO-8859-1", "UTF-8", $loca[0]);
    $loca = $loca[0];
  ?>

  var loca = <?php echo "\"$locaUTF8\""; ?>;
  if(coordinates[loca]){
    var lat = coordinates[loca]['lat'];
    var lng = coordinates[loca]['lng'];

    var point = new GLatLng(lat,lng);
    var colour = "black";
    <?php
	if(count($place_hits[$loca]) < 2){
	  $word = key($place_hits[$loca]);
	  echo "var colour = \"" . $hit_colour[$word] . "\"\n";
	  echo "var word = \"" . $word . "\"\n";
	}
	else{ $overlap = true; }
    ?>
    //    var colour = markerColours[Math.round(Math.random()*10)];
	tinyIcon.image = "http://labs.google.com/ridefinder/images/mm_20_" + colour + ".png";
	markerOptions = {icon:tinyIcon};
	map.addOverlay(new GMarker(point, markerOptions));
    //    document.getElementById('legend').innerHTML += "<img src='http://labs.google.com/ridefinder/images/mm_20_" + colour + ".png'> = " + word + "<br /";
  }
<?php
}
$gray_printed = false;
foreach(array_keys($hit_colour) as $hit){
  if($hit_colour[$hit] != 'gray'){
    echo "document.getElementById('legend').innerHTML += \"<img src='http://labs.google.com/ridefinder/images/mm_20_" . $hit_colour[$hit]  . ".png'> = " . iconv("UTF-8", "ISO-8859-1", $hit) . "<br \/>\";\n";
    next;
  }
  if(!$gray_printed){
#      echo "document.getElementById('legend').innerHTML += \"<img src='http://labs.google.com/ridefinder/images/mm_20_gray.png'> eq \";";
      $gray_printed = true;
  }
  #echo "document.getElementById('legend').innerHTML += " . iconv("UTF-8", "ISO-8859-1", $hit) . " \";\n";
}
if($overlap){
  echo "document.getElementById('legend').innerHTML += \"<img src='http://labs.google.com/ridefinder/images/mm_20_black.png'> = Multiple hits<br />\";\n";
}
?>
  //map.openInfoWindow(map.getCenter(), document.createTextNode("Hello, world"));
</script>
</body>
</html>