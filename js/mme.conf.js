var conf = new Array;

var languageOpts = new Array;
languageOpts = [['MME', 'Norsk']];
conf['charset'] = 'ISO-8859-1';
conf['type'] = 'monolingual';
conf['title'] = 'S&oslash;k i Music, Motion, and Emotion';
conf['corpus_name'] = 'Music, Motion, and Emotion';
var language='no';

var cgiRoot = 'http://tekstlab.uio.no/cgi-bin/glossa/';
var htmlRoot = 'http://tekstlab.uio.no/glossa/';

// ** shortcuts ** //

if(typeof(shortcut) == 'function') {  // The shortcut function is only defined on the main search page
    shortcut("Ctrl+Shift+L",function() {
	    addOpt('w','lemma','grunnform');
	});

    shortcut("Ctrl+Shift+E",function() {
	    addOpt('w','end','slutten av ordet');
		});

    shortcut("Ctrl+Shift+S",function() {
	    addOpt('w','start','starten av ordet');
		});

    shortcut("Ctrl+Shift+C",function() {
	    addOpt('w','case','skill store/sm&aring; bokst.');
		});

    // 
    // adj, adv, det, inf, int, konj, prep, pron, subj, subst, tegn, verb, ukjent

    shortcut("Ctrl+Shift+A",function() {
	    addOpt('pos','adj','adjektive');
		});

    shortcut("Ctrl+Shift+D",function() {
	    addOpt('pos','adv','adverb');
		});

    shortcut("Ctrl+Shift+N",function() {
	    addOpt('pos','s','substantiv');
		});

    shortcut("Ctrl+Shift+V",function() {
	    addOpt('pos','v','verb');
		});
 }



