var Menu;

function reloadMenuEngl2() {
    Menu['ENGL2'] =
        new Hash(
		 1, new Hash('contents', '<nobr>criteria&#187;&nbsp;</nobr>',
			     1, new Hash(
					 'contents', 'word &#187;&nbsp;',
					 1, new Hash(
						     'contents', 'start of word',
						     'type', 'js',
						     'uri', "addOpt('w','start','start of word')"
						     ),
					 2, new Hash(
						     'contents', 'within word',
						     'type', 'js',
						     'uri', "addOpt('w','middle','within word')"
						     ),
					 3, new Hash(
						     'contents', 'end of word',
						     'type', 'js',
						     'uri', "addOpt('w','end','end of word')"
						     ),
					 4, new Hash(
						     'contents', 'case sensitive',
						     'type', 'js',
						     'uri', "addOpt('w','case','case sensitive')"
						     ),
					 5, new Hash(
						     'contents', 'exclude word',
						     'type', 'js',
						     'uri', "addOpt('w','neg','exclude')"
						     ),
					 6, new Hash(
						      'contents', 'segment initial',
						      'type', 'js',
						      'uri', "addOpt('start','start','start')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('start','!start','!start')"
								  )
					             ),
					 7, new Hash(
						      'contents', 'segment final',
						      'type', 'js',
						      'uri', "addOpt('start','stop','end')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('start','!stop','!end')"
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
					  'contents', 'language',
					  1, new Hash(
						      'contents', 'Norwegian',
						      'type', 'js',
						      'uri', "addOpt('descr','no','no')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('descr','!no','!no')"
								  )
						      )
					  )			
			     ));}
