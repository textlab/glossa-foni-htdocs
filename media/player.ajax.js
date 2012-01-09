var script1 = document.createElement('script');
script1.src = 'http://tekstlab.uio.no/glossa/js/jquery/jquery-1.4.3.min.js';
script1.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script1);

var script2 = document.createElement('script');
script2.src = 'http://tekstlab.uio.no/glossa/js/jquery/jquery-ui-1.8.6.custom.min.js';
script2.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script2);

var script3 = document.createElement('script');
script3.src = 'http://tekstlab.uio.no/glossa/player/jwplayer.js';
script3.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script3);

var script4 = document.createElement('script');
script4.src = 'slider.js';
script4.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script4);

var media;

var corpusMedia = function(corpus, key, video){
    this.videop = video;
    this.corpus = corpus;
    this.key = key;
    scrollbox = new divObject(document.getElementById('scrollbox'));
    pops = new popObject(document.getElementById('pops'));
    slider = new sliderObject('slider-range','amountl','amountr', corpus, key, this.videop);
    return this;
}
corpusMedia.prototype.start = function(){
    //    alert(this.corpus +","+ this.key+","+ slider.start * -1+","+slider.stop);
    if(this.corpus == 'nor1107'){
	expand(this.corpus, this.key, 0,100, this.videop);
	return;
    }
    if(this.corpus == 'nor_test'){
	this.corpus = 'nor1107';
	expand('nor1107', this.key, 0,100, this.videop);
	return;
    }
    expand(this.corpus, this.key, slider.start * -1,slider.stop, this.videop);
}
    corpusMedia.prototype.test = function(){
	alert(1);
}
function shebang(corpus, key, video){
    //    scrollbox = new divObject(document.getElementById('scrollbox'));
    //    pops = new popObject(document.getElementById('pops'));
    //    slider = new sliderObject('slider-range','amountl','amountr', corpus, key);
    //    alert('start');
    window.media = new corpusMedia(corpus, key, video);
    //    alert(media.corpus);
    window.media.start();
   return media;
}

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

var autoCue = {};
var finalRow = 0;
divObject.prototype.addRows = function(rows){
    while (this.div.hasChildNodes()) {//remove all existing lines
	this.div.removeChild(this.div.lastChild);
    }
    for(var row in rows){
	this.addRow(row, rows[row], 0);
    }
}
divObject.prototype.addRow = function(i, row, j){
    var ref = row.ref;
    var seg = row.spans;
    var line = document.createElement("div");
    line.className = 'line';
    if(!i){i=0;}
    if(!j){j=0;}
    autoCue[i+'_'+j] = [row.begin, row.end];
    finalRow = i;
    line.setAttribute('id', 'cp-'+i+'_'+j);
    var r = refDiv(ref);
    var text = segDiv();
    var segLength = 0;
    var k;
    for(k in seg){
	segLength+=seg[k].length;
	if(segLength > 80){
	    break;
	}
	var span = createSpan(k, seg[k]); 
	text.appendChild(span);
	delete row.spans[k];
    }
    line.appendChild(r);
    line.appendChild(text);
    this.div.appendChild(line);
    if(segLength > 80){
	this.addRow(i,row,j+1);
    }
}
divObject.prototype.addRow_old = function(i, row){
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
    //    alert('movie_loc: '+movie_loc+', start: '+start+', duration: '+duration);
    var d = duration - start;
    //        alert('movie_loc: '+movie_loc+', start: '+start+', stop: '+duration+', dur: '+d);
    //    alert('DUR: '+d);
    jwplayer("player").setup({
	        flashplayer: "http://tekstlab.uio.no/glossa/player/player.swf",
		file: movie_loc,
		streamer:"rtmp://stream-prod01.uio.no/vod/",
		height:300,
		width:400,
		start:start,
		duration:duration,
		respectduration:true,
		controlbar:"none",
		autostart:true,
		icons:false,
		volume:100,
		allowscriptaccess:"never",
		bufferlength:1,
		stretching:"uniform",
		wmode:"opaque",
		allowfullscreen:false,
		windowless:true,
		image:"http://www.hf.uio.no/iln/om/organisasjon/tekstlab/BILDER/logo173.png"
	});
}
function playerReady(obj) {
     player = document.getElementById(obj['id']);
     player.addModelListener('TIME', 'timeHandler')
}
function timeHandler(obj) {
    
    for(i in autoCue){
	var index = i.match(/\d+/);
	index = parseInt(index[0]);
	index = index+5
	var elt = document.getElementById('cp-'+i);
	if(obj.position >= autoCue[i][0] && obj.position < autoCue[i][1]){
	    elt.style.background = "#ea0";
	    if(index > 10 && index < finalRow){
		document.getElementById('cp-'+index+'_0').scrollIntoView(false);
	    }
	}
	else{elt.style.background = "#ddeeff";}
    }
    
    
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

function expand(corpus,i,l,r,video){
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null){
	alert ("Browser does not support HTTP Request");
	return;
    }

    //    var url="db.php?corpus=scandiasyn&line_key=148196&left="+l+"&right="+r+"&video=1";
    var url="http://tekstlab.uio.no/glossa/player/db.php?corpus="+corpus+"&line_key="+i+"&left="+l+"&right="+r+"&video="+video;
    url=url+"&sid="+Math.random();
    xmlhttp.open("GET",url,true);
    xmlhttp.onreadystatechange=stateChanged;
    xmlhttp.send(null);
}

//document.getElementById('php').src = 'db.php?corpus=scandiasyn&line_key=178196&left='+l+'&right='+r+'&video=1';
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
      //      alert('start: '+start+', stop: '+stop);
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
