/*
  auxfns
*/
function mapToks2Locs(){
    var toksLocs = [];
    for (tok in tok_inf){
	var loks = new Array();
	var infs = tok_inf[tok];
	for( i in infs ){
	    loks[inf_loc[infs[i]]] = 1;
	}
	toksLocs[tok] = loks;//.unique();
    }
    return toksLocs;
}
var loc_inf = new Array();

function init_loc_inf(){
    for(var inf in inf_loc){
	var loc = inf_loc[inf];
	if(!loc_inf[loc]){
	    loc_inf[loc] = [inf];
	}
	else{loc_inf[loc].push(inf);}
    }
}
/*
  top level functions
*/

var allMarkers = [];

function addMarker(loca){
    var dot = new google.maps.MarkerImage(
        "http://tekstlab.uio.no/glossa/html/img/red_dot.png",
	new google.maps.Size(4,4), // size
	new google.maps.Point(0,0),   // origin
	new google.maps.Point(2,2),   // anchor
	new google.maps.Size(4,4) // size
    );

    if(!coordinates[loca]){
	document.getElementById('noCoords').innerHTML = "No coordinates found for: <b>" + loca +"</b>";
	return loca;
    }

    var lat = coordinates[loca]['lat'];
    var lng = coordinates[loca]['lng'];
    var latlng = new google.maps.LatLng(lat,lng);

    var marker = new google.maps.Marker({
	position: latlng, 
	map: map,
	icon: dot,
    });
    allMarkers.push(marker);
    return true;
}
function addMarkers(color,tok){
    if(color == '#ddd'){
	markerSets.remove(tok);
	return;
    }
    var locas = toksLocs[tok]; //toksLocs[tok] is.. an Array!
    var i = 0;
    var noCoords = new Array();
    markerSets.add(tok, locas, color); // need to use this to remove, also!!!
    report(markerSets.missing);
    return;
}

function makeMessage(loc, tok) {
    var infs1 = loc_inf[loc];
    var infs2 = tok_inf[tok];
    var infs = intersection(infs1, infs2);

    return "Location: " + loc + "<br />Phonetic: " + tok + "<br />Informants: " + profileLink(infs);
}

function report(arr){ // for reporting all missing coordinates
    var empty = true;
    if(arr[0] == undefined){
	for(var i in arr){empty = false;}
    }
    if(empty){document.getElementById('noCoords').innerHTML = "";return;}
    document.getElementById('noCoords').innerHTML = "Missing coordinates for: ";
    for(var i in arr){
	if(i == 'unique'){continue;}
	document.getElementById('noCoords').innerHTML += i + " ";
    }

}

// profile.php?tid=boda_om1&corpus=scandiasyn
function profileLink(arr) { 
    var corpus = 'scandiasyn';
    var str = "";

    for(var i in arr) {
	      str += "<span style=\"font-weight:bold;cursor:pointer;color:green;\" "
            + "onclick=\"window.open('http://tekstlab.uio.no/glossa//html/profile.php?tid=" + arr[i]
            + "&corpus=" + corpus +"');\">" + arr[i] +"</span>&nbsp;";
    }

    return str;
}

function intersection(arr1, arr2){
    var is = new Array();
    for(j in arr1){
	for(i in arr2){
	    if(arr1[j] == arr2[i]){
		is.push(arr1[j]);
		break;
	    }
	}
    }
    return is;
}




/*
  MarkerSets
*/
// MarkerSets - an array for all MarkerSet objects
var MarkerSets = function(){
    this.sets = new Array();
    this.missing = new Array();
    this.infoWindow = null;
    this.add = function(tok, locas, color){
	if(this.sets[tok]){
	    this.sets[tok].remove();
	    this.sets[tok].color = color;
	    this.sets[tok].add();
	}
	else{
	    var set = new MarkerSet(locas, tok, color);
	    set.add();
	    this.sets[tok] = set;
	    for(loc in set.noCoords){
		this.missing[loc] = 1;
	    }
	}
    };
    this.hide = function(){
	for(var j in this.sets){
	    this.sets[j].hide();
	}
    };
    this.show = function(){
	for(var j in this.sets){
	    this.sets[j].show();
	}
    };
    this.remove = function(tok){
	if(this.sets[tok]){
	    this.sets[tok].remove();
	}    
    }
    this.removeAll = function(){
	for(var j in this.sets){
	    this.sets[j].remove();
	}    
    }
    this.report = function(){
	var r = "";
	for(e in this.missing){r +=  " " + e;}
	return r;
    }
    this.closeInfoWindows = function(){
	for(var j in this.sets){
	    this.sets[j].closeInfoWindow();
	}
    }
};

var markerSets = new MarkerSets();

// MarkerSet - an object for groups of markers of same colour.

/*
  MarkerSet
*/

var MarkerSet = function(locas, tok, color){
    this.locations = locas; // an array of locations for marker set
    this.color = color;      // the chosen marker color
    this.tok = tok;
    this.markers = [];      // array for all google marker objects in this set
    this.noCoords = [];
};

MarkerSet.infoWindow = null; // init class variable her.

MarkerSet.prototype.createMarker = function(latlng, map, color, contentString, loc) {
    var image = new google.maps.MarkerImage(
        "http://tekstlab.uio.no/glossa/html/img/mm_20_" + color + ".png",
	      new google.maps.Size(8,13), // size
	      new google.maps.Point(0,0),   // origin
	      new google.maps.Point(4,13),   // anchor
	      new google.maps.Size(8,13)
    );

    var shadow = new google.maps.MarkerImage(
        "http://tekstlab.uio.no/glossa/html/img/mm_20_shadow.png",
	      new google.maps.Size(12,16),
	      new google.maps.Point(0,0),   // origin
	      new google.maps.Point(4,13),   // anchor
	      new google.maps.Size(12,16)
    );

    var infowindow = new google.maps.InfoWindow({
	      content: contentString
    });

    var marker = new google.maps.Marker({
	      position: latlng, 
	      map: map,
	      icon: image,
        //	click:
	      shadow: shadow,
	      animation: google.maps.Animation.DROP,
	      title: loc
    });

    google.maps.event.addListener(marker, 'click', function() {
	      if(MarkerSet.infoWindow != null){
		        MarkerSet.infoWindow.close();
	      }

	      MarkerSet.infoWindow = infowindow;
	      infowindow.open(map,marker);
	  });

    return marker;
};

MarkerSet.prototype.closeInfoWindow = function() {
    for(var j in this.markers){
	      alert('closing: '+this.markers[j].title);
	      if(this.markers[j].infoWindow){
	          alert('i have an infowindow!');
	          this.markers[j].infoWindow.close();
	      }
    }
};

MarkerSet.prototype.add = function() {
    //was i in this.location, but seeing as how i'm now using properties, ie alta=1...
    for(loc in this.locations){  
	      if(!coordinates[loc]){
	          this.noCoord(loc);
	          continue;
	      }

	      var lat = coordinates[loc]['lat'];
	      var lng = coordinates[loc]['lng'];
	      var latlng = new google.maps.LatLng(lat,lng);
	      var marker = this.createMarker(latlng,map,this.color,makeMessage(loc,this.tok), loc);
	      this.markers.push(marker);
    }
};

MarkerSet.prototype.hide = function(){
    for(j in this.markers){
	this.markers[j].setMap(null);
    }
    return true;
};

MarkerSet.prototype.show = function(){
    for(j in this.markers){
	this.markers[j].setMap(map);
    }
};

MarkerSet.prototype.remove = function() {
    for(j in this.markers){
	      this.markers[j].setMap(null);
    }

    this.markers = [];
};

MarkerSet.prototype.noCoord = function(loc){
    this.noCoords[loc] = 1;
};

function removePlots(){
    markerSets.removeAll();
    $('.colorpicker-trigger').css('background-color', '#ddd');
}
function hidePlots(){
    markerSets.hide();
}
function showPlots(){
    markerSets.show();
}

function clearMap() {
    for(var j in allMarkers){
	      allMarkers[j].setMap(null);
    }
} 

function showAll(){
    for(var j in allLocations){
	addMarker(allLocations[j]);
    }
}

function toggleBounce(maker) { // NOT IN USE
  if (marker.getAnimation() != null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
