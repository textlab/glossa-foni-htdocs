var lingo = "no";

var labels = new Array("lang",
		       "stored_results",
		       "statistics",
		       "full_query",
		       "help",
		       "save_subcorpus",
		       "show_texts",
		       "full_query",
		       "search",
		       "reset",
		       "choose_subcorpus",
		       "tid",
		       "bred",
		       "abode",
		       "longest",
		       "pro",
		       "agegroup",
		       "sex",
		       "bred-alle",
		       "abode-alle",
		       "longest-alle",
		       "edu",
		       "tid",
		       "rep",
		       "genre",
		       "addbutton_",
		       "delbutton_",
		       "regexp"
		       );

var buttons = new Array;

buttons["search"] = 1;
buttons["reset"] = 1;
buttons["show_texts"] = 1;
buttons["save_subcorpus"] = 1;
buttons["addbutton_"] = 1;
buttons["delbutton_"] = 1;

var span = new Array;

span["tid"]=1;
span["bred"]=1;
span["bred-alle"]=1;
span["abode"]=1;
span["abode-alle"]=1;
span["longest"]=1;
span["longest-alle"]=1;
span["pro"]=1;
span["agegroup"]=1;
span["sex"]=1;
span["edu"]=1;
span["tid"]=1;
span["rep"]=1;
span["genre"]=1;
span["regexp"]=1;

function toggleLang() {
    var label;
    var button;
    var suff= "";
    if(lingo == "no"){ lingo = "en";  }
    else { lingo = "no";  }
    for(var j = 0; j < labels.length; j++){
	      label = labels[j];
	      if(span[label]){ suff = "_span"; }
	      else{ suff = "";  }
	      var elt = document.getElementById(label+suff);
	      if(buttons[label]){
	          elt.value = strings[lingo][label];
	      }
	      else{
	          elt.firstChild.nodeValue = strings[lingo][label];
	      }
    }
}
