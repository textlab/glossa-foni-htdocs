//showList(2,'heisann');

function showList(No,String,Label1,Hits,Label2,Corpus,Max,atttype,player) {

        var val = arguments[7];

        var atttype = "";
	var player = "";
        if( arguments.length > 7){ atttype = "&atttype=" + val; }
        if( arguments.length > 8){ player = "&player=" + arguments[8]; }
	Object=document.getElementById("placeholder");
	if(!Object) {
	    return;
	}

	var HTML;
	// FIXME
	HTML=Label1+": <b>" + Hits + "</b>" + Max + "<br>"+Label2+": ";
	//	else {HTML="Hits found: <b>" + Hits + "</b>" + Max + "<br>Results pages: ";}

	for (var i = 1;i<=No;i++) {

		if (i==1) { HTML=HTML+"<font size=\"+1\"><b>" }
		// "&atttype="+atttype
		HTML=HTML+"<a href=\"" + cgiRoot + "/show_page_dev.cgi?n="+i+"&query_id="+String+"&corpus="+Corpus+atttype+player"\"> "+i+"</a> ";
		if ( i==1 ) { HTML=HTML+"</b></font>" }	
 
	}
	Object.innerHTML=HTML;		

}

function boldPage(No) {

	var Id = "page_" + No;
	Object=document.getElementById(Id);
	Object.innerHTML="<font size=\"+1\"><b>" + No + "</b></font>";

}

function clearCheckBoxes() {
 
	var checkBoxes = document.getElementsByTagName('input');
	for (i=0; i<checkBoxes.length; i++) {
		checkBoxes[i].checked=false;
	}


}
