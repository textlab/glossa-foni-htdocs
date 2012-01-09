var Menu;
function reloadMenuSamNoNorsk() {
Menu['SAMNO_NORSK'] = new Hash(     1, new Hash(
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
	  3, new Hash(
         'contents', '<br>'
         ),
  	4, new Hash(
       'contents', 'Part of Speech &#187;&nbsp;',
	    1, new Hash(
         'contents', 'noun',
	      'type', 'js',
	      'uri', "addOpt('pos','N','noun')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('pos','N','noun')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('pos','!N','!noun')"
	      )
	   ),
	    2, new Hash(
         'contents', 'verb',
	      'type', 'js',
	      'uri', "addOpt('pos','V','verb')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('pos','V','verb')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('pos','!V','!verb')"
	      )
	   ),
	    3, new Hash(
         'contents', 'adjective',
	      'type', 'js',
	      'uri', "addOpt('pos','A','adjective')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('pos','A','adjective')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('pos','!A','!adjective')"
	      )
	   ),
	    4, new Hash(
         'contents', 'pronoun',
	      'type', 'js',
	      'uri', "addOpt('pos','Pron','pronoun')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('pos','Pron','pronoun')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('pos','!Pron','!pronoun')"
	      )
	   ),
	    5, new Hash(
         'contents', 'adverb',
	      'type', 'js',
	      'uri', "addOpt('pos','Adv','adverb')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('pos','Adv','adverb')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('pos','!Adv','!adverb')"
	      )
	   ),
	    6, new Hash(
         'contents', 'preposition',
	      'type', 'js',
	      'uri', "addOpt('pos','Pr','preposition')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('pos','Pr','preposition')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('pos','!Pr','!preposition')"
	      )
	   ),
	    7, new Hash(
         'contents', 'determiner',
	      'type', 'js',
	      'uri', "addOpt('pos','Det','determiner')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('pos','Det','determiner')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('pos','!Det','!determiner')"
	      )
	   ),
	    8, new Hash(
         'contents', 'conjunction',
	      'type', 'js',
	      'uri', "addOpt('pos','CC','conjunction')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('pos','CC','conjunction')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('pos','!CC','!conjunction')"
	      )
	   ),
	    9, new Hash(
         'contents', 'subjunction',
	      'type', 'js',
	      'uri', "addOpt('pos','CS','subjunction')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('pos','CS','subjunction')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('pos','!CS','!subjunction')"
	      )
	   ),
	    10, new Hash(
         'contents', 'interjection',
	      'type', 'js',
	      'uri', "addOpt('pos','Interj','interjection')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('pos','Interj','interjection')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('pos','!Interj','!interjection')"
	      )
	   )
),
  	5, new Hash(
       'contents', 'case &#187;&nbsp;',
	    1, new Hash(
         'contents', 'nominative',
	      'type', 'js',
	      'uri', "addOpt('case','Nom','nominative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('case','Nom','nominative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('case','!Nom','!nominative')"
	      )
	   ),
	    2, new Hash(
         'contents', 'accusative',
	      'type', 'js',
	      'uri', "addOpt('case','Acc','accusative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('case','Acc','accusative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('case','!Acc','!accusative')"
	      )
	   )
),
  	6, new Hash(
       'contents', 'person &#187;&nbsp;',
	    1, new Hash(
         'contents', '1. person',
	      'type', 'js',
	      'uri', "addOpt('person~inf','1','1. person')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('person~inf','1','1. person')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('person~inf','!1','!1. person')"
	      )
	   ),
	    2, new Hash(
         'contents', '2. person',
	      'type', 'js',
	      'uri', "addOpt('person~inf','2','2. person')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('person~inf','2','2. person')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('person~inf','!2','!2. person')"
	      )
	   ),
	    3, new Hash(
         'contents', '3. person',
	      'type', 'js',
	      'uri', "addOpt('person~inf','3','3. person')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('person~inf','3','3. person')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('person~inf','!3','!3. person')"
	      )
	   )
),
  	7, new Hash(
       'contents', 'number &#187;&nbsp;',
	    1, new Hash(
         'contents', 'singular',
	      'type', 'js',
	      'uri', "addOpt('number~mood','Sg','singular')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('number~mood','Sg','singular')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('number~mood','!Sg','!singular')"
	      )
	   ),
	    2, new Hash(
         'contents', 'plural',
	      'type', 'js',
	      'uri', "addOpt('number~mood','Pl','plural')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('number~mood','Pl','plural')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('number~mood','!Pl','!plural')"
	      )
	   )
),
  	8, new Hash(
       'contents', 'definite &#187;&nbsp;',
	    1, new Hash(
         'contents', 'definite',
	      'type', 'js',
	      'uri', "addOpt('poss~dia~defin','def','definite')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('poss~dia~defin','def','definite')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('poss~dia~defin','!def','!definite')"
	      )
	   ),
	    2, new Hash(
         'contents', 'indefinite',
	      'type', 'js',
	      'uri', "addOpt('poss~dia~defin','indef','indefinite')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('poss~dia~defin','indef','indefinite')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('poss~dia~defin','!indef','!indefinite')"
	      )
	   )
),
  	9, new Hash(
       'contents', 'tense &#187;&nbsp;',
	    1, new Hash(
         'contents', 'present',
	      'type', 'js',
	      'uri', "addOpt('tense~grade~gender','Prs','present')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('tense~grade~gender','Prs','present')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('tense~grade~gender','!Prs','!present')"
	      )
	   ),
	    2, new Hash(
         'contents', 'past',
	      'type', 'js',
	      'uri', "addOpt('tense~grade~gender','Prt','past')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('tense~grade~gender','Prt','past')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('tense~grade~gender','!Prt','!past')"
	      )
	   ),
	    3, new Hash(
         'contents', 'infinitive',
	      'type', 'js',
	      'uri', "addOpt('tense~grade~gender','Inf','infinitive')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('tense~grade~gender','Inf','infinitive')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('tense~grade~gender','!Inf','!infinitive')"
	      )
	   )
),
  	10, new Hash(
       'contents', 'diathesis &#187;&nbsp;',
	    1, new Hash(
         'contents', 'passive',
	      'type', 'js',
	      'uri', "addOpt('poss~dia~defin','Pass','passive')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('poss~dia~defin','Pass','passive')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('poss~dia~defin','!Pass','!passive')"
	      )
	   )
),
  	11, new Hash(
       'contents', 'mood &#187;&nbsp;',
	    1, new Hash(
         'contents', 'imperative',
	      'type', 'js',
	      'uri', "addOpt('number~mood','Imprt','imperative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('number~mood','Imprt','imperative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('number~mood','!Imprt','!imperative')"
	      )
	   )
),
  	12, new Hash(
       'contents', 'grade &#187;&nbsp;',
	    1, new Hash(
         'contents', 'pos',
	      'type', 'js',
	      'uri', "addOpt('tense~grade~gender','Pos','pos')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('tense~grade~gender','Pos','pos')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('tense~grade~gender','!Pos','!pos')"
	      )
	   ),
	    2, new Hash(
         'contents', 'comparative',
	      'type', 'js',
	      'uri', "addOpt('tense~grade~gender','Comp','comparative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('tense~grade~gender','Comp','comparative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('tense~grade~gender','!Comp','!comparative')"
	      )
	   ),
	    3, new Hash(
         'contents', 'superlative',
	      'type', 'js',
	      'uri', "addOpt('tense~grade~gender','Superl','superlative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('tense~grade~gender','Superl','superlative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('tense~grade~gender','!Superl','!superlative')"
	      )
	   )
),
  	13, new Hash(
       'contents', 'type &#187;&nbsp;',
	    1, new Hash(
         'contents', 'propernoun',
	      'type', 'js',
	      'uri', "addOpt('type','Prop','propernoun')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','Prop','propernoun')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!Prop','!propernoun')"
	      )
	   ),
	    2, new Hash(
         'contents', 'personal',
	      'type', 'js',
	      'uri', "addOpt('type','Pers','personal')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','Pers','personal')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!Pers','!personal')"
	      )
	   ),
	    3, new Hash(
         'contents', 'demonstrative',
	      'type', 'js',
	      'uri', "addOpt('type','Dem','demonstrative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','Dem','demonstrative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!Dem','!demonstrative')"
	      )
	   ),
	    4, new Hash(
         'contents', 'interrogative',
	      'type', 'js',
	      'uri', "addOpt('type','Interr','interrogative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','Interr','interrogative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!Interr','!interrogative')"
	      )
	   ),
	    5, new Hash(
         'contents', 'reflexive',
	      'type', 'js',
	      'uri', "addOpt('type','Refl','reflexive')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','Refl','reflexive')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!Refl','!reflexive')"
	      )
	   ),
	    6, new Hash(
         'contents', 'reciprocal',
	      'type', 'js',
	      'uri', "addOpt('type','Recipr','reciprocal')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','Recipr','reciprocal')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!Recipr','!reciprocal')"
	      )
	   ),
	    7, new Hash(
         'contents', 'relative',
	      'type', 'js',
	      'uri', "addOpt('type','Rel','relative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','Rel','relative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!Rel','!relative')"
	      )
	   ),
	    8, new Hash(
         'contents', 'cardinal',
	      'type', 'js',
	      'uri', "addOpt('type','Card','cardinal')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','Card','cardinal')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!Card','!cardinal')"
	      )
	   ),
	    9, new Hash(
         'contents', 'ordinal',
	      'type', 'js',
	      'uri', "addOpt('type','Ord','ordinal')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','Ord','ordinal')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!Ord','!ordinal')"
	      )
	   ),
	    10, new Hash(
         'contents', 'abbreviation',
	      'type', 'js',
	      'uri', "addOpt('type','ABBR','abbreviation')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','ABBR','abbreviation')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!ABBR','!abbreviation')"
	      )
	   ),
	    11, new Hash(
         'contents', 'left',
	      'type', 'js',
	      'uri', "addOpt('type','LEFT','left')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','LEFT','left')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!LEFT','!left')"
	      )
	   ),
	    12, new Hash(
         'contents', 'punct',
	      'type', 'js',
	      'uri', "addOpt('type','PUNCT','punct')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','PUNCT','punct')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!PUNCT','!punct')"
	      )
	   ),
	    13, new Hash(
         'contents', 'clauseboundary',
	      'type', 'js',
	      'uri', "addOpt('type','CLB','clauseboundary')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','CLB','clauseboundary')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!CLB','!clauseboundary')"
	      )
	   ),
	    14, new Hash(
         'contents', 'right',
	      'type', 'js',
	      'uri', "addOpt('type','RIGHT','right')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','RIGHT','right')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!RIGHT','!right')"
	      )
	   )
) ));
}