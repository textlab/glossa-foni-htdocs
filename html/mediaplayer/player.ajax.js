var script = document.createElement('script');
script.src = '../../js/jquery-1.4.2.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var scrollbox;
var pops;

var popObject = function(div){
    this.pops = div;
}
popObject.prototype.popDivs = function(arr){
    while (this.pops.hasChildNodes()) {//remove all existing pops
	this.pops.removeChild(this.pops.lastChild);
    }
    for(var i in arr){
	var pop = document.createElement("div");
	pop.className = "tag";
	pop.setAttribute("id", i);
	//	pop.setAttribute("style", "background:#999;color:#000;");
	inner = "";
	for(var att in arr[i]){
	    inner += "<b>" + att + ": </b><i>" + arr[i][att] + "</i><br />";
	}
	pop.innerHTML = inner;
	this.pops.appendChild(pop);
    }
}
var divObject = function(div){
    this.div = div;
    this.id = div.id;
}
//    textbox.addRow(Obj.divs.spans[1].ref,Obj.divs.spans[1].spans);

divObject.prototype.addRows = function(rows){
    while (this.div.hasChildNodes()) {//remove all existing lines
	this.div.removeChild(this.div.lastChild);
    }
    for(var row in rows){
	this.addRow(row, rows[row]);
    }
}
divObject.prototype.addRow = function(i, row){
    var ref = row.ref;
    var seg = row.spans;
    var line = document.createElement("div");
    line.className = 'line';
    //   line.setAttribute('class', 'line');
    if(!i){i='0';}
    line.setAttribute('id', 'cp-'+i);
    var r = refDiv(ref);
    var text = segDiv();
    for(var i in seg){
	var span = createSpan(i, seg[i]); 
	text.appendChild(span);
    }
    line.appendChild(r);
    line.appendChild(text);
    this.div.appendChild(line);
}

function segDiv(){
    var div = document.createElement("div");
    div.className = "text";
    return div;
}
function refDiv(ref){
    var div = document.createElement("div");
    div.innerHTML = ref + ":";
    div.className = "ref";
    return div;
}
function createSpan(i, content){
    var over = "showTag(arguments[0], "+i+")";
    var out  = "hideTag("+i+")"
    var span = document.createElement("span");
    span.innerHTML = content;
    span.onmouseover = function(){ showTag(arguments[0], i) };
    span.onmouseout = function(){ hideTag(i) };
    //    span.setAttribute("onmouseover", over);
    //span.setAttribute("onmouseout", out);
    span.style.marginLeft = '5px';
    //    span.setAttribute("style", "margin-left: 5px");
    return span;
    //    document.body.appendChild(spanTag);
}
function createPlayer(movie_loc, start, duration){
    //    alert(movie_loc + ", " + start + ", " + duration);
    var so = new SWFObject('player.swf','mpl','400','300','9');
    so.id = 'theplayer';
    so.addParam('allowfullscreen','false');
    so.addParam('allowscriptaccess','always');
    so.addParam('wmode','opaque');
    so.addParam('allowscriptaccess','never');
    so.addVariable('file', movie_loc);
    so.addVariable('streamer','rtmp://stream-prod01.uio.no/vod/');
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
    alert(movie, start, duration);
    createPlayer(movie, start, duration);
}

function expand(corpus,i,l,r){
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null){
	alert ("Browser does not support HTTP Request");
	return;
    }

    //    var url="getContent.php?corpus=scandiasyn&line_key=148196&left="+l+"&right="+r+"&video=1";
    var url="getContent.php?corpus="+corpus+"&line_key="+i+"&left="+l+"&right="+r+"&video=1";
    url=url+"&sid="+Math.random();
    xmlhttp.open("GET",url,true);
    xmlhttp.onreadystatechange=stateChanged;
    xmlhttp.send(null);
}

//document.getElementById('php').src = 'getContent.php?corpus=scandiasyn&line_key=178196&left='+l+'&right='+r+'&video=1';
function setSelect(left, right){
    document.getElementById('leftSelect').selectedIndex = left;
    document.getElementById('rightSelect').selectedIndex = right;
}

//roemskog_01um-02uk_800.mp4, stryn_01um-02uk_800.mp4, mp4:uio/hf/ilf/scandiasyn/


//----- AUX
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
function stateChanged(){
  if (xmlhttp.readyState==4){
      response =  xmlhttp.responseText;
      //           var Obj = eval('(' + response + ')'); // don't wanna do this, looks well dodgy
      //var Obj = JSON.parse(response); //for  some reason this doesn't work in IE
      var Obj = jQuery.parseJSON(response); 
      var mp4 = Obj.mov.movie_loc;
      var start = Obj.mov.start;
      var stop = Obj.mov.stop;
      divs = Obj.divs;
      //      console.log(Obj.divs[0]);
      //console.log(Obj);
      scrollbox.addRows(Obj.divs.spans);
      pops.popDivs(Obj.divs.pops);
      createPlayer(mp4, start, stop);
      return;
  }
}
// init select options left and right select
function initSelect(n){
    var sOptions = {};
    for(j = 0; j < n; j++){
	sOptions[j] = ''+j;
    }
    $.each(sOptions, function(val, text) {
	    $('#leftSelect').append(
				    $('<option></option>').val(val).html(text)
				    );
	});
    $.each(sOptions, function(val, text) {
	    $('#rightSelect').append(
				    $('<option></option>').val(val).html(text)
				    );
	});
}
