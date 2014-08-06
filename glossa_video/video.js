
$(document).ready(function(){
	$('.getdata-button').on('click', function(){
		var line_key=this.id.replace(/.+_/,"");
		var corpus=this.id.replace(/_.+/,"");
		var media_type = this.name;
		$.getJSON('http://tekstlab.uio.no/glossa-michalkk-dev/glossa/glossa_video/db.php?corpus='+corpus+'&line_key='+line_key+'&media_type='+media_type+'&ctx=5', function(data) {
			initJplayer(data)
		});
	 });

	$('.waveform-button').on('click', function(){
		var line_key=this.id.replace(/.+_/,"");
		var corpus=this.id.replace(/_.+/,"");
		$.getJSON('http://tekstlab.uio.no/glossa-michalkk-dev/glossa/glossa_video/db.php?corpus='+corpus+'&line_key='+line_key+'&media_type=audio&ctx=0', function(data) {
			initWFplayer(data)
		});
	 });
 });

var drawWaveformPlayer =
    function(divID){
      $('#' + divID).append('<iframe height="400" width="90%" id="waveframe" target="_blank" style="border: 0"></iframe><br />');
    };

var drawJplayer = 
    function(divID){
    
    container = $("<div>")
    .addClass("jp-video ")
    .attr("id","jp_container_1")
    .appendTo($("#"+divID));

    jp_type_single = $("<div>")
    .addClass("jp-type-single")
    .appendTo(container);

    jplayer = $("<div>")
    .addClass("jp-jplayer")
    .attr("id","jplayer")
    .appendTo(jp_type_single);

    jp_gui = $("<div>")
    .addClass("jp-gui")
    .appendTo(jp_type_single);

    jp_video_play = $("<div>")
    .addClass("jp-video-play")
    .appendTo(jp_gui);

    jp_video_play_icon = $("<a href='javascript:;'>")
    .addClass("jp-video-play-icon")
    .attr("tabindex",1)
    .text("play")
    .appendTo(jp_video_play);

    jp_interface = $("<div>")
    .addClass("jp-interface").appendTo(jp_gui);

    positioning_div = $("<div>").appendTo(jp_interface);
    positioning_div.html("&nbsp;");	

    jp_controls_holder = $("<div>")
    .addClass("jp-controls-holder")
    .appendTo(jp_interface);

    jp_controls = $("<ul>")
    .addClass("jp-controls").appendTo(jp_controls_holder);

    //    var labels = ["jp-play","jp-pause","jp-mute","jp-unmute","jp-volume-max", "jp-jump-left", "jp-jump-right"];
    var labels = ["jp-play","jp-pause","jp-mute","jp-unmute","jp-volume-max"];
    $.each(labels,
	   function(i){
	       var li = $("<li/>")
		   .appendTo(jp_controls);
	       var a = $("<a href='javascript:;'>")
		   .addClass(labels[i])
		   .attr("tabindex",1)
		   .attr("title",labels[i].replace(/jp-/,"").replace(/-/," "))
		   .text(labels[i].replace(/jp-/,""))
		   .appendTo(li);
	   });

    jp_volume_bar = $("<div>").addClass("jp-volume-bar").appendTo(jp_controls_holder);
    jp_volume_bar_value = $("<div>").addClass("jp-volume-bar-value").appendTo(jp_volume_bar);
    jp_title = $("<div>").addClass("jp-title").appendTo(jp_interface);
    jp_movie_title_ul = $("<ul>").appendTo(jp_title);
    jp_movie_title_il = $("<li/>").attr("id","movietitle").appendTo(jp_movie_title_ul);

    jp_no_solution = $("<div>").addClass("jp-no-solution").appendTo(jp_type_single);
    update_required = $("<span>").text("Update required").appendTo(jp_no_solution);
    get_flash = $("<a href='http://get.adobe.com/flashplayer/' target='_blank'>").text("Flash plugin").appendTo(jp_no_solution);

    text = $("<div>").addClass("autocue").attr("id","text").appendTo("#"+divID);
    slider = $("<div>").addClass("slider-range").attr("id","slider-range").appendTo("#"+divID);
};


/* the text box */
textBox = {

    start_at_line:0,
    end_at_line:0,
    currentID:0,
    nextID:0,
    currentEndTime:0,
    currentStartTime:0,
    init:
    function(mediaObj){

	display_attribute = mediaObj.display_attribute;
	annotation = mediaObj.segments;
	this.start_at_line = parseInt(mediaObj.start_at);
	this.end_at_line = parseInt(mediaObj.end_at);
	//    this.currentID = this.start_at_line;
	this.nextID = this.start_at_line + 1;
	$(".textDiv").remove();
	for(var n in annotation){

	    var timecode = annotation[n].from;
	    var end_timecode = annotation[n].to;
	    var speaker = annotation[n].speaker;
	    var speaker_brev = speaker.replace(/^.*_/,"");

	    var div = $('<div>')
		.addClass("textDiv")
		.addClass(timecode.replace(/\./,"_"))
		//		.attr("id", n)
		.attr("id", "jp"+n.replace(/_/,""))
		//.attr("id", n.replace(/_/,""))
		.data("start_timecode",timecode)
		.data("end_timecode",end_timecode);
		//		.on("click",
		//    function(e){alert($(this).data("start_timecode")+" id:"+$(this).attr("id"))});
	    if(n < this.start_at_line || n > this.end_at_line){
		div.css({"display":"none"});
	    }

	    var speakerDiv = $('<div>')
		.addClass('speakerDiv');

	    var anchor = $('<a>')
		.addClass('speaker')
		.text(speaker_brev)
		.attr("title",speaker);

	    speakerDiv.append(anchor);

	    var segmentDiv = $("<div>")
		.addClass('segmentDiv');

	    var line = annotation[n].line;

	    for(var i in line){

		var match = false;
		var att_string = "";

		if(line[i].match){match = true;}

		for(var att in line[i]){
		    if(att == "pos"){
			line[i][att] = line[i][att].replace(/:/g,"/"); // pos tags contain multiple values seperated by colons
		    }
		    att_string += att + " : " + line[i][att] + "<br>";
		}

		anchor = $('<a>')
		    .attr("title",att_string)
		    .text(line[i][display_attribute]);

		segmentDiv.append(anchor);
		segmentDiv.append(" ");

		if(match){
		    anchor
			.css({"color":"#b00"})
			.css({"font-weight":"bold"})
			.css({"font-size":"0.9em"});
		}
	    }

	    div.append(speakerDiv);
	    div.append(segmentDiv);
	    $('#text').append(div);
	}
    },
    redraw:
    function(first, last){
	this.currentID = first;
	this.currentEndTime = 0;
	first_start = $("#jp"+first).data("start_timecode");
	last_end = $("#jp"+last).data("end_timecode");
	for (var i = 0; i <= last_line; i++ ){
	    $("#jp"+i).css("background-color","#fff");
	    if ( i >= first && i <= last){
		$("#jp"+i).css({"display":"table-row","color":"#000"});
		//    $("#"+i).show(400);$("#jp"+i).css({"color":"#000"});
		continue;
	    }
	    if(($("#jp"+i).data("start_timecode") == first_start) || ($("#jp"+i).data("end_timecode") == last_end)){ // ie, overlapping segments
		$("#jp"+i).css({"display":"table-row","color":"#ccc"});
		//         $("#jp"+i).show(400);$("#jp".i).css({"color":"#ccc"});
		continue;
	    }
	    $("#jp"+i).css({"display":"none"});
	    //          $("#"+i).hide(400);
	}

    },
    update:
    function(ct){

	var iterate = true;
	while(iterate){
	    var currentEndTime = $("#jp"+this.currentID).data("end_timecode");
	    var currentStartTime = $("#jp"+this.currentID).data("start_timecode");
	    if(currentEndTime > ct){
		this.currentEndTime = currentEndTime;
		$("."+currentStartTime.replace(/\./,"_")).css("background-color","#eea");
		this.currentEndTime = currentEndTime
		    iterate = false;
	    }
	    else{
		$("."+currentStartTime.replace(/\./,"_")).css("background-color","#fff");
		this.currentID++;
	    }
	}
	this.nextID++;
	return this.currentEndTime;
    }
};

$(function() {
	$( document ).tooltip({
		content: function () {
		    return $(this).prop('title');
		}		
	    });
    });

initedWF = false;

var initWFplayer = function(mediaObj){
    if(!initedWF){
	$('#inspectorwf').show();
	initedWF = true;
	drawWaveformPlayer('inspectorwf');
    }

    $("#waveframe").attr('src', 'http://tekstlab.uio.no/michalkk/sm/demo/page-player/glossaplayer.php?path=' + encodeURIComponent(mediaObj.mov.path) + '&movie_loc=' + encodeURIComponent(mediaObj.mov.movie_loc) + '&start=' + mediaObj.mov.start + '&stop=' + mediaObj.mov.stop);
}

inited = false;

var initJplayer = function(mediaObj){
    w = "0px";
    h = "0px";
    if(!inited){
	$('#inspector').show();
	inited = true;
	drawJplayer('inspector');
    }
    else{$("#jplayer").jPlayer( "destroy" );}
    if(mediaObj.media_type == "video"){
	w = "480px";
	h = "270px";
    }
    med = mediaObj;
    mov = mediaObj.mov.movie_loc;
    path = mediaObj.mov.path;
    supplied = mediaObj.mov.supplied;
    $("#movietitle").text(mediaObj.title);
    last_line = parseInt(mediaObj.last_line);
    textBox.init(mediaObj);
    //textBox.currentID = parseInt(mediaObj.start_at); // should be done in init
    start = parseInt(mediaObj.start_at);
    stop  = parseInt(mediaObj.end_at);
    textBox.redraw(start,stop);
    start = parseFloat($("#jp"+start).data("start_timecode"));
    stop  = parseFloat($("#jp"+stop).data("end_timecode"));
    
    $("#jplayer").jPlayer({
	    solution:"html,flash",
		ready:function () {
		$(this).jPlayer("setMedia", {
			    rtmpv:path+mov,
			    m4v:path+mov,
			    poster: "http://www.hf.uio.no/iln/om/organisasjon/tekstlab/BILDER/_6.6-%27T%27_ligo.skev.graa.jpg"
			    });
		$(this).jPlayer( "play", start);
	    },

		timeupdate:function(event){
		var ct = event.jPlayer.status.currentTime;
		if(ct > stop){
		    $("#jplayer").jPlayer("play", start);
		    $("#jplayer").jPlayer( "pause" );
		    // $("#jplayer").jPlayer("playHead",stop);
		    return;
		}
		if(ct > textBox.currentEndTime){
		    textBox.update(ct);
		}
	    },
		//	play:function(){console.log(this)},
		ended:function(){
		$("#jplayer").jPlayer("play", start);
	        $("#jplayer").jPlayer( "pause" );
	    },
		swfPath: "http://tekstlab.uio.no/glossa-joel-dev/glossa/glossa_video/",
		supplied: supplied,
		preload: 'metadata',
		size:{
     		    width: w,
		    height: h
	             }
		});


    /* Slider widget */

    $( "#slider-range" ).slider({

	    range: true,
		min: 0,
		max: last_line,
		values: [ textBox.start_at_line, textBox.end_at_line+1 ],
		slide: function( event, ui ) {

		if(ui.values[1] - ui.values[0] < 1){
		    return false;
		}

		var first = ui.values[ 0 ];
		var last = ui.values[ 1 ] - 1;  //eg,  2 - 3 means play 1 segment
		textBox.redraw(first,last);

		start = parseFloat($("#jp"+first).data("start_timecode"));
		stop = parseFloat($("#jp"+last).data("end_timecode"));

		$("#jplayer").jPlayer("play", start);
	    }
	    /* end of slide widget */

	});
}
