/*

usefull ref: http://developer.apple.com/documentation/QuickTime/Conceptual/QTScripting_JavaScript/index.html?http://developer.apple.com/documentation/QuickTime/Conceptual/QTScripting_JavaScript/bQTScripting_JavaScri_Document/chapter_1000_section_5.html

*/

var start=0;
var end=0;
var intv = 0;
var offset_left=0;
var offset_right=0;
var inited = 0;

function initQT_(mov) {
    intv = intvSize(movLength(mov),10);
    start = mov.GetStartTime();
    end =   mov.GetEndTime();
}

function movLength(mov) {
    return mov.GetEndTime() - mov.GetStartTime() ;
}

function intvSize(time, intvs) {
    return Math.ceil(time/intvs);
}

function restart(mov, x) {
    if (!inited) {
        inited = 1; initQT(mov);
    }

    mov.Stop();
    var offset=intv*x;
    var newstart = start+offset;

    if (newstart>=end) {
        return;
    }

    mov.SetStartTime(newstart);
    mov.Rewind();
    mov.Play();
}

function reend(mov, x) {
    if (!inited) {
        inited = 1;
        initQT(mov);
    }
    
    mov.Stop();
    var newend = end+intv*x;

    if (start>=newend) {
        return;
    }

    mov.SetEndTime(newend);
    mov.Rewind();
    mov.Play();
}

function replay(mov) {
    mov.Stop();
    mov.Rewind();
    mov.Play();
}

function indi(id, colour, dir) {
    var regexp = /\d+/;
    var regexp2 = /\D+/;
    var root = id.replace(regexp, "");
    var i = id.replace(regexp2, "");
    var bgcolour;

    for (var j=0; j<9; j++) {
	      if(dir=='lr'){
	          if(j>i){bgcolour="#fff"}
            else{bgcolour="#777"}
        }
	      if(dir=='rl'){
	          if(j<i){bgcolour="#fff"}
            else{bgcolour="#777"}
        }

	      document.getElementById(root+j).style.background=bgcolour;
    }

    var el=document.getElementById(id);
    el.style.background=colour;
}
