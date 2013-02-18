<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0//EN"  "http://www.w3.org/TR/REC-html40/strict.dtd">
<html>
 <head>
  <META http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
  <script type="text/javascript" src="http://tekstlab.uio.no/glossa/js/jquery/jquery-1.4.3.min.js"></script>
  <script type="text/javascript" src="http://tekstlab.uio.no/glossa/js/jquery/jquery.tablesorter.min.js"></script> 
  <style>
   /* tables */
   table.tablesorter {
   font-family:arial;
   background-color: #CDCDCD;
 margin:10px 0pt 15px;
   font-size: 8pt;
 width: 100%;
   text-align: left;
 }
   table.tablesorter thead tr th, table.tablesorter tfoot tr th {
     background-color: #e6EEEE;
   border: 1px solid #FFF;
     font-size: 8pt;
   padding: 4px;
   }
table.tablesorter thead tr .header {
  cursor: pointer;
}
table.tablesorter tbody td {
 color: #3D3D3D;
 padding: 4px;
  background-color: #FFF;
  vertical-align: top;
}
table.tablesorter tbody tr.odd td {
  background-color:#F0F0F6;
}
table.tablesorter thead tr .headerSortUp {
  background-image: url(asc.gif);
}
table.tablesorter thead tr .headerSortDown {
  background-image: url(desc.gif);
}
table.tablesorter thead tr .headerSortDown, table.tablesorter thead tr .headerSortUp {
  background-color: #8dbdd8;
}
  </style>
 </head>
 <body>
<?php

include('glossa.inc');
include('index.inc');

$texts["no"]["tit"] = "<h4>Informasjon om informant <i>%s</i> i %skorpuset</h4>\n";
$texts["en"]["tit"] = "<h4>Informant details for <i>%s</i> in the %s corpus</h4>\n";
$texts["en"]["sorry"] = "<h4>Sorry, no data available on informant <i>%s</i>.</h4>";
$texts["no"]["sorry"] = "<h4>Beklager, ingen opplysninger om informant <i>%s</i> i databasen.</h4>";


$tid  = $_GET['tid'];
$corpus = "";

print "<!--\nThe \$_POST stuff\n";

foreach (array_keys($_POST) as $key) {
  print "\n";
  if (preg_match( '/corpus$/', $key ) ){ $corpus = $_POST[$key]; continue; }
  if(!preg_match("/meta/", $key)){ continue;}
  print "KEY:" . $key . " => " . "VALUE:" . $_POST[$key] . "\n";
  if (preg_match('/^meta_mode/', $key)){ 
    print "$key -> $_POST[$key]\n";
    preg_match('/[^_]+$/', $key, $matches);
    $operators[$matches[0]] = $_POST[$key]; //${$key};
    print "\$operators[" . $matches[0] ."]  = " . $_POST[$key] . "\n";
    continue;
  }


  if (preg_match('/^meta_value/', $key)){ 
    
    preg_match('/[^:]+$/', $key, $matches);
	
    preg_match('/^([^\_]+)\_([^\_]+)$/', $matches[0], $rest);
    $not_of_interest = $rest[0];
    $table = $rest[1];
    $column = $rest[2];

    if (is_array($_POST[$key])) {
      $value = implode(",", $_POST[$key]);
    }
    else {
      $value = $_POST[$key];
    }

    $columns[$column]  = $value ; 
  }

}

print "-->\n";

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

$database = $base_config["db_name"];
$user = $base_config["db_uname"];
$pass = $base_config["db_pwd"];
$dbhost = $base_config["db_host"];

$meta = $conf_array["meta_author"];
$alias = $conf_array["meta_author_alias"];

$meta_string = preg_replace ( "/ /", ",", $meta );
$meta = preg_split("/ /", $meta);

$alias = preg_split("/[,\t]/", $alias);

$table = strtoupper($corpus)."author";

$session = mysql_connect ($dbhost . ':/var/lib/mysql/mysql.sock', $user, $pass)
  or die ('I cannot connect to the database (' . $dbhost . ')  because: '
             . mysql_error());

mysql_select_db ($database, $session);

$profiles = "SELECT $meta_string FROM $table";

$total = "SELECT SUM(wc) FROM $table"; 

$number_of_informants = "SELECT COUNT(tid), COUNT(distinct place), COUNT(distinct country) FROM $table";
if($corpus == 'nota'){$number_of_informants = "SELECT COUNT(tid) FROM $table";}

$first = 1;

foreach (array_keys($columns) as $key){
  print "<!-- HERE: $key -> $operators[$key] -->\n";
    $value = "";
    if($first){$profiles .= " WHERE "; $number_of_informants .= " WHERE ";}
    else{$profiles .= " AND "; $number_of_informants .= " AND ";}
    $first = 0;
    $opp = $operators[$key];
    if($opp == 'LIKE'){
	$opp = 'REGEXP';
	$value = preg_replace( "/,/", "|", $columns[$key] );
    }
    else{ $value = $columns[$key]; }
    if ($opp == 'check'){ $opp = '=';  }
    $profiles .= $key . " " . $opp . " '" . $value ."'";
    $number_of_informants .= $key . " " . $opp . " '" . $value ."'";
}

if( $first ){ $profiles .= " WHERE ";  $number_of_informants .= " WHERE ";}
 else{ $profiles .= " AND ";  $number_of_informants .= " AND ";}

$profiles .= " active IS NOT NULL;";
$number_of_informants .= " active IS NOT NULL;";
print "<!-- $profiles<br />$number_of_informants<br /> -->";
$wcs = $profiles;


$wcs = preg_replace("/SELECT .+ FROM/", "SELECT SUM(wc) FROM", $wcs);
print "<b>$wcs</b><br />";
$total = mysql_query($total);

$total = mysql_fetch_row($total);

$wcs = mysql_query($wcs);

$wcs = mysql_fetch_row($wcs);

$nelts = count($meta);
?>

<?php
if($corpus == 'kven'){$corpus = 'ruija';}
print "<b>Word count for selected informants: $wcs[0] (total for " . ucfirst($corpus) . " corpus: $total[0])</b>";

if($conf_array["lang"] == 'no'){
    print "<h4>Informasjon om informant <i>$tid</i> i " . ucfirst($corpus) . "korpuset</h4>\n";
}
else{print "<h4>Informant details for <i>$tid</i> in the " . ucfirst($corpus) . " corpus</h4>\n";}


$sq = mysql_query($profiles);
$count = mysql_query($number_of_informants);
#print "<b>$profiles</b><hr />";


$profile = mysql_fetch_row($sq);
$count = mysql_fetch_row($count);

print "<b>Informants selected: " . $count[0];
if($corpus != 'nota'){
  $places = "places";
  if($count[1] == 1){$places = "place";}
  $countries = "countries";
  if($count[2] == 1){$countries = "country";}
  print " from ". $count[1] . " " . $places . " in " . $count[2] . " " . $countries;
 }

print "</b><br />\n";

if(!$profile){

    printf($texts[$lang]["sorry"], $tid);

}
else{
?>
<table id="myTable" class="tablesorter"> 
<thead>
<tr>
<?php

    foreach ($alias as $val){
 
	print "<th>" . ucfirst($val) . "</th>\n";

    }

    print "</tr>\n</thead>\n<tbody>\n";

    while( $profile ){

	print "<tr>\n";

	$profile = join("</td>\n<td>", $profile);
	print "<td>" . $profile . "</td>\n";
	print "</tr>\n";
	$profile = mysql_fetch_row($sq);
    }
	
    print "</tbody>\n<table>\n";
}
?>
<script>
$(document).ready(function() 
		  { 
		    $("#myTable").tablesorter(); 
		  } 
		  ); 
</script>
</body>
</html>
