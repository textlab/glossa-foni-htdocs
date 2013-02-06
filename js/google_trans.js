google.load("language", "1");

function translate(node, text) {
    text = text.replace(/_/, " ");
    google.language.detect(text, function(result) {
        if (!result.error && result.language) {
            google.language.translate(text, result.language, "en",
                                      function(result) {
                                          if (result.translation) {
                                              node.innerHTML = result.translation;
                                              node.innerHTML +=
                                                  " <font size='-2'>(google)</font>";
                                          }
                                          else {
                                              node.innerHTML =
                                                  'No translation available' }
                                      });
        }
    });
}

var globalNodeVar;

function appendTranslateScript(node,text) {
    globalNodeVar = node;
    var newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    var sourceText = encodeURI(text); // seems to work better than encode() function
    var source = 'https://www.googleapis.com/language/translate/' +
        'v2?key=AIzaSyALLIemzcsdQYpyqxAE5k3V7luZ73P5SOQ' +
        '&target=en&callback=translateText&q=' + sourceText;
    newScript.src = source;
    document.getElementsByTagName('head')[0].appendChild(newScript);
}

function translateText(response) {
    globalNodeVar.innerHTML = response.data.translations[0].translatedText;
    globalNodeVar.innerHTML += " <font size='-2'>(google)</font>";
    globalNodeVar = 0;
}

function translate2(text) {
    google.language.detect(text, function(result) {
        if (!result.error && result.language) {
            google.language.translate(text, result.language, "en",
                                      function(result) {
                                          if (result.translation) {
                                              return result.translation;
                                          }
                                          return "No translation available.";
                                      });
        }
    });
}
