<html>
<head>
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


div.inspect{
	top: 0px;
	left:0px;
	padding: 5px;
	border: 0px solid #000;
	background: #fff;
	width: 90%;
        height: 340px;
	display: none;
}
</style>
<script>
var start = 30;
var duration = 40;
var player = null;
var height = '300';
var video = 1;
if(!video){height = '0';}
var file = 'evje_01um-02uk_800.mp4';

function test(msg){
  alert("message: "+msg);
}


function createPlayer(file, start, duration){
  var so = new SWFObject('player.swf','mpl','400',height,'9');
  so.id = 'theplayer';
  so.addParam('allowfullscreen','false');
  so.addParam('allowscriptaccess','always');
  so.addParam('wmode','opaque');
  so.addParam('allowscriptaccess','never');
  so.addVariable('file','mp4:uio/hf/ilf/scandiasyn/' + file);
  so.addVariable('streamer','mp4:uio/hf/ilf/scandiasyn/roemskog_01um-02uk_800.mp4');
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
  createPlayer('roemskog_01um-02uk_800.mp4', start, duration);
}

function expand(dir, n){
  if(dir == 'l'){
    left = n;
  }
  else{
    right = n;
  }
  //  createPlaye(start, );
}
function setSelect(){
  document.getElementById('leftSelect').selectedIndex = left;
  document.getElementById('rightSelect').selectedIndex = right;
}

function divText(){
  window.top.document.getElementById(id).style.background='#f0f';
  parent.document.getElementById(id).textContent = txt;
}
divText();
</script>
</head>
<body>
  <div id="box" class="inspect">
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
    <div style="position: relative; left: 0px; top: 0px; cursor: pointer" onclick="document.getElementById('box').style.display='none';">
      <img alt="[x]" src="http://tekstlab.uio.no/glossa/html/img/close.png" />
    </div>
  </div>
<p><span onclick="document.getElementById('box').style.display = 'block';document.getElementById('php').src = 'jsphp.php?id=content&txt=you_silly_bunt!';">hit me</span></p>
<p><span onclick="document.getElementById('box').style.display = 'block';document.getElementById('php').src = 'jsphp.php?id=content&txt=you_jerk_off!';">hit me</span></p>
<iframe id="php" width="1px" height='1px' frameborder="0"></iframe>
</body>
</html>

