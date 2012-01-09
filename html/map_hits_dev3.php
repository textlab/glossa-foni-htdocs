<html>
 <head>
   <meta charset='utf-8' content='text/html' http-equiv='Content-Type' />
   <link rel="stylesheet" href="jquery.colorpicker.css" type="text/css" media="screen"/>
   <script language="JavaScript" src="http://www.tekstlab.uio.no/scandiasyn/base/javascripts/coordinates.js"></script>
   <script language="JavaScript" src="../js/map.js"></script>
   <script src="http://maps.google.com/maps?file=api&amp;v=2&amp;sensor=false&amp;key=ABQIAAAABOQZp7gkH59Jdv6kfvOgMRTy7FyIA8wknwhtGJqtCU5xoOO9chRv1od4COyxZwIQZlBrHd1DDpjcaQ" type="text/javascript"></script>
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js" type="text/javascript"></script>
   <script src="../js/jquery.colorpicker.js" type="text/javascript"></script>
   <script src="http://gmaps-utility-library.googlecode.com/svn/trunk/markermanager/release/src/markermanager.js">
   //some marker managment
   </script>
 </head>
 <body onunload="GUnload()">
  <div id="map_canvas" style="position: absolute; top: 10px; left: 10px; width: 650px; height: 540px"></div>
  <div id="ctrl" style="position: absolute; top: 10px; left: 670px; background-color: white; width: 160px; height: 540px;">
  <input type='button' id='toggle' onclick="javascript:if(this.value == 'show all'){ showAll(); this.value = 'clear all'; }else{ clearMap();this.value = 'show all'; }" value='clear all' />
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
$infs = iconv("ISO-8859-1", "UTF-8", $infs);

//init
$table = strtoupper($corpus)."author";
$location_informant = array();
$toks_places = array();
$informant_location = array();

$infs = preg_replace('/\)$/', '', $infs);
$infs = preg_replace('/\n*$/', '', $infs);
$pairs = split("\),", $infs);
foreach($pairs as $pair){
  $pair = split("\(", $pair);
  $tok = $pair[0];
  if ( !strpos($_SERVER['HTTP_USER_AGENT'], 'Firefox') ){ // Grrrr! Gotta suss this one out!!! Why does firefox not get the encoding, while the others do?!?
    #$tok = iconv("ISO-8859-1", "UTF-8", $tok);
  }
  $places = $pair[1];
  $places = split(",", $places);
  foreach($places as $informant){$informant_location[$informant] = 1;}

  if($tok == "__UNDEF__"){ continue; }
  $toks_places[$tok] = $places; //eg array of arrays ---> toks_places[tok]->[informant0, informant1,...,informantN] silly name
}

#$informant_location = array_unique($informant_location);

$session = mysql_connect ($dbhost . ':/var/lib/mysql/mysql.sock', $user, $pass)
     or die ('I cannot connect to the database using because: '
             . mysql_error());
mysql_select_db ($database, $session);

foreach($informant_location as $informant => $location){ // completes array $informant_location[$informant]=>$location
  $sql = "SELECT place FROM $table WHERE tid = '$informant'";
  $loc = mysql_query($sql);
  $loc = mysql_fetch_array($loc);
  if(!$loc){ unset( $informant_location[$informant] ); continue; }
  //$loc = $loc[0];
  $loc = iconv("ISO-8859-1", "UTF-8", $loc[0]);
  $informant_location[$informant] = $loc;
  if(!array_key_exists($loc,$location_informant)){
    $location_informant[$loc] = array($informant);
  }
  else{

    array_push($location_informant[$loc], $informant);

  }

}
$tok_inf = $toks_places;
foreach($toks_places as $tok => $tids){ // makes array toks_places[tok]=>loc
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

function jsHashEmDanno($var, $arr){
  $hash = "var $var = {";
  $vals = array();
  foreach($arr as $key => $val){
    $val = join("\",\"", $val);
    $val = "\"$val\"";
    $val = "\"$key\":[$val]";
    array_push($vals, $val);
  }
  $hash .= join(",", $vals);
  return $hash . "};\n";
}
echo "var corpus = \"$corpus\"\n";
echo jsHashEmDanno("locInf", $location_informant);
echo jsHashEmDanno("tokInf", $tok_inf);
echo "\n\n";
echo "var allLocations = [\"" . join("\",\"", array_unique(array_values($informant_location))) . "\"];\n";
?>

<?php
foreach($toks_places as $tok => $locs){
  echo "toksLocs[\"" . $tok ."\"] = new Array(";
  echo "\"" . join("\",\"", $locs) . "\");\n";
}
$colors = array("red" => "#f00", "brown" => "#630", "orange" => "#f44", "yellow" => "#fc0", "green" => "#090", "blue" => "#00c", "purple" => "#850aff", "black" => "#000");
$innerHTML = "document.getElementById('legend').innerHTML += \"<a id='%s' />\";\n\n";
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
$ready_fun = "        $(document).ready(function() {\n%s        });\n";
$colorpicker_format = "            $('#%s').colorpicker({\n                size: 20,\n                label: 'Color: ',\n                hide: true,\n            func: add_report\n            });\n";
$colorpicker = "";

foreach($toks_places as $tok => $locs){
  $colorDivs = divs($colors, $colorDiv, $tok); //tok was tokUTF8
  $colorpicker .= sprintf($colorpicker_format, $tok);
  echo sprintf($innerHTML, $tok, $tok, $deleterDiv, $colorDivs); //first tok was tokUTF8
}

$ready_fun = sprintf($ready_fun, $colorpicker);
print $ready_fun;
?>
</script>
<script language="javascript">
var map = new GMap2(document.getElementById("map_canvas"));
map.setCenter(new GLatLng(64.0,3.0), 4);
map.addControl(new GSmallMapControl());
map.addControl(new GMapTypeControl()); 


// Set up our GMarkerOptions object literal
//  markerOptions = { icon:tinyIcon };

var dotIcon = new GIcon();

dotIcon.image = "img/red_dot.png";
dotIcon.iconSize = new GSize(6, 6); //12,20
dotIcon.iconAnchor = new GPoint(1, 1);
dotIcon.infoWindowAnchor = new GPoint(5, 1);

for(var j in allLocations){ // the small dots, for all results
  addMarker(allLocations[j]); 
}
function add_report(id, tok){
   report(addMarkers(id,tok));
}
function report(arr){ // for reporting all missing coordinates
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
function divSwitch(id, color){ // id is the label, ie, the particular pronounciation
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

// MarkerSets - an array for all MarkerSet objects
var MarkerSets = function(){
  this.sets = new Array();
  this.add = function(tok, locas, color){
    if(this.sets[tok]){
      this.sets[tok].remove();
      this.sets[tok].color = color;
      this.sets[tok].add();
    }
    else{
      var set = new MarkerSet(locas, tok, color);
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
// MarkerSet - an object for groups of markers of same colour.

var MarkerSet = function(locas, tok, color){
  this.locations = locas; // an array of locations for marker set
  this.color = color;      // the chosen marker color
  this.tok = tok;
  this.markers = [];      // array for all google marker objects in this set
};

MarkerSet.prototype.createMarker = function(lat,lng,color,message){
  var point = new GLatLng(lat,lng);
  var tinyIcon = new GIcon();
  tinyIcon.shadow = "http://labs.google.com/ridefinder/images/mm_20_shadow.png";
  tinyIcon.iconSize = new GSize(9, 15); //12,20
  tinyIcon.shadowSize = new GSize(16, 15);//22,20
  tinyIcon.iconAnchor = new GPoint(3, 12);//6,20
  tinyIcon.infoWindowAnchor = new GPoint(5, 1);
  tinyIcon.image = "http://labs.google.com/ridefinder/images/mm_20_" + this.color + ".png";
  var markerOptions = {icon:tinyIcon};
  var marker = new GMarker(point, markerOptions);
  GEvent.addListener(marker,"click", function() {
      marker.openInfoWindowHtml(message);
    });        
  return marker;
}
MarkerSet.prototype.add = function(){
  for(i in this.locations){
    var loc = this.locations[i];
    if(!coordinates[loc]){
      continue;
    }
    var lat = coordinates[loc]['lat'];
    var lng = coordinates[loc]['lng'];
    var marker = this.createMarker(lat,lng,this.color,makeMessage(loc,this.tok));
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
//  alert("id: "+id+", tok: "+tok);
  color = id.replace(/\-.*/, "");
  var locas = toksLocs[tok];
  var i = 0;
  var noCoords = new Array();
  markerSets.add(tok, locas, color);
//  divSwitchEffect(id);
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
function makeMessage(loc, tok){
  var infs1 = locInf[loc];
  var infs2 = tokInf[tok];
  //  alert(infs1 + " " + infs2);
  var infs = intersection(infs1, infs2);
  infs = infs.join(", ");
  return "Location: " + loc + "<br />Phonetic: " + tok + "<br />Informants: " + profileLink(infs);
}
function profileLink(tid){
  return "<span style=\"font-weight:bold;cursor:pointer;color:green;\" onclick=\"window.open('profile.php?tid=" + tid + "&corpus=" + corpus +"');\">" + tid +"</span>";
}
//profile.php?tid=boda_om1&corpus=scandiasyn
function intersection(arr1, arr2){
   var is = new Array();
   for(j in arr1){
     for(i in arr2){
       if(arr1[j] == arr2[i]){
	 is.push(arr1[j]);
	 break;
       }
     }
   }
   return is;
}

</script>
</body>
</html>
