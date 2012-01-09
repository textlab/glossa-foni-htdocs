<html>
 <head>
<!--  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/> -->
  <meta charset='utf-8' content='text/html' http-equiv='Content-Type' />
  <script language="JavaScript" src="http://www.tekstlab.uio.no/scandiasyn/base/javascripts/coordinates.js"></script>
  <script language="JavaScript" src="../js/map.js"></script>
  <script src="http://maps.google.com/maps?file=api&amp;v=2&amp;sensor=false&amp;key=ABQIAAAABOQZp7gkH59Jdv6kfvOgMRTy7FyIA8wknwhtGJqtCU5xoOO9chRv1od4COyxZwIQZlBrHd1DDpjcaQ" type="text/javascript"></script>
  <script src="http://gmaps-utility-library.googlecode.com/svn/trunk/markermanager/release/src/markermanager.js">
   //some marker managment

  </script>
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
div.hit{
        width:200px;
        background:white;
        border-width:1px;
        border-style:solid;
        border-color:white;
}
div.marker{
        float:right;
        width:8px;
        height:8px;
	border-width:2px;
	border-style:solid;
	border-color:white;
        cursor:pointer;
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
  <div id="ctrl" style="position: absolute; top: 10px; left: 670px; background-color: white; width: 160px; height: 540px;">
<!--  <input type='button' onclick="javascript:clearMap();" value='clear all' /> -->
  <input type='button' id='toggle' onclick="javascript:if(this.value == 'show all'){ showAll(); this.value = 'clear all'; }else{ clearMap();this.value = 'show all'; }" value='clear all' />
  </div>
  <div id="legend" style="position: absolute; top: 30px; left: 670px; background-color: white; width: 160px; height: 540px;">
  <br />
  </div>
  <div style='float:right;width:150px;height:30px;' id='noCoords'></div>

<?php

// gets
$index  = $_GET['informants'];
$corpus  = $_GET['corpus'];

//conf
$conf = "/hf/foni/tekstlab/glossa-0.7/dat/$corpus/cgi.conf";
$file = fopen($conf, "r") or exit ("Kan ikke åpne konfigurasjonsfila: $conf");
while(!feof($file)){
    $line = fgets($file);
    if (ereg('^\#', $line)){ continue; }
    $split = split('=', $line);
    $conf_array[trim($split[0])] = trim($split[1]);
}
fclose($file);
$database = $conf_array["db_name"];
$user = $conf_array["db_uname"];
$pass = $conf_array["db_pwd"];
$dbhost = $conf_array["db_host"];
$tmp_dir = $conf_array["tmp_dir"];
$tmp_file = $tmp_dir . "tok_inf" . $index . ".tmp";
$file = fopen($tmp_file, "r") or exit ("Can't open file: $tmp_file");;
$infs = fgets($file);
fclose($file);
#if ( !strpos($_SERVER['HTTP_USER_AGENT'], 'Firefox') ){ // Grrrr! Gotta suss this one out!!! Why does friefox not get the encoding, while the others do?!?
$infs = iconv("ISO-8859-1", "UTF-8", $infs);
#}

//init
$table = strtoupper($corpus)."author";
#$infs = preg_replace('/\(__UNDEF__\)/', '(No phonetic)', $infs);
$toks_places = array();
$informant_location = array();
$infs = preg_replace('/\)$/', '', $infs);
$pairs = split("\),", $infs);
foreach($pairs as $pair){
  $pair = split("\(", $pair);
  $tok = $pair[0];
  if ( !strpos($_SERVER['HTTP_USER_AGENT'], 'Firefox') ){ // Grrrr! Gotta suss this one out!!! Why does friefox not get the encoding, while the others do?!?
#    $tok = iconv("ISO-8859-1", "UTF-8", $tok);
  }
  $places = $pair[1];
  $places = split(",", $places);
  foreach($places as $informant){$informant_location[$informant] = 1;}
#  $informant_location = array_merge($informant_location, $places);
  if($tok == "__UNDEF__"){ continue; }
  $toks_places[$tok] = $places; //eg array of arrays
}

#$informant_location = array_unique($informant_location);

$session = mysql_connect ($dbhost . ':/var/lib/mysql/mysql.sock', $user, $pass)
     or die ('I cannot connect to the database using because: '
             . mysql_error());
mysql_select_db ($database, $session);

foreach($informant_location as $informant => $location){
  $sql = "SELECT place FROM $table WHERE tid = '$informant'";
  $loc = mysql_query($sql);
  $loc = mysql_fetch_array($loc);
  if(!$loc){ unset( $informant_location[$informant] ); continue; }
  $informant_location[$informant] = iconv("ISO-8859-1", "UTF-8", $loc[0]);
}

foreach($toks_places as $tok => $tids){
  $locs = array();
  foreach($tids as $tid){
    if(!$informant_location[$tid]){continue;}
    $loc = $informant_location[$tid];
    array_push($locs, $loc);
  }
  $toks_places[$tok] = $locs;
}
?>
<script>

  //build javascript arrays
var toksLocs = new Array();
<?php
echo "var allLocations = [\"" . join("\",\"", array_unique(array_values($informant_location))) . "\"];\n";
?>

<?php
foreach($toks_places as $tok => $locs){
  //  echo "toksLocs[\"" . iconv("UTF-8", "ISO-8859-1", $tok) ."\"] = new Array(";
  echo "toksLocs[\"" . $tok ."\"] = new Array(";
  echo "\"" . join("\",\"", $locs) . "\");\n";
}
$colors = array("red" => "#f00", "brown" => "#630", "orange" => "#f44", "yellow" => "#fc0", "green" => "#090", "blue" => "#00c", "purple" => "#850aff", "black" => "#000");
$innerHTML = "document.getElementById('legend').innerHTML += \"<div id='%s' class='hit' style='background:#fff;'>%s%s%s</div>\";\n";
$colorDiv_old = "<div id='%s' style='float:right;width:8px;height:8px;border-width:2px;border-style:solid;border-color:white;background:%s;cursor:pointer;' onclick='addMarkers(this.id);'></div>";
$colorDiv = "<div id='%s' class='marker' style='background:%s;' onclick='report(addMarkers(this.id, this.parentNode.id));'></div>";
$deleterDiv ="<div class='marker' style='background:#fff;border-style:solid;border-color:#000;' onclick='removeMarkers(this.parentNode.id);'></div>";

function divs($arr, $fstr, $tok){
  $str = "";
  foreach ($arr as $i => $v){
    $str .= sprintf($fstr, $i . "-" . $tok, $v);
  }
  return $str;
}
foreach($toks_places as $tok => $locs){
  //  $tokUTF8 = iconv("UTF-8", "ISO-8859-1", $tok);
  //  $tokUTF8 = iconv("ISO-8859-1", "UTF-8" $tok);
  $colorDivs = divs($colors, $colorDiv, $tok); //tok was tokUTF8
  echo sprintf($innerHTML, $tok, $tok, $deleterDiv, $colorDivs); //first tok was tokUTF8
}
?>
</script>
<script language="javascript">
var map = new GMap2(document.getElementById("map_canvas"));
map.setCenter(new GLatLng(64.0,3.0), 4);
GEvent.addListener(map,"click", function(overlay, latlng) {     
  if (latlng) { 
    var myHtml = "The GPoint value is: " + map.fromLatLngToDivPixel(latlng) + " at zoom level " + map.getZoom();
    map.openInfoWindow(latlng, myHtml);
  }
});

map.addControl(new GSmallMapControl());
map.addControl(new GMapTypeControl()); 

var tinyIcon = new GIcon();

//  tinyIcon.image = "http://labs.google.com/ridefinder/images/mm_20_red.png";
tinyIcon.shadow = "http://labs.google.com/ridefinder/images/mm_20_shadow.png";
tinyIcon.iconSize = new GSize(9, 15); //12,20
tinyIcon.shadowSize = new GSize(16, 15);//22,20
tinyIcon.iconAnchor = new GPoint(3, 12);//6,20
tinyIcon.infoWindowAnchor = new GPoint(5, 1);

// Set up our GMarkerOptions object literal
//  markerOptions = { icon:tinyIcon };

var dotIcon = new GIcon();

dotIcon.image = "img/red_dot.png";
dotIcon.iconSize = new GSize(6, 6); //12,20
dotIcon.iconAnchor = new GPoint(1, 1);
dotIcon.infoWindowAnchor = new GPoint(5, 1);

<?php
  //foreach($informant_location as $inf => $loc){
  //echo "addMarker('white', '$loc');\n";
  //}
?>
for(var j in allLocations){
  addMarker(allLocations[j]);
}

function report(arr){
  var empty = true;
  if(arr[0] == undefined){
    for(var i in arr){empty = false;}
  }
  if(empty){document.getElementById('noCoords').innerHTML = "";return;}
  document.getElementById('noCoords').innerHTML = "No coordinates for: <br />";
  for(var i in arr){
    document.getElementById('noCoords').innerHTML += i + " ";
  }
}

function clearMap() {
  map.clearOverlays();
  allSwitchesOff();
} 

//var marked = new Array();
function showAll(){
  for(var j in allLocations){
    addMarker(allLocations[j]);
  }
}
//div switches

var allActiveSwitches = new Object;

function allSwitchesOff(){
  for(id in allActiveSwitches){
    var div = allActiveSwitches[id] + "-" + id;
    document.getElementById(div).style.borderColor = '#fff';
    //    delete allActiveSwitches[id]; 
  }
  allActiveSwitches = new Object;
}

function divSwitch(id, color){
  divSwitchOff(id);
  document.getElementById(color + '-' + id).style.borderColor = '#000';
  allActiveSwitches[id] = color;
}

function divSwitchOff(id){
  var old = allActiveSwitches[id];
  if(old){
    document.getElementById(old + '-' + id).style.borderColor = '#fff';
  }
  delete allActiveSwitches[id];
}

function divSwitchEffect(id){
  parts = id.split("-");
  tok = id.replace(/.+\-/, "");
  divSwitch(parts[1], parts[0]);
}

var MarkerSets = function(){
  this.sets = new Array();
  this.add = function(tok, locas, color){
    if(this.sets[tok]){
      this.sets[tok].remove();
      this.sets[tok].color = color;
      this.sets[tok].add();
    }
    else{
      var set = new MarkerSet(locas, color);
      set.add();
      this.sets[tok] = set; 
    }
  };
  this.remove = function(tok){
    if(this.sets[tok]){
      this.sets[tok].remove();
    }    
  }
};

var markerSets = new MarkerSets();

var MarkerSet = function(locas, color){
  this.locations = locas; // an array of locations for marker set
  this.color = color      // the chosen marker color
  this.markers = [];      // array for all google marker objects in this set
};
MarkerSet.prototype.add = function(){
  for(i in this.locations){
    var loc = this.locations[i];
    if(!coordinates[loc]){
      continue;
    }
    var lat = coordinates[loc]['lat'];
    var lng = coordinates[loc]['lng'];
    var point = new GLatLng(lat, lng);
    tinyIcon.image = "http://labs.google.com/ridefinder/images/mm_20_" + this.color + ".png";
    markerOptions = {icon:tinyIcon};
    marker = new GMarker(point, markerOptions);
    this.markers.push(marker);
    map.addOverlay(marker);
  }
};
MarkerSet.prototype.remove = function(){
  for(j in this.markers){
    map.removeOverlay(this.markers[j]);
  }
  this.markers = [];
};
function addMarkers(id,tok){
  color = id.replace(/\-.*/, "");
  var locas = toksLocs[tok];
  var i = 0;
  var noCoords = new Array();
  markerSets.add(tok, locas, color);
  divSwitchEffect(id);
  for(var j = 0; j < locas.length; j++){
    loca = locas[j];
    if(!coordinates[loca]){
      noCoords[loca] = 1;
      continue;
    }
  }
  return noCoords;
}
function removeMarkers(tok){
  divSwitchOff(tok);
  markerSets.remove(tok);
}
function addMarker(loca){
    if(!coordinates[loca]){
      return loca;
    }
    var lat = coordinates[loca]['lat'];
    var lng = coordinates[loca]['lng'];
    var point = new GLatLng(lat,lng);
    markerOptions = {icon:dotIcon};
    marker = new GMarker(point, markerOptions);
    map.addOverlay(marker);
    return true;
}
</script>
</body>
</html>