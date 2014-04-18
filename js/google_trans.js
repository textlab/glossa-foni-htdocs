google.load("language", "1");

var globalNodeVar;
var image;

function appendTranslateScript(node,text, img) {
    globalNodeVar = node;
    image = img
    sl = "";
    key = "AIzaSyALLIemzcsdQYpyqxAE5k3V7luZ73P5SOQ";
    var newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    var sourceText = encodeURIComponent(text);
    // included this bit in despair. for some reason Google won't consistantly detect Icelandic..
       if(sourceText.match(/%C3%BE/)){sl = "&source=is";}
       if(sourceText.match(/%C3%B0/)){sl = "&source=is";} 
    var source = 'https://www.googleapis.com/language/translate/' +
        'v2?key=' + key + '&target=en'+sl+'&callback=translateText&q=' + sourceText;
    newScript.src = source;
    document.getElementsByTagName('head')[0].appendChild(newScript);
}
langs = {"no" : "Norwegian", "sv" : "Swedish", "da" : "Danish", "en" : "English"};
function translateText(response) {
    lng = response.data.translations[0].detectedSourceLanguage;
    if(!langs[lng]){lng = "Icelandic";}
    else{lng = langs[lng];}
    googleAttribution = "&nbsp;<a href=\"http://translate.google.com\"><img src=\""+image+"\" /></a> as "+lng;
    str = response.data.translations[0].translatedText;
    str = str.replace(/<b>/,"<b> ");
    str = str.replace(/<\/b>/," </b>");
    str = "<td colspan=\"3\" align=\"left\" style=\"color:#555;font-size:0.95em\">"+str+googleAttribution+"</td>";
    globalNodeVar.parentNode.innerHTML = "<td></td>"+str;
    globalNodeVar = 0;
}
