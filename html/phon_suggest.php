
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
    if($orth){$query = "SELECT orthographic FROM " . $c . "phonetic WHERE orthographic regexp '^$ort' limit 12";}
    $phons = mysql_query($query);
    while( $row = mysql_fetch_array($phons) ){
      array_push($res, iconv("ISO-8859-1", "UTF-8", $row[0]));
    }
    return join(',', $res);
  }

  fclose($file);
  $res = getToks($q, $corpus, $orth);
  echo $res;
 }
else{
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0//EN"  "http://www.w3.org/TR/REC-html40/strict.dtd">
<html>
<meta http-equiv="content-type" content="text/html; charset=iso-8859-1">
 <head>
  <script language="javascript">

//Auto-complete table class
var tableObject = function(table){
    this.table = table;
    this.activeRow = -1;
    this.nRows = 0;
    this.rowsArray = new Array(); 
}
tableObject.prototype.getSelected = function(){
  var selected = this.rowsArray[this.activeRow].id;
  this.down();
  return selected;
}
tableObject.prototype.eventHandle = function(txtObj, e){
  if(e.keyCode == 13){
    done = true;
    txtObj.value = this.rowsArray[this.activeRow].id;
    this.down();
    return;
  }
  if(e.keyCode == 40){ //going down
    this.navigate('d');
    return;
  }
  if(e.keyCode == 38){ //going up
    this.navigate('u');
    return;
  }
  string = txtObj.value;
  this.down();
  content = [string, "dog" + string,"cat" + string, "cow", "pig"];
  this.addRows(content);
}
tableObject.prototype.addRow = function(content, j){
   var afterLastRow = this.table.length;
   var row = this.table.insertRow(-1);
   row.setAttribute('id', j);
   var cell = row.insertCell(0);
   cell.appendChild(document.createTextNode(content));
   cell.setAttribute('id', content);
   cell.setAttribute('onmouseover', 'if(table.activeRow > -1){table.rowsArray[table.activeRow].style.background = \"#fff\"};table.activeRow = this.parentNode.id;style.background = \"#8cf\";');
   cell.setAttribute('onmouseout', 'style.background = \"#fff\"');
   cell.setAttribute('onclick', 'var ortho = document.getElementById(\"ortho\");handleEvent(ortho, \"click\", table);');
   this.rowsArray.push(cell);
}
tableObject.prototype.addRows = function(contentArray){
  this.down();
   this.table.style.visibility = 'visible';
   for(j in contentArray){
      var content = contentArray[j];
      this.addRow(content, j);
   }
   this.nRows = contentArray.length;
}
tableObject.prototype.down = function(){
   this.table.style.visibility = 'hidden';
   this.deleteRows();
   this.activeRow = -1;
   this.nRows = 0;
   this.rowsArray = new Array();
}
tableObject.prototype.deleteRows = function(){
  for(var i = this.table.rows.length; i > 0;i--){
    this.table.deleteRow(i -1);
  }
}
tableObject.prototype.navigate = function(dir){
  if(this.nRows == 0)return;
   if(this.activeRow > -1){
      this.rowsArray[this.activeRow].style.background = "#fff";
   }
   if(dir == 'u'){
      if(this.activeRow > -1){
         this.activeRow--;
      }
   }
   if(dir == 'd'){
      if(this.activeRow < this.nRows -1){
         this.activeRow++;
      }
   }
  if(this.activeRow > -1){
    this.rowsArray[this.activeRow].style.background = "#8cf";
  }
}
// class end
  
var xmlhttp;
var done = false;

function handleEvent(obj,e, tabObj){
  if(e == "click" || e.keyCode == 13){
    var chosen = tabObj.getSelected();
    //document.getElementById('ortho').value = chosen;
    obj.value = chosen;
    done = true;
    findPhons(chosen, false);
    return;
  }
  if(e.keyCode == 40){ //going down
    tabObj.navigate('d');
    return;
  }
  if(e.keyCode == 38){ //going up
    tabObj.navigate('u');
    return;
  }
  done = false;
  if(obj.value){
    suggest(obj.value);
    return;
  }
  tabObj.down();
}
// ---- el code
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
    xmlhttp.onreadystatechange=stateChanged;
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);
}
function stateChanged(){
  if (xmlhttp.readyState==4){
    text = xmlhttp.responseText;
    if(!done){
      table.addRows(text.split(','));
      return;
    }
    orderResults(text);
    //    document.getElementById("matches").innerHTML= text;
  }
}

function orderResults(string){
  resultTable = document.getElementById('results');

  for(var i = resultTable.rows.length; i > 0;i--){
    resultTable.deleteRow(i -1);
  }

  var array = string.split(',');
  var result = array.pop();
  while(result){
    var row;
    for(var j = 0; j < 10; j++){
      if(j == 0){
	row = resultTable.insertRow(-1);
      }
      if(!result){result = " ";}
      var cell = row.insertCell(-1);
      cell.appendChild(document.createTextNode(result));
      cell.setAttribute('id', result);
      cell.setAttribute('onclick','writeToField(0,1,this.id);');
      cell.setAttribute('class','res');
      result = array.pop();
    }
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
  window.top.document.getElementById("string_"+col+"_"+row).value = text;
  window.top.document.getElementById('layer1').style.visibility = 'hidden';
  var select = window.top.document.getElementById('0_1_select');
  select.options[select.options.length]  = new Option( 'phonetic','w_phon');
  select.style.visibility = 'visible';
  //  addOpt('w','phon','phonetic');
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
.res:hover{
    cursor: pointer;
    background:#8cf;
}
  </style>
<body>
   <table>
      <tr>
         <td><b>Orthography:&nbsp;</b></td>
         <td><input type="text" id="ortho" name="orth" size="30" onkeyup="handleEvent(this, event, table);" autocomplete="off" /></td>
	 <td><!--<button type="button" onclick="done = true;document.getElementById('suggestions').style.visibility='hidden';findPhons(document.getElementById('ortho').value, false);">find</button>-->&nbsp;</td>
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
   <script>
      table = new tableObject(document.getElementById('suggestions'));
   </script>
   <div id="matches">
     <table id="results" cellspacing ="10">
        <tbody>
     </table>
   </div>
</body>
</html>
<?php
}
?>