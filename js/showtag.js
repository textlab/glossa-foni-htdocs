function hideTag(tagId) {

    var styleObject = getStyleObject(tagId);
        styleObject.display = "none"; 

}

function showTag(e, tagId) {
    if( !e ) {
        if( window.event ) {
            //DOM
            e = window.event;
        } else {
            //TOTAL FAILURE, WE HAVE NO WAY OF REFERENCING THE EVENT
            return;
        }
    }

    if( typeof( e.pageX ) == 'number' ) {
        //NS 4, NS 6+, Mozilla 0.9+
        var xcoord = e.pageX;
        var ycoord = e.pageY;
    } else {
        if( typeof( e.clientX ) == 'number' ) {
            //IE, Opera, NS 6+, Mozilla 0.9+
            //except that NS 6+ and Mozilla 0.9+ did pageX ...
            var xcoord = e.clientX;
            var ycoord = e.clientY;

            if( !( ( window.navigator.userAgent.indexOf( 'Opera' ) + 1 ) ||
                   ( window.ScriptEngine && ScriptEngine().indexOf( 'InScript' ) + 1 ) ||
                   window.navigator.vendor == 'KDE' ) ) {
                if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
                    //IE 4, 5 & 6 (in non-standards compliant mode)
                    xcoord += document.body.scrollLeft;
                    ycoord += document.body.scrollTop;
                } else if( document.documentElement &&
                           ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
                    //IE 6 (in standards compliant mode)
                    xcoord += document.documentElement.scrollLeft;
                    ycoord += document.documentElement.scrollTop;
                }
            }
        } else {
            //TOTAL FAILURE, WE HAVE NO WAY OF OBTAINING THE
            //MOUSE COORDINATES
            return;
        }
    }

    changeObjectVisibility(tagId, xcoord, ycoord)
}

function getStyleObject(objectId) {
  // checkW3C DOM, then MSIE 4, then NN 4.
  //
  
    if(document.getElementById && document.getElementById(objectId)) {
	return document.getElementById(objectId).style;
   }
   else if (document.all && document.all(objectId)) {
	return document.all(objectId).style;
   }
   else if (document.layers && document.layers[objectId]) {
	return document.layers[objectId];
   } else {
	return false;
   }
}

function changeObjectVisibility(objectId, xcoord, ycoord) {
    // first get a reference to the cross-browser style object
    // and make sure the object exists
    var styleObject = getStyleObject(objectId);

    if(styleObject) {
	      styleObject.display = "block";
	      ycoord = ycoord + 7;
	      styleObject.top = ycoord + "px";
	      styleObject.left = xcoord + "px";
	      styleObject.zIndex = 10;
	      return true;
    } else {
        // we couldn't find the object, so we can't change its visibility
	      return false;
    }
}
