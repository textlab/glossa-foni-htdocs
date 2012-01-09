<html>
  <head>
    <script type="text/javascript" src="http://www.google.com/jsapi">
    </script>
    <script type="text/javascript">

    google.load("language", "1");
    function translate(node, text) {
      google.language.detect(text, function(result) {
        if (!result.error && result.language) {
          google.language.translate(text, result.language, "no",
                                    function(result) {
            if (result.translation) {
              node.innerHTML = result.translation;
            }
            else{ node.innerHTML = 'Woodwork' }
          });
        }
      });
    }

    </script>
  </head>
  <body>
    <input type="text" id="text" />
    <input type="button" onclick="alert(translate(document.getElementById('text').value));" value="press" />
    <div id="translation"></div>
    <div><span onclick="translate(this.parentNode, 'Yon fatty cat shat on yonder threadbare mat!')">her</span></div>
  </body>
</html>
