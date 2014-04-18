function showList(No,String,Label1,Hits,Label2,Corpus,Max,atttype,player, cgiRoot, concordance_for_speech) {
    if( arguments.length > 7){ atttype = "&atttype=" + atttype; }
    if( arguments.length > 8){ player = "&player=" + player; }
    concordance_for_speech = "&concordance_for_speech=" +concordance_for_speech;
	  pagerObject=document.getElementById("placeholder");

	  if(!pagerObject) {
	      return;
	  }

	  var HTML;
	  // FIXME
	  HTML=Label1+": <b>" + Hits + "</b>" + Max + "<br>"+Label2+": ";

	  for (var i = 1;i<=No;i++) {
		    if (i==1) { HTML=HTML+"<font size=\"+1\"><b>" }
		    HTML = HTML + "<a href=\"" + cgiRoot + "/show_page_dev.cgi?n=" + i
            +"&query_id="+String+"&corpus="+Corpus+atttype+player+concordance_for_speech+"\"> "+i+"</a> ";

        if ( i==1 ) {
            HTML=HTML+"</b></font>";
        }	
	  }
	  pagerObject.innerHTML=HTML;		
}

function boldPage(No) {

	var Id = "page_" + No;
	pagerObject=document.getElementById(Id);
	pagerObject.innerHTML="<font size=\"+1\"><b>" + No + "</b></font>";

}

function clearCheckBoxes() {
 
	var checkBoxes = document.getElementsByTagName('input');
	for (i=0; i<checkBoxes.length; i++) {
		checkBoxes[i].checked=false;
	}


}
