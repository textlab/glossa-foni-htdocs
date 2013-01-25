<?php

include('glossa.inc');
include('index.inc');

$id  = $_GET['line_key']; // the sql-table key for the segment returned by CQP
$video = $_GET['video'];
$mode = $_GET['mode'];
$left = $_GET['left'];
$right = $_GET['right'];
if(!$mode){$mode = 'normal';}
if(!$left){
  $left = 0;
 }
if(!$right){
  $right = 0;
 }


$size= $right + $left;
$nest_text = false;
if($size > 4 && $mode != 'nested'){$nest_text = true;} // just incase the script is invoked wrongly. ie, too great a context for the text div. 

$corpus = $_GET['corpus'];

$conf = "$configdir/$corpus/cgi.conf";

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
$cqp_atts = split(" ", $conf_array['corpus_attributes']);

$movie_loc = $conf_array["media_url"];
$movie_loc = "mp4:uio/hf/ilf/";
$streamer = "rtmp://stream-prod01.uio.no/vod/";
$table = strtoupper($corpus)."segments";

if($size < 0){ $size = 0; } // negative makes no sense

$session = mysql_connect ($dbhost . ':/var/lib/mysql/mysql.sock', $user, $pass)
     or die ('I cannot connect to the database because my toes really hurt and I '
             . mysql_error());

mysql_select_db ($database, $session);

$mov = "SELECT audio_file FROM $table WHERE id = $id";          //vid

$lower_bound = $id - $left;#$id - $size;
$upper_bound = $id + $right;#$id + $size;

$f = mysql_query($mov);

$arr = mysql_fetch_array($f);

$audio_file = $arr[0];


$context = "SELECT id,begin,end FROM $table WHERE id >= " . $lower_bound . " AND id <= " . $upper_bound .
           " AND audio_file = '" . $audio_file  . "';"; 

$fn =filename($audio_file, $video, $corpus);
#print "<script>alert('$fn')</script>";
$movie_loc .= "$corpus/$fn";

$res = mysql_query($context);
$lower_fixed = 0;
$begin = 0;
$end = 10000;

while( $row = mysql_fetch_array($res) ){

# check all segments are from same transcription
# ie, context size could overlap transcription boundary.
#.. could it?!? even when you check that audio_file is correct?

    $lid = $row["id"];

    if(!$lower_fixed){ #check lower_bound first

	if( $lid >= $lower_bound ){ $lower_bound = $lid; $begin = $row["begin"]; }

	$lower_fixed = 1;
    }

    $upper_bound = $lid;
    $end = $row["end"];

}

# need to make an adjustment. if lower_bound - 1.end > lower_bound.begin, then this should also be played. same for upper_bound
$previousend = "SELECT end FROM $table WHERE id = " . ($lower_bound - 1) . ";";
$nextbegin = "SELECT begin FROM $table WHERE id = " . ($lower_bound + 1) . ";";


$res = mysql_query($previousend);
$row = mysql_fetch_array($res);
if( $row["end"] > $begin ){ $lower_bound -= 1; }

$res = mysql_query($nextbegin);
$row = mysql_fetch_array($res);
if( $row["begin"] < $end ){ $upper_bound += 1; }
$stringy = "";
$onload = "";
if($mode != 'nested'){
  $start = "SELECT begin FROM $table WHERE id = $lower_bound";
  $stop  = "SELECT end FROM $table WHERE id = $upper_bound";
  $start = mysql_query($start);
  $start = mysql_fetch_array($start);
  $start = $start[0];
  $stop = mysql_query($stop);
  $stop = mysql_fetch_array($stop);
  $stop = $stop[0];

  $onload = " onload=\"movie = '" . $movie_loc . "'; createPlayer('" . $movie_loc . "',start, duration);setSelect();\"";
 }
$segs = "SELECT * FROM $table WHERE audio_file = '$audio_file' AND id >= $lower_bound AND id <= $upper_bound";
$segs = mysql_query($segs);
$stringy = db2html($segs);

?>


<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
   
   <title>Glossa - media</title>
   
   <style type="text/css">
    body { background-color: #fff; padding: 0 20px; color:#000; font: 13px/18px Arial, sans-serif; }
    a { color: #360; }
    h3 { padding-top: 20px; }
    ol { margin:5px 0 15px 16px; padding:0; list-style-type:square; }
    .textbox{
      position:absolute;
      top:0px;
      left:410px;
      /*      width:73%;*/
      height:330px;
      background:#fff;
      overflow: -moz-scrollbars-vertical;
      overflow-x: hidden;
      overflow-y:scroll;
      /*     overflow:scroll;*/
    }
    .line {
      border:1px solid #ddd;
      font-size:12px;
    height:20px;
      /*    width:700px;*/
      margin-right:0px;
    background:#efefef;
      
    }
    .ref {
      color:#353;
      float:left;
      margin-left:0px;
    width:100px;

    }
    .text {
      float:left;
      margin-left:5px;
      margin-right:10px;
      /*      height:20px;*/
      /*width:80%;*/
    }
    .rmargin{
      float:left;
    }
    .video{
      position:absolute;
      top:0px;
      left:0px;
      width:400px;
      height:300px;
      background:#fff;'
    }
    .console{
      background:#999;
      position:absolute;
      top:300px;
      left:0px;
      width:400px;
      height:30px;
    }
   </style>
   <link href=<?php echo "\"" . $conf_array['htmlRoot'] . "html/tags.css\"" ?> rel="stylesheet" type="text/css"></link>	      
   <script language="JavaScript" src=<?php echo "\"" . $conf_array['htmlRoot'] . "js/showtag.js\"" ?> ></script>
   <script type='text/javascript' src='../js/swfobject15.js'></script>
   <script type='text/javascript'>
	//orig dims: 320 * 240
	var movie = "";
	var start = <?php echo $start; ?>;
	var duration = <?php echo $stop; ?>;
	var player = null;
	var id = <?php echo $id; ?>;
	var video = <?php echo $video; ?>;
	var mode = <?php echo "'$mode'"; ?>;
	var left = <?php echo $left; ?>;
	var right = <?php echo $right; ?>;
	var corpus = <?php echo "'$corpus'"; ?>;
	var height = '300'; 
	if(!video){height = '0';}
	function createPlayer(movie_loc, start, duration){
	  var so = new SWFObject('player.swf','mpl','400',height,'9');
	  so.id = 'theplayer';
	  so.addParam('allowfullscreen','false');
	  so.addParam('allowscriptaccess','always');
	  so.addParam('wmode','opaque');
	  so.addParam('allowscriptaccess','never');
	  so.addVariable('file', movie_loc);
	  so.addVariable('streamer',<?php echo "'$streamer'"; ?>);
	  so.addVariable('image','http://www.hf.uio.no/iln/om/organisasjon/tekstlab/BILDER/logo173.png');
	  so.addVariable('start',start);
	  so.addVariable('duration', duration);
	  so.addVariable('respectduration', 'true');
	  so.addVariable('controlbar', 'none');
	  so.addVariable('autostart', 'true');
	  so.write('mediaspace');
	}
	function increaseContext(direction){
	  var seconds = 0.5;
	  if(direction == 'l'){
	    start -= seconds;
	  }
	  if(direction == 'r'){
	    duration += seconds;
	  }
	  createPlayer(movie, start, duration)
	}
	
	function expand(dir, n){
	  if(dir == 'l'){
	    left = n;
	  }
	  else{
	    right = n;
	  }
	  document.location = 'mediatest.php?corpus='+corpus+'&line_key='+id+'&left='+left+'&right='+right+'&video='+video;
	}
	function setSelect(){
	  document.getElementById('leftSelect').selectedIndex = left;
	  document.getElementById('rightSelect').selectedIndex = right;
	}
   </script>
	
  </head>

	<body<?php echo $onload;?>>
	<?php echo $stringy;?>
<?php
if($mode != 'nested'){
?>
   <div id='mediaspace' class='video'>This text will be replaced</div>
   <div class='console'>
    <table border='0' width='100%'>
     <tr>
       <td>
         <span onclick="increaseContext('l');" style="cursor:pointer;">+</span>
       </td>
       <td>
        <select id='leftSelect' onchange="expand('l',this.value);">
         <option value='0'>0</option>
         <option value='1'>1</option>
         <option value='2'>2</option>
         <option value='3'>3</option>
         <option value='4'>4</option>
         <option value='5'>5</option>
         <option value='6'>6</option>
         <option value='7'>7</option>
         <option value='8'>8</option>
         <option value='9'>9</option>
         <option value='10'>10</option>
        </select>
       </td>
       <td>
<span onclick="createPlayer('mp4:uio/hf/ilf/scandiasyn/roemskog_01um-02uk_800.mp4', 30,40);">#</span>
       </td>
       <td align='right'>
        <select id='rightSelect' onchange="expand('r',this.value);">
         <option value='0'>0</option>
         <option value='1'>1</option>
         <option value='2'>2</option>
         <option value='3'>3</option>
         <option value='4'>4</option>
         <option value='5'>5</option>
         <option value='6'>6</option>
         <option value='7'>7</option>
         <option value='8'>8</option>
         <option value='9'>9</option>
         <option value='10'>10</option>
        </select>
       </td>
       <td align='right'>
         <span onclick="increaseContext('r');" style="cursor:pointer;">+</span>
      </td>
     </tr>
    </table>
   </div>

<?php
}
?>
 </body>
</html>

<?php
	//roemskog_01um-02uk_800.mp4, stryn_01um-02uk_800.mp4, mp4:uio/hf/ilf/scandiasyn/
function filename( $file, $vid, $corp ){

    $pat = "/^[A-Z]*_/";
    $file = preg_replace ( $pat, "", $file );
    $pat = "/\.wav/i";
    $file = preg_replace ( $pat, "", $file);
    if($corp == 'bigbrother'){ 
	$pat = "/_[A-Z]+$/";
	$file = preg_replace($pat, "", $file);
	$file = "BB_" . $file;
    }
    if (!$vid){ return "audio/" . $file . ".mov"; }
    if($corp == 'nota' || $corp == 'upus'){return $file."_800kbps.mp4";}
    return $file."_800.mp4";
}
function db2html($rows){
  global $cqp_atts;
  global $id;
  $j = 0;
  $container = "<div class='textbox'>\n%s\n</div>";
  $segment    = "<div id='cp-%d' class='line' data-time='%s'>\n<div class='ref'>%s:</div>\n<div class='text'>\n%s</div>\n</div>\n";
  $last_ref = 0;
  $fill = "";
  $weight = "normal";
  $divs = "";
  $counter = 0;
  while($row=mysql_fetch_array($rows)){
	$pretty = "";
	$ref=$row["ref"];
	$begin=$row["begin"];
	$end=$row["end"];
	$seg = $row["seg"];
	$toks = split("]", $seg);
	foreach($toks as $tok){
	    $divs .= popdiv($j, $tok, $cqp_atts);
	    $pretty .= span ($j++, $tok);
	}
	$fill .= sprintf($segment, $counter++, $begin, $ref, $pretty);
	$last_ref = $ref;
  }
  //  $container =  sprintf($containter, $fill);
  $container =  "<div class='textbox'>" . $fill . "</div>";
  return $container . "" . $divs;
}
function popdiv($i, $tok, $atts){

    $tok = preg_replace("/^\[/", "", $tok);

    $vals = split("\|", $tok);
    
    $div = "<div id='%d' class='tag'>%s</div>\n";

    $att = "<b>%s: </b>%s<br />";

    $cont = "";

    for($j = 0; $j < count($vals); $j++){

	if(!$vals[$j]){continue;}

	$cont .= sprintf($att, $atts[$j], $vals[$j]);

    }
    
    return sprintf($div, $i, $cont);
    
}

function span($spani, $tok){

    $pat = "/\[([^\|]+)/";

    $pretty = "";

    preg_match($pat, $tok, $match);

    $tok = preg_replace("/^\[/", "", $match[0]);

    $tok = preg_replace("/\|$/", "", $tok);

    $tok = spank($spani, $tok);

    return $tok." ";

}

function spank($i, $str){

    $span = "<span onMouseOver='showTag(arguments[0], %d)' onMouseOut='hideTag(%d)'>%s</span>\n";

    return sprintf($span, $i, $i, $str);

}

?>