var Menu;

function reloadMenuScandiasyn() {
    Menu['SCANDIASYN'] =
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
						     'contents', 'dat',
						     'type', 'js',
						     'uri', "addOpt('case','dat','dat')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('case','!dat','!dat')"
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
						     'contents', 'coughing',
						     'type', 'js',
						     'uri', "addOpt('nlex','coughing','coughing')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('nlex','!coughing','!coughing')"
								 )
						     ),
					 4, new Hash(
						     'contents', 'draws-breath',
						     'type', 'js',
						     'uri', "addOpt('nlex','draws-breath','draws-breath')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('nlex','!draws-breath','!draws-breath')"
								 )
						     ),
					 5, new Hash(
						     'contents', 'front-click',
						     'type', 'js',
						     'uri', "addOpt('nlex','front-click','front-click')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('nlex','!front-click','!front-click')"
								 )
						     ),
					 6, new Hash(
						     'contents', 'groaning',
						     'type', 'js',
						     'uri', "addOpt('nlex','groaning','groaning')",
						     1, new Hash(
								 'contents', 'exclude',
								 'type', 'js',
								 'uri', "addOpt('nlex','!groaning','!groaning')"
								 )
						     ),
					 7, new Hash(
						      'contents', 'hawking',
						      'type', 'js',
						      'uri', "addOpt('nlex','hawking','hawking')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!hawking','!hawking')"
								  )
						      ),
					 8, new Hash(
						      'contents', 'interruption',
						      'type', 'js',
						      'uri', "addOpt('nlex','interruption','interruption')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!interruption','!interruption')"
								  )
						      ),
					 9, new Hash(
						      'contents', 'labial-fricative',
						      'type', 'js',
						      'uri', "addOpt('nlex','labial-fricative','labial-fricative')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!labial-fricative','!labial-fricative')"
								  )
						      ),
					 10, new Hash(
						      'contents', 'labial-vibrant',
						      'type', 'js',
						      'uri', "addOpt('nlex','labial-vibrant','labial-vibrant')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!labial-vibrant','!labial-vibrant')"
								  )
						      ),
					 11, new Hash(
						      'contents', 'laughing',
						      'type', 'js',
						      'uri', "addOpt('nlex','laughing','laughing')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!laughing','!laughing')"
								  )
						      ),
					 12, new Hash(
						      'contents', 'laughter',
						      'type', 'js',
						      'uri', "addOpt('nlex','laughter','laughter')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!laughter','!laughter')"
								  )
						      ),
					 13, new Hash(
						      'contents', 'onomatopoetic',
						      'type', 'js',
						      'uri', "addOpt('nlex','onomatopoetic','onomatopoetic')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!onomatopoetic','!onomatopoetic')"
								  )
						      ),
					 14, new Hash(
						      'contents', 'sibilant',
						      'type', 'js',
						      'uri', "addOpt('nlex','sibilant','sibilant')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!sibilant','!sibilant')"
								  )
						      ),
					 15, new Hash(
						      'contents', 'sighing',
						      'type', 'js',
						      'uri', "addOpt('nlex','sighing','sighing')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!sighing','!sighing')"
								  )
						      ),
					 16, new Hash(
						      'contents', 'sniffing',
						      'type', 'js',
						      'uri', "addOpt('nlex','sniffing','sniffing')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!sniffing','!sniffing')"
								  )
						      ),
					 17, new Hash(
						      'contents', 'spelled',
						      'type', 'js',
						      'uri', "addOpt('nlex','spelled','spelled')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!spelled','!spelled')"
								  )
						      ),
					 18, new Hash(
						      'contents', 'sucking sound',
						      'type', 'js',
						      'uri', "addOpt('nlex','sucking-sound','sucking-sound')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!sucking-sound','!sucking-sound')"
								  )
						      ),
					 19, new Hash(
						      'contents', 'unclear',
						      'type', 'js',
						      'uri', "addOpt('nlex','unclear','unclear')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!unclear','!unclear')"
								  )
						      ),
					 20, new Hash(
						      'contents', 'whistling',
						      'type', 'js',
						      'uri', "addOpt('nlex','whistling','whistling')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('nlex','!whistling','!whistling')"
								  )
						      ),
					 21, new Hash(
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
						      'contents', 'x',
						      'type', 'js',
						      'uri', "addOpt('descr','x','x')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('descr','!x','!x')"
								  )
						      ),
					  2, new Hash(
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
						      'contents', 'adj',
						      'type', 'js',
						      'uri', "addOpt('pos','adj','adj')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('pos','!adj','!adj')"
								  )
						      ),
					  2, new Hash(
						      'contents', 'adv',
						      'type', 'js',
						      'uri', "addOpt('pos','adv','adv')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('pos','!adv','!adv')"
								  )
						      ),
					  3, new Hash(
						      'contents', 'adv:subjunc',
						      'type', 'js',
						      'uri', "addOpt('pos','adv:subjunc','adv:subjunc')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('pos','!adv:subjunc','!adv:subjunc')"
								  )
						      ),
					  4, new Hash(
						      'contents', 'conj',
						      'type', 'js',
						      'uri', "addOpt('pos','conj','conj')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('pos','!conj','!conj')"
								  )
						      ),
					  5, new Hash(
						      'contents', 'conj:prep:adv',
						      'type', 'js',
						      'uri', "addOpt('pos','conj:prep:adv','conj:prep:adv')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('pos','!conj:prep:adv','!conj:prep:adv')"
								  )
						      ),
					  6, new Hash(
						       'contents', 'conj:subjunc:adv',
						       'type', 'js',
						       'uri', "addOpt('pos','conj:subjunc:adv','conj:subjunc:adv')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!conj:subjunc:adv','!conj:subjunc:adv')"
								   )
						       ),
					  7, new Hash(
						       'contents', 'det',
						       'type', 'js',
						       'uri', "addOpt('pos','det','det')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!det','!det')"
								   )
						       ),
					  8, new Hash(
						       'contents', 'inf-marker',
						       'type', 'js',
						       'uri', "addOpt('pos','inf-marker','inf-marker')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!inf-marker','!inf-marker')"
								   )
						       ),
					  9, new Hash(
						       'contents', 'interj',
						       'type', 'js',
						       'uri', "addOpt('pos','interj','interj')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!interj','!interj')"
								   )
						       ),
					  10, new Hash(
						       'contents', 'noun',
						       'type', 'js',
						       'uri', "addOpt('pos','noun','noun')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!noun','!noun')"
								   )
						       ),
					  11, new Hash(
						       'contents', 'noun:adj',
						       'type', 'js',
						       'uri', "addOpt('pos','noun:adj','noun:adj')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!noun:adj','!noun:adj')"
								   )
						       ),
					  12, new Hash(
						       'contents', 'pause',
						       'type', 'js',
						       'uri', "addOpt('pos','pause','pause')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!pause','!pause')"
								   )
						       ),
					  13, new Hash(
						       'contents', 'prep',
						       'type', 'js',
						       'uri', "addOpt('pos','prep','prep')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!prep','!prep')"
								   )
						       ),
					  14, new Hash(
						       'contents', 'prep:subjunc',
						       'type', 'js',
						       'uri', "addOpt('pos','prep:subjunc','prep:subjunc')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!prep:subjunc','!prep:subjunc')"
								   )
						       ),
					  15, new Hash(
						       'contents', 'pron',
						       'type', 'js',
						       'uri', "addOpt('pos','pron','pron')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!pron','!pron')"
								   )
						       ),
					  16, new Hash(
						       'contents', 'pron:det',
						       'type', 'js',
						       'uri', "addOpt('pos','pron:det','pron:det')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!pron:det','!pron:det')"
								   )
						       ),
					  17, new Hash(
						       'contents', 'subjunc',
						       'type', 'js',
						       'uri', "addOpt('pos','subjunc','subjunc')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!subjunc','!subjunc')"
								   )
						       ),
					  18, new Hash(
						       'contents', 'sånn-word',
						       'type', 'js',
						       'uri', "addOpt('pos','sånn-word','sånn-word')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!sånn-word','!sånn-word')"
								   )
						       ),
					  19, new Hash(
						       'contents', 'unknown',
						       'type', 'js',
						       'uri', "addOpt('pos','unknown','unknown')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!unknown','!unknown')"
								   )
						       ),
					  20, new Hash(
						       'contents', 'verb',
						       'type', 'js',
						       'uri', "addOpt('pos','verb','verb')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('pos','!verb','!verb')"
								   )
						       ),
					  21, new Hash(
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
						      'contents', 'abbrev',
						      'type', 'js',
						      'uri', "addOpt('type','abbrev','abbrev')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('type','!abbrev','!abbrev')"
								  )
						      ),
					  2, new Hash(
						      'contents', 'cm-noun',
						      'type', 'js',
						      'uri', "addOpt('type','cm-noun','cm-noun')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('type','!cm-noun','!cm-noun')"
								  )
						      ),
					  3, new Hash(
						      'contents', 'dem',
						      'type', 'js',
						      'uri', "addOpt('type','dem','dem')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('type','!dem','!dem')"
								  )
						      ),
					  4, new Hash(
						      'contents', 'gov-acc',
						      'type', 'js',
						      'uri', "addOpt('type','gov-acc','gov-acc')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('type','!gov-acc','!gov-acc')"
								  )
						      ),
					  5, new Hash(
						      'contents', 'gov-dat',
						      'type', 'js',
						      'uri', "addOpt('type','gov-dat','gov-dat')",
						      1, new Hash(
								  'contents', 'exclude',
								  'type', 'js',
								  'uri', "addOpt('type','!gov-dat','!gov-dat')"
								  )
						      ),
					  6, new Hash(
						       'contents', 'hesit',
						       'type', 'js',
						       'uri', "addOpt('type','hesit','hesit')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('type','!hesit','!hesit')"
								   )
						       ),
					  7, new Hash(
						       'contents', 'intensifier',
						       'type', 'js',
						       'uri', "addOpt('type','intensifier','intensifier')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('type','!intensifier','!intensifier')"
								   )
						       ),
					  8, new Hash(
						       'contents', 'no-case',
						       'type', 'js',
						       'uri', "addOpt('type','no-case','no-case')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('type','!no-case','!no-case')"
								   )
						       ),
					  9, new Hash(
						       'contents', 'pers',
						       'type', 'js',
						       'uri', "addOpt('type','pers','pers')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('type','!pers','!pers')"
								   )
						       ),
					  10, new Hash(
						       'contents', 'poss',
						       'type', 'js',
						       'uri', "addOpt('type','poss','poss')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('type','!poss','!poss')"
								   )
						       ),
					  11, new Hash(
						       'contents', 'prop',
						       'type', 'js',
						       'uri', "addOpt('type','prop','prop')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('type','!prop','!prop')"
								   )
						       ),
					  12, new Hash(
						       'contents', 'q',
						       'type', 'js',
						       'uri', "addOpt('type','q','q')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('type','!q','!q')"
								   )
						       ),
					  13, new Hash(
						       'contents', 'quant',
						       'type', 'js',
						       'uri', "addOpt('type','quant','quant')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('type','!quant','!quant')"
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
						       'contents', 'rel',
						       'type', 'js',
						       'uri', "addOpt('type','rel','rel')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('type','!rel','!rel')"
								   )
						       ),
					  16, new Hash(
						       'contents', 'strong',
						       'type', 'js',
						       'uri', "addOpt('type','strong','strong')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('type','!strong','!strong')"
								   )
						       ),
					  17, new Hash(
						       'contents', 'uninflected',
						       'type', 'js',
						       'uri', "addOpt('type','uninflected','uninflected')",
						       1, new Hash(
								   'contents', 'exclude',
								   'type', 'js',
								   'uri', "addOpt('type','!uninflected','!uninflected')"
								   )
						       ),
					  18, new Hash(
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
			     16, new Hash(
					  'contents', 'phonetic',
					  'type', 'js',
					  'uri', "addOpt('w','phon','phonetic')"
					  )		

			     ))
	;}
