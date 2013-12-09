var slider;

var sliderObject = function(div,text1,text2, corpus, key, video){
    videop = video;
    this.div   =  div;
    start = -1;
    stop  =  1;
    this.corpus = corpus;
    this.key = key;
    $(function(){
	$('#play').bind('click', function() {
		expand(corpus,key,start * -1,stop,videop);
	    });
	});
    $(function() {
	$( "#"+div ).slider({
		range: true,
		    min: corpus=='legepasient' ? -100 : -10,
		    max: corpus=='legepasient' ? 100 : 10,
		    values: [ -1, 1 ],
		    slide: function( event, ui ) {
  		            $( "#"+text1 ).val( "" + ui.values[ 0 ] );
		            $( "#"+text2 ).val( "" + ui.values[ 1 ] );
                            start = ui.values[0];stop = ui.values[1];
		           },
		    change: function( event, ui ){
		    expand(corpus,key,start * -1,stop, videop);
		           }
	    });
	$( "#"+text1 ).val( "" + $( "#"+div ).slider( "values", 0 ) );
	$( "#"+text2 ).val( "" + $( "#"+div ).slider( "values", 1 ) );
    });
}
