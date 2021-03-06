(function($){ var styleadded = false;
    var styler = "<style type='text/css'>\n.jq-base{\nborder-radius:3px;\n-moz-border-radius:3px;\n-webkit-border-radius:3px;\ncolor:#FEFE00;\npadding:2px 4px;\nfont:9px verdana,arial,sans-serif;\nmargin:0 -1px;\nwhite-space: nowrap;\npadding: 2px 4px;\nvertical-align:middle;\n}\n</style>\n";
    $.fn.extend({
	    listing:
	       function(options){ 
	          var maxRows = 20;
		  var n = 0;
		  for (prop in options.elts) { //seems only way to get length
		      n++;
		  }
		  var r = n%maxRows;
		  var q = (n-r)/maxRows;
		  left = 670;
		  if(r>0){q++;}
		  for(var i = 0; i < q; i++ ){
		      $('body').append('<div class="legend" id="legend'+i+'" style="left:'+ (left+i*160) + 'px;"></div>');
		  }
		  var j = 0;
		  for(var elt in options.elts){
		      var id = elt;
		      divI = Math.floor(j/maxRows);
		      $('#legend'+divI).append('<a id="a_' + j + '">'+id+'</a>\n'); // removed a <br /> elt after the anchor // might change id to j!
		      j++;
		  }
		  var id = -1;
		  for(var elt in options.elts){
		      id++;
		      $('#a_'+id).colorpicker({
			      label: "a_"+id,
			      func: function(a, id){
				  alert("a: "+a+", id: "+id) ;
				  addMarkers(a, id);
			      }
			  });
		  }
	       },
	    labels:
	       function(options){
		   var pointer = {
		       defaults:false,
		       backgroundColor:"#CE0000" //this will only be used if labels are not supplied
		   }
		   opts = $.extend(defaults, options);
		   if(!styleadded){
		    //     $("head").append(styler); // IS THIS NEEDED AT ALL?
		       styleadded=true;
		   }
		   var labels={}
		   for(j in opts['labels']){
		       labels[j.toLowerCase()]=opts['labels'][j];
		   }
		   if($.isEmptyObject(opts['labels'])){
		       $(this).addClass("jq-base");
		       $(this).css("backgroundColor",opts['backgroundColor']);
		       if(opts['pointer']) $(this).css("cursor","pointer");
		   }
		   else{
		       $(this).each(
				    function(){
					var key = $(this).text().toLowerCase();
					if(labels[key]) {
					    $(this).addClass("jq-base");
					    $(this).css("backgroundColor",labels[key]);
					    if(opts['pointer']) $(this).css("cursor","pointer");
					}
				    }
				   )
		   }
	       }
	});
})(jQuery);





var Menu;
function reloadMenuTest() {
  Menu['TEST'] = new Hash(     1, new Hash(
    'contents', '<nobr>&nbsp;valg &#187;&nbsp;</nobr>',
    1, new Hash(
      'contents', 'word &#187;&nbsp;',
      1, new Hash(
        'contents', 'lemma form',
        'type', 'js',
        'uri', "addOpt('w','lemma','lemma form')"
      ),
      2, new Hash(
        'contents', 'case sensitive',
        'type', 'js',
        'uri', "addOpt('w','case','case sensitive')"
      ),
      3, new Hash(
        'contents', 'start of word',
        'type', 'js',
        'uri', "addOpt('w','start','start of word')"
      ),
      4, new Hash(
        'contents', 'end of word',
        'type', 'js',
        'uri', "addOpt('w','end','end of word')"
      ),
      5, new Hash(
        'contents', 'middle of word',
        'type', 'js',
        'uri', "addOpt('w','middle','middle of word')"
      ),
      6, new Hash(
        'contents', 'exclude',
        'type', 'js',
        'uri', "addOpt('w','neg','exclude')"
      )
    ),
    2, new Hash(
      'contents', 'occurences &#187;&nbsp;',
      1, new Hash(
        'contents', 'zero or more',
        'type', 'js',
        'uri', "addOpt('occ','*','zero or more')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('occ','*','zero or more')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('occ','!*','!zero or more')"
        )
      ),
      2, new Hash(
        'contents', 'one or more',
        'type', 'js',
        'uri', "addOpt('occ','+','one or more')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('occ','+','one or more')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('occ','!+','!one or more')"
        )
      ),
      3, new Hash(
        'contents', 'zero or one',
        'type', 'js',
        'uri', "addOpt('occ','?','zero or one')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('occ','?','zero or one')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('occ','!?','!zero or one')"
        )
      )
    ),
    3, new Hash(
      'contents', '<br>'
    ),
    4, new Hash(
      'contents', 'Part of Speech &#187;&nbsp;',
      1, new Hash(
        'contents', 'noun',
        'type', 'js',
        'uri', "addOpt('pos','n','noun')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('pos','n','noun')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('pos','!n','!noun')"
        )
      ),
      2, new Hash(
        'contents', 'pronoun',
        'type', 'js',
        'uri', "addOpt('pos','pron','pronoun')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('pos','pron','pronoun')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('pos','!pron','!pronoun')"
        )
      ),
      3, new Hash(
        'contents', 'determiner',
        'type', 'js',
        'uri', "addOpt('pos','det','determiner')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('pos','det','determiner')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('pos','!det','!determiner')"
        )
      ),
      4, new Hash(
        'contents', 'adverb',
        'type', 'js',
        'uri', "addOpt('pos','adv','adverb')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('pos','adv','adverb')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('pos','!adv','!adverb')"
        )
      ),
      5, new Hash(
        'contents', 'adjective',
        'type', 'js',
        'uri', "addOpt('pos','adj','adjective')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('pos','adj','adjective')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('pos','!adj','!adjective')"
        )
      ),
      6, new Hash(
        'contents', 'verb',
        'type', 'js',
        'uri', "addOpt('pos','v','verb')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('pos','v','verb')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('pos','!v','!verb')"
        )
      ),
      7, new Hash(
        'contents', 'possessive ending',
        'type', 'js',
        'uri', "addOpt('pos','pos','possessive ending')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('pos','pos','possessive ending')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('pos','!pos','!possessive ending')"
        )
      ),
      8, new Hash(
        'contents', 'list marker',
        'type', 'js',
        'uri', "addOpt('pos','list','list marker')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('pos','list','list marker')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('pos','!list','!list marker')"
        )
      ),
      9, new Hash(
        'contents', 'particle',
        'type', 'js',
        'uri', "addOpt('pos','particle','particle')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('pos','particle','particle')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('pos','!particle','!particle')"
        )
      ),
      10, new Hash(
        'contents', 'symbol',
        'type', 'js',
        'uri', "addOpt('pos','sym','symbol')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('pos','sym','symbol')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('pos','!sym','!symbol')"
        )
      ),
      11, new Hash(
        'contents', 'word *to*',
        'type', 'js',
        'uri', "addOpt('pos','to','word *to*')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('pos','to','word *to*')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('pos','!to','!word *to*')"
        )
      ),
      12, new Hash(
        'contents', 'interj',
        'type', 'js',
        'uri', "addOpt('pos','interj','interj')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('pos','interj','interj')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('pos','!interj','!interj')"
        )
      ),
      13, new Hash(
        'contents', 'punctuation',
        'type', 'js',
        'uri', "addOpt('pos','punct','punctuation')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('pos','punct','punctuation')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('pos','!punct','!punctuation')"
        )
      ),
      14, new Hash(
        'contents', 'preposition',
        'type', 'js',
        'uri', "addOpt('pos','prep','preposition')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('pos','prep','preposition')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('pos','!prep','!preposition')"
        )
      ),
      15, new Hash(
        'contents', 'existential *there*',
        'type', 'js',
        'uri', "addOpt('pos','ex','ex')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('pos','ex','exstential *there*')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('pos','!ex','!exstential *there*')"
        )
      ),
      16, new Hash(
        'contents', 'conjunction',
        'type', 'js',
        'uri', "addOpt('pos','conj','conjunction')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('pos','conj','conjunction')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('pos','!conj','!conjunction')"
        )
      ),
      17, new Hash(
        'contents', 'foreign word',
        'type', 'js',
        'uri', "addOpt('pos','fw','foreign word')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('pos','fw','foreign word')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('pos','!fw','!foreign word')"
        )
      ),
      18, new Hash(
        'contents', 'number',
        'type', 'js',
        'uri', "addOpt('pos','number','number')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('pos','number','number')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('pos','!number','!number')"
        )
      )
    ),
    5, new Hash(
      'contents', 'punctuation &#187;&nbsp;',
      1, new Hash(
        'contents', '#',
        'type', 'js',
        'uri', "addOpt('type','pound','#')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('type','pound','#')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('type','!pound','!#')"
        )
      ),
      2, new Hash(
        'contents', '$',
        'type', 'js',
        'uri', "addOpt('type','dollar','$')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('type','dollar','$')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('type','!dollar','!$')"
        )
      ),
      3, new Hash(
        'contents', 'quote',
        'type', 'js',
        'uri', "addOpt('type','quo','quote')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('type','quo','quote')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('type','!quo','!quote')"
        )
      ),
      4, new Hash(
        'contents', '(',
                      'type', 'js',
                      'uri', "addOpt('type','lpar','(')"
                                     ,
                                     1, new Hash(
                                       'contents', 'velg',
                                       'type', 'js',
                                       'uri', "addOpt('type','lpar','(')"
                                                     ),
                                                     2, new Hash(
                                                       'contents', 'utelukk',
                                                       'type', 'js',
                                                       'uri', "addOpt('type','!lpar','!(')"
                                                                     )
                                                     ),
                                                     5, new Hash(
                                                       'contents', ')',
                                                       'type', 'js',
                                                       'uri', "addOpt('type','rpar',')')"
                                                       ,
                                                       1, new Hash(
                                                         'contents', 'velg',
                                                         'type', 'js',
                                                         'uri', "addOpt('type','rpar',')')"
                                    ),
                                    2, new Hash(
                                      'contents', 'utelukk',
                                      'type', 'js',
                                      'uri', "addOpt('type','!rpar','!)')"
                     )
      ),
      6, new Hash(
        'contents', ',',
        'type', 'js',
        'uri', "addOpt('type','comma',',')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('type','comma',',')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('type','!comma','!,')"
        )
      ),
      7, new Hash(
        'contents', '.',
        'type', 'js',
        'uri', "addOpt('type','period','.')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('type','period','.')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('type','!period','!.')"
        )
      ),
      8, new Hash(
        'contents', ':',
        'type', 'js',
        'uri', "addOpt('type','colon',':')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('type','colon',':')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('type','!colon','!:')"
        )
      ),
      9, new Hash(
        'contents', 'single quote',
        'type', 'js',
        'uri', "addOpt('type','squo','single quote')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('type','squo','single quote')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('type','!squo','!single quote')"
        )
      )
    ),
    6, new Hash(
      'contents', '<br>'
    ),
    7, new Hash(
      'contents', 'features (verb) &#187;&nbsp;',
      1, new Hash(
        'contents', 'modal',
        'type', 'js',
        'uri', "addOpt('type','modal','modal')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('type','modal','modal')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('type','!modal','!modal')"
        )
      ),
      2, new Hash(
        'contents', 'base',
        'type', 'js',
        'uri', "addOpt('type','base','base')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('type','base','base')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('type','!base','!base')"
        )
      ),
      3, new Hash(
        'contents', '*be*-verb',
        'type', 'js',
        'uri', "addOpt('type','be','*be*-verb')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('type','be','*be*-verb')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('type','!be','!*be*-verb')"
        )
      ),
      4, new Hash(
        'contents', '*have*-verb',
        'type', 'js',
        'uri', "addOpt('type','have','*have*-verb')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('type','have','*have*-verb')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('type','!have','!*have*-verb')"
        )
      ),
      5, new Hash(
        'contents', '((other))',
        'type', 'js',
        'uri', "addOpt('type','other','((other))')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('type','other','((other))')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('type','!other','!((other))')"
        )
      ),
      6, new Hash(
        'contents', 'gerund',
        'type', 'js',
        'uri', "addOpt('tense~defin','gerund','gerund')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('tense~defin','gerund','gerund')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('tense~defin','!gerund','!gerund')"
        )
      ),
      7, new Hash(
        'contents', 'past participle',
        'type', 'js',
        'uri', "addOpt('type','pastpart','past participle')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('type','pastpart','past participle')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('type','!pastpart','!past participle')"
        )
      ),
      8, new Hash(
        'contents', 'present',
        'type', 'js',
        'uri', "addOpt('tense~defin','present','present')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('tense~defin','present','present')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('tense~defin','!present','!present')"
        )
      ),
      9, new Hash(
        'contents', 'not 3. person singular',
        'type', 'js',
        'uri', "addOpt('person~type2','n3ps','not 3. person singular')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('person~type2','n3ps','not 3. person singular')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('person~type2','!n3ps','!not 3. person singular')"
        )
      ),
      10, new Hash(
        'contents', '3. person singular',
        'type', 'js',
        'uri', "addOpt('person~type2','3ps','3. person singular')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('person~type2','3ps','3. person singular')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('person~type2','!3ps','!3. person singular')"
        )
      )
    ),
    8, new Hash(
      'contents', 'features (noun) &#187;&nbsp;',
      1, new Hash(
        'contents', 'proper noun',
        'type', 'js',
        'uri', "addOpt('type','p','proper noun')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('type','p','proper noun')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('type','!p','!proper noun')"
        )
      ),
      2, new Hash(
        'contents', 'common noun',
        'type', 'js',
        'uri', "addOpt('type','c','common noun')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('type','c','common noun')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('type','!c','!common noun')"
        )
      ),
      3, new Hash(
        'contents', 'singular',
        'type', 'js',
        'uri', "addOpt('number','sg','singular')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('number','sg','singular')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('number','!sg','!singular')"
        )
      ),
      4, new Hash(
        'contents', 'plural',
        'type', 'js',
        'uri', "addOpt('number','pl','plural')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('number','pl','plural')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('number','!pl','!plural')"
        )
      )
    ),
    9, new Hash(
      'contents', 'features (misc) &#187;&nbsp;',
      1, new Hash(
        'contents', 'wh-',
        'type', 'js',
        'uri', "addOpt('   person~type2','wh','wh-')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('   person~type2','wh','wh-')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('   person~type2','!wh','!wh-')"
        )
      ),
      2, new Hash(
        'contents', 'coordinating conjunction',
        'type', 'js',
        'uri', "addOpt('type','coord','coordinating conjunction')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('type','coord','coordinating conjunction')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('type','!coord','!coordinating conjunction')"
        )
      )
    ),
    10, new Hash(
      'contents', 'features (adjective/adverb) &#187;&nbsp;',
      1, new Hash(
        'contents', 'positive',
        'type', 'js',
        'uri', "addOpt('degr~dia','pos','positive')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('degr~dia','pos','positive')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('degr~dia','!pos','!positive')"
        )
      ),
      2, new Hash(
        'contents', 'comparative',
        'type', 'js',
        'uri', "addOpt('degr~dia','comp','comparative')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('degr~dia','comp','comparative')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('degr~dia','!comp','!comparative')"
        )
      ),
      3, new Hash(
        'contents', 'superlative',
        'type', 'js',
        'uri', "addOpt('degr~dia','sup','superlative')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('degr~dia','sup','superlative')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('degr~dia','!sup','!superlative')"
        )
      )
    ),
    11, new Hash(
      'contents', 'features (pronoun) &#187;&nbsp;',
      1, new Hash(
        'contents', 'possessive',
        'type', 'js',
        'uri', "addOpt('type','poss','possessive')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('type','poss','possessive')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('type','!poss','!possessive')"
        )
      ),
      2, new Hash(
        'contents', 'personal',
        'type', 'js',
        'uri', "addOpt('type','pers','personal')"
        ,
        1, new Hash(
          'contents', 'velg',
          'type', 'js',
          'uri', "addOpt('type','pers','personal')"
        ),
        2, new Hash(
          'contents', 'utelukk',
          'type', 'js',
          'uri', "addOpt('type','!pers','!personal')"
        )
      )
    ) ));
}
