var Menu;
function reloadMenuJapaneseSTest() {
    Menu['JAPANESE_S_TEST'] = new Hash(
				1, new Hash(
						'contents', '<nobr>&nbsp;valg &#187;&nbsp;</nobr>',
						1,
						new Hash(
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
										'contents', 'starten av ordet',
										'type', 'js',
										'uri', "addOpt('w','start','starten av ordet')"
								),
								5, new Hash(
										'contents', 'utelukk',
										'type', 'js',
										'uri', "addOpt('w','neg','utelukk')"
								),
								6, new Hash(
										'contents', 'legg til ordform',
										'type', 'js',
										'uri', "addOpt('ADDSTRING','word','')"
								),
								7, new Hash(
										'contents', 'legg til negert ordform',
										'type', 'js',
										'uri', "addOpt('ADDSTRING','word','!')"
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
						)
				) );
}
