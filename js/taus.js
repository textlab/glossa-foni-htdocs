var Menu;
function reloadMenuTaus() {
    Menu['TAUS'] =
        new Hash(
		 1, new Hash('contents', '<nobr>criteria&#187;&nbsp;</nobr>',
			     1, new Hash(
					 'contents', 'word',
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
						      ),
					 12, new Hash(
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
					 'contents', 'num',
					 1, new Hash(
						     'contents', 'pl',
						     'type', 'js',
						     'uri', "addOpt('num','pl','pl')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('num','!pl','!pl')"
								 )
						     ),
					 2, new Hash(
						     'contents', 'sg',
						     'type', 'js',
						     'uri', "addOpt('num','sg','sg')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('num','!sg','!sg')"
								 )
						     ),
					 3, new Hash(
						     'contents', 'sg:l',
						     'type', 'js',
						     'uri', "addOpt('num','sg:l','sg:l')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('num','!sg:l','!sg:l')"
								 )
						     ),
					 4, new Hash(
						     'contents', 'sg:pl',
						     'type', 'js',
						     'uri', "addOpt('num','sg:pl','sg:pl')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('num','!sg:pl','!sg:pl')"
								 )
						     )
					 ),
			     4, new Hash(
					 'contents', 'case',
					 1, new Hash(
						     'contents', 'acc',
						     'type', 'js',
						     'uri', "addOpt('case','acc','acc')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('case','!acc','!acc')"
								 )
						     ),
					 2, new Hash(
						     'contents', 'acc:subj',
						     'type', 'js',
						     'uri', "addOpt('case','acc:subj','acc:subj')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('case','!acc:subj','!acc:subj')"
								 )
						     ),
					 3, new Hash(
						     'contents', 'dat',
						     'type', 'js',
						     'uri', "addOpt('case','dat','dat')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('case','!dat','!dat')"
								 )
						     ),
					 4, new Hash(
						     'contents', 'gen',
						     'type', 'js',
						     'uri', "addOpt('case','gen','gen')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('case','!gen','!gen')"
								 )
						     ),
					 5, new Hash(
						     'contents', 'nom',
						     'type', 'js',
						     'uri', "addOpt('case','nom','nom')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('case','!nom','!nom')"
								 )
						     ),
					 6, new Hash(
						     'contents', 'nom:acc',
						     'type', 'js',
						     'uri', "addOpt('case','nom:acc','nom:acc')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('case','!nom:acc','!nom:acc')"
								 )
						     ),
					 7, new Hash(
						     'contents', 'nom:obj',
						     'type', 'js',
						     'uri', "addOpt('case','nom:obj','nom:obj')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('case','!nom:obj','!nom:obj')"
								 )
						     )
					 ),
			     5, new Hash(
					 'contents', 'degr',
					 1, new Hash(
						     'contents', 'comp',
						     'type', 'js',
						     'uri', "addOpt('degr','comp','comp')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('degr','!comp','!comp')"
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
					 'contents', 'nlex',
					 1, new Hash(
						     'contents', 'back-click',
						     'type', 'js',
						     'uri', "addOpt('nlex','back-click','back-click')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('nlex','!back-click','!back-click')"
								 )
						     ),
					 2, new Hash(
						     'contents', 'breathing',
						     'type', 'js',
						     'uri', "addOpt('nlex','breathing','breathing')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('nlex','!breathing','!breathing')"
								 )
						     ),
					 3, new Hash(
						     'contents', 'burping',
						     'type', 'js',
						     'uri', "addOpt('nlex','burping','burping')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('nlex','!burping','!burping')"
								 )
						     ),
					 4, new Hash(
						     'contents', 'click',
						     'type', 'js',
						     'uri', "addOpt('nlex','click','click')",
						     1, new Hash(
								 'contents', 'exclude',
	                                'type', 'js',
								 'uri', "addOpt('nlex','!click','!click')"
								 )
						     ),
					 5, new Hash(
						     'contents', 'coughing',
						     'type', 'js',
						     'uri', "addOpt('nlex','coughing','coughing')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('nlex','!coughing','!coughing')"
								 )
						     ),
					 6, new Hash(
						     'contents', 'draws-breath',
						     'type', 'js',
						     'uri', "addOpt('nlex','draws-breath','draws-breath')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('nlex','!draws-breath','!draws-breath')"
								 )
						     ),
					 7, new Hash(
						     'contents', 'farting',
						     'type', 'js',
						     'uri', "addOpt('nlex','farting','farting')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('nlex','!farting','!farting')"
								 )
						     ),
					 8, new Hash(
						     'contents', 'front-click',
						     'type', 'js',
						     'uri', "addOpt('nlex','front-click','front-click')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('nlex','!front-click','!front-click')"
								 )
						     ),
					 9, new Hash(
						     'contents', 'groaning',
						     'type', 'js',
						     'uri', "addOpt('nlex','groaning','groaning')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('nlex','!groaning','!groaning')"
								 )
						     ),
					 10, new Hash(
						      'contents', 'hawking',
						      'type', 'js',
						      'uri', "addOpt('nlex','hawking','hawking')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!hawking','!hawking')"
								  )
						      ),
					 11, new Hash(
						      'contents', 'interruption',
						      'type', 'js',
						      'uri', "addOpt('nlex','interruption','interruption')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!interruption','!interruption')"
								  )
						      ),
					 12, new Hash(
						      'contents', 'kissing',
						      'type', 'js',
						      'uri', "addOpt('nlex','kissing','kissing')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!kissing','!kissing')"
								  )
						      ),
					 13, new Hash(
						      'contents', 'labial-fricative',
						      'type', 'js',
						      'uri', "addOpt('nlex','labial-fricative','labial-fricative')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!labial-fricative','!labial-fricative')"
								  )
						      ),
					 14, new Hash(
						      'contents', 'labial-vibrant',
						      'type', 'js',
						      'uri', "addOpt('nlex','labial-vibrant','labial-vibrant')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!labial-vibrant','!labial-vibrant')"
								  )
						      ),
					 15, new Hash(
						      'contents', 'laughing',
						      'type', 'js',
						      'uri', "addOpt('nlex','laughing','laughing')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!laughing','!laughing')"
								  )
						      ),
					 16, new Hash(
						      'contents', 'laughter',
						      'type', 'js',
						      'uri', "addOpt('nlex','laughter','laughter')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!laughter','!laughter')"
								  )
						      ),
					 17, new Hash(
						      'contents', 'onomatopoetic',
						      'type', 'js',
						      'uri', "addOpt('nlex','onomatopoetic','onomatopoetic')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!onomatopoetic','!onomatopoetic')"
								  )
						      ),
					 18, new Hash(
						      'contents', 'screaming',
						      'type', 'js',
						      'uri', "addOpt('nlex','screaming','screaming')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!screaming','!screaming')"
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
						      'contents', 'sighing',
						      'type', 'js',
						      'uri', "addOpt('nlex','sighing','sighing')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!sighing','!sighing')"
								  )
						      ),
					 21, new Hash(
						      'contents', 'singing',
						      'type', 'js',
						      'uri', "addOpt('nlex','singing','singing')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!singing','!singing')"
								  )
						      ),
					 22, new Hash(
						      'contents', 'snapping',
						      'type', 'js',
						      'uri', "addOpt('nlex','snapping','snapping')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!snapping','!snapping')"
								  )
						      ),
					 23, new Hash(
						      'contents', 'sneezing',
						      'type', 'js',
						      'uri', "addOpt('nlex','sneezing','sneezing')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!sneezing','!sneezing')"
								  )
						      ),
					 24, new Hash(
						      'contents', 'sniffing',
						      'type', 'js',
						      'uri', "addOpt('nlex','sniffing','sniffing')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!sniffing','!sniffing')"
								  )
						      ),
					 25, new Hash(
						      'contents', 'spelled',
						      'type', 'js',
						      'uri', "addOpt('nlex','spelled','spelled')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!spelled','!spelled')"
								  )
						      ),
					 26, new Hash(
						      'contents', 'sucking sound',
						      'type', 'js',
						      'uri', "addOpt('nlex','sucking sound','sucking sound')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!sucking sound','!sucking sound')"
								  )
						      ),
					 27, new Hash(
						      'contents', 'unclear',
						      'type', 'js',
						      'uri', "addOpt('nlex','unclear','unclear')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!unclear','!unclear')"
								  )
						      ),
					 28, new Hash(
						      'contents', 'uninterpretable',
						      'type', 'js',
						      'uri', "addOpt('nlex','uninterpretable','uninterpretable')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!uninterpretable','!uninterpretable')"
								  )
						      ),
					 29, new Hash(
						      'contents', 'whistling',
						      'type', 'js',
						      'uri', "addOpt('nlex','whistling','whistling')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!whistling','!whistling')"
								  )
						      ),
					 30, new Hash(
						      'contents', 'yawning',
						      'type', 'js',
						      'uri', "addOpt('nlex','yawning','yawning')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!yawning','!yawning')"
								  )
						      )
					 ),
			     7, new Hash(
					 'contents', 'voice',
					 1, new Hash(
						     'contents', 'act',
						     'type', 'js',
						     'uri', "addOpt('voice','act','act')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('voice','!act','!act')"
								 )
						     ),
					 2, new Hash(
						     'contents', 'mid',
						     'type', 'js',
						     'uri', "addOpt('voice','mid','mid')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('voice','!mid','!mid')"
								 )
						     )
					 ),
			     8, new Hash(
					 'contents', 'pers',
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
			     9, new Hash(
					 'contents', 'temp',
					 1, new Hash(
						     'contents', 'inf:imp',
						     'type', 'js',
						     'uri', "addOpt('temp','inf:imp','inf:imp')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('temp','!inf:imp','!inf:imp')"
								 )
						     ),
					 2, new Hash(
						     'contents', 'past',
						     'type', 'js',
						     'uri', "addOpt('temp','past','past')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('temp','!past','!past')"
								 )
						     ),
					 3, new Hash(
						     'contents', 'perf-part',
						     'type', 'js',
						     'uri', "addOpt('temp','perf-part','perf-part')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('temp','!perf-part','!perf-part')"
								 )
						     ),
					 4, new Hash(
						     'contents', 'pres',
						     'type', 'js',
						     'uri', "addOpt('temp','pres','pres')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('temp','!pres','!pres')"
								 )
						     ),
					 5, new Hash(
						     'contents', 'pres:inf',
						     'type', 'js',
						     'uri', "addOpt('temp','pres:inf','pres:inf')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('temp','!pres:inf','!pres:inf')"
								 )
						     ),
					 6, new Hash(
						     'contents', 'pret',
						     'type', 'js',
						     'uri', "addOpt('temp','pret','pret')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('temp','!pret','!pret')"
								 )
						     ),
					 7, new Hash(
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
			     10, new Hash(
					  'contents', 'descr',
					  1, new Hash(
						      'contents', 'comment',
						      'type', 'js',
						      'uri', "addOpt('descr','comment','comment')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('descr','!comment','!comment')"
								  )
						      ),
					  2, new Hash(
						      'contents', 'mu',
						      'type', 'js',
						      'uri', "addOpt('descr','mu','mu')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('descr','!mu','!mu')"
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
						      ),
					  4, new Hash(
						      'contents', 'o',
						      'type', 'js',
						      'uri', "addOpt('descr','o','o')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('descr','!o','!o')"
								  )
						      )
					  ),
			     11, new Hash(
					  'contents', 'defn',
					  1, new Hash(
						      'contents', 'defn',
						      'type', 'js',
						      'uri', "addOpt('defn','def','defn')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('defn','!def','!defn')"
								  )
						      ),
					  2, new Hash(
						      'contents', 'indef',
						      'type', 'js',
						      'uri', "addOpt('defn','indef','indef')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('defn','!indef','!indef')"
								  )
						      ),
					  3, new Hash(
						      'contents', 'indef:def',
						      'type', 'js',
						      'uri', "addOpt('defn','indef:def','indef:def')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('defn','!indef:def','!indef:def')"
								  )
						      )
					  ),
			     12, new Hash(
					  'contents', 'mood',
					  1, new Hash(
						      'contents', 'imp',
						      'type', 'js',
						      'uri', "addOpt('mood','imp','imp')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('mood','!imp','!imp')"
								  )
						      ),
					  2, new Hash(
						      'contents', 'ind',
						      'type', 'js',
						      'uri', "addOpt('mood','ind','ind')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('mood','!ind','!ind')"
								  )
						      ),
					  3, new Hash(
						      'contents', 'inf',
						      'type', 'js',
						      'uri', "addOpt('mood','inf','inf')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('mood','!inf','!inf')"
								  )
						      ),
					  4, new Hash(
						      'contents', 'past-part',
						      'type', 'js',
						      'uri', "addOpt('mood','past-part','past-part')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('mood','!past-part','!past-part')"
								  )
						      ),
					  5, new Hash(
						      'contents', 'pres-part',
						      'type', 'js',
						      'uri', "addOpt('mood','pres-part','pres-part')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('mood','!pres-part','!pres-part')"
								  )
						      ),
					  6, new Hash(
						      'contents', 'subjunctive',
						      'type', 'js',
						      'uri', "addOpt('mood','subjunctive','subjunctive')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('mood','!subjunctive','!subjunctive')"
								  )
						      ),
					  7, new Hash(
						      'contents', 'supine',
						      'type', 'js',
						      'uri', "addOpt('mood','supine','supine')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('mood','!supine','!supine')"
								  )
						      )
					  ),
			     13, new Hash(
					  'contents', 'pos',
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
						      'contents', 'adv:interj',
						      'type', 'js',
						      'uri', "addOpt('pos','adv:interj','adv:interj')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('pos','!adv:interj','!adv:interj')"
								  )
						      ),
					  5, new Hash(
						      'contents', 'adv:subjunc',
						      'type', 'js',
						      'uri', "addOpt('pos','adv:subjunc','adv:subjunc')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('pos','!adv:subjunc','!adv:subjunc')"
								  )
						      ),
					  6, new Hash(
						      'contents', 'cbl',
						      'type', 'js',
						      'uri', "addOpt('pos','cbl','cbl')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('pos','!cbl','!cbl')"
								  )
						      ),
					  7, new Hash(
						      'contents', 'conj',
						      'type', 'js',
						      'uri', "addOpt('pos','conj','conj')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('pos','!conj','!conj')"
								  )
						      ),
					  8, new Hash(
						      'contents', 'conj:adv',
						      'type', 'js',
						      'uri', "addOpt('pos','conj:adv','conj:adv')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('pos','!conj:adv','!conj:adv')"
								  )
						      ),
					  9, new Hash(
						      'contents', 'conj:prep:adv',
						      'type', 'js',
						      'uri', "addOpt('pos','conj:prep:adv','conj:prep:adv')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('pos','!conj:prep:adv','!conj:prep:adv')"
								  )
						      ),
					  10, new Hash(
						       'contents', 'conj:subjunc',
						       'type', 'js',
						       'uri', "addOpt('pos','conj:subjunc','conj:subjunc')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!conj:subjunc','!conj:subjunc')"
								   )
						       ),
					  11, new Hash(
						       'contents', 'conj:subjunc:adv',
						       'type', 'js',
						       'uri', "addOpt('pos','conj:subjunc:adv','conj:subjunc:adv')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!conj:subjunc:adv','!conj:subjunc:adv')"
								   )
						       ),
					  12, new Hash(
						       'contents', 'conj:subjunc:det',
						       'type', 'js',
						       'uri', "addOpt('pos','conj:subjunc:det','conj:subjunc:det')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!conj:subjunc:det','!conj:subjunc:det')"
								   )
						       ),
					  13, new Hash(
						       'contents', 'det',
						       'type', 'js',
						       'uri', "addOpt('pos','det','det')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!det','!det')"
								   )
						       ),
					  14, new Hash(
						       'contents', 'foreign',
						       'type', 'js',
						       'uri', "addOpt('pos','foreign','foreign')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!foreign','!foreign')"
								   )
						       ),
					  15, new Hash(
						       'contents', 'inf-marker',
						       'type', 'js',
						       'uri', "addOpt('pos','inf-marker','inf-marker')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!inf-marker','!inf-marker')"
								   )
						       ),
					  16, new Hash(
						       'contents', 'interj',
						       'type', 'js',
						       'uri', "addOpt('pos','interj','interj')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!interj','!interj')"
								   )
						       ),
					  17, new Hash(
						       'contents', 'noun',
						       'type', 'js',
						       'uri', "addOpt('pos','noun','noun')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!noun','!noun')"
								   )
						       ),
					  18, new Hash(
						       'contents', 'noun:adj',
						       'type', 'js',
						       'uri', "addOpt('pos','noun:adj','noun:adj')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!noun:adj','!noun:adj')"
								   )
						       ),
					  19, new Hash(
						       'contents', 'num',
						       'type', 'js',
						       'uri', "addOpt('pos','num','num')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!num','!num')"
								   )
						       ),
					  20, new Hash(
						       'contents', 'pause',
						       'type', 'js',
						       'uri', "addOpt('pos','pause','pause')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!pause','!pause')"
								   )
						       ),
					  21, new Hash(
						       'contents', 'pause2',
						       'type', 'js',
						       'uri', "addOpt('pos','pause2','pause2')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!pause2','!pause2')"
								   )
						       ),
					  22, new Hash(
						       'contents', 'prep',
						       'type', 'js',
						       'uri', "addOpt('pos','prep','prep')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!prep','!prep')"
								   )
						       ),
					  23, new Hash(
						       'contents', 'prep:subjunc',
						       'type', 'js',
						       'uri', "addOpt('pos','prep:subjunc','prep:subjunc')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!prep:subjunc','!prep:subjunc')"
								   )
						       ),
					  24, new Hash(
						       'contents', 'pron',
						       'type', 'js',
						       'uri', "addOpt('pos','pron','pron')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!pron','!pron')"
								   )
						       ),
					  25, new Hash(
						       'contents', 'pron:det',
						       'type', 'js',
						       'uri', "addOpt('pos','pron:det','pron:det')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!pron:det','!pron:det')"
								   )
						       ),
					  26, new Hash(
						       'contents', 'subjunc',
						       'type', 'js',
						       'uri', "addOpt('pos','subjunc','subjunc')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!subjunc','!subjunc')"
								   )
						       ),
					  27, new Hash(
						       'contents', 'subjunc:adv',
						       'type', 'js',
						       'uri', "addOpt('pos','subjunc:adv','subjunc:adv')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!subjunc:adv','!subjunc:adv')"
								   )
						       ),
					  28, new Hash(
						       'contents', 'subjunc:prep',
						       'type', 'js',
						       'uri', "addOpt('pos','subjunc:prep','subjunc:prep')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!subjunc:prep','!subjunc:prep')"
								   )
						       ),
					  29, new Hash(
						       'contents', 'sånn-word',
						       'type', 'js',
						       'uri', "addOpt('pos','sånn-word','sånn-word')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!sånn-word','!sånn-word')"
								   )
						       ),
					  30, new Hash(
						       'contents', 'unknown',
						       'type', 'js',
						       'uri', "addOpt('pos','unknown','unknown')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!unknown','!unknown')"
								   )
						       ),
					  31, new Hash(
						       'contents', 'verb',
						       'type', 'js',
						       'uri', "addOpt('pos','verb','verb')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!verb','!verb')"
								   )
						       ),
					  32, new Hash(
						       'contents', 'verb:noun',
						       'type', 'js',
						       'uri', "addOpt('pos','verb:noun','verb:noun')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!verb:noun','!verb:noun')"
								   )
						       )
					  ),
			     14, new Hash(
					  'contents', 'type',
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
						      'contents', 'abbrev',
						      'type', 'js',
						      'uri', "addOpt('type','abbrev','abbrev')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('type','!abbrev','!abbrev')"
								  )
						      ),
					  3, new Hash(
						      'contents', 'alpha',
						      'type', 'js',
						      'uri', "addOpt('type','alpha','alpha')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('type','!alpha','!alpha')"
								  )
						      ),
					  4, new Hash(
						      'contents', 'cm-noun',
						      'type', 'js',
						      'uri', "addOpt('type','cm-noun','cm-noun')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('type','!cm-noun','!cm-noun')"
								  )
						      ),
					  5, new Hash(
						      'contents', 'dat:past',
						      'type', 'js',
						      'uri', "addOpt('type','dat:past','dat:past')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('type','!dat:past','!dat:past')"
								  )
						      ),
					  6, new Hash(
						      'contents', 'dem',
						      'type', 'js',
						      'uri', "addOpt('type','dem','dem')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('type','!dem','!dem')"
								  )
						      ),
					  7, new Hash(
						      'contents', 'gov-acc',
						      'type', 'js',
						      'uri', "addOpt('type','gov-acc','gov-acc')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('type','!gov-acc','!gov-acc')"
								  )
						      ),
					  8, new Hash(
						      'contents', 'gov-dat',
						      'type', 'js',
						      'uri', "addOpt('type','gov-dat','gov-dat')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('type','!gov-dat','!gov-dat')"
								  )
						      ),
					  9, new Hash(
						      'contents', 'gov-en',
						      'type', 'js',
						      'uri', "addOpt('type','gov-en','gov-en')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('type','!gov-en','!gov-en')"
								  )
						      ),
					  10, new Hash(
						       'contents', 'hesit',
						       'type', 'js',
						       'uri', "addOpt('type','hesit','hesit')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('type','!hesit','!hesit')"
								   )
						       ),
					  11, new Hash(
						       'contents', 'hum',
						       'type', 'js',
						       'uri', "addOpt('type','hum','hum')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('type','!hum','!hum')"
								   )
						       ),
					  12, new Hash(
						       'contents', 'intensifier',
						       'type', 'js',
						       'uri', "addOpt('type','intensifier','intensifier')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('type','!intensifier','!intensifier')"
								   )
						       ),
					  13, new Hash(
						       'contents', 'no-case',
						       'type', 'js',
						       'uri', "addOpt('type','no-case','no-case')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('type','!no-case','!no-case')"
								   )
						       ),
					  14, new Hash(
						       'contents', 'nom:pres',
						       'type', 'js',
						       'uri', "addOpt('type','nom:pres','nom:pres')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('type','!nom:pres','!nom:pres')"
								   )
						       ),
					  15, new Hash(
						       'contents', 'noun-uninflected',
						       'type', 'js',
						       'uri', "addOpt('type','noun-uninflected','noun-uninflected')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('type','!noun-uninflected','!noun-uninflected')"
								   )
						       ),
					  16, new Hash(
						       'contents', 'numeric',
						       'type', 'js',
						       'uri', "addOpt('type','numeric','numeric')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('type','!numeric','!numeric')"
								   )
						       ),
					  17, new Hash(
						       'contents', 'other-name',
						       'type', 'js',
						       'uri', "addOpt('type','other-name','other-name')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('type','!other-name','!other-name')"
								   )
						       ),
					  18, new Hash(
						       'contents', 'percent',
						       'type', 'js',
						       'uri', "addOpt('type','percent','percent')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('type','!percent','!percent')"
								   )
						       ),
					  19, new Hash(
						       'contents', 'pers',
						       'type', 'js',
						       'uri', "addOpt('type','pers','pers')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('type','!pers','!pers')"
								   )
						       ),
					  20, new Hash(
						       'contents', 'pers-name',
						       'type', 'js',
						       'uri', "addOpt('type','pers-name','pers-name')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('type','!pers-name','!pers-name')"
								   )
						       ),
					  21, new Hash(
						       'contents', 'place-name',
						       'type', 'js',
						       'uri', "addOpt('type','place-name','place-name')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('type','!place-name','!place-name')"
								   )
						       ),
					  22, new Hash(
						       'contents', 'poss',
						       'type', 'js',
						       'uri', "addOpt('type','poss','poss')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('type','!poss','!poss')"
								   )
						       ),
					  23, new Hash(
						       'contents', 'prop',
						       'type', 'js',
						       'uri', "addOpt('type','prop','prop')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('type','!prop','!prop')"
								   )
						       ),
					  24, new Hash(
						       'contents', 'q',
						       'type', 'js',
						       'uri', "addOpt('type','q','q')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('type','!q','!q')"
								   )
						       ),
					  25, new Hash(
						       'contents', 'quant',
						       'type', 'js',
						       'uri', "addOpt('type','quant','quant')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('type','!quant','!quant')"
								   )
						       ),
					  26, new Hash(
						       'contents', 'refl',
						       'type', 'js',
						       'uri', "addOpt('type','refl','refl')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('type','!refl','!refl')"
								   )
						       ),
					  27, new Hash(
						       'contents', 'rel',
						       'type', 'js',
						       'uri', "addOpt('type','rel','rel')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('type','!rel','!rel')"
								   )
						       ),
					  28, new Hash(
						       'contents', 'res',
						       'type', 'js',
						       'uri', "addOpt('type','res','res')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('type','!res','!res')"
								   )
						       ),
					  29, new Hash(
						       'contents', 'strong',
						       'type', 'js',
						       'uri', "addOpt('type','strong','strong')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('type','!strong','!strong')"
								   )
						       ),
					  30, new Hash(
						       'contents', 'uninflected',
						       'type', 'js',
						       'uri', "addOpt('type','uninflected','uninflected')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('type','!uninflected','!uninflected')"
								   )
						       ),
					  31, new Hash(
						       'contents', 'weak',
						       'type', 'js',
						       'uri', "addOpt('type','weak','weak')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('type','!weak','!weak')"
								   )
						       )
					  ),
			     15, new Hash(
					  'contents', 'segment',
					  1, new Hash(
						      'contents', 'start',
						      'type', 'js',
						      'uri', "addOpt('start','start','start')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('start','!start','!start')"
								  )
						      )
					  ),
			     16, new Hash(
					  'contents', 'gender',
					  1, new Hash(
						      'contents', 'fem',
						      'type', 'js',
						      'uri', "addOpt('gender','fem','fem')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('gender','!fem','!fem')"
								  )
						      ),
					  2, new Hash(
						      'contents', 'm:f',
						      'type', 'js',
						      'uri', "addOpt('gender','m:f','m:f')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('gender','!m:f','!m:f')"
								  )
						      ),
					  3, new Hash(
						      'contents', 'masc',
						      'type', 'js',
						      'uri', "addOpt('gender','masc','masc')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('gender','!masc','!masc')"
								  )
						      ),
					  4, new Hash(
						      'contents', 'masc:fem',
						      'type', 'js',
						      'uri', "addOpt('gender','masc:fem','masc:fem')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('gender','!masc:fem','!masc:fem')"
								  )
						      ),
					  5, new Hash(
						      'contents', 'masc:fem:neut',
						      'type', 'js',
						      'uri', "addOpt('gender','masc:fem:neut','masc:fem:neut')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('gender','!masc:fem:neut','!masc:fem:neut')"
								  )
						      ),
					  6, new Hash(
						      'contents', 'masc:neut',
						      'type', 'js',
						      'uri', "addOpt('gender','masc:neut','masc:neut')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('gender','!masc:neut','!masc:neut')"
								  )
						      ),
					  7, new Hash(
						      'contents', 'neut',
						      'type', 'js',
						      'uri', "addOpt('gender','neut','neut')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('gender','!neut','!neut')"
								  )
						      ),
					  8, new Hash(
						      'contents', 'unspec',
						      'type', 'js',
						      'uri', "addOpt('gender','unspec','unspec')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('gender','!unspec','!unspec')"
								  )
						      )
					  ),
			     17, new Hash(
					  'contents', 'phonetic',
					  'type', 'js',
					  'uri', "addOpt('w','phon','phonetic')"
					  )		

			     ))
	;}