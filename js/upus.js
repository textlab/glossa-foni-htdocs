
var Menu;
function reloadMenuNota() {
    Menu['UPUS'] = new Hash(
			    1, new Hash(
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
								     'contents', 'skill store/sm&#229; bokst.',
								     'type', 'js',
								     'uri', "addOpt('w','case','skill store/sm&#229; bokst.')"
								     ),
							 4, new Hash(
								     'contents', 'slutten av ordet',
								     'type', 'js',
								     'uri', "addOpt('w','end','slutten av ordet')"
								     ),
							 5, new Hash(
								     'contents', 'starten av ordet',
								     'type', 'js',
								     'uri', "addOpt('w','start','starten av ordet')"
								     ),
							 6, new Hash(
								     'contents', 'utelukk ordet',
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
								     'uri', "addOpt('occ','+','en eller flere')",
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
								     'contents', 'null eller &#233;n',
								     'type', 'js',
								     'uri', "addOpt('occ','?','null eller &#233;n')",
								     1, new Hash(
										 'contents', 'velg',
										 'type', 'js',
										 'uri', "addOpt('occ','?','null eller &#233;n')"
										 ),
								     2, new Hash(
										 'contents', 'utelukk',
										 'type', 'js',
										 'uri', "addOpt('occ','!?','!null eller &#233;n')"
										 )
								     ),
							 3, new Hash(
								     'contents', 'null eller flere',
								     'type', 'js',
								     'uri', "addOpt('occ','*','null eller flere')",
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
								     'contents', 'adjektive',
								     'type', 'js',
								     'uri', "addOpt('pos','adj','adjektive')",
								     1, new Hash(
										 'contents', 'velg',
										 'type', 'js',
										 'uri', "addOpt('pos','adj','adjektive')"
										 ),
								     2, new Hash(
										 'contents', 'utelukk',
										 'type', 'js',
										 'uri', "addOpt('pos','!adj','!adjektive')"
										 )
								     ),
							 2, new Hash(
								     'contents', 'adverb',
								     'type', 'js',
								     'uri', "addOpt('pos','adv','adverb')",
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
								     'uri', "addOpt('pos','det','determinativ')",
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
								     'uri', "addOpt('pos','infmerke','infinitivsmerke')",
								     1, new Hash(
										 'contents', 'velg',
										 'type', 'js',
										 'uri', "addOpt('pos','infmerke','infinitivsmerke')"
										 ),
								     2, new Hash(
										 'contents', 'utelukk',
										 'type', 'js',
										 'uri', "addOpt('pos','!infmerke','!infinitivsmerke')"
										 )
								     ),
							 5, new Hash(
								     'contents', 'interjeksjon',
								     'type', 'js',
								     'uri', "addOpt('pos','interj','interjeksjon')",
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
								     'uri', "addOpt('pos','konj','konjunksjon')",
								     1, new Hash(
										 'contents', 'velg',
										 'type', 'js',
										 'uri', "addOpt('pos','konj','konjunksjon')"
										 ),
								     2, new Hash(
										 'contents', 'utelukk',
										 'type', 'js',
										 'uri', "addOpt('pos','!konj','!konjunksjon')"
										 )
								     ),
							 7, new Hash(
								     'contents', 'preposisjon',
								     'type', 'js',
								     'uri', "addOpt('pos','prep','preposisjon')",
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
								     'uri', "addOpt('pos','pron','pronomen')",
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
								     'uri', "addOpt('pos','sbu','subjunksjon')",
								     1, new Hash(
										 'contents', 'velg',
										 'type', 'js',
										 'uri', "addOpt('pos','sbu','subjunksjon')"
										 ),
								     2, new Hash(
										 'contents', 'utelukk',
										 'type', 'js',
										 'uri', "addOpt('pos','!sbu','!subjunksjon')"
										 )
								     ),
							 10, new Hash(
								      'contents', 'substantiv',
								      'type', 'js',
								      'uri', "addOpt('pos','subst','substantiv')",
								      1, new Hash(
										  'contents', 'velg',
										  'type', 'js',
										  'uri', "addOpt('pos','subst','substantiv')"
										  ),
								      2, new Hash(
										  'contents', 'utelukk',
										  'type', 'js',
										  'uri', "addOpt('pos','!subst','!substantiv')"
										  )
								      ),
							 11, new Hash(
								      'contents', 'tegnsetting',
								      'type', 'js',
								      'uri', "addOpt('pos','punkt','tegnsetting')",
								      1, new Hash(
										  'contents', 'velg',
										  'type', 'js',
										  'uri', "addOpt('pos','punkt','tegnsetting')"
										  ),
								      2, new Hash(
										  'contents', 'utelukk',
										  'type', 'js',
										  'uri', "addOpt('pos','!punkt','!tegnsetting')"
										  )
								      ),
							 12, new Hash(
								      'contents', 'ukjent',
								      'type', 'js',
								      'uri', "addOpt('pos','ukjent','ukjent')",
								      1, new Hash(
										  'contents', 'velg',
										  'type', 'js',
										  'uri', "addOpt('pos','ukjent','ukjent')"
										  ),
								      2, new Hash(
										  'contents', 'utelukk',
										  'type', 'js',
										  'uri', "addOpt('pos','!ukjent','!ukjent')"
										  )
								      ),
							 13, new Hash(
								      'contents', 'verb',
								      'type', 'js',
								      'uri', "addOpt('pos','verb','verb')",
								      1, new Hash(
										  'contents', 'velg',
										  'type', 'js',
										  'uri', "addOpt('pos','verb','verb')"
										  ),
								      2, new Hash(
										  'contents', 'utelukk',
										  'type', 'js',
										  'uri', "addOpt('pos','!verb','!verb')"
										  )
								      )
							 ),
					     5, new Hash(
							 'contents', 'tegnsetting &#187;&nbsp;',
							 1, new Hash(
								     'contents', 'anf&#248;rselstegn',
								     'type', 'js',
								     'uri', "addOpt('type','anf','anf&#248;rselstegn')",
								     1, new Hash(
										 'contents', 'velg',
										 'type', 'js',
										 'uri', "addOpt('type','anf','anf&#248;rselstegn')"
										 ),
								     2, new Hash(
										 'contents', 'utelukk',
										 'type', 'js',
										 'uri', "addOpt('type','!anf','!anf&#248;rselstegn')"
										 )
								     ),
							 2, new Hash(
								     'contents', 'ellipse',
								     'type', 'js',
								     'uri', "addOpt('type','ellipse','ellipse')",
								     1, new Hash(
										 'contents', 'velg',
										 'type', 'js',
										 'uri', "addOpt('type','ellipse','ellipse')"
										 ),
								     2, new Hash(
										 'contents', 'utelukk',
										 'type', 'js',
										 'uri', "addOpt('type','!ellipse','!ellipse')"
										 )
								     ),
							 3, new Hash(
								     'contents', 'h&#248;yreparentes',
								     'type', 'js',
								     'uri', "addOpt('type','par-s','h&#248;yreparentes')",
								     1, new Hash(
										 'contents', 'velg',
										 'type', 'js',
										 'uri', "addOpt('type','par-s','h&#248;yreparentes')"
										 ),
								     2, new Hash(
										 'contents', 'utelukk',
										 'type', 'js',
										 'uri', "addOpt('type','!par-s','!h&#248;yreparentes')"
										 )
								     ),
							 4, new Hash(
								     'contents', 'kolon',
								     'type', 'js',
								     'uri', "addOpt('type','kolon','kolon')",
								     1, new Hash(
										 'contents', 'velg',
										 'type', 'js',
										 'uri', "addOpt('type','kolon','kolon')"
										 ),
								     2, new Hash(
										 'contents', 'utelukk',
										 'type', 'js',
										 'uri', "addOpt('type','!kolon','!kolon')"
										 )
								     ),
							 5, new Hash(
								     'contents', 'komma',
								     'type', 'js',
								     'uri', "addOpt('type','komma','komma')",
								     1, new Hash(
										 'contents', 'velg',
										 'type', 'js',
										 'uri', "addOpt('type','komma','komma')"
										 ),
								     2, new Hash(
										 'contents', 'utelukk',
										 'type', 'js',
										 'uri', "addOpt('type','!komma','!komma')"
										 )
								     ),
							 6, new Hash(
								     'contents', 'punktum',
								     'type', 'js',
								     'uri', "addOpt('type','punktum','punktum')",
								     1, new Hash(
										 'contents', 'velg',
										 'type', 'js',
										 'uri', "addOpt('type','punktum','punktum')"
										 ),
								     2, new Hash(
										 'contents', 'utelukk',
										 'type', 'js',
										 'uri', "addOpt('type','!punktum','!punktum')"
										 )
								     ),
							 7, new Hash(
								     'contents', 'semikolon',
								     'type', 'js',
								     'uri', "addOpt('type','semikolon','semikolon')",
								     1, new Hash(
										 'contents', 'velg',
										 'type', 'js',
										 'uri', "addOpt('type','semikolon','semikolon')"
										 ),
								     2, new Hash(
										 'contents', 'utelukk',
										 'type', 'js',
										 'uri', "addOpt('type','!semikolon','!semikolon')"
										 )
								     ),
							 8, new Hash(
								     'contents', 'sp&#248;rsm&#229;lstegn',
								     'type', 'js',
								     'uri', "addOpt('type','spm','sp&#248;rsm&#229;lstegn')",
								     1, new Hash(
										 'contents', 'velg',
										 'type', 'js',
										 'uri', "addOpt('type','spm','sp&#248;rsm&#229;lstegn')"
										 ),
								     2, new Hash(
										 'contents', 'utelukk',
										 'type', 'js',
										 'uri', "addOpt('type','!spm','!sp&#248;rsm&#229;lstegn')"
										 )
								     ),
							 9, new Hash(
								     'contents', 'strek',
								     'type', 'js',
								     'uri', "addOpt('type','strek','strek')",
								     1, new Hash(
										 'contents', 'velg',
										 'type', 'js',
										 'uri', "addOpt('type','strek','strek')"
										 ),
								     2, new Hash(
										 'contents', 'utelukk',
										 'type', 'js',
										 'uri', "addOpt('type','!strek','!strek')"
										 )
								     ),
							 10, new Hash(
								      'contents', 'utropstegn',
								      'type', 'js',
								      'uri', "addOpt('type','utrop','utropstegn')",
								      1, new Hash(
										  'contents', 'velg',
										  'type', 'js',
										  'uri', "addOpt('type','utrop','utropstegn')"
										  ),
								      2, new Hash(
										  'contents', 'utelukk',
										  'type', 'js',
										  'uri', "addOpt('type','!utrop','!utropstegn')"
										  )
								      ),
							 11, new Hash(
								      'contents', 'venstreparentes',
								      'type', 'js',
								      'uri', "addOpt('type','par-b','venstreparentes')",
								      1, new Hash(
										  'contents', 'velg',
										  'type', 'js',
										  'uri', "addOpt('type','par-b','venstreparentes')"
										  ),
								      2, new Hash(
										  'contents', 'utelukk',
										  'type', 'js',
										  'uri', "addOpt('type','!par-b','!venstreparentes')"
										  )
								      )
							 ),
					     6, new Hash(
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
								     'contents', 'me',
								     'type', 'js',
								     'uri', "addOpt('descr','me','me')",
								     1, new Hash(
										 'contents', 'exclude',
										 'type', 'js',
										 'uri', "addOpt('descr','!me','!me')"
										 )
								     ),
							 3, new Hash(
								     'contents', 'x',
								     'type', 'js',
								     'uri', "addOpt('descr','x','x')",
								     1, new Hash(
										 'contents', 'exclude',
										 'type', 'js',
										 'uri', "addOpt('descr','!x','!x')"
										 )
								     )
							 )
 ));
}