var Menu;
function reloadMenuMusikk() {
Menu['MUSIKK'] = new Hash(     1, new Hash(
        'contents', '<nobr>&nbsp;valg &#187;&nbsp;</nobr>',
  	1, new Hash(
       'contents', 'ord &#187;&nbsp;',
	    1, new Hash(
         'contents', 'grunnform',
	      'type', 'js',
	      'uri', "addOpt('w','lemma','grunnform')"
	   ),
	    2, new Hash(
         'contents', 'midten av ordet',
	      'type', 'js',
	      'uri', "addOpt('w','middle','midten av ordet')"
	   ),
	    3, new Hash(
         'contents', 'slutten av ordet',
	      'type', 'js',
	      'uri', "addOpt('w','end','slutten av ordet')"
	   ),
	    4, new Hash(
         'contents', 'skill store/små bokst.',
	      'type', 'js',
	      'uri', "addOpt('w','case','skill store/små bokst.')"
	   ),
	    5, new Hash(
         'contents', 'starten av ordet',
	      'type', 'js',
	      'uri', "addOpt('w','start','starten av ordet')"
	   ),
	    6, new Hash(
         'contents', 'utelukk',
	      'type', 'js',
	      'uri', "addOpt('w','neg','utelukk')"
	   ),
	    7, new Hash(
         'contents', 'legg til ordform',
	      'type', 'js',
	      'uri', "addOpt('ADDSTRING','word','')"
	   ),
	    8, new Hash(
         'contents', 'legg til negert ordform',
	      'type', 'js',
	      'uri', "addOpt('ADDSTRING','word','!')"
	   ),
	    9, new Hash(
         'contents', 'legg til lemma',
	      'type', 'js',
	      'uri', "addOpt('ADDSTRING','lemma','')"
	   ),
	    10, new Hash(
         'contents', 'legg til negert lemma',
	      'type', 'js',
	      'uri', "addOpt('ADDSTRING','lemma','!')"
	   )
),
  	2, new Hash(
       'contents', 'forekomster &#187;&nbsp;',
	    1, new Hash(
         'contents', 'en eller flere',
	      'type', 'js',
	      'uri', "addOpt('occ','+','en eller flere')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('occ','+','en eller flere')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('occ','!+','!en eller flere')"
	      )
	   ),
	    2, new Hash(
         'contents', 'null eller én',
	      'type', 'js',
	      'uri', "addOpt('occ','?','null eller én')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('occ','?','null eller én')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('occ','!?','!null eller én')"
	      )
	   ),
	    3, new Hash(
         'contents', 'null eller flere',
	      'type', 'js',
	      'uri', "addOpt('occ','*','null eller flere')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('occ','*','null eller flere')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('occ','!*','!null eller flere')"
	      )
	   )
),
	  3, new Hash(
         'contents', '<br>'
         ),
  	4, new Hash(
       'contents', 'ordklasse &#187;&nbsp;',
	    1, new Hash(
         'contents', 'adjektiv',
	      'type', 'js',
	      'uri', "addOpt('pos','adj','adjektiv')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('pos','adj','adjektiv')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('pos','!adj','!adjektiv')"
	      )
	   ),
	    2, new Hash(
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
	    3, new Hash(
         'contents', 'determinativ',
	      'type', 'js',
	      'uri', "addOpt('pos','det','determinativ')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('pos','det','determinativ')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('pos','!det','!determinativ')"
	      )
	   ),
	    4, new Hash(
         'contents', 'infinitivsmerke',
	      'type', 'js',
	      'uri', "addOpt('pos','infmark','infinitivsmerke')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('pos','infmark','infinitivsmerke')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('pos','!infmark','!infinitivsmerke')"
	      )
	   ),
	    5, new Hash(
         'contents', 'interjeksjon',
	      'type', 'js',
	      'uri', "addOpt('pos','interj','interjeksjon')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('pos','interj','interjeksjon')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('pos','!interj','!interjeksjon')"
	      )
	   ),
	    6, new Hash(
         'contents', 'konjunksjon',
	      'type', 'js',
	      'uri', "addOpt('pos','conj','konjunksjon')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('pos','conj','konjunksjon')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('pos','!conj','!konjunksjon')"
	      )
	   ),
	    7, new Hash(
         'contents', 'preposisjon',
	      'type', 'js',
	      'uri', "addOpt('pos','prep','preposisjon')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('pos','prep','preposisjon')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('pos','!prep','!preposisjon')"
	      )
	   ),
	    8, new Hash(
         'contents', 'pronomen',
	      'type', 'js',
	      'uri', "addOpt('pos','pron','pronomen')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('pos','pron','pronomen')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('pos','!pron','!pronomen')"
	      )
	   ),
	    9, new Hash(
         'contents', 'subjunksjon',
	      'type', 'js',
	      'uri', "addOpt('pos','subj','subjunksjon')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('pos','subj','subjunksjon')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('pos','!subj','!subjunksjon')"
	      )
	   ),
	    10, new Hash(
         'contents', 'substantiv',
	      'type', 'js',
	      'uri', "addOpt('pos','n','substantiv')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('pos','n','substantiv')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('pos','!n','!substantiv')"
	      )
	   ),
			//11, new Hash(
         //'contents', 'tegnsetting',
				//'type', 'js',
				//'uri', "addOpt('pos','punkt','tegnsetting')"
//,
       //1, new Hash(
            //'contents', 'velg',
					 //'type', 'js',
					 //'uri', "addOpt('pos','punkt','tegnsetting')"
				//),
				//2, new Hash(
            //'contents', 'utelukk',
					 //'type', 'js',
					 //'uri', "addOpt('pos','!punkt','!tegnsetting')"
				//)
		 //),
	    11, new Hash(
         'contents', 'ukjent',
	      'type', 'js',
	      'uri', "addOpt('pos','unknown','ukjent')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('pos','unknown','ukjent')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('pos','!unknown','!ukjent')"
	      )
	   ),
	    12, new Hash(
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
	   )
),
    //5, new Hash(
       //'contents', 'tegnsetting &#187;&nbsp;',
			//1, new Hash(
         //'contents', 'anførselstegn',
				//'type', 'js',
				//'uri', "addOpt('type','cit','anførselstegn')"
//,
       //1, new Hash(
            //'contents', 'velg',
					 //'type', 'js',
					 //'uri', "addOpt('type','cit','anførselstegn')"
				//),
				//2, new Hash(
            //'contents', 'utelukk',
					 //'type', 'js',
					 //'uri', "addOpt('type','!cit','!anførselstegn')"
				//)
		 //),
			//2, new Hash(
         //'contents', 'ellipse',
				//'type', 'js',
				//'uri', "addOpt('type','ellipsis','ellipse')"
//,
       //1, new Hash(
            //'contents', 'velg',
					 //'type', 'js',
					 //'uri', "addOpt('type','ellipsis','ellipse')"
				//),
				//2, new Hash(
            //'contents', 'utelukk',
					 //'type', 'js',
					 //'uri', "addOpt('type','!ellipsis','!ellipse')"
				//)
		 //),
			//3, new Hash(
         //'contents', 'kolon',
				//'type', 'js',
				//'uri', "addOpt('type','colon','kolon')"
//,
       //1, new Hash(
            //'contents', 'velg',
					 //'type', 'js',
					 //'uri', "addOpt('type','colon','kolon')"
				//),
				//2, new Hash(
            //'contents', 'utelukk',
					 //'type', 'js',
					 //'uri', "addOpt('type','!colon','!kolon')"
				//)
		 //),
			//4, new Hash(
         //'contents', 'komma',
				//'type', 'js',
				//'uri', "addOpt('type','comma','komma')"
//,
       //1, new Hash(
            //'contents', 'velg',
					 //'type', 'js',
					 //'uri', "addOpt('type','comma','komma')"
				//),
				//2, new Hash(
            //'contents', 'utelukk',
					 //'type', 'js',
					 //'uri', "addOpt('type','!comma','!komma')"
				//)
		 //),
			//5, new Hash(
         //'contents', 'høyreparentes',
				//'type', 'js',
				//'uri', "addOpt('type','rpar','høyreparentes')"
//,
       //1, new Hash(
            //'contents', 'velg',
					 //'type', 'js',
					 //'uri', "addOpt('type','rpar','høyreparentes')"
				//),
				//2, new Hash(
            //'contents', 'utelukk',
					 //'type', 'js',
					 //'uri', "addOpt('type','!rpar','!høyreparentes')"
				//)
		 //),
			//6, new Hash(
         //'contents', 'punktum',
				//'type', 'js',
				//'uri', "addOpt('type','period','punktum')"
//,
       //1, new Hash(
            //'contents', 'velg',
					 //'type', 'js',
					 //'uri', "addOpt('type','period','punktum')"
				//),
				//2, new Hash(
            //'contents', 'utelukk',
					 //'type', 'js',
					 //'uri', "addOpt('type','!period','!punktum')"
				//)
		 //),
			//7, new Hash(
         //'contents', 'semikolon',
				//'type', 'js',
				//'uri', "addOpt('type','semicolon','semikolon')"
//,
       //1, new Hash(
            //'contents', 'velg',
					 //'type', 'js',
					 //'uri', "addOpt('type','semicolon','semikolon')"
				//),
				//2, new Hash(
            //'contents', 'utelukk',
					 //'type', 'js',
					 //'uri', "addOpt('type','!semicolon','!semikolon')"
				//)
		 //),
			//8, new Hash(
         //'contents', 'spørsmålstegn',
				//'type', 'js',
				//'uri', "addOpt('type','question','spørsmålstegn')"
//,
       //1, new Hash(
            //'contents', 'velg',
					 //'type', 'js',
					 //'uri', "addOpt('type','question','spørsmålstegn')"
				//),
				//2, new Hash(
            //'contents', 'utelukk',
					 //'type', 'js',
					 //'uri', "addOpt('type','!question','!spørsmålstegn')"
				//)
		 //),
			//9, new Hash(
         //'contents', 'strek',
				//'type', 'js',
				//'uri', "addOpt('type','dash','strek')"
//,
       //1, new Hash(
            //'contents', 'velg',
					 //'type', 'js',
					 //'uri', "addOpt('type','dash','strek')"
				//),
				//2, new Hash(
            //'contents', 'utelukk',
					 //'type', 'js',
					 //'uri', "addOpt('type','!dash','!strek')"
				//)
		 //),
			//10, new Hash(
         //'contents', 'utropstegn',
				//'type', 'js',
				//'uri', "addOpt('type','excl','utropstegn')"
//,
       //1, new Hash(
            //'contents', 'velg',
					 //'type', 'js',
					 //'uri', "addOpt('type','excl','utropstegn')"
				//),
				//2, new Hash(
            //'contents', 'utelukk',
					 //'type', 'js',
					 //'uri', "addOpt('type','!excl','!utropstegn')"
				//)
		 //),
			//11, new Hash(
         //'contents', 'venstreparentes',
				//'type', 'js',
				//'uri', "addOpt('type','lpar','venstreparentes')"
//,
       //1, new Hash(
            //'contents', 'velg',
					 //'type', 'js',
					 //'uri', "addOpt('type','lpar','venstreparentes')"
				//),
				//2, new Hash(
            //'contents', 'utelukk',
					 //'type', 'js',
					 //'uri', "addOpt('type','!lpar','!venstreparentes')"
				//)
		 //)
//),
	  5, new Hash(
         'contents', '<br>'
         ),
  	6, new Hash(
       'contents', 'trekk (pronomen) &#187;&nbsp;',
	    1, new Hash(
         'contents', 'human',
	      'type', 'js',
	      'uri', "addOpt('type','hum','human')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('type','hum','human')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('type','!hum','!human')"
	      )
	   ),
	    2, new Hash(
         'contents', 'høflig',
	      'type', 'js',
	      'uri', "addOpt('type','polite','høflig')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('type','polite','høflig')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('type','!polite','!høflig')"
	      )
	   ),
	    3, new Hash(
         'contents', 'personlig',
	      'type', 'js',
	      'uri', "addOpt('type','pers','personlig')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('type','pers','personlig')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('type','!pers','!personlig')"
	      )
	   ),
	    4, new Hash(
         'contents', 'refleksiv',
	      'type', 'js',
	      'uri', "addOpt('type','refl','refleksiv')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('type','refl','refleksiv')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('type','!refl','!refleksiv')"
	      )
	   ),
	    5, new Hash(
         'contents', 'resiprok',
	      'type', 'js',
	      'uri', "addOpt('type','resip','resiprok')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('type','resip','resiprok')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('type','!resip','!resiprok')"
	      )
	   ),
	    6, new Hash(
         'contents', 'spørrende',
	      'type', 'js',
	      'uri', "addOpt('type','question','spørrende')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('type','question','spørrende')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('type','!question','!spørrende')"
	      )
	   ),
	  7, new Hash(
         'contents', '<br><center><b>KASUS</b></center>'
         ),
	    8, new Hash(
         'contents', 'akkusativ',
	      'type', 'js',
	      'uri', "addOpt('mood~case','acc','akkusativ')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('mood~case','acc','akkusativ')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('mood~case','!acc','!akkusativ')"
	      )
	   ),
	    9, new Hash(
         'contents', 'genitiv',
	      'type', 'js',
	      'uri', "addOpt('mood~case','gen','genitiv')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('mood~case','gen','genitiv')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('mood~case','!gen','!genitiv')"
	      )
	   ),
	    10, new Hash(
         'contents', 'nominativ',
	      'type', 'js',
	      'uri', "addOpt('mood~case','nom','nominativ')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('mood~case','nom','nominativ')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('mood~case','!nom','!nominativ')"
	      )
	   ),
	  11, new Hash(
         'contents', '<br><center><b>PERSON</b></center>'
         ),
	    12, new Hash(
         'contents', '1. person',
	      'type', 'js',
	      'uri', "addOpt('person~type2','1','1. person')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('person~type2','1','1. person')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('person~type2','!1','!1. person')"
	      )
	   ),
	    13, new Hash(
         'contents', '2. person',
	      'type', 'js',
	      'uri', "addOpt('person~type2','2','2. person')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('person~type2','2','2. person')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('person~type2','!2','!2. person')"
	      )
	   ),
	    14, new Hash(
         'contents', '3. person',
	      'type', 'js',
	      'uri', "addOpt('person~type2','3','3. person')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('person~type2','3','3. person')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('person~type2','!3','!3. person')"
	      )
	   ),
	  15, new Hash(
         'contents', '<br><center><b>KJØNN</b></center>'
         ),
	    16, new Hash(
         'contents', 'feminin ',
	      'type', 'js',
	      'uri', "addOpt('gender','f','feminin ')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('gender','f','feminin ')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('gender','!f','!feminin ')"
	      )
	   ),
	    17, new Hash(
         'contents', 'maskulin',
	      'type', 'js',
	      'uri', "addOpt('gender','m','maskulin')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('gender','m','maskulin')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('gender','!m','!maskulin')"
	      )
	   ),
	    18, new Hash(
         'contents', 'feminin eller maskulin',
	      'type', 'js',
	      'uri', "addOpt('gender','m/f','feminin eller maskulin')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('gender','m/f','feminin eller maskulin')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('gender','!m/f','!feminin eller maskulin')"
	      )
	   ),
	    19, new Hash(
         'contents', 'nøytrum',
	      'type', 'js',
	      'uri', "addOpt('gender','n','nøytrum')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('gender','n','nøytrum')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('gender','!n','!nøytrum')"
	      )
	   ),
	  20, new Hash(
         'contents', '<br><center><b>TALL</b></center>'
         ),
	    21, new Hash(
         'contents', 'entall',
	      'type', 'js',
	      'uri', "addOpt('number','sg','entall')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('number','sg','entall')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('number','!sg','!entall')"
	      )
	   ),
	    22, new Hash(
         'contents', 'entall eller flertall',
	      'type', 'js',
	      'uri', "addOpt('number','sg/pl','entall eller flertall')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('number','sg/pl','entall eller flertall')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('number','!sg/pl','!entall eller flertall')"
	      )
	   ),
	    23, new Hash(
         'contents', 'flertall',
	      'type', 'js',
	      'uri', "addOpt('number','pl','flertall')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('number','pl','flertall')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('number','!pl','!flertall')"
	      )
	   )
),
  	7, new Hash(
       'contents', 'trekk (substantiv) &#187;&nbsp;',
	    1, new Hash(
         'contents', 'appellativ',
	      'type', 'js',
	      'uri', "addOpt('type','c','appellativ')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('type','c','appellativ')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('type','!c','!appellativ')"
	      )
	   ),
	    2, new Hash(
         'contents', 'proprium',
	      'type', 'js',
	      'uri', "addOpt('type','p','proprium')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('type','p','proprium')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('type','!p','!proprium')"
	      )
	   ),
	    3, new Hash(
         'contents', 'ingen bøyning',
	      'type', 'js',
	      'uri', "addOpt('type','noconj','ingen bøyning')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('type','noconj','ingen bøyning')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('type','!noconj','!ingen bøyning')"
	      )
	   ),
	  4, new Hash(
         'contents', '<br><center><b>KJØNN</b></center>'
         ),
	    5, new Hash(
         'contents', 'feminin',
	      'type', 'js',
	      'uri', "addOpt('gender','f','feminin')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('gender','f','feminin')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('gender','!f','!feminin')"
	      )
	   ),
	    6, new Hash(
         'contents', 'maskulin',
	      'type', 'js',
	      'uri', "addOpt('gender','m','maskulin')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('gender','m','maskulin')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('gender','!m','!maskulin')"
	      )
	   ),
	    7, new Hash(
         'contents', 'feminin eller maskulin',
	      'type', 'js',
	      'uri', "addOpt('gender','m/f','feminin eller maskulin')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('gender','m/f','feminin eller maskulin')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('gender','!m/f','!feminin eller maskulin')"
	      )
	   ),
	    8, new Hash(
         'contents', 'nøytrum',
	      'type', 'js',
	      'uri', "addOpt('gender','n','nøytrum')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('gender','n','nøytrum')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('gender','!n','!nøytrum')"
	      )
	   ),
	  9, new Hash(
         'contents', '<br><center><b>BESTEMTHET</b></center>'
         ),
	    10, new Hash(
         'contents', 'bestemt',
	      'type', 'js',
	      'uri', "addOpt('tense~defin','def','bestemt')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','def','bestemt')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','!def','!bestemt')"
	      )
	   ),
	    11, new Hash(
         'contents', 'bestemt eller ubestemt',
	      'type', 'js',
	      'uri', "addOpt('tense~defin','def/indef','bestemt eller ubestemt')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','def/indef','bestemt eller ubestemt')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','!def/indef','!bestemt eller ubestemt')"
	      )
	   ),
	    12, new Hash(
         'contents', 'ubestemt',
	      'type', 'js',
	      'uri', "addOpt('tense~defin','indef','ubestemt')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','indef','ubestemt')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','!indef','!ubestemt')"
	      )
	   ),
	  13, new Hash(
         'contents', '<br><center><b>TALL</b></center>'
         ),
	    14, new Hash(
         'contents', 'entall',
	      'type', 'js',
	      'uri', "addOpt('number','sg','entall')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('number','sg','entall')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('number','!sg','!entall')"
	      )
	   ),
	    15, new Hash(
         'contents', 'entall eller flertall',
	      'type', 'js',
	      'uri', "addOpt('number','sg/pl','entall eller flertall')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('number','sg/pl','entall eller flertall')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('number','!sg/pl','!entall eller flertall')"
	      )
	   ),
	    16, new Hash(
         'contents', 'flertall',
	      'type', 'js',
	      'uri', "addOpt('number','pl','flertall')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('number','pl','flertall')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('number','!pl','!flertall')"
	      )
	   )
),
  	8, new Hash(
       'contents', 'trekk (adjektiv)  &#187;&nbsp;',
	    1, new Hash(
         'contents', 'ordenstall',
	      'type', 'js',
	      'uri', "addOpt('type','ord','ordenstall')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('type','ord','ordenstall')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('type','!ord','!ordenstall')"
	      )
	   ),
	    2, new Hash(
         'contents', 'perfektum partisipp',
	      'type', 'js',
	      'uri', "addOpt('person~type2','pcp2','perfektum partisipp')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('person~type2','pcp2','perfektum partisipp')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('person~type2','!pcp2','!perfektum partisipp')"
	      )
	   ),
	    3, new Hash(
         'contents', 'presens partisipp',
	      'type', 'js',
	      'uri', "addOpt('person~type2','pcp1','presens partisipp')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('person~type2','pcp1','presens partisipp')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('person~type2','!pcp1','!presens partisipp')"
	      )
	   ),
	  4, new Hash(
         'contents', '<br><center><b>GRAD</b></center>'
         ),
	    5, new Hash(
         'contents', 'komparativ',
	      'type', 'js',
	      'uri', "addOpt('degr~dia','comp','komparativ')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('degr~dia','comp','komparativ')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('degr~dia','!comp','!komparativ')"
	      )
	   ),
	    6, new Hash(
         'contents', 'positiv',
	      'type', 'js',
	      'uri', "addOpt('degr~dia','pos','positiv')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('degr~dia','pos','positiv')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('degr~dia','!pos','!positiv')"
	      )
	   ),
	    7, new Hash(
         'contents', 'superlativ',
	      'type', 'js',
	      'uri', "addOpt('degr~dia','sup','superlativ')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('degr~dia','sup','superlativ')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('degr~dia','!sup','!superlativ')"
	      )
	   ),
	  8, new Hash(
         'contents', '<br><center><b>KJØNN</b></center>'
         ),
	    9, new Hash(
         'contents', 'feminin',
	      'type', 'js',
	      'uri', "addOpt('gender','f','feminin')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('gender','f','feminin')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('gender','!f','!feminin')"
	      )
	   ),
	    10, new Hash(
         'contents', 'feminin eller maskulin',
	      'type', 'js',
	      'uri', "addOpt('gender','m/f','feminin eller maskulin')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('gender','m/f','feminin eller maskulin')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('gender','!m/f','!feminin eller maskulin')"
	      )
	   ),
	    11, new Hash(
         'contents', 'maskulin',
	      'type', 'js',
	      'uri', "addOpt('gender','m','maskulin')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('gender','m','maskulin')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('gender','!m','!maskulin')"
	      )
	   ),
	    12, new Hash(
         'contents', 'nøytrum',
	      'type', 'js',
	      'uri', "addOpt('gender','n','nøytrum')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('gender','n','nøytrum')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('gender','!n','!nøytrum')"
	      )
	   )
),
  	9, new Hash(
       'contents', 'trekk (determinativ) &#187;&nbsp;',
	    1, new Hash(
         'contents', 'demonstrativ',
	      'type', 'js',
	      'uri', "addOpt('type','dem','demonstrativ')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('type','dem','demonstrativ')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('type','!dem','!demonstrativ')"
	      )
	   ),
	    2, new Hash(
         'contents', 'forsterkende',
	      'type', 'js',
	      'uri', "addOpt('type','emph','forsterkende')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('type','emph','forsterkende')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('type','!emph','!forsterkende')"
	      )
	   ),
	    3, new Hash(
         'contents', 'høflig',
	      'type', 'js',
	      'uri', "addOpt('type','polite','høflig')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('type','polite','høflig')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('type','!polite','!høflig')"
	      )
	   ),
	    4, new Hash(
         'contents', 'kvantor',
	      'type', 'js',
	      'uri', "addOpt('type','quant','kvantor')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('type','quant','kvantor')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('type','!quant','!kvantor')"
	      )
	   ),
	    5, new Hash(
         'contents', 'possesiv',
	      'type', 'js',
	      'uri', "addOpt('type','poss','possesiv')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('type','poss','possesiv')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('type','!poss','!possesiv')"
	      )
	   ),
	    6, new Hash(
         'contents', 'romertall',
	      'type', 'js',
	      'uri', "addOpt('type','roman','romertall')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('type','roman','romertall')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('type','!roman','!romertall')"
	      )
	   ),
	    7, new Hash(
         'contents', 'spørrende',
	      'type', 'js',
	      'uri', "addOpt('type','question','spørrende')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('type','question','spørrende')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('type','!question','!spørrende')"
	      )
	   )
),
  	10, new Hash(
       'contents', 'trekk (verb) &#187;&nbsp;',
	    1, new Hash(
         'contents', 'passiv',
	      'type', 'js',
	      'uri', "addOpt('degr~dia','pass','passiv')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('degr~dia','pass','passiv')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('degr~dia','!pass','!passiv')"
	      )
	   ),
	    2, new Hash(
         'contents', 'imperativ',
	      'type', 'js',
	      'uri', "addOpt('mood~case','imp','imperativ')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('mood~case','imp','imperativ')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('mood~case','!imp','!imperativ')"
	      )
	   ),
	    3, new Hash(
         'contents', 'infinitiv',
	      'type', 'js',
	      'uri', "addOpt('tense~defin','inf','infinitiv')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','inf','infinitiv')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','!inf','!infinitiv')"
	      )
	   ),
	    4, new Hash(
         'contents', 'presens',
	      'type', 'js',
	      'uri', "addOpt('tense~defin','pres','presens')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','pres','presens')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','!pres','!presens')"
	      )
	   ),
	    5, new Hash(
         'contents', 'preteritum',
	      'type', 'js',
	      'uri', "addOpt('tense~defin','past','preteritum')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','past','preteritum')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('tense~defin','!past','!preteritum')"
	      )
	   ),
	    6, new Hash(
         'contents', 'perfektum partisipp',
	      'type', 'js',
	      'uri', "addOpt('person~type2','pcp2','perfektum partisipp')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('person~type2','pcp2','perfektum partisipp')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('person~type2','!pcp2','!perfektum partisipp')"
	      )
	   ),
	    7, new Hash(
         'contents', 'ubøyelig',
	      'type', 'js',
	      'uri', "addOpt('type','noconj','ubøyelig')"
,
       1, new Hash(
            'contents', 'velg',
	         'type', 'js',
	         'uri', "addOpt('type','noconj','ubøyelig')"
	      ),
	      2, new Hash(
            'contents', 'utelukk',
	         'type', 'js',
	         'uri', "addOpt('type','!noconj','!ubøyelig')"
	      )
	   )
) ));
}
