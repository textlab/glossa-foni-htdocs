// for the phonetic suggestion popupDiv


// the popping
x = 20;
y = 70;
function setVisible(obj){
    obj = document.getElementById(obj);
    obj.style.visibility = (obj.style.visibility == 'visible') ? 'hidden' : 'visible';
}
function placeIt(obj){
    alert("OBJ: "+obj);
	obj = document.getElementById(obj);
	if (document.documentElement)
	{
		theLeft = document.documentElement.scrollLeft;
		theTop = document.documentElement.scrollTop;
	}
	else if (document.body)
	{
		theLeft = document.body.scrollLeft;
		theTop = document.body.scrollTop;
	}
	theLeft += x;
	theTop += y;
	obj.style.left = theLeft + 'px' ;
	obj.style.top = theTop + 'px' ;
	setTimeout("placeIt('layer1')",500);
}
//window.onscroll = setTimeout("placeIt('layer1')",500);


// the content
  var xmlhttp;
  
  function suggest(str){
    
  }
  function findPhons(str){
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null){
      alert ("Browser does not support HTTP Request");
      return;
    }
    var url="phon_suggest.php?corpus=scandiasyn";
    url=url+"&q="+str;
    url=url+"&sid="+Math.random();
    //  alert(url);
    xmlhttp.onreadystatechange=stateChanged;
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);
  }

function stateChanged(){
  if (xmlhttp.readyState==4){
    document.getElementById("matches").innerHTML=xmlhttp.responseText;
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
