var countries = {
    'Norway' : {
	lat : '65.5',
	lng : '17.5',
	zom : '4'
    },
    'Sweden' : {
	lat : '62.5',
	lng : '16.5',
	zom : '4'
    },
    'Finland' : {
	lat : '66.5',
	lng : '26.5',
	zom : '4'
    },
    'Denmark' : {
	lat : '56.5',
	lng : '10.5',
	zom : '6'
    },
    'Faroe' : {
	lat : '61.9',
	lng : '-6.8',
	zom : '8'
    },
    'Iceland' : {
	lat : '65.5',
	lng : '-18',
	zom : '5'
    },
    'Nordic' : {
	lat : '',
	lng : '',
	zom : ''
    }    
}
var coordinates_old = {
    'Åseral': {
        lat: '58.745407',
        lng: '7.514648'
    },
    'Alvdal': {
        lat: '62.123152',
        lng: '10.632019'
    },
    'Botnhamn': {
        lat: '69.509775',
        lng: '17.899475'
    },
    'Brekkom': {
        lat: '61.474407',
        lng: '10.233936'
    },
    'Drevsjø': {
        lat: '61.89406',
        lng: '12.033377'
    },
    'Evje': {
        lat: '58.673368',
        lng: '7.871704'
    },
    'Gausdal': {
        lat: '61.344737',
        lng: '9.902802'
    },
    'Hjartdal': {
        lat: '59.76746',
        lng: '8.786316'
    },
    'Hyllestad': {
        lat: '61.247781',
        lng: '5.369568'
    },
    'Jevnaker': {
        lat: '60.322868',
        lng: '10.450745'
    },
    'Jølster': {
        lat: '61.650771',
        lng: '6.517639'
    },
    'Kåfjord': {
        lat: '69.670449',
        lng: '21.011353'
    },
    'Kalvåg': {
        lat: '61.771458',
        lng: '4.879475'
    },
    'Kirkenær': {
        lat: '61.513649',
        lng: '10.177202'
    },
    'Kirkesdalen': {
        lat: '62.947738',
        lng: '4.610824'
    },
    'Kristiansand': {
        lat: '58.232211',
        lng: '8.065338'
    },
    'Kvam': {
        lat: '60.537021',
        lng: '6.278687'
    },
    'Landvik': {
        lat: '58.34928',
        lng: '8.529081'
    },
    'Langesund': {
        lat: '59.004771',
        lng: '9.753542'
    },
    'Lom': {
        lat: '62.150109',
        lng: '8.838501'
    },
    'Luster': {
        lat: '61.76013',
        lng: '7.728882'
    },
    'Lyngdal': {
        lat: '58.225704',
        lng: '7.119141'
    },
    'Medby': {
        lat: '68.916162',
        lng: '17.738113'
    },
    'Mefjordvær': {
        lat: '69.524552',
        lng: '17.443199'
    },
    'Meråker': {
        lat: '63.56812',
        lng: '11.8927'
    },
    'Nissedal': {
        lat: '59.164668',
        lng: '8.665466'
    },
    'Sirdal': {
        lat: '59.344395',
        lng: '7.201538'
    },
    'Skreia': {
        lat: '60.657999',
        lng: '10.94367'
    },
    'Stange': {
        lat: '60.879681',
        lng: '11.326904'
    },
    'Stryn': {
        lat: '62.06016',
        lng: '6.858215'
    },
    'Tinn': {
        lat: '60.047018',
        lng: '8.739624'
    },
    'Todalen': {
        lat: '62.819175',
        lng: '8.702545'
    },
    'Valle': {
        lat: '59.372391',
        lng: '7.67395'
    },
    'Vang': {
        lat: '61.286071',
        lng: '8.701172'
    },
    'Vegårshei': {
        lat: '58.834358',
        lng: '8.929138'
    },
    'Vennesla': {
        lat: '58.42473',
        lng: '8.12439'
    },
    'Vinje': {
        lat: '59.95501',
        lng: '8.10791'
    },
    'Alta': {

        lat: '69.967781',

        lng: '23.249722' 

    },

    'Bugøynes': {

        lat: '69.972591',

        lng: '29.644929' 

    },

    'Børselv': {

        lat: '70.313893',

        lng: '25.571694' 

   },

    'Kariel': {

        lat: '70.118388',

        lng: '29.336307' 
 

    },

    'Lakselv': {

        lat: '70.044717',

        lng: '24.96979' 

    },

    'Tana': {

        lat: '70.203312',

        lng: '28.177008' 

    },

    'Vadsø': {

        lat: '70.075757',

        lng: '29.75044' 

    },

    'Vestre Jakobselv': {

        lat: '70.118388',

        lng: '29.336307'
    }
};

var current;
var map;

function init2(){
    var i = 0;
    for( var j in coordinates ){
        var loc = j;
        var locs = document.getElementById("locs");
        locs.options[i++]=new Option(j, j, false, false);
    }
}

function move(loc){
    //    var loc = document.getElementById("locs").value;
    current = loc;
    initialize(coordinates[loc]['lat'],coordinates[loc]['lng']);
}

function initialize(lati, long) {
    map = new GMap2(document.getElementById("map_canvas"));
    map.setCenter(new GLatLng(62.5,17.5), 3); //65.5, 17.5
    if(long < 0){  map.setCenter(new GLatLng(37.0625,-95.677068), 4);  }
    var bounds = map.getBounds();
    var southWest = bounds.getSouthWest();
    var northEast = bounds.getNorthEast();
    var lngSpan = northEast.lng() - southWest.lng();
    var latSpan = northEast.lat() - southWest.lat();
    var point = new GLatLng(lati,long);
    map.addOverlay(new GMarker(point));
    //    init2();
}
function init() {

    map = new GMap2(document.getElementById("map_canvas"));
    map.setCenter(new GLatLng(65.5,17.5), 4);
    /*
    GEvent.addListener(map,"click", function(overlay, latlng) {     
	    if (latlng) { 
		var myHtml = "The GPoint value is: " + map.fromLatLngToDivPixel(latlng) + " at zoom level " + map.getZoom();
		map.openInfoWindow(latlng, myHtml);
	    }
	});
    map.addControl(new GSmallMapControl());
    map.addControl(new GMapTypeControl()); 
    */
   /*
    var bounds = map.getBounds();
    var southWest = bounds.getSouthWest();
    var northEast = bounds.getNorthEast();
    var lngSpan = northEast.lng() - southWest.lng();
    var latSpan = northEast.lat() - southWest.lat();
    var point = new GLatLng(lati,long);
    map.addOverlay(new GMarker(point));
    init2();
    */
}

function animate(){
    map.zoomIn();
    map.panTo(new GLatLng(coordinates[current]['lat'],coordinates[current]['lng']));
}
function out(){
    map.zoomOut();
    map.panTo(new GLatLng(coordinates[current]['lat'],coordinates[current]['lng']));
}