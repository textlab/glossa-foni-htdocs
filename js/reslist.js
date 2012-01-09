
//showList(2,'heisann');

function showList(No,String,Label1,Hits,Label2,Corpus,Max,atttype,player) {

    //        var atttype = "";
        if( arguments.length > 7){ atttype = "&atttype=" + atttype; }
        if( arguments.length > 8){ player = "&player=" + player; }
	Object=document.getElementById("placeholder");
	if(!Object) {
	    return;
	}
	//	alert("AT: "+atttype);
	var HTML;
	// FIXME
	HTML=Label1+": <b>" + Hits + "</b>" + Max + "<br>"+Label2+": ";
	//	else {HTML="Hits found: <b>" + Hits + "</b>" + Max + "<br>Results pages: ";}

	for (var i = 1;i<=No;i++) {

		if (i==1) { HTML=HTML+"<font size=\"+1\"><b>" }
		HTML = HTML + "<a href=\"" + cgiRoot + "/show_page_dev.cgi?n="+i+"&query_id="+String+"&corpus="+Corpus+atttype+player+"\"> "+i+"</a> ";
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
