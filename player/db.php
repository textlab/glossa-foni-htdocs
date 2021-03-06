<?php
  // INIT

$id  = $_GET['line_key']; // the sql-table key for the segment returned by CQP
$video = $_GET['video'];
$left = $_GET['left'];
$right = $_GET['right'];
$corpus = $_GET['corpus'];

if(!$left){  $left = 0; }
if(!$right){  $right = 0; }

$conf = "/hf/foni/tekstlab/glossa-0.7/dat/$corpus/cgi.conf";

$file = fopen($conf, "r") or exit ("Kan ikke �pne the goddam konfigurasjonsfila: $conf");

while(!feof($file)){
    $line = fgets($file);
    if (preg_match('/^\#/i', $line)){ continue; }
    $split = explode('=', $line);
    $conf_array[trim($split[0])] = trim($split[1]);
}
fclose($file);

$database = $conf_array["db_name"];
$user = $conf_array["db_uname"];
$pass = $conf_array["db_pwd"];
$dbhost = $conf_array["db_host"];
$cqp_atts = explode(" ", $conf_array['corpus_attributes']);

$movie_loc = $conf_array["media_url"];
$movie_loc = "mp4:uio/hf/ilf/";
$streamer = "rtmp://stream-prod01.uio.no/vod/";
$table = strtoupper($corpus)."segments";

$session = mysql_connect ($dbhost . ':/var/lib/mysql/mysql.sock', $user, $pass)
     or die ('I cannot connect to the database because my toes really hurt and I '
             . mysql_error());

mysql_select_db ($database, $session);

$mov = "SELECT audio_file FROM $table WHERE id = $id";          //vid

$lower_bound = $id - $left;
$upper_bound = $id + $right;

$f = mysql_query($mov);

$arr = mysql_fetch_array($f);

$audio_file = $arr[0];

$last_row = "SELECT id FROM $table WHERE audio_file = '$audio_file' ORDER BY id DESC LIMIT 1"; #ASC or DESC
$test = $last_row;
$last_row = mysql_query($last_row);
$last_row = mysql_fetch_array($last_row);
$last_row = $last_row['id'];

if( $upper_bound > $last_row ){ $upper_bound = $last_row; }
if( $lower_bound < 1 ){ $lower_bound = 1; }

$context = "SELECT id,begin,end FROM $table WHERE id >= " . $lower_bound . " AND id <= " . $upper_bound .
           " AND audio_file = '" . $audio_file  . "';"; 

$fn =filename($audio_file, $video, $corpus);
#print "<script>alert('$corpus - $fn')</script>";
if($corpus == 'bigbrother'){$movie_loc .= "BB/$fn";}
elseif($corpus == 'demo'){$movie_loc .= "nota/$fn";}
elseif($corpus == 'nor1107'){$movie_loc .= "scandiasyn/$fn";}
elseif($corpus == 'tigrinya'){$movie_loc .= "tigrinya/$fn";}
else{$movie_loc .= "$corpus/$fn";}
#print "<script>alert('$movie_loc')</script>";

$res = mysql_query($context);
$lower_fixed = 0;
$begin = 0;
$end = 10000;

while( $row = mysql_fetch_array($res) ) {
  // check all segments are from same transcription
  // ie, context size could overlap transcription boundary.
  // .. could it?!? even when you check that audio_file is correct?

  $lid = $row["id"];

  // check lower_bound first
  if(!$lower_fixed) {
    // lower_bound = id - left
    if( $lid >= $lower_bound ) {
      // begin = timecode for segment start
      $lower_bound = $lid; $begin = $row["begin"]; 
    }

    $lower_fixed = 1;
  }

  $upper_bound = $lid;
  $end = $row["end"];

}

// need to make an adjustment. if lower_bound - 1.end > lower_bound.begin, then this should also be played. same for upper_bound
$previousend = "SELECT end,audio_file FROM $table WHERE id = " . ($lower_bound - 1) . ";";
$nextbegin = "SELECT begin,audio_file FROM $table WHERE id = " . ($upper_bound + 1) . ";";

$res = mysql_query($previousend);
$row = mysql_fetch_array($res);

$res = mysql_query($nextbegin);
$row = mysql_fetch_array($res);

$stringy = "";
$start = "SELECT begin FROM $table WHERE id = $lower_bound";
$stop  = "SELECT end FROM $table WHERE id = $upper_bound";
$start = mysql_query($start);
$start = mysql_fetch_array($start);
$start = $start[0];
$stop = mysql_query($stop);
$stop = mysql_fetch_array($stop);
$stop = $stop[0];

$mov_vars = array('movie_loc' => $movie_loc, 'start' => $start, 'stop' => $stop);
$result = array();

$segs = "SELECT * FROM $table WHERE audio_file = '$audio_file' AND id >= $lower_bound AND id <= $upper_bound";
$segs = mysql_query($segs);
$stringy = db2html($segs, $corpus);

$result['mov'] = $mov_vars;
$result['divs'] = $stringy;
$result['test'] = $test;

echo json_encode($result);


// #### e, infine, le funzioni ####

function filename( $file, $vid, $corp ){
  if($corp == 'tigrinya'){return "audio/" . $file; }
    $pat = "/^[A-Z]*_/";
    $file = preg_replace ( $pat, "", $file );
    $pat = "/\.wav/i";
    $file = preg_replace ( $pat, "", $file);
    if($corp == 'bigbrother'){ 
	$pat = "/_[A-Z]+$/";
	$file = preg_replace($pat, "", $file);
	$file = "BB_" . $file;
    }
    if ($vid == 'false'){ return "audio/" . $file . ".mov"; }
    if($corp == 'nota' || $corp == 'upus' || $corp == 'demo'){return $file."_800kbps.mp4";}
    return $file."_800.mp4";
}

function db2html($rows,$corp) {
  global $cqp_atts;
  global $id;
  $j = 0;
  $divs = array();
  $pops = array();
  $counter = 0;

  while($row=mysql_fetch_array($rows)){
    $spans = array();
    $pretty = "";
    $ref=$row["ref"];
    $begin=$row["begin"];
    $end=$row["end"];

    if($corp == 'nor1107' or $corp == 'tigrinya'){
      $seg = $row["seg"];
    }
    else{
      $seg = iconv("ISO-8859-1", "UTF-8", $row["seg"]);
    }

    $toks = explode("]", $seg);

    foreach($toks as $tok){
      $pops[$j] = att_val_array($j, $tok, $cqp_atts);
      $spans[$j++] = span($tok);
    }

    $divs['spans'][$counter++] = array('ref' => $ref, 'spans' => $spans, 'begin' => $begin, 'end' => $end);
  }

  $divs['pops'] = $pops;

  return $divs;
}

function att_val_array($i, $tok, $atts){
  $tok = preg_replace("/^\[/", "", $tok);
  $vals = explode("\|", $tok);
  $arr = array();
  for($j = 0; $j < count($vals); $j++){
    if(!$vals[$j]){continue;}
    $arr[$atts[$j]] = $vals[$j];
  }
  return $arr;  
}

function span($tok){
    global $corpus;
    $pat = "/\[([^\|]+)/";
    $pretty = "";
    if( preg_match($pat, $tok, $match) == 1){
      $tok = preg_replace("/^\[/", "", $match[0]);
      $tok = preg_replace("/\|$/", "", $tok);
    }
    if ($corpus == "legepasient") {
      $tok = strtr($tok, "{}", "[]");
    }
    return $tok;
}

?>
