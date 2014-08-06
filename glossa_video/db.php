<?php
  // INIT
$id  = $_GET['line_key']; // the sql-table key for the segment returned by CQP
$media_type = $_GET['media_type'];
$corpus = $_GET['corpus'];
$serve = $_GET['serve'];
$ctx = intval($_GET['ctx']);



$conf = "/hf/foni/tekstlab/glossa-0.7/dat/$corpus/cgi.conf";

$file = fopen($conf, "r") or exit ("Kan ikke åpne the goddam konfigurasjonsfila: $conf");

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

$f = mysql_query($mov);

$arr = mysql_fetch_array($f);

$audio_file = $arr[0];

$fn =filename($audio_file, $media_type, $corpus);
$left = $id - $ctx;
$right = $id + $ctx;
$rows = "SELECT ref,begin,end,seg FROM $table WHERE id >= $left and id <= $right and audio_file = '$audio_file';";

$rows = mysql_query($rows);
$supplied = "rtmpv";
#if($media_type == "audio"){$supplied = "m4a";}

$json = array("title" => preg_replace("/_800\.mp4/","",$fn), "last_line" => "10", "start_at" => "5", "end_at" => "5", "display_attribute" => "word", "mov" => array( "supplied" => $supplied, "path" => "rtmp://stream-prod01.uio.no/vod/mp4:uio/hf/ilf/".$corpus."/", "movie_loc" => $fn), "segments" => array(), "media_type" => $media_type);

//$json = array("title" => preg_replace("/_800\.mp4/","",$fn), "last_line" => "10", "start_at" => "5", "end_at" => "5", "display_attribute" => "word", "mov" => array( "supplied" => "m4v", "path" => "http://tekstlab.uio.no/glossa-joel-dev/glossa/glossa_video/", "movie_loc" => $fn), "segments" => array(), "media_type" => $media_type);

//$json = array("title" => preg_replace("/_800\.mp4/","",$fn), "last_line" => "10", "start_at" => "5", "end_at" => "5", "display_attribute" => "word", "mov" => array( "supplied" => "m4v", "path" => "http://lillestroem.uio.no/hf/ilf/scandiasyn/", "movie_loc" => $fn), "segments" => array());
$j = 0;

$start = false;
$stop = 0;

while($row = mysql_fetch_array($rows)){
  $i = strval($j) . "_";
  $seg = iconv("ISO-8859-1", "UTF-8", $row["seg"]);
#  $seg = $row["seg"];
  $seg = preg_replace("/\]$/","",$seg);
  $toks = explode("][", $seg);
  $counter = 0;
  $line = array( );
  foreach($toks as $tok){
    $tok = preg_replace("/^\[/","",$tok);
    $atts = explode("|", $tok);
    $c = strval($counter)."_";
    $line[$c] = array();
    foreach($atts as $k => $v){
      if($v == "" or $v == "start"){continue;}
      $line[$c][$cqp_atts[$k]] = $v;
    }
    $counter++;
  }
  if(!$start){$start = $row["begin"];}
  $stop = $row["end"];
  $json["segments"][$i] = array();
  $json["segments"][$i]["speaker"] = $row["ref"];
  $json["segments"][$i]["line"] = $line;
  $json["segments"][$i]["from"] = $row["begin"];
  $json["segments"][$i]["to"] = $row["end"];
  $j++;
}
$json["mov"]["start"] = $start;
$json["mov"]["stop"]  = $stop;

$arr = array ('item1'=>"I love jquery4u",'item2'=>"You love jQuery4u",'item3'=>"We love jQuery4u");
//echo json_encode($arr);
echo json_encode($json);

if($corpus == 'bigbrother'){$movie_loc .= "BB/$fn";}
elseif($corpus == 'demo'){$movie_loc .= "nota/$fn";}
elseif($corpus == 'nor1107'){$movie_loc .= "scandiasyn/$fn";}
else{$movie_loc .= "$corpus/$fn";}

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
    if ($vid == 'audio'){ return "audio/" . $file . ".mov"; }
    if($corp == 'nota' || $corp == 'upus' || $corp == 'demo'){return $file."_800kbps.mp4";}
    return $file."_800.mp4";
}

?>
