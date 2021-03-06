var Menu;
function reloadMenuRun_ru() {
Menu['RUN_RU'] = new Hash(     1, new Hash(
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
       'contents', 'occurrences &#187;&nbsp;',
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
       'contents', 'Part of Speech &#187;&nbsp;',
	    1, new Hash(
         'contents', 'Noun',
	      'type', 'js',
	      'uri', "addOpt('pos','Noun','Noun')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('pos','Noun','Noun')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('pos','!Noun','!Noun')"
	      )
	   ),
	    2, new Hash(
         'contents', 'Verb',
	      'type', 'js',
	      'uri', "addOpt('pos','Verb','Verb')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('pos','Verb','Verb')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('pos','!Verb','!Verb')"
	      )
	   ),
	    3, new Hash(
         'contents', 'Adjective',
	      'type', 'js',
	      'uri', "addOpt('pos','Adjective','Adjective')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('pos','Adjective','Adjective')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('pos','!Adjective','!Adjective')"
	      )
	   ),
	    4, new Hash(
         'contents', 'Pronoun',
	      'type', 'js',
	      'uri', "addOpt('pos','Pronoun','Pronoun')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('pos','Pronoun','Pronoun')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('pos','!Pronoun','!Pronoun')"
	      )
	   ),
	    5, new Hash(
         'contents', 'Adverb',
	      'type', 'js',
	      'uri', "addOpt('pos','Adverb','Adverb')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('pos','Adverb','Adverb')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('pos','!Adverb','!Adverb')"
	      )
	   ),
	    6, new Hash(
         'contents', 'Adposition',
	      'type', 'js',
	      'uri', "addOpt('pos','Adposition','Adposition')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('pos','Adposition','Adposition')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('pos','!Adposition','!Adposition')"
	      )
	   ),
	    7, new Hash(
         'contents', 'Conjunction',
	      'type', 'js',
	      'uri', "addOpt('pos','Conjunction','Conjunction')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('pos','Conjunction','Conjunction')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('pos','!Conjunction','!Conjunction')"
	      )
	   ),
	    8, new Hash(
         'contents', 'Numeral',
	      'type', 'js',
	      'uri', "addOpt('pos','Numeral','Numeral')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('pos','Numeral','Numeral')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('pos','!Numeral','!Numeral')"
	      )
	   ),
	    9, new Hash(
         'contents', 'Particle',
	      'type', 'js',
	      'uri', "addOpt('pos','Particle','Particle')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('pos','Particle','Particle')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('pos','!Particle','!Particle')"
	      )
	   ),
	    10, new Hash(
         'contents', 'Interjection',
	      'type', 'js',
	      'uri', "addOpt('pos','Interjection','Interjection')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('pos','Interjection','Interjection')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('pos','!Interjection','!Interjection')"
	      )
	   )
),
  	6, new Hash(
       'contents', 'features (nouns) &#187;&nbsp;',
	    1, new Hash(
         'contents', 'Proper noun',
	      'type', 'js',
	      'uri', "addOpt('type','proper','Proper noun')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','proper','Proper noun')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!proper','!Proper noun')"
	      )
	   ),
	    2, new Hash(
         'contents', 'Common noun',
	      'type', 'js',
	      'uri', "addOpt('type','common','Common noun')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','common','Common noun')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!common','!Common noun')"
	      )
	   ),
	  3, new Hash(
         'contents', '<br><center><b>GENDER</b></center>'
         ),
	    4, new Hash(
         'contents', 'masculine',
	      'type', 'js',
	      'uri', "addOpt('degr~dia','masculine','masculine')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('degr~dia','masculine','masculine')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('degr~dia','!masculine','!masculine')"
	      )
	   ),
	    5, new Hash(
         'contents', 'feminine',
	      'type', 'js',
	      'uri', "addOpt('degr~dia','feminine','feminine')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('degr~dia','feminine','feminine')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('degr~dia','!feminine','!feminine')"
	      )
	   ),
	    6, new Hash(
         'contents', 'neuter',
	      'type', 'js',
	      'uri', "addOpt('degr~dia','neuter','neuter')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('degr~dia','neuter','neuter')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('degr~dia','!neuter','!neuter')"
	      )
	   ),
	    7, new Hash(
         'contents', 'common',
	      'type', 'js',
	      'uri', "addOpt('degr~dia','common','common')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('degr~dia','common','common')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('degr~dia','!common','!common')"
	      )
	   ),
	  8, new Hash(
         'contents', '<br><center><b>NUMBER</b></center>'
         ),
	    9, new Hash(
         'contents', 'plural',
	      'type', 'js',
	      'uri', "addOpt('tense~defin','plural','plural')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','plural','plural')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','!plural','!plural')"
	      )
	   ),
	    10, new Hash(
         'contents', 'singular',
	      'type', 'js',
	      'uri', "addOpt('tense~defin','singular','singular')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','singular','singular')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','!singular','!singular')"
	      )
	   ),
	  11, new Hash(
         'contents', '<br><center><b>CASE</b></center>'
         ),
	    12, new Hash(
         'contents', 'nominative',
	      'type', 'js',
	      'uri', "addOpt('mood~case','nominative','nominative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('mood~case','nominative','nominative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('mood~case','!nominative','!nominative')"
	      )
	   ),
	    13, new Hash(
         'contents', 'accusative',
	      'type', 'js',
	      'uri', "addOpt('mood~case','accusative','accusative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('mood~case','accusative','accusative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('mood~case','!accusative','!accusative')"
	      )
	   ),
	    14, new Hash(
         'contents', 'genitive',
	      'type', 'js',
	      'uri', "addOpt('mood~case','genitive','genitive')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('mood~case','genitive','genitive')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('mood~case','!genitive','!genitive')"
	      )
	   ),
	    15, new Hash(
         'contents', 'dative',
	      'type', 'js',
	      'uri', "addOpt('mood~case','dative','dative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('mood~case','dative','dative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('mood~case','!dative','!dative')"
	      )
	   ),
	    16, new Hash(
         'contents', 'locative',
	      'type', 'js',
	      'uri', "addOpt('mood~case','locative','locative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('mood~case','locative','locative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('mood~case','!locative','!locative')"
	      )
	   ),
	    17, new Hash(
         'contents', 'instrumental',
	      'type', 'js',
	      'uri', "addOpt('mood~case','instrumental','instrumental')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('mood~case','instrumental','instrumental')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('mood~case','!instrumental','!instrumental')"
	      )
	   ),
	    18, new Hash(
         'contents', 'vocative',
	      'type', 'js',
	      'uri', "addOpt('mood~case','vocative','vocative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('mood~case','vocative','vocative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('mood~case','!vocative','!vocative')"
	      )
	   ),
	    19, new Hash(
         'contents', 'm',
	      'type', 'js',
	      'uri', "addOpt('mood~case','m','m')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('mood~case','m','m')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('mood~case','!m','!m')"
	      )
	   ),
	  20, new Hash(
         'contents', '<br><center><b>ANIMACY</b></center>'
         ),
	    21, new Hash(
         'contents', 'animate',
	      'type', 'js',
	      'uri', "addOpt('person~type2','yes','animate')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('person~type2','yes','animate')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('person~type2','!yes','!animate')"
	      )
	   ),
	    22, new Hash(
         'contents', 'inanimate',
	      'type', 'js',
	      'uri', "addOpt('person~type2','no','inanimate')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('person~type2','no','inanimate')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('person~type2','!no','!inanimate')"
	      )
	   )
),
  	7, new Hash(
       'contents', 'features (verbs) &#187;&nbsp;',
	  1, new Hash(
         'contents', '<br><center><b>VFORM</b></center>'
         ),
	    2, new Hash(
         'contents', 'gerund',
	      'type', 'js',
	      'uri', "addOpt('degr~dia','gerund','gerund')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('degr~dia','gerund','gerund')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('degr~dia','!gerund','!gerund')"
	      )
	   ),
	    3, new Hash(
         'contents', 'imperative',
	      'type', 'js',
	      'uri', "addOpt('degr~dia','imperative','imperative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('degr~dia','imperative','imperative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('degr~dia','!imperative','!imperative')"
	      )
	   ),
	    4, new Hash(
         'contents', 'indicative',
	      'type', 'js',
	      'uri', "addOpt('degr~dia','indicative','indicative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('degr~dia','indicative','indicative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('degr~dia','!indicative','!indicative')"
	      )
	   ),
	    5, new Hash(
         'contents', 'infinitive',
	      'type', 'js',
	      'uri', "addOpt('degr~dia','infinitive','infinitive')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('degr~dia','infinitive','infinitive')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('degr~dia','!infinitive','!infinitive')"
	      )
	   ),
	    6, new Hash(
         'contents', 'participle',
	      'type', 'js',
	      'uri', "addOpt('degr~dia','participle','participle')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('degr~dia','participle','participle')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('degr~dia','!participle','!participle')"
	      )
	   ),
	  7, new Hash(
         'contents', '<br><center><b>TENSE</b></center>'
         ),
	    8, new Hash(
         'contents', 'future',
	      'type', 'js',
	      'uri', "addOpt('tense~defin','future','future')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','future','future')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','!future','!future')"
	      )
	   ),
	    9, new Hash(
         'contents', 'past',
	      'type', 'js',
	      'uri', "addOpt('tense~defin','past','past')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','past','past')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','!past','!past')"
	      )
	   ),
	    10, new Hash(
         'contents', 'present',
	      'type', 'js',
	      'uri', "addOpt('tense~defin','present','present')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','present','present')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','!present','!present')"
	      )
	   ),
	  11, new Hash(
         'contents', '<br><center><b>PERSON</b></center>'
         ),
	    12, new Hash(
         'contents', 'first',
	      'type', 'js',
	      'uri', "addOpt('mood~case','first','first')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('mood~case','first','first')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('mood~case','!first','!first')"
	      )
	   ),
	    13, new Hash(
         'contents', 'second',
	      'type', 'js',
	      'uri', "addOpt('mood~case','second','second')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('mood~case','second','second')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('mood~case','!second','!second')"
	      )
	   ),
	    14, new Hash(
         'contents', 'third',
	      'type', 'js',
	      'uri', "addOpt('mood~case','third','third')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('mood~case','third','third')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('mood~case','!third','!third')"
	      )
	   ),
	  15, new Hash(
         'contents', '<br><center><b>NUMBER</b></center>'
         ),
	    16, new Hash(
         'contents', 'singular',
	      'type', 'js',
	      'uri', "addOpt('person~type2','singular','singular')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('person~type2','singular','singular')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('person~type2','!singular','!singular')"
	      )
	   ),
	    17, new Hash(
         'contents', 'plural',
	      'type', 'js',
	      'uri', "addOpt('person~type2','plural','plural')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('person~type2','plural','plural')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('person~type2','!plural','!plural')"
	      )
	   ),
	  18, new Hash(
         'contents', '<br><center><b>GENDER</b></center>'
         ),
	    19, new Hash(
         'contents', 'masculine',
	      'type', 'js',
	      'uri', "addOpt('number','masculine','masculine')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('number','masculine','masculine')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('number','!masculine','!masculine')"
	      )
	   ),
	    20, new Hash(
         'contents', 'feminine',
	      'type', 'js',
	      'uri', "addOpt('number','feminine','feminine')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('number','feminine','feminine')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('number','!feminine','!feminine')"
	      )
	   ),
	    21, new Hash(
         'contents', 'neuter',
	      'type', 'js',
	      'uri', "addOpt('number','neuter','neuter')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('number','neuter','neuter')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('number','!neuter','!neuter')"
	      )
	   ),
	  22, new Hash(
         'contents', '<br><center><b>VOICE</b></center>'
         ),
	    23, new Hash(
         'contents', 'active',
	      'type', 'js',
	      'uri', "addOpt('gender','active','active')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('gender','active','active')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('gender','!active','!active')"
	      )
	   ),
	    24, new Hash(
         'contents', 'passive',
	      'type', 'js',
	      'uri', "addOpt('gender','passive','passive')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('gender','passive','passive')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('gender','!passive','!passive')"
	      )
	   ),
	    25, new Hash(
         'contents', 'medial',
	      'type', 'js',
	      'uri', "addOpt('gender','medial','medial')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('gender','medial','medial')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('gender','!medial','!medial')"
	      )
	   ),
	  26, new Hash(
         'contents', '<br><center><b>DEFINITENESS</b></center>'
         ),
	    27, new Hash(
         'contents', 'full-art',
	      'type', 'js',
	      'uri', "addOpt('extra1','full-art','full-art')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('extra1','full-art','full-art')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('extra1','!full-art','!full-art')"
	      )
	   ),
	    28, new Hash(
         'contents', 'short-art',
	      'type', 'js',
	      'uri', "addOpt('extra1','short-art','short-art')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('extra1','short-art','short-art')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('extra1','!short-art','!short-art')"
	      )
	   ),
	  29, new Hash(
         'contents', '<br><center><b>ASPECT</b></center>'
         ),
	    30, new Hash(
         'contents', 'perfective',
	      'type', 'js',
	      'uri', "addOpt('extra2','perfective','perfective')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('extra2','perfective','perfective')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('extra2','!perfective','!perfective')"
	      )
	   ),
	    31, new Hash(
         'contents', 'progressive',
	      'type', 'js',
	      'uri', "addOpt('extra2','progressive','progressive')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('extra2','progressive','progressive')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('extra2','!progressive','!progressive')"
	      )
	   ),
	  32, new Hash(
         'contents', '<br><center><b>CASE</b></center>'
         ),
	    33, new Hash(
         'contents', 'nominative',
	      'type', 'js',
	      'uri', "addOpt('extra3','nominative','nominative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('extra3','nominative','nominative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('extra3','!nominative','!nominative')"
	      )
	   ),
	    34, new Hash(
         'contents', 'accusative',
	      'type', 'js',
	      'uri', "addOpt('extra3','accusative','accusative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('extra3','accusative','accusative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('extra3','!accusative','!accusative')"
	      )
	   ),
	    35, new Hash(
         'contents', 'genitive',
	      'type', 'js',
	      'uri', "addOpt('extra3','genitive','genitive')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('extra3','genitive','genitive')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('extra3','!genitive','!genitive')"
	      )
	   ),
	    36, new Hash(
         'contents', 'dative',
	      'type', 'js',
	      'uri', "addOpt('extra3','dative','dative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('extra3','dative','dative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('extra3','!dative','!dative')"
	      )
	   ),
	    37, new Hash(
         'contents', 'locative',
	      'type', 'js',
	      'uri', "addOpt('extra3','locative','locative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('extra3','locative','locative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('extra3','!locative','!locative')"
	      )
	   ),
	    38, new Hash(
         'contents', 'instrumental',
	      'type', 'js',
	      'uri', "addOpt('extra3','instrumental','instrumental')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('extra3','instrumental','instrumental')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('extra3','!instrumental','!instrumental')"
	      )
	   )
),
  	8, new Hash(
       'contents', 'features (adjectives) &#187;&nbsp;',
	    1, new Hash(
         'contents', 'qualificative',
	      'type', 'js',
	      'uri', "addOpt('type','qualificative','qualificative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','qualificative','qualificative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!qualificative','!qualificative')"
	      )
	   ),
	  2, new Hash(
         'contents', '<br><center><b>DEGREE</b></center>'
         ),
	    3, new Hash(
         'contents', 'positive',
	      'type', 'js',
	      'uri', "addOpt('degr~dia','positive','positive')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('degr~dia','positive','positive')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('degr~dia','!positive','!positive')"
	      )
	   ),
	    4, new Hash(
         'contents', 'comparative',
	      'type', 'js',
	      'uri', "addOpt('degr~dia','comparative','comparative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('degr~dia','comparative','comparative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('degr~dia','!comparative','!comparative')"
	      )
	   ),
	  5, new Hash(
         'contents', '<br><center><b>GENDER</b></center>'
         ),
	    6, new Hash(
         'contents', 'masculine',
	      'type', 'js',
	      'uri', "addOpt('tense~defin','masculine','masculine')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','masculine','masculine')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','!masculine','!masculine')"
	      )
	   ),
	    7, new Hash(
         'contents', 'feminine',
	      'type', 'js',
	      'uri', "addOpt('tense~defin','feminine','feminine')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','feminine','feminine')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','!feminine','!feminine')"
	      )
	   ),
	    8, new Hash(
         'contents', 'neuter',
	      'type', 'js',
	      'uri', "addOpt('tense~defin','neuter','neuter')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','neuter','neuter')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','!neuter','!neuter')"
	      )
	   ),
	  9, new Hash(
         'contents', '<br><center><b>NUMBER</b></center>'
         ),
	    10, new Hash(
         'contents', 'singular',
	      'type', 'js',
	      'uri', "addOpt('mood~case','singular','singular')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('mood~case','singular','singular')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('mood~case','!singular','!singular')"
	      )
	   ),
	    11, new Hash(
         'contents', 'plural',
	      'type', 'js',
	      'uri', "addOpt('mood~case','plural','plural')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('mood~case','plural','plural')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('mood~case','!plural','!plural')"
	      )
	   ),
	  12, new Hash(
         'contents', '<br><center><b>CASE</b></center>'
         ),
	    13, new Hash(
         'contents', 'nominative',
	      'type', 'js',
	      'uri', "addOpt('person~type2','nominative','nominative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('person~type2','nominative','nominative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('person~type2','!nominative','!nominative')"
	      )
	   ),
	    14, new Hash(
         'contents', 'accusative',
	      'type', 'js',
	      'uri', "addOpt('person~type2','accusative','accusative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('person~type2','accusative','accusative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('person~type2','!accusative','!accusative')"
	      )
	   ),
	    15, new Hash(
         'contents', 'genitive',
	      'type', 'js',
	      'uri', "addOpt('person~type2','genitive','genitive')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('person~type2','genitive','genitive')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('person~type2','!genitive','!genitive')"
	      )
	   ),
	    16, new Hash(
         'contents', 'dative',
	      'type', 'js',
	      'uri', "addOpt('person~type2','dative','dative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('person~type2','dative','dative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('person~type2','!dative','!dative')"
	      )
	   ),
	    17, new Hash(
         'contents', 'locative',
	      'type', 'js',
	      'uri', "addOpt('person~type2','locative','locative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('person~type2','locative','locative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('person~type2','!locative','!locative')"
	      )
	   ),
	    18, new Hash(
         'contents', 'instrumental',
	      'type', 'js',
	      'uri', "addOpt('person~type2','instrumental','instrumental')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('person~type2','instrumental','instrumental')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('person~type2','!instrumental','!instrumental')"
	      )
	   ),
	  19, new Hash(
         'contents', '<br><center><b>DEFINITENESS</b></center>'
         ),
	    20, new Hash(
         'contents', 'full-art',
	      'type', 'js',
	      'uri', "addOpt('number','full-art','full-art')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('number','full-art','full-art')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('number','!full-art','!full-art')"
	      )
	   ),
	    21, new Hash(
         'contents', 'short-art',
	      'type', 'js',
	      'uri', "addOpt('number','short-art','short-art')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('number','short-art','short-art')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('number','!short-art','!short-art')"
	      )
	   )
),
  	9, new Hash(
       'contents', 'features (pronouns) &#187;&nbsp;',
	  1, new Hash(
         'contents', '<br><center><b>PERSON</b></center>'
         ),
	    2, new Hash(
         'contents', 'first',
	      'type', 'js',
	      'uri', "addOpt('degr~dia','first','first')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('degr~dia','first','first')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('degr~dia','!first','!first')"
	      )
	   ),
	    3, new Hash(
         'contents', 'second',
	      'type', 'js',
	      'uri', "addOpt('degr~dia','second','second')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('degr~dia','second','second')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('degr~dia','!second','!second')"
	      )
	   ),
	    4, new Hash(
         'contents', 'third',
	      'type', 'js',
	      'uri', "addOpt('degr~dia','third','third')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('degr~dia','third','third')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('degr~dia','!third','!third')"
	      )
	   ),
	  5, new Hash(
         'contents', '<br><center><b>GENDER</b></center>'
         ),
	    6, new Hash(
         'contents', 'masculine',
	      'type', 'js',
	      'uri', "addOpt('tense~defin','masculine','masculine')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','masculine','masculine')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','!masculine','!masculine')"
	      )
	   ),
	    7, new Hash(
         'contents', 'feminine',
	      'type', 'js',
	      'uri', "addOpt('tense~defin','feminine','feminine')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','feminine','feminine')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','!feminine','!feminine')"
	      )
	   ),
	    8, new Hash(
         'contents', 'neuter',
	      'type', 'js',
	      'uri', "addOpt('tense~defin','neuter','neuter')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','neuter','neuter')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','!neuter','!neuter')"
	      )
	   ),
	  9, new Hash(
         'contents', '<br><center><b>NUMBER</b></center>'
         ),
	    10, new Hash(
         'contents', 'singular',
	      'type', 'js',
	      'uri', "addOpt('mood~case','singular','singular')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('mood~case','singular','singular')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('mood~case','!singular','!singular')"
	      )
	   ),
	    11, new Hash(
         'contents', 'plural',
	      'type', 'js',
	      'uri', "addOpt('mood~case','plural','plural')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('mood~case','plural','plural')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('mood~case','!plural','!plural')"
	      )
	   ),
	  12, new Hash(
         'contents', '<br><center><b>CASE</b></center>'
         ),
	    13, new Hash(
         'contents', 'nominative',
	      'type', 'js',
	      'uri', "addOpt('person~type2','nominative','nominative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('person~type2','nominative','nominative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('person~type2','!nominative','!nominative')"
	      )
	   ),
	    14, new Hash(
         'contents', 'accusative',
	      'type', 'js',
	      'uri', "addOpt('person~type2','accusative','accusative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('person~type2','accusative','accusative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('person~type2','!accusative','!accusative')"
	      )
	   ),
	    15, new Hash(
         'contents', 'genitive',
	      'type', 'js',
	      'uri', "addOpt('person~type2','genitive','genitive')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('person~type2','genitive','genitive')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('person~type2','!genitive','!genitive')"
	      )
	   ),
	    16, new Hash(
         'contents', 'dative',
	      'type', 'js',
	      'uri', "addOpt('person~type2','dative','dative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('person~type2','dative','dative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('person~type2','!dative','!dative')"
	      )
	   ),
	    17, new Hash(
         'contents', 'locative',
	      'type', 'js',
	      'uri', "addOpt('person~type2','locative','locative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('person~type2','locative','locative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('person~type2','!locative','!locative')"
	      )
	   ),
	    18, new Hash(
         'contents', 'instrumental',
	      'type', 'js',
	      'uri', "addOpt('person~type2','instrumental','instrumental')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('person~type2','instrumental','instrumental')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('person~type2','!instrumental','!instrumental')"
	      )
	   ),
	  19, new Hash(
         'contents', '<br><center><b>ANIMACY</b></center>'
         ),
	    20, new Hash(
         'contents', 'animate',
	      'type', 'js',
	      'uri', "addOpt('gender','yes','animate')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('gender','yes','animate')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('gender','!yes','!animate')"
	      )
	   ),
	    21, new Hash(
         'contents', 'inanimate',
	      'type', 'js',
	      'uri', "addOpt('gender','no','inanimate')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('gender','no','inanimate')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('gender','!no','!inanimate')"
	      )
	   )
),
  	10, new Hash(
       'contents', 'features (adpositions) &#187;&nbsp;',
	    1, new Hash(
         'contents', 'preposition',
	      'type', 'js',
	      'uri', "addOpt('type','preposition','preposition')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','preposition','preposition')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!preposition','!preposition')"
	      )
	   ),
	    2, new Hash(
         'contents', 'c',
	      'type', 'js',
	      'uri', "addOpt('type','c','c')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','c','c')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!c','!c')"
	      )
	   ),
	  3, new Hash(
         'contents', '<br><center><b>CASE</b></center>'
         ),
	    4, new Hash(
         'contents', 'accusative',
	      'type', 'js',
	      'uri', "addOpt('tense~defin','accusative','accusative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','accusative','accusative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','!accusative','!accusative')"
	      )
	   ),
	    5, new Hash(
         'contents', 'genitive',
	      'type', 'js',
	      'uri', "addOpt('tense~defin','genitive','genitive')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','genitive','genitive')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','!genitive','!genitive')"
	      )
	   ),
	    6, new Hash(
         'contents', 'dative',
	      'type', 'js',
	      'uri', "addOpt('tense~defin','dative','dative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','dative','dative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','!dative','!dative')"
	      )
	   ),
	    7, new Hash(
         'contents', 'locative',
	      'type', 'js',
	      'uri', "addOpt('tense~defin','locative','locative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','locative','locative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','!locative','!locative')"
	      )
	   ),
	    8, new Hash(
         'contents', 'instrumental',
	      'type', 'js',
	      'uri', "addOpt('tense~defin','instrumental','instrumental')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','instrumental','instrumental')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','!instrumental','!instrumental')"
	      )
	   ),
	    9, new Hash(
         'contents', 'n',
	      'type', 'js',
	      'uri', "addOpt('tense~defin','n','n')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','n','n')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','!n','!n')"
	      )
	   )
),
  	11, new Hash(
       'contents', 'features (numerals) &#187;&nbsp;',
	    1, new Hash(
         'contents', 'cardinal',
	      'type', 'js',
	      'uri', "addOpt('type','cardinal','cardinal')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','cardinal','cardinal')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!cardinal','!cardinal')"
	      )
	   ),
	    2, new Hash(
         'contents', 'ordinal',
	      'type', 'js',
	      'uri', "addOpt('type','ordinal','ordinal')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','ordinal','ordinal')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!ordinal','!ordinal')"
	      )
	   ),
	    3, new Hash(
         'contents', 'p',
	      'type', 'js',
	      'uri', "addOpt('type','p','p')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('type','p','p')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('type','!p','!p')"
	      )
	   ),
	  4, new Hash(
         'contents', '<br><center><b>GENDER</b></center>'
         ),
	    5, new Hash(
         'contents', 'masculine',
	      'type', 'js',
	      'uri', "addOpt('degr~dia','masculine','masculine')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('degr~dia','masculine','masculine')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('degr~dia','!masculine','!masculine')"
	      )
	   ),
	    6, new Hash(
         'contents', 'feminine',
	      'type', 'js',
	      'uri', "addOpt('degr~dia','feminine','feminine')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('degr~dia','feminine','feminine')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('degr~dia','!feminine','!feminine')"
	      )
	   ),
	    7, new Hash(
         'contents', 'neuter',
	      'type', 'js',
	      'uri', "addOpt('degr~dia','neuter','neuter')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('degr~dia','neuter','neuter')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('degr~dia','!neuter','!neuter')"
	      )
	   ),
	  8, new Hash(
         'contents', '<br><center><b>NUMBER</b></center>'
         ),
	    9, new Hash(
         'contents', 'singular',
	      'type', 'js',
	      'uri', "addOpt('tense~defin','singular','singular')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','singular','singular')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','!singular','!singular')"
	      )
	   ),
	    10, new Hash(
         'contents', 'plural',
	      'type', 'js',
	      'uri', "addOpt('tense~defin','plural','plural')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','plural','plural')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','!plural','!plural')"
	      )
	   ),
	  11, new Hash(
         'contents', '<br><center><b>CASE</b></center>'
         ),
	    12, new Hash(
         'contents', 'nominative',
	      'type', 'js',
	      'uri', "addOpt('mood~case','nominative','nominative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('mood~case','nominative','nominative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('mood~case','!nominative','!nominative')"
	      )
	   ),
	    13, new Hash(
         'contents', 'accusative',
	      'type', 'js',
	      'uri', "addOpt('mood~case','accusative','accusative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('mood~case','accusative','accusative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('mood~case','!accusative','!accusative')"
	      )
	   ),
	    14, new Hash(
         'contents', 'genitive',
	      'type', 'js',
	      'uri', "addOpt('mood~case','genitive','genitive')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('mood~case','genitive','genitive')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('mood~case','!genitive','!genitive')"
	      )
	   ),
	    15, new Hash(
         'contents', 'dative',
	      'type', 'js',
	      'uri', "addOpt('mood~case','dative','dative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('mood~case','dative','dative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('mood~case','!dative','!dative')"
	      )
	   ),
	    16, new Hash(
         'contents', 'locative',
	      'type', 'js',
	      'uri', "addOpt('mood~case','locative','locative')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('mood~case','locative','locative')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('mood~case','!locative','!locative')"
	      )
	   ),
	    17, new Hash(
         'contents', 'instrumental',
	      'type', 'js',
	      'uri', "addOpt('mood~case','instrumental','instrumental')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('mood~case','instrumental','instrumental')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('mood~case','!instrumental','!instrumental')"
	      )
	   ),
	  18, new Hash(
         'contents', '<br><center><b>ANIMACY</b></center>'
         ),
	    19, new Hash(
         'contents', 'animate',
	      'type', 'js',
	      'uri', "addOpt('extra2','yes','animate')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('extra2','yes','animate')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('extra2','!yes','!animate')"
	      )
	   ),
	    20, new Hash(
         'contents', 'inanimate',
	      'type', 'js',
	      'uri', "addOpt('extra2','no','inanimate')"
,
       1, new Hash(
            'contents', 'choose',
	         'type', 'js',
	         'uri', "addOpt('extra2','no','inanimate')"
	      ),
	      2, new Hash(
            'contents', 'exclude',
	         'type', 'js',
	         'uri', "addOpt('extra2','!no','!inanimate')"
	      )
	   )
) ));

}