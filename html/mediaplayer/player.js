function createPlayer(movie_loc, start, duration){
    var so = new SWFObject('player.swf','mpl','400','300','9');
    so.id = 'theplayer';
    so.addParam('allowfullscreen','false');
    so.addParam('allowscriptaccess','always');
    so.addParam('wmode','opaque');
    so.addParam('allowscriptaccess','never');
    so.addVariable('file', movie_loc);
    so.addVariable('streamer','rtmp://stream-prod01.uio.no/vod/');
    so.addVariable('image','http://www.hf.uio.no/iln/om/organisasjon/tekstlab/BILDER/logo173.png');
    so.addVariable('start',start);
    so.addVariable('duration', duration);
    so.addVariable('respectduration', 'true');
    so.addVariable('controlbar', 'none');
    so.addVariable('autostart', 'true');
    so.write('mediaspace');
}
function increaseContext(direction){
    var seconds = 0.5;
    if(direction == 'l'){
	start -= seconds;
    }
    if(direction == 'r'){
	duration += seconds;
    }
    createPlayer(movie, start, duration);
}

function expand(corpus,i,l,r){
    document.getElementById('php').src = 'getContent.php?corpus=scandiasyn&line_key=178196&left='+l+'&right='+r+'&video=1';
}
function setSelect(left, right){
    document.getElementById('leftSelect').selectedIndex = left;
    document.getElementById('rightSelect').selectedIndex = right;
}
//roemskog_01um-02uk_800.mp4, stryn_01um-02uk_800.mp4, mp4:uio/hf/ilf/scandiasyn/
function pinger(pong){
    alert(pong);
}
