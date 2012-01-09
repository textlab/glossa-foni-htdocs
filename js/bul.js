var Menu;
function reloadMenuBul() {
Menu['BUL'] = new Hash(     1, new Hash(
        'contents', '<nobr>&nbsp;options &#187;&nbsp;</nobr>',
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
       'contents', 'additional string &#187;&nbsp;',
	    1, new Hash(
         'contents', 'add word',
	      'type', 'js',
	      'uri', "addOpt('ADDSTRING','word','add word')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('ADDSTRING','word','add word')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('ADDSTRING','!word','!add word')"
	      )
	   ),
	    2, new Hash(
         'contents', 'add negated word',
	      'type', 'js',
	      'uri', "addOpt('ADDSTRING','!word','add negated word')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('ADDSTRING','!word','add negated word')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('ADDSTRING','!!word','!add negated word')"
	      )
	   ),
	    3, new Hash(
         'contents', 'add lemma',
	      'type', 'js',
	      'uri', "addOpt('ADDSTRING','lemma','add lemma')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('ADDSTRING','lemma','add lemma')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('ADDSTRING','!lemma','!add lemma')"
	      )
	   ),
	    4, new Hash(
         'contents', 'add negated lemma',
	      'type', 'js',
	      'uri', "addOpt('ADDSTRING','!lemma','add negated lemma')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('ADDSTRING','!lemma','add negated lemma')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('ADDSTRING','!!lemma','!add negated lemma')"
	      )
	   )
),
  	3, new Hash(
       'contents', 'occurences &#187;&nbsp;',
	    1, new Hash(
         'contents', 'zero or more',
	      'type', 'js',
	      'uri', "addOpt('occ','*','zero or more')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('occ','*','zero or more')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
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
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('occ','+','one or more')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
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
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('occ','?','zero or one')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('occ','!?','!zero or one')"
	      )
	   )
),
	  4, new Hash(
         'contents', '<br>'
         ),
  	5, new Hash(
       'contents', 'part-of-speech &#187;&nbsp;',
	    1, new Hash(
         'contents', '',
	      'type', 'js',
	      'uri', "addOpt('pos',' ','')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('pos',' ','')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('pos','! ','!')"
	      )
	   ),
	    2, new Hash(
         'contents', 'noun',
	      'type', 'js',
	      'uri', "addOpt('pos','n','noun')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('pos','n','noun')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('pos','!n','!noun')"
	      )
	   ),
	    3, new Hash(
         'contents', 'verb',
	      'type', 'js',
	      'uri', "addOpt('pos','v','verb')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('pos','v','verb')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('pos','!v','!verb')"
	      )
	   ),
	    4, new Hash(
         'contents', 'adjective',
	      'type', 'js',
	      'uri', "addOpt('pos','adj','adjective')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('pos','adj','adjective')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('pos','!adj','!adjective')"
	      )
	   ),
	    5, new Hash(
         'contents', 'adverb',
	      'type', 'js',
	      'uri', "addOpt('pos','adv','adverb')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('pos','adv','adverb')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('pos','!adv','!adverb')"
	      )
	   ),
	    6, new Hash(
         'contents', 'preposition',
	      'type', 'js',
	      'uri', "addOpt('pos','prp','preposition')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('pos','prp','preposition')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('pos','!prp','!preposition')"
	      )
	   ),
	    7, new Hash(
         'contents', 'determiner',
	      'type', 'js',
	      'uri', "addOpt('pos','det','determiner')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('pos','det','determiner')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('pos','!det','!determiner')"
	      )
	   ),
	    8, new Hash(
         'contents', 'pronoun',
	      'type', 'js',
	      'uri', "addOpt('pos','pron','pronoun')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('pos','pron','pronoun')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('pos','!pron','!pronoun')"
	      )
	   ),
	    9, new Hash(
         'contents', 'conjunction',
	      'type', 'js',
	      'uri', "addOpt('pos','conj','conjunction')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('pos','conj','conjunction')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('pos','!conj','!conjunction')"
	      )
	   ),
	    10, new Hash(
         'contents', 'interjection',
	      'type', 'js',
	      'uri', "addOpt('pos','intj','interjection')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('pos','intj','interjection')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('pos','!intj','!interjection')"
	      )
	   ),
	    11, new Hash(
         'contents', 'number',
	      'type', 'js',
	      'uri', "addOpt('pos','num','number')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('pos','num','number')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('pos','!num','!number')"
	      )
	   ),
	    12, new Hash(
         'contents', 'punctuation',
	      'type', 'js',
	      'uri', "addOpt('pos','punct','punctuation')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('pos','punct','punctuation')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('pos','!punct','!punctuation')"
	      )
	   ),
	    13, new Hash(
         'contents', 'prefix',
	      'type', 'js',
	      'uri', "addOpt('pos','pref','prefix')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('pos','pref','prefix')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('pos','!pref','!prefix')"
	      )
	   ),
	    14, new Hash(
         'contents', 'specifier',
	      'type', 'js',
	      'uri', "addOpt('pos','spec','specifier')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('pos','spec','specifier')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('pos','!spec','!specifier')"
	      )
	   ),
	    15, new Hash(
         'contents', 'article',
	      'type', 'js',
	      'uri', "addOpt('pos','art','article')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('pos','art','article')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('pos','!art','!article')"
	      )
	   ),
	    16, new Hash(
         'contents', 'particle',
	      'type', 'js',
	      'uri', "addOpt('pos','pcle','particle')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('pos','pcle','particle')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('pos','!pcle','!particle')"
	      )
	   )
),
  	6, new Hash(
       'contents', 'type &#187;&nbsp;',
	    1, new Hash(
         'contents', 'common',
	      'type', 'js',
	      'uri', "addOpt('type','c','common')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','c','common')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!c','!common')"
	      )
	   ),
	    2, new Hash(
         'contents', 'proper',
	      'type', 'js',
	      'uri', "addOpt('type','p','proper')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','p','proper')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!p','!proper')"
	      )
	   ),
	    3, new Hash(
         'contents', 'abbreviation',
	      'type', 'js',
	      'uri', "addOpt('type','abbr','abbreviation')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','abbr','abbreviation')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!abbr','!abbreviation')"
	      )
	   ),
	    4, new Hash(
         'contents', 'possesive',
	      'type', 'js',
	      'uri', "addOpt('type','poss','possesive')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','poss','possesive')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!poss','!possesive')"
	      )
	   ),
	    5, new Hash(
         'contents', 'demonstrative',
	      'type', 'js',
	      'uri', "addOpt('type','dem','demonstrative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','dem','demonstrative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!dem','!demonstrative')"
	      )
	   ),
	    6, new Hash(
         'contents', 'personal',
	      'type', 'js',
	      'uri', "addOpt('type','pers','personal')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','pers','personal')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!pers','!personal')"
	      )
	   ),
	    7, new Hash(
         'contents', 'impersonal',
	      'type', 'js',
	      'uri', "addOpt('type','impers','impersonal')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','impers','impersonal')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!impers','!impersonal')"
	      )
	   ),
	    8, new Hash(
         'contents', 'polite',
	      'type', 'js',
	      'uri', "addOpt('type','polite','polite')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','polite','polite')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!polite','!polite')"
	      )
	   ),
	    9, new Hash(
         'contents', 'reflexive',
	      'type', 'js',
	      'uri', "addOpt('type','refl','reflexive')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','refl','reflexive')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!refl','!reflexive')"
	      )
	   ),
	    10, new Hash(
         'contents', 'no conjugation',
	      'type', 'js',
	      'uri', "addOpt('type','noconj','no conjugation')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','noconj','no conjugation')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!noconj','!no conjugation')"
	      )
	   ),
	    11, new Hash(
         'contents', 'coordination',
	      'type', 'js',
	      'uri', "addOpt('type','coord','coordination')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','coord','coordination')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!coord','!coordination')"
	      )
	   ),
	    12, new Hash(
         'contents', 'subordinating',
	      'type', 'js',
	      'uri', "addOpt('type','subord','subordinating')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','subord','subordinating')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!subord','!subordinating')"
	      )
	   ),
	    13, new Hash(
         'contents', 'attributive',
	      'type', 'js',
	      'uri', "addOpt('type','attr','attributive')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','attr','attributive')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!attr','!attributive')"
	      )
	   ),
	    14, new Hash(
         'contents', 'substit',
	      'type', 'js',
	      'uri', "addOpt('type2','substit','substit')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type2','substit','substit')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type2','!substit','!substit')"
	      )
	   ),
	  15, new Hash(
         'contents', '<br><center><b>PUNCTUATION</b></center>'
         ),
	    16, new Hash(
         'contents', 'comma',
	      'type', 'js',
	      'uri', "addOpt('type2','comma','comma')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type2','comma','comma')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type2','!comma','!comma')"
	      )
	   ),
	    17, new Hash(
         'contents', 'perion',
	      'type', 'js',
	      'uri', "addOpt('type2','period','perion')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type2','period','perion')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type2','!period','!perion')"
	      )
	   ),
	    18, new Hash(
         'contents', 'ellipsis',
	      'type', 'js',
	      'uri', "addOpt('type2','ellipsis','ellipsis')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type2','ellipsis','ellipsis')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type2','!ellipsis','!ellipsis')"
	      )
	   ),
	    19, new Hash(
         'contents', 'semicolon',
	      'type', 'js',
	      'uri', "addOpt('type2','semicolon','semicolon')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type2','semicolon','semicolon')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type2','!semicolon','!semicolon')"
	      )
	   ),
	    20, new Hash(
         'contents', 'colon',
	      'type', 'js',
	      'uri', "addOpt('type2','colon','colon')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type2','colon','colon')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type2','!colon','!colon')"
	      )
	   ),
	    21, new Hash(
         'contents', 'left parenthesis',
	      'type', 'js',
	      'uri', "addOpt('type2','lpar','left parenthesis')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type2','lpar','left parenthesis')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type2','!lpar','!left parenthesis')"
	      )
	   ),
	    22, new Hash(
         'contents', 'right parenthesis',
	      'type', 'js',
	      'uri', "addOpt('type2','rpar','right parenthesis')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type2','rpar','right parenthesis')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type2','!rpar','!right parenthesis')"
	      )
	   ),
	    23, new Hash(
         'contents', 'question',
	      'type', 'js',
	      'uri', "addOpt('type2','question','question')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type2','question','question')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type2','!question','!question')"
	      )
	   ),
	    24, new Hash(
         'contents', 'exclamation mark',
	      'type', 'js',
	      'uri', "addOpt('type2','excl','exclamation mark')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type2','excl','exclamation mark')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type2','!excl','!exclamation mark')"
	      )
	   ),
	    25, new Hash(
         'contents', 'dash',
	      'type', 'js',
	      'uri', "addOpt('type2','dash','dash')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type2','dash','dash')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type2','!dash','!dash')"
	      )
	   ),
	  26, new Hash(
         'contents', '<br><center><b>REFERENCE</b></center>'
         ),
	    27, new Hash(
         'contents', 'entities',
	      'type', 'js',
	      'uri', "addOpt('reference','ent','entities')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('reference','ent','entities')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('reference','!ent','!entities')"
	      )
	   ),
	    28, new Hash(
         'contents', 'one possessor',
	      'type', 'js',
	      'uri', "addOpt('reference','one_poss','one possessor')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('reference','one_poss','one possessor')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('reference','!one_poss','!one possessor')"
	      )
	   ),
	    29, new Hash(
         'contents', 'many possessors',
	      'type', 'js',
	      'uri', "addOpt('reference','many_poss','many possessors')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('reference','many_poss','many possessors')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('reference','!many_poss','!many possessors')"
	      )
	   ),
	    30, new Hash(
         'contents', 'causality',
	      'type', 'js',
	      'uri', "addOpt('reference','cause','causality')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('reference','cause','causality')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('reference','!cause','!causality')"
	      )
	   )
),
  	7, new Hash(
       'contents', 'type (by PoS) &#187;&nbsp;',
	  1, new Hash(
         'contents', '<br><center><b>VERBS</b></center>'
         ),
	    2, new Hash(
         'contents', 'participle',
	      'type', 'js',
	      'uri', "addOpt('type','participle','participle')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','participle','participle')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!participle','!participle')"
	      )
	   ),
	    3, new Hash(
         'contents', 'finite',
	      'type', 'js',
	      'uri', "addOpt('type','fin','finite')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','fin','finite')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!fin','!finite')"
	      )
	   ),
	    4, new Hash(
         'contents', 'infinite',
	      'type', 'js',
	      'uri', "addOpt('type','inf','infinite')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','inf','infinite')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!inf','!infinite')"
	      )
	   ),
	    5, new Hash(
         'contents', 'gerund',
	      'type', 'js',
	      'uri', "addOpt('type','gerund','gerund')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','gerund','gerund')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!gerund','!gerund')"
	      )
	   ),
	    6, new Hash(
         'contents', 'auxiliary',
	      'type', 'js',
	      'uri', "addOpt('type','aux','auxiliary')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','aux','auxiliary')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!aux','!auxiliary')"
	      )
	   ),
	    7, new Hash(
         'contents', 'attrib',
	      'type', 'js',
	      'uri', "addOpt('type2','attrib','attrib')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type2','attrib','attrib')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type2','!attrib','!attrib')"
	      )
	   ),
	    8, new Hash(
         'contents', 'irrefl',
	      'type', 'js',
	      'uri', "addOpt('type2','irrefl','irrefl')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type2','irrefl','irrefl')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type2','!irrefl','!irrefl')"
	      )
	   ),
	    9, new Hash(
         'contents', 'reflex',
	      'type', 'js',
	      'uri', "addOpt('type2','reflex','reflex')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type2','reflex','reflex')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type2','!reflex','!reflex')"
	      )
	   ),
	    10, new Hash(
         'contents', 'past participle',
	      'type', 'js',
	      'uri', "addOpt('type2','pcp2','past participle')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type2','pcp2','past participle')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type2','!pcp2','!past participle')"
	      )
	   ),
	    11, new Hash(
         'contents', 'present participle',
	      'type', 'js',
	      'uri', "addOpt('type2','pcp1','present participle')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type2','pcp1','present participle')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type2','!pcp1','!present participle')"
	      )
	   ),
	  12, new Hash(
         'contents', '<br><center><b>ADVERB</b></center>'
         ),
	    13, new Hash(
         'contents', 'manner',
	      'type', 'js',
	      'uri', "addOpt('type2','manner','manner')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type2','manner','manner')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type2','!manner','!manner')"
	      )
	   ),
	    14, new Hash(
         'contents', 'time',
	      'type', 'js',
	      'uri', "addOpt('type2','time','time')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type2','time','time')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type2','!time','!time')"
	      )
	   ),
	    15, new Hash(
         'contents', 'location',
	      'type', 'js',
	      'uri', "addOpt('type2','loc','location')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type2','loc','location')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type2','!loc','!location')"
	      )
	   ),
	    16, new Hash(
         'contents', 'quantity and degree',
	      'type', 'js',
	      'uri', "addOpt('type2','quant','quantity and degree')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type2','quant','quantity and degree')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type2','!quant','!quantity and degree')"
	      )
	   ),
	    17, new Hash(
         'contents', 'modal',
	      'type', 'js',
	      'uri', "addOpt('type2','modal','modal')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type2','modal','modal')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type2','!modal','!modal')"
	      )
	   ),
	  18, new Hash(
         'contents', '<br><center><b>NUMERALS</b></center>'
         ),
	    19, new Hash(
         'contents', 'cardinal',
	      'type', 'js',
	      'uri', "addOpt('type2','card','cardinal')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type2','card','cardinal')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type2','!card','!cardinal')"
	      )
	   ),
	    20, new Hash(
         'contents', 'ordinal',
	      'type', 'js',
	      'uri', "addOpt('type2','ord','ordinal')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type2','ord','ordinal')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type2','!ord','!ordinal')"
	      )
	   ),
	    21, new Hash(
         'contents', 'adverbial',
	      'type', 'js',
	      'uri', "addOpt('type2','advbl','adverbial')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type2','advbl','adverbial')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type2','!advbl','!adverbial')"
	      )
	   ),
	    22, new Hash(
         'contents', 'fuzzy',
	      'type', 'js',
	      'uri', "addOpt('type2','fuzzy','fuzzy')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type2','fuzzy','fuzzy')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type2','!fuzzy','!fuzzy')"
	      )
	   ),
	  23, new Hash(
         'contents', '<br><center><b>PRONOUNS</b></center>'
         ),
	    24, new Hash(
         'contents', 'relative',
	      'type', 'js',
	      'uri', "addOpt('type2','relat','relative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type2','relat','relative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type2','!relat','!relative')"
	      )
	   ),
	    25, new Hash(
         'contents', 'collective',
	      'type', 'js',
	      'uri', "addOpt('type2','coll','collective')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type2','coll','collective')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type2','!coll','!collective')"
	      )
	   ),
	    26, new Hash(
         'contents', 'interrogative',
	      'type', 'js',
	      'uri', "addOpt('type2','interr','interrogative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type2','interr','interrogative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type2','!interr','!interrogative')"
	      )
	   ),
	    27, new Hash(
         'contents', 'indefinite',
	      'type', 'js',
	      'uri', "addOpt('type2','indef','indefinite')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type2','indef','indefinite')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type2','!indef','!indefinite')"
	      )
	   ),
	    28, new Hash(
         'contents', 'negative',
	      'type', 'js',
	      'uri', "addOpt('type2','neg','negative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type2','neg','negative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type2','!neg','!negative')"
	      )
	   ),
	    29, new Hash(
         'contents', 'clitic',
	      'type', 'js',
	      'uri', "addOpt('type2','clitic','clitic')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type2','clitic','clitic')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type2','!clitic','!clitic')"
	      )
	   ),
	  30, new Hash(
         'contents', '<br><center><b>PARTICLES</b></center>'
         ),
	    31, new Hash(
         'contents', 'affirmative',
	      'type', 'js',
	      'uri', "addOpt('type2','affirm','affirmative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type2','affirm','affirmative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type2','!affirm','!affirmative')"
	      )
	   ),
	    32, new Hash(
         'contents', 'emphatic',
	      'type', 'js',
	      'uri', "addOpt('type2','emp','emphatic')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type2','emp','emphatic')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type2','!emp','!emphatic')"
	      )
	   ),
	    33, new Hash(
         'contents', 'verbal',
	      'type', 'js',
	      'uri', "addOpt('type2','vbl','verbal')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type2','vbl','verbal')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type2','!vbl','!verbal')"
	      )
	   ),
	    34, new Hash(
         'contents', 'auxiliary',
	      'type', 'js',
	      'uri', "addOpt('type2','aux','auxiliary')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type2','aux','auxiliary')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type2','!aux','!auxiliary')"
	      )
	   )
),
  	8, new Hash(
       'contents', 'grade &#187;&nbsp;',
	    1, new Hash(
         'contents', 'positive',
	      'type', 'js',
	      'uri', "addOpt('grade','pos','positive')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('grade','pos','positive')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('grade','!pos','!positive')"
	      )
	   ),
	    2, new Hash(
         'contents', 'comparative',
	      'type', 'js',
	      'uri', "addOpt('grade','comp','comparative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('grade','comp','comparative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('grade','!comp','!comparative')"
	      )
	   ),
	    3, new Hash(
         'contents', 'superlative',
	      'type', 'js',
	      'uri', "addOpt('grade','sup','superlative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('grade','sup','superlative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('grade','!sup','!superlative')"
	      )
	   )
),
  	9, new Hash(
       'contents', 'verbal features &#187;&nbsp;',
	  1, new Hash(
         'contents', '<br><center><b>DIATHESIS</b></center>'
         ),
	    2, new Hash(
         'contents', 'passive',
	      'type', 'js',
	      'uri', "addOpt('dia','pas','passive')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('dia','pas','passive')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('dia','!pas','!passive')"
	      )
	   ),
	    3, new Hash(
         'contents', 'active',
	      'type', 'js',
	      'uri', "addOpt('dia','akt','active')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('dia','akt','active')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('dia','!akt','!active')"
	      )
	   ),
	  4, new Hash(
         'contents', '<br><center><b>VALENCY</b></center>'
         ),
	    5, new Hash(
         'contents', 'transitive',
	      'type', 'js',
	      'uri', "addOpt('val','trans','transitive')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('val','trans','transitive')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('val','!trans','!transitive')"
	      )
	   ),
	    6, new Hash(
         'contents', 'intransitive',
	      'type', 'js',
	      'uri', "addOpt('val','intrans','intransitive')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('val','intrans','intransitive')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('val','!intrans','!intransitive')"
	      )
	   ),
	  7, new Hash(
         'contents', '<br><center><b>TENSE</b></center>'
         ),
	    8, new Hash(
         'contents', 'present',
	      'type', 'js',
	      'uri', "addOpt('tense','pr','present')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('tense','pr','present')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('tense','!pr','!present')"
	      )
	   ),
	    9, new Hash(
         'contents', 'past',
	      'type', 'js',
	      'uri', "addOpt('tense','impf','past')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('tense','impf','past')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('tense','!impf','!past')"
	      )
	   ),
	    10, new Hash(
         'contents', 'future',
	      'type', 'js',
	      'uri', "addOpt('tense','fut','future')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('tense','fut','future')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('tense','!fut','!future')"
	      )
	   ),
	    11, new Hash(
         'contents', 'aorist',
	      'type', 'js',
	      'uri', "addOpt('tense','aor','aorist')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('tense','aor','aorist')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('tense','!aor','!aorist')"
	      )
	   ),
	    12, new Hash(
         'contents', 'past (all other past tenses)',
	      'type', 'js',
	      'uri', "addOpt('tense','past','past (all other past tenses)')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('tense','past','past (all other past tenses)')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('tense','!past','!past (all other past tenses)')"
	      )
	   ),
	  13, new Hash(
         'contents', '<br><center><b>ASPECT</b></center>'
         ),
	    14, new Hash(
         'contents', 'perfective',
	      'type', 'js',
	      'uri', "addOpt('aspect','pf','perfective')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('aspect','pf','perfective')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('aspect','!pf','!perfective')"
	      )
	   ),
	    15, new Hash(
         'contents', 'imperfective',
	      'type', 'js',
	      'uri', "addOpt('aspect','ipf','imperfective')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('aspect','ipf','imperfective')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('aspect','!ipf','!imperfective')"
	      )
	   ),
	  16, new Hash(
         'contents', '<br><center><b>MOOD</b></center>'
         ),
	    17, new Hash(
         'contents', 'indicative',
	      'type', 'js',
	      'uri', "addOpt('mood','ind','indicative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('mood','ind','indicative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('mood','!ind','!indicative')"
	      )
	   ),
	    18, new Hash(
         'contents', 'conjunctive',
	      'type', 'js',
	      'uri', "addOpt('mood','conj','conjunctive')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('mood','conj','conjunctive')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('mood','!conj','!conjunctive')"
	      )
	   ),
	    19, new Hash(
         'contents', 'conditional',
	      'type', 'js',
	      'uri', "addOpt('mood','cond','conditional')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('mood','cond','conditional')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('mood','!cond','!conditional')"
	      )
	   ),
	    20, new Hash(
         'contents', 'imperative',
	      'type', 'js',
	      'uri', "addOpt('mood','imp','imperative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('mood','imp','imperative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('mood','!imp','!imperative')"
	      )
	   ),
	    21, new Hash(
         'contents', 'subjunctive',
	      'type', 'js',
	      'uri', "addOpt('mood','subj','subjunctive')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('mood','subj','subjunctive')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('mood','!subj','!subjunctive')"
	      )
	   ),
	    22, new Hash(
         'contents', 'potensial',
	      'type', 'js',
	      'uri', "addOpt('mood','pot','potensial')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('mood','pot','potensial')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('mood','!pot','!potensial')"
	      )
	   )
),
  	10, new Hash(
       'contents', 'definiteness &#187;&nbsp;',
	    1, new Hash(
         'contents', 'definite',
	      'type', 'js',
	      'uri', "addOpt('defin','def','definite')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('defin','def','definite')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('defin','!def','!definite')"
	      )
	   ),
	    2, new Hash(
         'contents', 'indefinite',
	      'type', 'js',
	      'uri', "addOpt('defin','indef','indefinite')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('defin','indef','indefinite')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('defin','!indef','!indefinite')"
	      )
	   ),
	    3, new Hash(
         'contents', 'definite/indefinite',
	      'type', 'js',
	      'uri', "addOpt('defin','def/indef','definite/indefinite')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('defin','def/indef','definite/indefinite')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('defin','!def/indef','!definite/indefinite')"
	      )
	   ),
	    4, new Hash(
         'contents', 'short form',
	      'type', 'js',
	      'uri', "addOpt('defin','short','short form')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('defin','short','short form')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('defin','!short','!short form')"
	      )
	   ),
	    5, new Hash(
         'contents', 'full form',
	      'type', 'js',
	      'uri', "addOpt('defin','full','full form')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('defin','full','full form')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('defin','!full','!full form')"
	      )
	   )
),
  	11, new Hash(
       'contents', 'case &#187;&nbsp;',
	    1, new Hash(
         'contents', 'accusative',
	      'type', 'js',
	      'uri', "addOpt('case','acc','accusative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('case','acc','accusative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('case','!acc','!accusative')"
	      )
	   ),
	    2, new Hash(
         'contents', 'nominative',
	      'type', 'js',
	      'uri', "addOpt('case','nom','nominative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('case','nom','nominative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('case','!nom','!nominative')"
	      )
	   ),
	    3, new Hash(
         'contents', 'dative',
	      'type', 'js',
	      'uri', "addOpt('case','dat','dative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('case','dat','dative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('case','!dat','!dative')"
	      )
	   ),
	    4, new Hash(
         'contents', 'vocative',
	      'type', 'js',
	      'uri', "addOpt('case','voc','vocative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('case','voc','vocative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('case','!voc','!vocative')"
	      )
	   )
),
  	12, new Hash(
       'contents', 'person &#187;&nbsp;',
	    1, new Hash(
         'contents', 'first',
	      'type', 'js',
	      'uri', "addOpt('person','1','first')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('person','1','first')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('person','!1','!first')"
	      )
	   ),
	    2, new Hash(
         'contents', 'second',
	      'type', 'js',
	      'uri', "addOpt('person','2','second')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('person','2','second')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('person','!2','!second')"
	      )
	   ),
	    3, new Hash(
         'contents', 'third',
	      'type', 'js',
	      'uri', "addOpt('person','3','third')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('person','3','third')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('person','!3','!third')"
	      )
	   )
),
  	13, new Hash(
       'contents', 'number &#187;&nbsp;',
	    1, new Hash(
         'contents', 'singular',
	      'type', 'js',
	      'uri', "addOpt('number','sg','singular')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('number','sg','singular')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('number','!sg','!singular')"
	      )
	   ),
	    2, new Hash(
         'contents', 'plural',
	      'type', 'js',
	      'uri', "addOpt('number','pl','plural')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('number','pl','plural')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('number','!pl','!plural')"
	      )
	   ),
	    3, new Hash(
         'contents', 'singular/plural',
	      'type', 'js',
	      'uri', "addOpt('number','sg/pl','singular/plural')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('number','sg/pl','singular/plural')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('number','!sg/pl','!singular/plural')"
	      )
	   ),
	    4, new Hash(
         'contents', 'count form',
	      'type', 'js',
	      'uri', "addOpt('number','count','count form')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('number','count','count form')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('number','!count','!count form')"
	      )
	   )
),
  	14, new Hash(
       'contents', 'polarity &#187;&nbsp;',
	    1, new Hash(
         'contents', 'negative',
	      'type', 'js',
	      'uri', "addOpt('polarity','neg','negative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('polarity','neg','negative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('polarity','!neg','!negative')"
	      )
	   )
),
  	15, new Hash(
       'contents', 'gender &#187;&nbsp;',
	    1, new Hash(
         'contents', 'masculine',
	      'type', 'js',
	      'uri', "addOpt('gender','m','masculine')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('gender','m','masculine')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('gender','!m','!masculine')"
	      )
	   ),
	    2, new Hash(
         'contents', 'feminine',
	      'type', 'js',
	      'uri', "addOpt('gender','f','feminine')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('gender','f','feminine')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('gender','!f','!feminine')"
	      )
	   ),
	    3, new Hash(
         'contents', 'neuter',
	      'type', 'js',
	      'uri', "addOpt('gender','neu','neuter')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('gender','neu','neuter')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('gender','!neu','!neuter')"
	      )
	   ),
	    4, new Hash(
         'contents', 'masculine/feminine',
	      'type', 'js',
	      'uri', "addOpt('gender','m/f','masculine/feminine')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('gender','m/f','masculine/feminine')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('gender','!m/f','!masculine/feminine')"
	      )
	   ),
	    5, new Hash(
         'contents', 'masculine/neuter',
	      'type', 'js',
	      'uri', "addOpt('gender','m/neu','masculine/neuter')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('gender','m/neu','masculine/neuter')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('gender','!m/neu','!masculine/neuter')"
	      )
	   ),
	    6, new Hash(
         'contents', 'masculine (of possessor)',
	      'type', 'js',
	      'uri', "addOpt('poss_gender','m','masculine (of possessor)')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('poss_gender','m','masculine (of possessor)')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('poss_gender','!m','!masculine (of possessor)')"
	      )
	   ),
	    7, new Hash(
         'contents', 'feminine (of possessor)',
	      'type', 'js',
	      'uri', "addOpt('poss_gender','f','feminine (of possessor)')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('poss_gender','f','feminine (of possessor)')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('poss_gender','!f','!feminine (of possessor)')"
	      )
	   ),
	    8, new Hash(
         'contents', 'neuter (of possessor)',
	      'type', 'js',
	      'uri', "addOpt('poss_gender','neu','neuter (of possessor)')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('poss_gender','neu','neuter (of possessor)')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('poss_gender','!neu','!neuter (of possessor)')"
	      )
	   )
) ));
}