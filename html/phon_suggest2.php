<?php

$corpus = $_GET['corpus'];
$q = $_GET['q'];
$orth = $_GET['orth'];
if($q){

  $conf = "/hf/foni/tekstlab/glossa-0.7/dat/$corpus/cgi.conf";
  
  $file = fopen($conf, "r") or exit ("Kan ikke åpne konfigurasjonsfila: $conf");

  while(!feof($file)){
    $line = fgets($file);
    if (ereg('^\#', $line)){ continue; }
    $split = split('=', $line);
    $conf_array[trim($split[0])] = trim($split[1]);
  }
  
  $database = $conf_array["db_name"];
  $user = $conf_array["db_uname"];
  $pass = $conf_array["db_pwd"];
  $dbhost = $conf_array["db_host"];

  $session = mysql_connect ($dbhost . ':/var/lib/mysql/mysql.sock', $user, $pass)
    or die ('I cannot connect to the database because my toes really hurt and I '
	    . mysql_error());
  
  mysql_select_db ($database, $session);

  function getToks($ort, $corpus, $orth){
    $res = array();
    $c = strtoupper($corpus);
    $query = "SELECT phonetic FROM " . $c . "phonetic WHERE orthographic = '$ort'";
    if($orth){$query = "SELECT orthographic FROM " . $c . "phonetic WHERE orthographic regexp '^$ort' limit 16";}
    //    echo "<br /><br /><hr /><p>$query --- ($orth)</p>";
    $phons = mysql_query($query);
    //$pat = array('/æ/', '/ø/', '/å/','/Æ/','/Ø/','/Å/');
    //$rep = array('&aelig;','&oslash;','&aring;','&AElig;','&Oslash;','&Aring;');
    //$row = preg_replace($pat, $rep, $row[0]);
    while( $row = mysql_fetch_array($phons) ){
      array_push($res, iconv("ISO-8859-1", "UTF-8", $row[0]));
    }
    return join(',', $res);
  }

  fclose($file);
  $res = getToks($q, $corpus, $orth);
  //  $res = split(", ?", $res);
  //$out = join(',',array_slice($res, 0, 10));
  //echo $out;
  echo $res;
 }
else{
?>
    
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0//EN"  "http://www.w3.org/TR/REC-html40/strict.dtd">
<html>
<meta http-equiv="content-type" content="text/html; charset=iso-8859-1">
 <head>
  <script language="javascript">
  
  var xmlhttp;

  var done = false;

function ajax_option_keyNavigation(e){
  if(document.all)e = event;
  if(!ajax_optionDiv)return;
  if(ajax_optionDiv.style.display=='none')return;
  if(e.keyCode==38){	// Up arrow
    if(!ajax_list_activeItem)return;
    if(ajax_list_activeItem && !ajax_list_activeItem.previousSibling)return;
    ajax_options_rollOverActiveItem(ajax_list_activeItem.previousSibling,true);
  }
  
  if(e.keyCode==40){	// Down arrow
    if(!ajax_list_activeItem){
      ajax_options_rollOverActiveItem(ajax_list_optionDivFirstItem,true);
    }else{
      if(!ajax_list_activeItem.nextSibling)return;
      ajax_options_rollOverActiveItem(ajax_list_activeItem.nextSibling,true);
    }
  }
  
  if(e.keyCode==13 || e.keyCode==9){	// Enter key or tab key
    if(ajax_list_activeItem && ajax_list_activeItem.className=='optionDivSelected')ajax_option_setValue(false,ajax_list_activeItem);
    if(e.keyCode==13)return false; else return true;
  }
  if(e.keyCode==27){	// Escape key
    ajax_options_hide();
  }
}

var row_j = -1;

function handleEvent(obj,e){
  var table = document.getElementById('suggestions');
  var rows = table.rows.length;
  if(e.keyCode == 13){
    var chosen = document.getElementById(row_j).firstChild.id;
    document.getElementById('ortho').value = chosen;
    done = true;
    var table = document.getElementById('suggestions');
    deleteAllRows(table);  
    table.style.visibility='hidden';
    findPhons(document.getElementById('ortho').value, false);
    row_j = -1;
    return;
  }
  if(e.keyCode == 40){ //going down
    if(row_j < rows -1){
      row_j++;
      navigateTable(row_j);
      return;
    }
    else{return;}
  }
  if(e.keyCode == 38){ //going down
    if(row_j > 0){
      row_j--;
      navigateTable(row_j);
      return;
    }
    else{return;}
  }
  done = false;
  document.getElementById('suggestions').style.visibility='visible';
  if(obj.value){
    suggest(obj.value, e);
    return;
  }
  var table = document.getElementById('suggestions');
  deleteAllRows(table);  
  document.getElementById('suggestions').style.visibility='hidden';
}

function suggest(str){
  str = str.replace(/ /g, "");
  if(str == ''){return;}
  findPhons(str, true);
}
function findPhons(str, orth){
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null){
      alert ("Browser does not support HTTP Request");
      return;
    }
    var url="phon_suggest.php?corpus=scandiasyn";
    url=url+"&q="+str;
    if(orth){url += "&orth=1";}
    url=url+"&sid="+Math.random();
    //  alert(url);
    xmlhttp.onreadystatechange=stateChanged;
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);
}

function stateChanged(){
  if (xmlhttp.readyState==4){
    text = xmlhttp.responseText;
    if(!done){addRow(text);return;}
    document.getElementById("matches").innerHTML= text;
  }
}

function GetXmlHttpObject(){
  if (window.XMLHttpRequest){
    // code for IE7+, Firefox, Chrome, Opera, Safari
    return new XMLHttpRequest();
  }
  if (window.ActiveXObject)
    {
      // code for IE6, IE5
      return new ActiveXObject("Microsoft.XMLHTTP");
    }
  return null;
}
function writeToField(col, row, text){
  window.top.document.getElementById("string_"+col+"_"+row).value += text;
}
function deleteAllRows(table){
  for(var i = table.rows.length; i > 0;i--){
    table.deleteRow(i -1);
  }
  row_j = -1;
  activeRow = -1;
}
var autoTable = new Object;

function addRow(match){
  var matches = match.split(',');
  var table = document.getElementById('suggestions');
  deleteAllRows(table);
  for(j in matches){
    var match = matches[j];
    var lastRow = table.rows.length;
    var row = table.insertRow(lastRow);
    var cell = row.insertCell(0);
    var textNode = document.createTextNode(match);
    row.setAttribute('id', j);
    cell.appendChild(textNode);
    cell.setAttribute('id', match);
    cell.setAttribute('class', 'optionRow');
    cell.setAttribute('onclick', 'fireUp(this.id)')
  }
}
var activeRow = -1;
function navigateTable(j){
  var table = document.getElementById('suggestions');
  var row = document.getElementById(j);
  row.firstChild.style.backgroundColor = "#8cf";
  if(activeRow > -1){
    var last = document.getElementById(activeRow);
    last.firstChild.style.backgroundColor = "#fff";
  }
  activeRow = j;
}
function fireUp(choice){
  done = true;
  var table = document.getElementById('suggestions');
  document.getElementById('ortho').value = choice;
  deleteAllRows(table);
  table.style.visibility='hidden';
  //  findPhons(document.getElementById('ortho').value, false);
  findPhons(choice, false);
}

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
.optionRow{
  background-color: #fff;
}

.optionRow:hover{
  background-color: #8cf;
}
  </style>
<body>
<!--   <form> -->
      <table>
         <tr>
            <td><b>Orth:</b></td>
            <!--<td><input type="text" id="ortho" name="orth" size="30" onkeyup="done = false;document.getElementById('suggestions').style.visibility='visible';suggest(this.value, event);" autocomplete="off" /></td>-->
            <td><input type="text" id="ortho" name="orth" size="30" onkeyup="handleEvent(this, event);" autocomplete="off" /></td>
            <td><button type="button" onclick="done = true;document.getElementById('suggestions').style.visibility='hidden';findPhons(document.getElementById('ortho').value, false);">find</button></td>
         </tr>
         <tr>
            <td>&nbsp;</td>
            <td>
               <table id='suggestions' cellspacing='0' cellpadding='0' style='border-width:1px;border-style:solid;border-color:#999;visibility:hidden; left: 500px; top: 200px; width: 222px;'>
                  <tbody>
               </table>
            </td>
            <td>&nbsp;</td>
         </tr>
      </table>
<!--   </form> -->
   <div id="matches"></div>
</body>
</html>
<?php
}
?>