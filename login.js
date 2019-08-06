//Adding an eventlistener ' Enter '
var input = document.getElementById("password");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
if (event.keyCode === 13) {
    ajaxLogin();
    }
});

function ajaxLogin(){
    //data
    var info = {
        ucid : document.getElementById("ucid"),
        password : document.getElementById("password")
    };
    //requestData
    const requestData = `ucid=${info.ucid.value}&password=${info.password.value}`;
    //Ajax Request
    if (window.XMLHttpRequest) {
          var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        //Parse json data given from responseText
        //Check the data for student and teacher
        var data=JSON.parse(this.responseText);
        if(data.result && data.rank == 'Teacher'){
            window.location = 'https://web.njit.edu/~ma645/Professor/mainPage/mainPage.html';
        }
        else if(data.result && data.rank == 'Student'){
            //sendUCID(info.ucid.value);
            window.location = 'https://web.njit.edu/~ma645/Student/main_page.php';
        }
        else if(info.ucid.value == '' && info.password.value == ''){
            document.getElementById("cred-check").innerHTML = "No Data Entered";
        }
        else{
            document.getElementById("cred-check").innerHTML = "Username/Password combination is invalid.";
        }
    }
      };
      xhttp.open("POST", "loginInfo.php", true);
      xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhttp.send(requestData);
}
}

//Adding an eventlistener ' Enter '
var input = document.getElementById("password");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
if (event.keyCode === 13) {
    ajaxLogin();
    }
});

function sendUCID(ucid){
    //data
    console.log("UCID IS: ", ucid);
    var url = "https://web.njit.edu/~ma645/Student/takeExam.php";
    const requestData = `ucid2=${ucid}`;
    //Ajax Request
    if (window.XMLHttpRequest) {
          var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        console.log("WORKS");
      }
    };
      xhttp.open("POST", url, true);
      xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhttp.send(requestData);

}
}