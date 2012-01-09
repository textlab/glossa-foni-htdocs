var Menu;
function reloadMenuScandiademo() {
    Menu['SCANDIADEMO'] =
        new Hash(
		 1, new Hash('contents', '<nobr>criteria&#187;&nbsp;</nobr>',
			     1, new Hash(
					 'contents', 'word &#187;&nbsp;',
					 1, new Hash(
						     'contents', 'lemma',
						     'type', 'js',
						     'uri', "addOpt('w','lemma','lemma')"
						     ),
					 2, new Hash(
						     'contents', 'start of word',
						     'type', 'js',
						     'uri', "addOpt('w','start','start of word')"
						     ),
					 3, new Hash(
						     'contents', 'within word',
						     'type', 'js',
						     'uri', "addOpt('w','middle','within word')"
						     ),
					 4, new Hash(
						     'contents', 'end of word',
						     'type', 'js',
						     'uri', "addOpt('w','end','end of word')"
						     ),
					 5, new Hash(
						     'contents', 'case sensitive',
						     'type', 'js',
						     'uri', "addOpt('w','case','case sensitive')"
						     ),
					 6, new Hash(
						     'contents', 'exclude word',
						     'type', 'js',
						     'uri', "addOpt('w','neg','exclude')"
						     ),
					 7, new Hash(
						     'contents', 'add word form',
						     'type', 'js',
						     'uri', "addOpt('ADDSTRING','word','')"
						     ),
					 8, new Hash(
						     'contents', 'add negated word form',
						     'type', 'js',
						     'uri', "addOpt('ADDSTRING','word','!')"
						     ),
					 9, new Hash(
						     'contents', 'add lemma',
						     'type', 'js',
						     'uri', "addOpt('ADDSTRING','lemma','')"
						     ),
					 10, new Hash(
						      'contents', 'add negated lemma',
						      'type', 'js',
						      'uri', "addOpt('ADDSTRING','lemma','!')"
						      ),
					 11, new Hash(
						      'contents', 'segment initial',
						      'type', 'js',
						      'uri', "addOpt('start','start','start')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('start','!start','!start')"
								  )
						      )
					 ),
			     2, new Hash(
					 'contents', 'occurrences &#187;&nbsp;',
					 1, new Hash(
						     'contents', 'one or more',
						     'type', 'js',
						     'uri', "addOpt('occ','+','one or more')",
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
					 2, new Hash(
						     'contents', 'zero or one',
						     'type', 'js',
						     'uri', "addOpt('occ','?','zero or one')",
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
						     ),
					 3, new Hash(
						     'contents', 'zero or more',
						     'type', 'js',
						     'uri', "addOpt('occ','*','zero or more')",
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
						     )
					 ),
			     3, new Hash(
					  'contents', 'pos &#187;',
					  1, new Hash(
						      'contents', '(spm)',
						      'type', 'js',
						      'uri', "addOpt('pos','(spm)','(spm)')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('pos','!(spm)','!(spm)')"
								  )
						      ),
					  2, new Hash(
						      'contents', 'adj',
						      'type', 'js',
						      'uri', "addOpt('pos','adj','adj')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('pos','!adj','!adj')"
								  )
						      ),
					  3, new Hash(
						      'contents', 'adv',
						      'type', 'js',
						      'uri', "addOpt('pos','adv','adv')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('pos','!adv','!adv')"
								  )
						      ),
					  4, new Hash(
						      'contents', 'cbl',
						      'type', 'js',
						      'uri', "addOpt('pos','cbl','cbl')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('pos','!cbl','!cbl')"
								  )
						      ),
					  5, new Hash(
						      'contents', 'det',
						      'type', 'js',
						      'uri', "addOpt('pos','det','det')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('pos','!det','!det')"
								  )
						      ),
					  6, new Hash(
						      'contents', 'inf-merke',
						      'type', 'js',
						      'uri', "addOpt('pos','inf-merke','inf-merke')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('pos','!inf-merke','!inf-merke')"
								  )
						      ),
					  7, new Hash(
						      'contents', 'interj',
						      'type', 'js',
						      'uri', "addOpt('pos','interj','interj')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('pos','!interj','!interj')"
								  )
						      ),
					  8, new Hash(
						       'contents', 'konj',
						       'type', 'js',
						       'uri', "addOpt('pos','konj','konj')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!konj','!konj')"
								   )
						       ),
					  9, new Hash(
						       'contents', 'pause',
						       'type', 'js',
						       'uri', "addOpt('pos','pause','pause')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!pause','!pause')"
								   )
						       ),
					  10, new Hash(
						       'contents', 'pause2',
						       'type', 'js',
						       'uri', "addOpt('pos','pause2','pause2')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!pause2','!pause2')"
								   )
						       ),
					  11, new Hash(
						       'contents', 'prep',
						       'type', 'js',
						       'uri', "addOpt('pos','prep','prep')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!prep','!prep')"
								   )
						       ),
					  12, new Hash(
						       'contents', 'pron',
						       'type', 'js',
						       'uri', "addOpt('pos','pron','pron')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!pron','!pron')"
								   )
						       ),
					  13, new Hash(
						       'contents', 'pron/det',
						       'type', 'js',
						       'uri', "addOpt('pos','pron/det','pron/det')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!pron/det','!pron/det')"
								   )
						       ),
					  14, new Hash(
						       'contents', 'sbu',
						       'type', 'js',
						       'uri', "addOpt('pos','sbu','sbu')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!sbu','!sbu')"
								   )
						       ),
					  15, new Hash(
						       'contents', 'subst',
						       'type', 'js',
						       'uri', "addOpt('pos','subst','subst')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!subst','!subst')"
								   )
						       ),
					  16, new Hash(
						       'contents', 'subst:adj',
						       'type', 'js',
						       'uri', "addOpt('pos','subst:adj','subst:adj')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!subst:adj','!subst:adj')"
								   )
						       ),
					  17, new Hash(
						       'contents', 'sånn',
						       'type', 'js',
						       'uri', "addOpt('pos','sånn','sånn')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!sånn','!sånn')"
								   )
						       ),
					  18, new Hash(
						       'contents', 'ukjent',
						       'type', 'js',
						       'uri', "addOpt('pos','ukjent','ukjent')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!ukjent','!ukjent')"
								   )
						       ),
					  19, new Hash(
						       'contents', 'verb',
						       'type', 'js',
						       'uri', "addOpt('pos','verb','verb')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!verb','!verb')"
								   )
						       ),
					  20, new Hash(
						       'contents', 'verb:subst',
						       'type', 'js',
						       'uri', "addOpt('pos','verb:subst','verb:subst')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!verb:subst','!verb:subst')"
								   )
						       ),
					  21, new Hash(
						      'contents', 'ambiguous',
						      'type', 'js',
						      'uri', "addOpt('pos','ambiguous','ambiguous')",
						      1, new Hash(
								  'contents', 'adv:interj',
								  'type', 'js',
								  'uri', "addOpt('pos','adv:interj','adv:interj')",
								  1, new Hash(
									      'contents', 'exclude',
									      'type', 'js',
									      'uri', "addOpt('pos','!adv:interj','!adv:interj')"
									      )
								  ),
						      2, new Hash(
								  'contents', 'adv:sbu',
								  'type', 'js',
								  'uri', "addOpt('pos','adv:sbu','adv:sbu')",
								  1, new Hash(
									      'contents', 'exclude',
									      'type', 'js',
									      'uri', "addOpt('pos','!adv:sbu','!adv:sbu')"
									      )
								  ),
						      3, new Hash(
								   'contents', 'konj:adv',
								   'type', 'js',
								   'uri', "addOpt('pos','konj:adv','konj:adv')",
								   1, new Hash(
									       'contents', 'exclude',
									       'type', 'js',
									       'uri', "addOpt('pos','!konj:adv','!konj:adv')"
									       )
								   ),
						      4, new Hash(
								   'contents', 'konj:prep:adv',
								   'type', 'js',
								   'uri', "addOpt('pos','konj:prep:adv','konj:prep:adv')",
								   1, new Hash(
									       'contents', 'exclude',
									       'type', 'js',
									       'uri', "addOpt('pos','!konj:prep:adv','!konj:prep:adv')"
									       )
								   ),
						      5, new Hash(
								   'contents', 'konj:sbu',
								   'type', 'js',
								   'uri', "addOpt('pos','konj:sbu','konj:sbu')",
								   1, new Hash(
									       'contents', 'exclude',
									       'type', 'js',
									       'uri', "addOpt('pos','!konj:sbu','!konj:sbu')"
									       )
								   ),
						      6, new Hash(
								   'contents', 'konj:sbu:adv',
								   'type', 'js',
								   'uri', "addOpt('pos','konj:sbu:adv','konj:sbu:adv')",
								   1, new Hash(
									       'contents', 'exclude',
									       'type', 'js',
									       'uri', "addOpt('pos','!konj:sbu:adv','!konj:sbu:adv')"
									       )
								   ),
						      7, new Hash(
								   'contents', 'konj:sbu:det',
								   'type', 'js',
								   'uri', "addOpt('pos','konj:sbu:det','konj:sbu:det')",
								   1, new Hash(
									       'contents', 'exclude',
									       'type', 'js',
									       'uri', "addOpt('pos','!konj:sbu:det','!konj:sbu:det')"
									       )
								  ),
						      8, new Hash(
								   'contents', 'prep:sbu',
								   'type', 'js',
								   'uri', "addOpt('pos','prep:sbu','prep:sbu')",
								   1, new Hash(
									       'contents', 'exclude',
									       'type', 'js',
									       'uri', "addOpt('pos','!prep:sbu','!prep:sbu')"
									       )
								   ),
						      9, new Hash(
								   'contents', 'sbu:adv',
								   'type', 'js',
								   'uri', "addOpt('pos','sbu:adv','sbu:adv')",
								   1, new Hash(
									       'contents', 'exclude',
									       'type', 'js',
									       'uri', "addOpt('pos','!sbu:adv','!sbu:adv')"
									       )
								   ),
						      10, new Hash(
								   'contents', 'sbu:prep',
								   'type', 'js',
								   'uri', "addOpt('pos','sbu:prep','sbu:prep')",
								   1, new Hash(
									       'contents', 'exclude',
									       'type', 'js',
									       'uri', "addOpt('pos','!sbu:prep','!sbu:prep')"
									       )
								   ),
						      11, new Hash(
								   'contents', 'subst:adj',
								   'type', 'js',
								   'uri', "addOpt('pos','subst:adj','subst:adj')",
								   1, new Hash(
									       'contents', 'exclude',
									       'type', 'js',
									       'uri', "addOpt('pos','!subst:adj','!subst:adj')"
									       )
								   ),
						      12, new Hash(
								   'contents', 'verb:subst',
								   'type', 'js',
								   'uri', "addOpt('pos','verb:subst','verb:subst')",
								   1, new Hash(
									       'contents', 'exclude',
									       'type', 'js',
									       'uri', "addOpt('pos','!verb:subst','!verb:subst')"
									       )
								   )
						       )
					  ),
			     
			     4, new Hash(
					 'contents', 'num &#187;',
					 1, new Hash(
						     'contents', 'ent',
						     'type', 'js',
						     'uri', "addOpt('num','ent','ent')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('num','!ent','!ent')"
								 )
						     ),
					 2, new Hash(
						     'contents', 'ent_fl',
						     'type', 'js',
						     'uri', "addOpt('num','ent_fl','ent_fl')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('num','!ent_fl','!ent_fl')"
								 )
						     ),
					 3, new Hash(
						     'contents', 'ent_l',
						     'type', 'js',
						     'uri', "addOpt('num','ent_l','ent_l')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('num','!ent_l','!ent_l')"
								 )
						     ),
					 4, new Hash(
						     'contents', 'fl',
						     'type', 'js',
						     'uri', "addOpt('num','fl','fl')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('num','!fl','!fl')"
								 )
						     )
					 ),
			     5, new Hash(
					 'contents', 'degr &#187;',
					 1, new Hash(
						     'contents', 'komp',
						     'type', 'js',
						     'uri', "addOpt('degr','komp','komp')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('degr','!komp','!komp')"
								 )
						     ),
					 2, new Hash(
						     'contents', 'pos',
						     'type', 'js',
						     'uri', "addOpt('degr','pos','pos')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('degr','!pos','!pos')"
								 )
						     ),
					 3, new Hash(
						     'contents', 'sup',
						     'type', 'js',
						     'uri', "addOpt('degr','sup','sup')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('degr','!sup','!sup')"
								 )
						     )
					 ),
			     6, new Hash(
					 'contents', 'case &#187;',
					 1, new Hash(
						     'contents', 'akk',
						     'type', 'js',
						     'uri', "addOpt('case','akk','akk')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('case','!akk','!akk')"
								 )
						     ),
					 2, new Hash(
						     'contents', 'akk_subj',
						     'type', 'js',
						     'uri', "addOpt('case','akk_subj','akk_subj')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('case','!akk_subj','!akk_subj')"
								 )
						     ),
					 3, new Hash(
						     'contents', 'gen',
						     'type', 'js',
						     'uri', "addOpt('case','gen','gen')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('case','!gen','!gen')"
								 )
						     ),
					 4, new Hash(
						     'contents', 'nom',
						     'type', 'js',
						     'uri', "addOpt('case','nom','nom')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('case','!nom','!nom')"
								 )
						     ),
					 5, new Hash(
						     'contents', 'nom:akk',
						     'type', 'js',
						     'uri', "addOpt('case','nom:akk','nom:akk')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('case','!nom:akk','!nom:akk')"
								 )
						     ),
					 6, new Hash(
						     'contents', 'nom_obj',
						     'type', 'js',
						     'uri', "addOpt('case','nom_obj','nom_obj')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('case','!nom_obj','!nom_obj')"
								 )
						     )
					 ),
			     7, new Hash(
					 'contents', 'sex &#187;',
					 1, new Hash(
						     'contents', 'fem',
						     'type', 'js',
						     'uri', "addOpt('sex','fem','fem')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('sex','!fem','!fem')"
								 )
						     ),
					 2, new Hash(
						     'contents', 'm:f',
						     'type', 'js',
						     'uri', "addOpt('sex','m:f','m:f')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('sex','!m:f','!m:f')"
								 )
						     ),
					 3, new Hash(
						     'contents', 'mask',
						     'type', 'js',
						     'uri', "addOpt('sex','mask','mask')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('sex','!mask','!mask')"
								 )
						     ),
					 4, new Hash(
						     'contents', 'mask_fem',
						     'type', 'js',
						     'uri', "addOpt('sex','mask_fem','mask_fem')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('sex','!mask_fem','!mask_fem')"
								 )
						     ),
					 5, new Hash(
						     'contents', 'mask_fem_n&oslash;yt',
						     'type', 'js',
						     'uri', "addOpt('sex','mask_fem_nøyt','mask_fem_nøyt')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('sex','!mask_fem_nøyt','!mask_fem_nøyt')"
								 )
						     ),
					 6, new Hash(
						     'contents', 'mask_n&oslash;yt',
						     'type', 'js',
						     'uri', "addOpt('sex','mask_nøyt','mask_nøyt')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('sex','!mask_nøyt','!mask_nøyt')"
								 )
						     ),
					 7, new Hash(
						     'contents', 'n&oslash;yt',
						     'type', 'js',
						     'uri', "addOpt('sex','nøyt','nøyt')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('sex','!nøyt','!nøyt')"
								 )
						     )
					 ),
			     8, new Hash(
					 'contents', 'nlex &#187;',
					 1, new Hash(
						     'contents', 'avbrudd',
						     'type', 'js',
						     'uri', "addOpt('nlex','avbrudd','avbrudd')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('nlex','!avbrudd','!avbrudd')"
								 )
						     ),
					 2, new Hash(
						     'contents', 'bakre_klikkelyd',
						     'type', 'js',
						     'uri', "addOpt('nlex','bakre_klikkelyd','bakre_klikkelyd')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('nlex','!bakre_klikkelyd','!bakre_klikkelyd')"
								 )
						     ),
					 3, new Hash(
						     'contents', 'fremre_klikkelyd',
						     'type', 'js',
						     'uri', "addOpt('nlex','fremre_klikkelyd','fremre_klikkelyd')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('nlex','!fremre_klikkelyd','!fremre_klikkelyd')"
								 )
						     ),
					 4, new Hash(
						     'contents', 'gjesping',
						     'type', 'js',
						     'uri', "addOpt('nlex','gjesping','gjesping')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('nlex','!gjesping','!gjesping')"
								 )
						     ),
					 5, new Hash(
						     'contents', 'hosting',
						     'type', 'js',
						     'uri', "addOpt('nlex','hosting','hosting')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('nlex','!hosting','!hosting')"
								 )
						     ),
					 6, new Hash(
						     'contents', 'klikkelyd',
						     'type', 'js',
						     'uri', "addOpt('nlex','klikkelyd','klikkelyd')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('nlex','!klikkelyd','!klikkelyd')"
								 )
						     ),
					 7, new Hash(
						     'contents', 'knipsing',
						     'type', 'js',
						     'uri', "addOpt('nlex','knipsing','knipsing')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('nlex','!knipsing','!knipsing')"
								 )
						     ),
					 8, new Hash(
						     'contents', 'kremting',
						     'type', 'js',
						     'uri', "addOpt('nlex','kremting','kremting')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('nlex','!kremting','!kremting')"
								 )
						     ),
					 9, new Hash(
						     'contents', 'kyssing',
						     'type', 'js',
						     'uri', "addOpt('nlex','kyssing','kyssing')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('nlex','!kyssing','!kyssing')"
								 )
						     ),
					 10, new Hash(
						      'contents', 'labial_frikativ',
						      'type', 'js',
						      'uri', "addOpt('nlex','labial_frikativ','labial_frikativ')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!labial_frikativ','!labial_frikativ')"
								  )
						      ),
					 11, new Hash(
						      'contents', 'labial_vibrant',
						      'type', 'js',
						      'uri', "addOpt('nlex','labial_vibrant','labial_vibrant')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!labial_vibrant','!labial_vibrant')"
								  )
						      ),
					 12, new Hash(
						      'contents', 'latter',
						      'type', 'js',
						      'uri', "addOpt('nlex','latter','latter')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!latter','!latter')"
								  )
						      ),
					 13, new Hash(
						      'contents', 'leende',
						      'type', 'js',
						      'uri', "addOpt('nlex','leende','leende')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!leende','!leende')"
								  )
						      ),
					 14, new Hash(
						      'contents', 'lydmalende_ord',
						      'type', 'js',
						      'uri', "addOpt('nlex','lydmalende_ord','lydmalende_ord')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!lydmalende_ord','!lydmalende_ord')"
								  )
						      ),
					 15, new Hash(
						      'contents', 'nysing',
						      'type', 'js',
						      'uri', "addOpt('nlex','nysing','nysing')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!nysing','!nysing')"
								  )
						      ),
					 16, new Hash(
						      'contents', 'plystring',
						      'type', 'js',
						      'uri', "addOpt('nlex','plystring','plystring')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!plystring','!plystring')"
								  )
						      ),
					 17, new Hash(
						      'contents', 'pusting',
						      'type', 'js',
						      'uri', "addOpt('nlex','pusting','pusting')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!pusting','!pusting')"
								  )
						      ),
					 18, new Hash(
						      'contents', 'raping',
						      'type', 'js',
						      'uri', "addOpt('nlex','raping','raping')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!raping','!raping')"
								  )
						      ),
					 19, new Hash(
						      'contents', 'sibilant',
						      'type', 'js',
						      'uri', "addOpt('nlex','sibilant','sibilant')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!sibilant','!sibilant')"
								  )
						      ),
					 20, new Hash(
						      'contents', 'skriking',
						      'type', 'js',
						      'uri', "addOpt('nlex','skriking','skriking')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!skriking','!skriking')"
								  )
						      ),
					 21, new Hash(
						      'contents', 'snufsing',
						      'type', 'js',
						      'uri', "addOpt('nlex','snufsing','snufsing')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!snufsing','!snufsing')"
								  )
						      ),
					 22, new Hash(
						      'contents', 'stavet',
						      'type', 'js',
						      'uri', "addOpt('nlex','stavet','stavet')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!stavet','!stavet')"
								  )
						      ),
					 23, new Hash(
						      'contents', 'stoonning',
						      'type', 'js',
						      'uri', "addOpt('nlex','stønning','stønning')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!stønning','!stønning')"
								  )
						      ),
					 24, new Hash(
						      'contents', 'sugelyd',
						      'type', 'js',
						      'uri', "addOpt('nlex','sugelyd','sugelyd')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!sugelyd','!sugelyd')"
								  )
						      ),
					 25, new Hash(
						      'contents', 'sukking',
						      'type', 'js',
						      'uri', "addOpt('nlex','sukking','sukking')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!sukking','!sukking')"
								  )
						      ),
					 26, new Hash(
						      'contents', 'synging',
						      'type', 'js',
						      'uri', "addOpt('nlex','synging','synging')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!synging','!synging')"
								  )
						      ),
					 27, new Hash(
						      'contents', 'trekker_pusten',
						      'type', 'js',
						      'uri', "addOpt('nlex','trekker_pusten','trekker_pusten')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!trekker_pusten','!trekker_pusten')"
								  )
						      ),
					 28, new Hash(
						      'contents', 'uforståelig',
						      'type', 'js',
						      'uri', "addOpt('nlex','uforståelig','uforståelig')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!uforståelig','!uforståelig')"
								  )
						      ),
					 29, new Hash(
						      'contents', 'uklart',
						      'type', 'js',
						      'uri', "addOpt('nlex','uklart','uklart')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!uklart','!uklart')"
								  )
						      )
					 ),
			     9, new Hash(
					 'contents', 'pers &#187;',
					 1, new Hash(
						     'contents', '1.',
						     'type', 'js',
						     'uri', "addOpt('pers','1.','1.')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('pers','!1.','!1.')"
								 )
						     ),
					 2, new Hash(
						     'contents', '2.',
						     'type', 'js',
						     'uri', "addOpt('pers','2.','2.')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('pers','!2.','!2.')"
								 )
						     ),
					 3, new Hash(
						     'contents', '3.',
						     'type', 'js',
						     'uri', "addOpt('pers','3.','3.')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('pers','!3.','!3.')"
								 )
						     )
					 ),
			     10, new Hash(
					 'contents', 'temp &#187;',
					 1, new Hash(
						     'contents', 'imp',
						     'type', 'js',
						     'uri', "addOpt('temp','imp','imp')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('temp','!imp','!imp')"
								 )
						     ),
					 2, new Hash(
						     'contents', 'inf',
						     'type', 'js',
						     'uri', "addOpt('temp','inf','inf')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('temp','!inf','!inf')"
								 )
						     ),
					 3, new Hash(
						     'contents', 'inf:imp',
						     'type', 'js',
						     'uri', "addOpt('temp','inf:imp','inf:imp')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('temp','!inf:imp','!inf:imp')"
								 )
						     ),
					 4, new Hash(
						     'contents', 'perf-part',
						     'type', 'js',
						     'uri', "addOpt('temp','perf-part','perf-part')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('temp','!perf-part','!perf-part')"
								 )
						     ),
					 5, new Hash(
						     'contents', 'pres',
						     'type', 'js',
						     'uri', "addOpt('temp','pres','pres')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('temp','!pres','!pres')"
								 )
						     ),
					 6, new Hash(
						     'contents', 'pres:inf',
						     'type', 'js',
						     'uri', "addOpt('temp','pres:inf','pres:inf')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('temp','!pres:inf','!pres:inf')"
								 )
						     ),
					 7, new Hash(
						     'contents', 'pret',
						     'type', 'js',
						     'uri', "addOpt('temp','pret','pret')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('temp','!pret','!pret')"
								 )
						     ),
					 8, new Hash(
						     'contents', 'pret:perf-part',
						     'type', 'js',
						     'uri', "addOpt('temp','pret:perf-part','pret:perf-part')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('temp','!pret:perf-part','!pret:perf-part')"
								 )
						     )
					 ),
			     11, new Hash(
					  'contents', 'def &#187;',
					  1, new Hash(
						      'contents', 'be',
						      'type', 'js',
						      'uri', "addOpt('defn','be','be')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('defn','!be','!be')"
								  )
						      ),
					  2, new Hash(
						      'contents', 'ub',
						      'type', 'js',
						      'uri', "addOpt('defn','ub','ub')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('defn','!ub','!ub')"
								  )
						      ),
					  3, new Hash(
						      'contents', 'ub_be',
						      'type', 'js',
						      'uri', "addOpt('defn','ub_be','ub_be')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('defn','!ub_be','!ub_be')"
								  )
						      )
					  ),
			     12, new Hash(
					  'contents', 'descr &#187;',
					  1, new Hash(
						      'contents', 'gjespende',
						      'type', 'js',
						      'uri', "addOpt('descr','gjespende','gjespende')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('descr','!gjespende','!gjespende')"
								  )
						      ),
					  2, new Hash(
						      'contents', 'kommentar',
						      'type', 'js',
						      'uri', "addOpt('descr','kommentar','kommentar')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('descr','!kommentar','!kommentar')"
								  )
						      ),
					  3, new Hash(
						      'contents', 'me',
						      'type', 'js',
						      'uri', "addOpt('descr','me','me')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('descr','!me','!me')"
								  )
						      ),
					  4, new Hash(
						      'contents', 'x',
						      'type', 'js',
						      'uri', "addOpt('descr','x','x')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('descr','!x','!x')"
								  )
						      )
					  ),
			     
			     13, new Hash(
					  'contents', 'type &#187;',
					  1, new Hash(
						      'contents', '(pres-part)',
						      'type', 'js',
						      'uri', "addOpt('type','(pres-part)','(pres-part)')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('type','!(pres-part)','!(pres-part)')"
								  )
						      ),
					  2, new Hash(
						      'contents', 'appell',
						      'type', 'js',
						      'uri', "addOpt('type','appell','appell')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('type','!appell','!appell')"
								  )
						      ),
					  3, new Hash(
						      'contents', 'appell_ubøy',
						      'type', 'js',
						      'uri', "addOpt('type','appell_ubøy','appell_ubøy')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('type','!appell_ubøy','!appell_ubøy')"
								  )
						      ),
					  4, new Hash(
						      'contents', 'dem',
						      'type', 'js',
						      'uri', "addOpt('type','dem','dem')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('type','!dem','!dem')"
								  )
						      ),
					  5, new Hash(
						      'contents', 'fork',
						      'type', 'js',
						      'uri', "addOpt('type','fork','fork')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('type','!fork','!fork')"
								  )
						      ),
					  6, new Hash(
						      'contents', 'forst',
						      'type', 'js',
						      'uri', "addOpt('type','forst','forst')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('type','!forst','!forst')"
								  )
						      ),
					  7, new Hash(
						      'contents', 'fyll',
						      'type', 'js',
						      'uri', "addOpt('type','fyll','fyll')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('type','!fyll','!fyll')"
								  )
						      ),
					  8, new Hash(
						      'contents', 'hum',
						      'type', 'js',
						      'uri', "addOpt('type','hum','hum')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('type','!hum','!hum')"
								  )
						      ),
					  9, new Hash(
						      'contents', 'kvant',
						      'type', 'js',
						      'uri', "addOpt('type','kvant','kvant')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('type','!kvant','!kvant')"
								  )
						      ),
					  10, new Hash(
						       'contents', 'pers',
						       'type', 'js',
						       'uri', "addOpt('type','pers','pers')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('type','!pers','!pers')"
								   )
						       ),
					  11, new Hash(
						       'contents', 'poss',
						       'type', 'js',
						       'uri', "addOpt('type','poss','poss')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('type','!poss','!poss')"
								   )
						       ),
					  12, new Hash(
						       'contents', 'pres-part',
						       'type', 'js',
						       'uri', "addOpt('type','pres-part','pres-part')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('type','!pres-part','!pres-part')"
								   )
						       ),
					  13, new Hash(
						       'contents', 'prop',
						       'type', 'js',
						       'uri', "addOpt('type','prop','prop')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('type','!prop','!prop')"
								   )
						       ),
					  14, new Hash(
						       'contents', 'refl',
						       'type', 'js',
						       'uri', "addOpt('type','refl','refl')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('type','!refl','!refl')"
								   )
						       ),
					  15, new Hash(
						       'contents', 'res',
						       'type', 'js',
						       'uri', "addOpt('type','res','res')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('type','!res','!res')"
								   )
						       ),
					  16, new Hash(
						       'contents', 'sp',
						       'type', 'js',
						       'uri', "addOpt('type','sp','sp')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('type','!sp','!sp')"
								   )
						       )
					  ),

			     14, new Hash(
						     'contents', 'phonetic',
						     'type', 'js',
						     'uri', "addOpt('w','phon','phonetic')"
					  )		
			     ));}
