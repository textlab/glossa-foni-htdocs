var Menu;
function reloadMenuSamNoSamisk() {
Menu['SAMNO_SAMISK'] = new Hash(     1, new Hash(
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
         'contents', 'postposition',
	      'type', 'js',
	      'uri', "addOpt('pos','Po','postposition')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('pos','Po','postposition')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('pos','!Po','!postposition')"
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
	   ),
	    11, new Hash(
         'contents', 'numeral',
	      'type', 'js',
	      'uri', "addOpt('pos','Num','numeral')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('pos','Num','numeral')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('pos','!Num','!numeral')"
	      )
	   ),
	    12, new Hash(
         'contents', 'particle',
	      'type', 'js',
	      'uri', "addOpt('pos','Pcle','particle')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('pos','Pcle','particle')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('pos','!Pcle','!particle')"
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
         'contents', 'genitive',
	      'type', 'js',
	      'uri', "addOpt('case','Gen','genitive')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('case','Gen','genitive')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('case','!Gen','!genitive')"
	      )
	   ),
	    3, new Hash(
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
	   ),
	    4, new Hash(
         'contents', 'locative',
	      'type', 'js',
	      'uri', "addOpt('case','Loc','locative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('case','Loc','locative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('case','!Loc','!locative')"
	      )
	   ),
	    5, new Hash(
         'contents', 'illative',
	      'type', 'js',
	      'uri', "addOpt('case','Ill','illative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('case','Ill','illative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('case','!Ill','!illative')"
	      )
	   ),
	    6, new Hash(
         'contents', 'comitative',
	      'type', 'js',
	      'uri', "addOpt('case','Com','comitative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('case','Com','comitative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('case','!Com','!comitative')"
	      )
	   )
),
  	6, new Hash(
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
	   ),
	    3, new Hash(
         'contents', 'dual',
	      'type', 'js',
	      'uri', "addOpt('number~mood','Du','dual')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('number~mood','Du','dual')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('number~mood','!Du','!dual')"
	      )
	   )
),
  	7, new Hash(
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
	   )
),
  	8, new Hash(
       'contents', 'person &#187;&nbsp;',
	    1, new Hash(
         'contents', '1. person singular',
	      'type', 'js',
	      'uri', "addOpt('person~inf','Sg1','1. person singular')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('person~inf','Sg1','1. person singular')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('person~inf','!Sg1','!1. person singular')"
	      )
	   ),
	    2, new Hash(
         'contents', '2. person singular',
	      'type', 'js',
	      'uri', "addOpt('person~inf','Sg2','2. person singular')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('person~inf','Sg2','2. person singular')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('person~inf','!Sg2','!2. person singular')"
	      )
	   ),
	    3, new Hash(
         'contents', '3. person singular',
	      'type', 'js',
	      'uri', "addOpt('person~inf','Sg3','3. person singular')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('person~inf','Sg3','3. person singular')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('person~inf','!Sg3','!3. person singular')"
	      )
	   ),
	    4, new Hash(
         'contents', '1. person plural',
	      'type', 'js',
	      'uri', "addOpt('person~inf','Pl1','1. person plural')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('person~inf','Pl1','1. person plural')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('person~inf','!Pl1','!1. person plural')"
	      )
	   ),
	    5, new Hash(
         'contents', '2. person plural',
	      'type', 'js',
	      'uri', "addOpt('person~inf','Pl2','2. person plural')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('person~inf','Pl2','2. person plural')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('person~inf','!Pl2','!2. person plural')"
	      )
	   ),
	    6, new Hash(
         'contents', '3. person plural',
	      'type', 'js',
	      'uri', "addOpt('person~inf','Pl3','3. person plural')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('person~inf','Pl3','3. person plural')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('person~inf','!Pl3','!3. person plural')"
	      )
	   ),
	    7, new Hash(
         'contents', '1. person dual',
	      'type', 'js',
	      'uri', "addOpt('person~inf','Du1','1. person dual')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('person~inf','Du1','1. person dual')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('person~inf','!Du1','!1. person dual')"
	      )
	   ),
	    8, new Hash(
         'contents', '2. person dual',
	      'type', 'js',
	      'uri', "addOpt('person~inf','Du2','2. person dual')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('person~inf','Du2','2. person dual')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('person~inf','!Du2','!2. person dual')"
	      )
	   ),
	    9, new Hash(
         'contents', '3. person dual',
	      'type', 'js',
	      'uri', "addOpt('person~inf','Du3','3. person dual')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('person~inf','Du3','3. person dual')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('person~inf','!Du3','!3. person dual')"
	      )
	   )
),
  	9, new Hash(
       'contents', 'mood &#187;&nbsp;',
	    1, new Hash(
         'contents', 'indicative',
	      'type', 'js',
	      'uri', "addOpt('number~mood','Ind','indicative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('number~mood','Ind','indicative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('number~mood','!Ind','!indicative')"
	      )
	   ),
	    2, new Hash(
         'contents', 'conditional',
	      'type', 'js',
	      'uri', "addOpt('number~mood','Cond','conditional')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('number~mood','Cond','conditional')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('number~mood','!Cond','!conditional')"
	      )
	   ),
	    3, new Hash(
         'contents', 'potential',
	      'type', 'js',
	      'uri', "addOpt('number~mood','Pot','potential')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('number~mood','Pot','potential')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('number~mood','!Pot','!potential')"
	      )
	   ),
	    4, new Hash(
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
  	10, new Hash(
       'contents', 'polarity &#187;&nbsp;',
	    1, new Hash(
         'contents', 'neg',
	      'type', 'js',
	      'uri', "addOpt('polarity~attributive','Neg','neg')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('polarity~attributive','Neg','neg')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('polarity~attributive','!Neg','!neg')"
	      )
	   )
),
  	11, new Hash(
       'contents', 'attributive &#187;&nbsp;',
	    1, new Hash(
         'contents', 'attr',
	      'type', 'js',
	      'uri', "addOpt('polarity~attributive','Attr','attr')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('polarity~attributive','Attr','attr')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('polarity~attributive','!Attr','!attr')"
	      )
	   )
),
  	12, new Hash(
       'contents', 'grade &#187;&nbsp;',
	    1, new Hash(
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
	    2, new Hash(
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
         'contents', 'actio',
	      'type', 'js',
	      'uri', "addOpt('type','Actio','actio')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','Actio','actio')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!Actio','!actio')"
	      )
	   ),
	    3, new Hash(
         'contents', 'actor',
	      'type', 'js',
	      'uri', "addOpt('type','Actor','actor')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','Actor','actor')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!Actor','!actor')"
	      )
	   ),
	    4, new Hash(
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
	    5, new Hash(
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
	    6, new Hash(
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
	    7, new Hash(
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
	    8, new Hash(
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
	    9, new Hash(
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
	    10, new Hash(
         'contents', 'indefinite',
	      'type', 'js',
	      'uri', "addOpt('type','Indef','indefinite')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','Indef','indefinite')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!Indef','!indefinite')"
	      )
	   ),
	    11, new Hash(
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
	    12, new Hash(
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
	    13, new Hash(
         'contents', 'transitive',
	      'type', 'js',
	      'uri', "addOpt('type','TV','transitive')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','TV','transitive')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!TV','!transitive')"
	      )
	   ),
	    14, new Hash(
         'contents', 'intransitive',
	      'type', 'js',
	      'uri', "addOpt('type','IV','intransitive')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','IV','intransitive')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!IV','!intransitive')"
	      )
	   ),
	    15, new Hash(
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
	    16, new Hash(
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
	    17, new Hash(
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
	    18, new Hash(
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
	    19, new Hash(
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
),
  	14, new Hash(
       'contents', 'function &#187;&nbsp;',
	    1, new Hash(
         'contents', 'TITLE',
	      'type', 'js',
	      'uri', "addOpt('syntax','@TITLE','TITLE')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('syntax','@TITLE','TITLE')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('syntax','!@TITLE','!TITLE')"
	      )
	   ),
	    2, new Hash(
         'contents', 'GN>',
	      'type', 'js',
	      'uri', "addOpt('syntax','@GN>','GN>')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('syntax','@GN>','GN>')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('syntax','!@GN>','!GN>')"
	      )
	   ),
	    3, new Hash(
         'contents', 'PCLE',
	      'type', 'js',
	      'uri', "addOpt('syntax','@PCLE','PCLE')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('syntax','@PCLE','PCLE')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('syntax','!@PCLE','!PCLE')"
	      )
	   ),
	    4, new Hash(
         'contents', 'GP<',
	      'type', 'js',
	      'uri', "addOpt('syntax','@GP<','GP<')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('syntax','@GP<','GP<')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('syntax','!@GP<','!GP<')"
	      )
	   ),
	    5, new Hash(
         'contents', 'NQ<',
	      'type', 'js',
	      'uri', "addOpt('syntax','@NQ<','NQ<')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('syntax','@NQ<','NQ<')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('syntax','!@NQ<','!NQ<')"
	      )
	   ),
	    6, new Hash(
         'contents', 'CMPND',
	      'type', 'js',
	      'uri', "addOpt('syntax','@CMPND','CMPND')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('syntax','@CMPND','CMPND')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('syntax','!@CMPND','!CMPND')"
	      )
	   ),
	    7, new Hash(
         'contents', 'OBJ',
	      'type', 'js',
	      'uri', "addOpt('syntax','@OBJ','OBJ')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('syntax','@OBJ','OBJ')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('syntax','!@OBJ','!OBJ')"
	      )
	   ),
	    8, new Hash(
         'contents', 'PrcN>',
	      'type', 'js',
	      'uri', "addOpt('syntax','@PrcN>','PrcN>')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('syntax','@PrcN>','PrcN>')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('syntax','!@PrcN>','!PrcN>')"
	      )
	   ),
	    9, new Hash(
         'contents', 'CS-COMPL',
	      'type', 'js',
	      'uri', "addOpt('syntax','@CS-COMPL','CS-COMPL')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('syntax','@CS-COMPL','CS-COMPL')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('syntax','!@CS-COMPL','!CS-COMPL')"
	      )
	   ),
	    10, new Hash(
         'contents', 'SUBJ-QH',
	      'type', 'js',
	      'uri', "addOpt('syntax','@SUBJ-QH','SUBJ-QH')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('syntax','@SUBJ-QH','SUBJ-QH')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('syntax','!@SUBJ-QH','!SUBJ-QH')"
	      )
	   ),
	    11, new Hash(
         'contents', 'SPRED',
	      'type', 'js',
	      'uri', "addOpt('syntax','@SPRED','SPRED')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('syntax','@SPRED','SPRED')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('syntax','!@SPRED','!SPRED')"
	      )
	   ),
	    12, new Hash(
         'contents', 'AN>',
	      'type', 'js',
	      'uri', "addOpt('syntax','@AN>','AN>')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('syntax','@AN>','AN>')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('syntax','!@AN>','!AN>')"
	      )
	   ),
	    13, new Hash(
         'contents', 'VOC',
	      'type', 'js',
	      'uri', "addOpt('syntax','@VOC','VOC')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('syntax','@VOC','VOC')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('syntax','!@VOC','!VOC')"
	      )
	   ),
	    14, new Hash(
         'contents', 'DN>',
	      'type', 'js',
	      'uri', "addOpt('syntax','@DN>','DN>')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('syntax','@DN>','DN>')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('syntax','!@DN>','!DN>')"
	      )
	   ),
	    15, new Hash(
         'contents', 'NNum',
	      'type', 'js',
	      'uri', "addOpt('syntax','@NNum>','NNum')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('syntax','@NNum>','NNum')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('syntax','!@NNum>','!NNum')"
	      )
	   ),
	    16, new Hash(
         'contents', '+FAUXV',
	      'type', 'js',
	      'uri', "addOpt('syntax','@+FAUXV','+FAUXV')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('syntax','@+FAUXV','+FAUXV')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('syntax','!@+FAUXV','!+FAUXV')"
	      )
	   ),
	    17, new Hash(
         'contents', 'GA>',
	      'type', 'js',
	      'uri', "addOpt('syntax','@GA>','GA>')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('syntax','@GA>','GA>')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('syntax','!@GA>','!GA>')"
	      )
	   ),
	    18, new Hash(
         'contents', 'ADV-ADV',
	      'type', 'js',
	      'uri', "addOpt('syntax','@ADV-ADV','ADV-ADV')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('syntax','@ADV-ADV','ADV-ADV')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('syntax','!@ADV-ADV','!ADV-ADV')"
	      )
	   ),
	    19, new Hash(
         'contents', 'NumQ',
	      'type', 'js',
	      'uri', "addOpt('syntax','@NumQ<','NumQ')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('syntax','@NumQ<','NumQ')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('syntax','!@NumQ<','!NumQ')"
	      )
	   ),
	    20, new Hash(
         'contents', '-FAUXV',
	      'type', 'js',
	      'uri', "addOpt('syntax','@-FAUXV','-FAUXV')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('syntax','@-FAUXV','-FAUXV')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('syntax','!@-FAUXV','!-FAUXV')"
	      )
	   ),
	    21, new Hash(
         'contents', 'GP>',
	      'type', 'js',
	      'uri', "addOpt('syntax','@GP>','GP>')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('syntax','@GP>','GP>')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('syntax','!@GP>','!GP>')"
	      )
	   ),
	    22, new Hash(
         'contents', '-FSUBJ',
	      'type', 'js',
	      'uri', "addOpt('syntax','@-FSUBJ','-FSUBJ')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('syntax','@-FSUBJ','-FSUBJ')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('syntax','!@-FSUBJ','!-FSUBJ')"
	      )
	   ),
	    23, new Hash(
         'contents', 'PROP>',
	      'type', 'js',
	      'uri', "addOpt('syntax','@PROP>','PROP>')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('syntax','@PROP>','PROP>')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('syntax','!@PROP>','!PROP>')"
	      )
	   ),
	    24, new Hash(
         'contents', 'QN<',
	      'type', 'js',
	      'uri', "addOpt('syntax','@QN<','QN<')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('syntax','@QN<','QN<')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('syntax','!@QN<','!QN<')"
	      )
	   ),
	    25, new Hash(
         'contents', 'PronN<',
	      'type', 'js',
	      'uri', "addOpt('syntax','@PronN<','PronN<')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('syntax','@PronN<','PronN<')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('syntax','!@PronN<','!PronN<')"
	      )
	   ),
	    26, new Hash(
         'contents', 'HNOUN',
	      'type', 'js',
	      'uri', "addOpt('syntax','@HNOUN','HNOUN')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('syntax','@HNOUN','HNOUN')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('syntax','!@HNOUN','!HNOUN')"
	      )
	   ),
	    27, new Hash(
         'contents', 'OPRED',
	      'type', 'js',
	      'uri', "addOpt('syntax','@OPRED','OPRED')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('syntax','@OPRED','OPRED')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('syntax','!@OPRED','!OPRED')"
	      )
	   ),
	    28, new Hash(
         'contents', 'SUBJ',
	      'type', 'js',
	      'uri', "addOpt('syntax','@SUBJ','SUBJ')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('syntax','@SUBJ','SUBJ')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('syntax','!@SUBJ','!SUBJ')"
	      )
	   ),
	    29, new Hash(
         'contents', 'CS',
	      'type', 'js',
	      'uri', "addOpt('syntax','@CS','CS')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('syntax','@CS','CS')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('syntax','!@CS','!CS')"
	      )
	   ),
	    30, new Hash(
         'contents', '+FMAINV',
	      'type', 'js',
	      'uri', "addOpt('syntax','@+FMAINV','+FMAINV')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('syntax','@+FMAINV','+FMAINV')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('syntax','!@+FMAINV','!+FMAINV')"
	      )
	   ),
	    31, new Hash(
         'contents', 'ADVL',
	      'type', 'js',
	      'uri', "addOpt('syntax','@ADVL','ADVL')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('syntax','@ADVL','ADVL')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('syntax','!@ADVL','!ADVL')"
	      )
	   ),
	    32, new Hash(
         'contents', 'NumN<',
	      'type', 'js',
	      'uri', "addOpt('syntax','@NumN<','NumN<')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('syntax','@NumN<','NumN<')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('syntax','!@NumN<','!NumN<')"
	      )
	   ),
	    33, new Hash(
         'contents', '-FMAINV',
	      'type', 'js',
	      'uri', "addOpt('syntax','@-FMAINV','-FMAINV')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('syntax','@-FMAINV','-FMAINV')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('syntax','!@-FMAINV','!-FMAINV')"
	      )
	   ),
	    34, new Hash(
         'contents', 'INTERJ',
	      'type', 'js',
	      'uri', "addOpt('syntax','@INTERJ','INTERJ')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('syntax','@INTERJ','INTERJ')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('syntax','!@INTERJ','!INTERJ')"
	      )
	   ),
	    35, new Hash(
         'contents', 'ActionN>',
	      'type', 'js',
	      'uri', "addOpt('syntax','@ActioN>','ActionN>')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('syntax','@ActioN>','ActionN>')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('syntax','!@ActioN>','!ActionN>')"
	      )
	   ),
	    36, new Hash(
         'contents', 'QN>',
	      'type', 'js',
	      'uri', "addOpt('syntax','@QN>','QN>')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('syntax','@QN>','QN>')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('syntax','!@QN>','!QN>')"
	      )
	   ),
	    37, new Hash(
         'contents', 'ADV-A',
	      'type', 'js',
	      'uri', "addOpt('syntax','@ADV-A','ADV-A')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('syntax','@ADV-A','ADV-A')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('syntax','!@ADV-A','!ADV-A')"
	      )
	   ),
	    38, new Hash(
         'contents', 'CC',
	      'type', 'js',
	      'uri', "addOpt('syntax','@CC','CC')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('syntax','@CC','CC')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('syntax','!@CC','!CC')"
	      )
	   )
) ));
}