<?php
  // INIT

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

$movie_loc .= "$corpus/$fn";
#echo "<script>alert($movie_loc);</script>";
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

  $onload = " onload=\"createPlayer(start, duration);setSelect();\"";
 }
if(!$nest_text){
    $segs = "SELECT * FROM $table WHERE audio_file = '$audio_file' AND id >= $lower_bound AND id <= $upper_bound";
    $segs = mysql_query($segs);
    $stringy = db2html($segs);
}

if($nest_text){
  $recall_url = "?line_key=$id&corpus=$corpus&left=$left&right=$right&mode=nested";
  $stringy = "<div><iframe name='text' frameborder='0' width='525' height='266' scrolling='auto' src='$recall_url'></iframe></div>";
}

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
   </style>
   <link href=<?php echo "\"" . $conf_array['htmlRoot'] . "html/tags.css\"" ?> rel="stylesheet" type="text/css"></link>	      
   <script language="JavaScript" src=<?php echo "\"" . $conf_array['htmlRoot'] . "js/showtag.js\"" ?> ></script>
   <script type='text/javascript' src='../js/swfobject15.js'></script>
   <script type='text/javascript'>
	var start = <?php echo $start; ?>;
	var duration = <?php echo $stop; ?>;
	var player = null;
	var id = <?php echo $id; ?>;
	var video = <?php echo $video; ?>;
	var mode = <?php echo "'$mode'"; ?>;
	var left = <?php echo $left; ?>;
	var right = <?php echo $right; ?>;
	var corpus = <?php echo "'$corpus'"; ?>;
	function createPlayer(start, duration){
	  var so = new SWFObject('player.swf','mpl','320','240','9');
	  so.id = 'theplayer';
	  so.addParam('allowfullscreen','false');
	  so.addParam('allowscriptaccess','always');
	  so.addParam('wmode','opaque');
	  so.addVariable('file',<?php echo "'$movie_loc'"; ?>);
	  so.addVariable('streamer',<?php echo "'$streamer'"; ?>);
	  so.addVariable('image','http://www.hf.uio.no/iln/om/organisasjon/tekstlab/BILDER/logo173.png');
	  so.addVariable('start',start);
	  so.addVariable('duration', duration);
	  so.addVariable('respectduration', 'true');
	  so.addParam('allowscriptaccess','never');
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
	  createPlayer(start, duration)
	}
	
	function expand(dir, n){
	  if(dir == 'l'){
	    left = n;
	  }
	  else{
	    right = n;
	  }
	  document.location = 'media2.php?corpus='+corpus+'&line_key='+id+'&left='+left+'&right='+right+'&video='+video;
	}
	function setSelect(){
	  document.getElementById('leftSelect').selectedIndex = left;
	  document.getElementById('rightSelect').selectedIndex = right;
	}
   </script>
	
  </head>

	<body<?php echo $onload;?>>
   <div id='txt' style='position:absolute;top:0px;left:0px;width:500px;height:280px;background:#fff;'>
	<?php echo $stringy;?>
   </div>
<?php
if($mode != 'nested'){
?>
   <div id='mediaspace' style='position:absolute;top:0px;left:530px;width:320px;height:240px;background:#0f0;'>This text will be replaced</div>
   <div style="background:#999;position:absolute;top:240px;left:530px;width:320px;height:30px;">
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
#    if($corp == 'engl2'){ return "audio/" . $fn . ".MOV"; }
    if (!$vid){ return "audio/" . $fn . ".mov"; }
    if($corp == 'nota'){return $file."_800kbps.mp4";}
    return $file."_800.mp4";
}
function db2html($rows){
    global $cqp_atts;
    global $id;
    $j = 0;
    $table = "<table border='0' width='100%%' class='res'>%s</table>";
    $tr    = "<tr valign='top' bgcolor='%s'><td>%s</td><td><span style='color:%s;font-weight:%s'>%s</span></td></tr>";
    $color = "#000";
    $bgcolor = "#ffffff";
    $last_ref = 0;
    $fill = "";
    $weight = "normal";

    $divs = "";
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
	if($ref != $last_ref){
	    if($bgcolor == "#ffffff"){$bgcolor="#ffffff";}
	    else{$bgcolor="#ffffff";}	    
	}
	if($row["id"] == $id){$color = "#a00";$weight = "bold";}
	else{$color = "#000";$weight = "normal";}
	$fill .= sprintf($tr, $bgcolor, $ref, $color, $weight, $pretty);
	//		$fill .= "<tr valign='top' bgcolor='$bgcolor'><td>$ref</td>".
	//	    "<td><font color='$color'>$seg</font></td></tr>";
	$last_ref = $ref;
    }

    $table =  sprintf($table, $fill);
    return $table . "" . $divs;
}
function popdiv($i, $tok, $atts){

    $tok = preg_replace("/^\[/", "", $tok);

    $vals = split("\|", $tok);
    
    $div = "<div id='%d' class='tag'>%s</div>";

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

    $span = "<span onMouseOver='showTag(arguments[0], %d)' onMouseOut='hideTag(%d)'>%s</span>";

    return sprintf($span, $i, $i, $str);

}

?>