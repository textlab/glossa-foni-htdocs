var languageOpts = new Array;

languageOpts = [
  ['RUN_NO', 'Norwegian','no'],
  ['RUN_RU', 'Russian', 'ru'],
  ['RUN_EN', 'English', 'en'], 
  ['RUN_BC', 'Bosnian, Croatian and Serbian', 'bc'],
  ['RUN_BG', 'Bulgarian', 'bg'],
  ['RUN_FR', 'French', 'fr'],
  ['RUN_DE', 'German', 'de'],
  ['RUN_IT', 'Italian', 'it'],
  ['RUN_PL', 'Polish', 'pl'],
  ['RUN_SE', 'Swedish', 'se']
];


var conf = new Array;

conf['type'] = 'multilingual';
conf['title'] = 'Search the RuN Corpus';
conf['corpus_name'] = 'The RuN Corpus';
conf['charset'] = 'UTF-8';
var language='en';

var cgiRoot = 'http://tekstlab.uio.no/cgi-bin/glossa/';
