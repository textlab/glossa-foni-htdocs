var conf = new Array;

var languageOpts = new Array;
languageOpts = [['DAMOS', 'English']];
conf['charset'] = 'UTF-8';
conf['type'] = 'monolingual';
conf['title'] = 'Search Damos';
conf['corpus_name'] = 'Damos';
var language='en';

var cgiRoot = 'http://tekstlab.uio.no/cgi-bin/glossa/';
var htmlRoot = 'http://tekstlab.uio.no/glossa/';

// ** shortcuts ** //

if(typeof(shortcut) == 'function') {  // The shortcut function is only defined on the main search page
    shortcut("Ctrl+Shift+L",function() {
	    addOpt('w','lemma','grunnform');
	});

    shortcut("Ctrl+Shift+E",function() {
	    addOpt('w','end','slutten av ordet')
		});

    shortcut("Ctrl+Shift+S",function() {
	    addOpt('w','start','starten av ordet')
		});

    shortcut("Ctrl+Shift+C",function() {
	    addOpt('w','case','skill store/små bokst.')
		});

    // 
    // adj, adv, det, inf, int, konj, prep, pron, subj, subst, tegn, verb, ukjent

    shortcut("Ctrl+Shift+A",function() {
	    addOpt('ordkl','adj','adjektive')
		});

    shortcut("Ctrl+Shift+D",function() {
	    addOpt('ordkl','adv','adverb')
		});

    shortcut("Ctrl+Shift+N",function() {
	    addOpt('ordkl','s','substantiv')
		});

    shortcut("Ctrl+Shift+V",function() {
	    addOpt('ordkl','v','verb')
		});
 }



