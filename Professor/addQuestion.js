//Adding an eventlistener ' Enter '
var input = document.getElementById("type");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
if (event.keyCode === 13) {
    sendQuestion();
    }
});

var testCases=[];

function sendQuestion(val){
    //data
    var info = {
        type : document.getElementById("type"),
        difficulty : document.getElementById("difficulty"),
        question : document.getElementById("question"),
        params: document.getElementById("parameters")
    };
        var forC = document.getElementById("chkFor");
        var whileC = document.getElementById("chkWhile");
        var recursionC = document.getElementById("chkRecursion");

    var size = Object.keys(info).length;

    /* DEALING WITH TEST CASES*/

    var regex = new RegExp("'","g");

    var testcases = document.getElementsByName("myInputs[]");

    //console.log("Example 1: ", encodeURIComponent("[2+2]"));

          for (var i = 0; i < testcases.length; ++i) {
              testCases.push(testcases[i].value.replace(regex, "''"));
         }
         function chunkArray(myArray, chunk_size){
            var results = [];
            
            while (myArray.length) {
                results.push(myArray.splice(0, chunk_size));
            }
            
            return results;
        }
        
        // Split in group of 2 items
        var result = chunkArray(testCases, 2); //2d Array
        console.log("Result: " , result);

        //Storing the result, 2d array, into a hidden element
        var input = document.createElement("input");
        input.setAttribute("type", "hidden");
        input.setAttribute("id", "tcaseINFO");
        input.setAttribute("value", result);
        //append to form element that you want .
        document.getElementById("chells").appendChild(input);
        var printed = document.getElementById('tcaseINFO').value;
        
       var myJSON = result.phpSerialize();

    /*END OF DEALING WITH TEST CASES */
    var requestData = ``;
    if(forC.checked){
    console.log("for");
      requestData = `type=${info.type.value}&difficulty=${info.difficulty.value}&question=${info.question.value}
    &parameters=${info.params.value}&tcaseINFO=${myJSON}&forC=${forC.value}`;
    
    if(forC.checked && recursionC.checked){
    console.log("for , recursion");
      requestData = `type=${info.type.value}&difficulty=${info.difficulty.value}&question=${info.question.value}
    &parameters=${info.params.value}&tcaseINFO=${myJSON}&forC=${forC.value}&recursionC=${recursionC.value}`;
    } 
      if(forC.checked && whileC.checked){
    console.log("for ,  while");
      requestData = `type=${info.type.value}&difficulty=${info.difficulty.value}&question=${info.question.value}
    &parameters=${info.params.value}&tcaseINFO=${myJSON}&forC=${forC.value}&whileC=${whileC.value}`;
    }
    if(forC.checked && whileC.checked && recursionC.checked){
    console.log("for , recursion , while");
      requestData = `type=${info.type.value}&difficulty=${info.difficulty.value}&question=${info.question.value}
    &parameters=${info.params.value}&tcaseINFO=${myJSON}&forC=${forC.value}&whileC=${whileC.value}&recursionC=${recursionC.value}`;
    }
    }
    else if(whileC.checked){
    console.log("while");
      requestData = `type=${info.type.value}&difficulty=${info.difficulty.value}&question=${info.question.value}
    &parameters=${info.params.value}&tcaseINFO=${myJSON}&whileC=${whileC.value}`;
    
    }
    else if(recursionC.checked){
    console.log("recursion");
      requestData = `type=${info.type.value}&difficulty=${info.difficulty.value}&question=${info.question.value}
    &parameters=${info.params.value}&tcaseINFO=${myJSON}&recursionC=${recursionC.value}`;
    }
    else{
    console.log("final");
      requestData = `type=${info.type.value}&difficulty=${info.difficulty.value}&question=${info.question.value}
    &parameters=${info.params.value}&tcaseINFO=${myJSON}`;
    }
    
    
    

    //Add hidden element if want to delete question ( work on later )
    //Ajax Request
    if (window.XMLHttpRequest) {
          var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        //console.log("RESPONSE: " , this.responseText);
       var table = document.getElementById("theTable"); //Table in HTML
       //Variable to insert a row at the end of the table
       var row = table.insertRow(table.rows.length); //Table Length in rows
       //Loop through the info object and fill the cells of a new row with the values of each key
         for(var i = 0; i < size-1; i++){ /*Loop that iterates through the data the user entered 
                                            size is 4*/
           var cell = row.insertCell(i);
           cell.innerHTML = Object.values(info)[i].value;
           //console.log(Object.values(data).value));
         }
       
    /*
       newCell = row.insertCell(5);
        newElem = document.createElement( 'input' );
        newElem.setAttribute("type", "submit");
        newElem.setAttribute("name", "val");
        newElem.setAttribute("id", "val");
        newElem.setAttribute("onclick", deleteQuestion(x));
        newCell.appendChild(newElem); */

        //<input type="submit" name="valu" onclick="deleteQuestion('.$row["id"].')" id="valu">
       
    }
      };
      xhttp.open("POST", "questionInfo.php", true);
      xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhttp.send(requestData);
}
//Deletes the previously created element because the " value " attribute became fixed after the first use and wouldn't change
var element = document.getElementById("tcaseINFO");
element.parentNode.removeChild(element);
}


// Takes an object and returns a string of it's data serialized to work with PHP's json_decode()
Object.prototype.phpSerialize = function() {
	var $ = ""; // serialized string
 
	// lambdas
	var serializeString = function( str ) { // also handles numbers
		return ( str.constructor == String ) 
			? "\"" + str.replace( /"/ , "\\\"" ) + "\"" 
			: str;
	}
 
	var serializeArray = function( arr ) {
		var strs = "";
 
		for( var i = 0; i < arr.length; i++ ) {
			strs += serializeString( arr[ i ] ) + ",";
		}
 
		return "[" + rtrimComma( strs ) + "]";
	}
 
	var rtrimComma = function( str ) {
		return str.substr( 0, str.length - 1 );
	}
 
	// iterate object
	for( var key in this ) {
 
		if ( this[ key ].constructor == Function ) 
			continue; // we can't serialize functions
 
		$ += "\"" + key + "\":";
 
		switch( this[ key ].constructor ) {
			case String: 
				$ += serializeString( this[ key ] );
			break;
			case Number:
				$ += serializeString( this[ key ] );
			break;
			case Array:
				$ += serializeArray( this[ key ] );
			break;
			case Object:
				$ += this[ key ].phpSerialize(); // recursion
			break;
		}
 
		$ += ",";
	}
 
	return "{" + rtrimComma( $ ) + "}";
}