<html>
    <head>
        <meta charset="utf-8">
        <title>Redirect</title>
        <link rel="stylesheet" href="prof2.css">
        <link rel="stylesheet" href="table.css">
    </head>
        <body>
        <div id="snackbar">Question Created</div>
        <script src="https://web.njit.edu/~ma645/Professor/Exam/reviewExam/reviewExam.js"></script>
        <div class="header">
        <h4 id="prof">Professor</h4>
        <a id="logout" href="https://web.njit.edu/~ma645/logout.php">Logout</a>
            <h1>CS100 Exam System</h1>
        </div>
    <div class="container" align="center">
        <button class="b" onclick="window.location='https://web.njit.edu/~ma645/Professor/create_question.php';">Question Bank</button>
        <button class="b" onclick="window.location='https://web.njit.edu/~ma645/Professor/Exam/mainExam/create_Exam.php';">Exam</button>
        <button class="b" onclick="reviewExam()">Review Exam</button>
    </div>
        <div class="qform1">
        <h4>Create a New Question</h4>
            <div class="question-form">
            <div class="textbox">
                <label>Question: </label>
				<input type="text" name="question" id="question" placeholder="Question..">
			</div>
            <div class = "textbox">
                <label>Topic: </label>
				<input type="text" name="type" id="type" placeholder="Topic..">
            </div>
            <div class = "textbox">
                <label>Difficulty: </label>
				<input type="text" name="difficulty" id="difficulty" placeholder="Difficulty..">
            </div>
            <div class = "textbox">
                <label>Function/Parameters: </label>
                <b>( function,x,y .. parameters being x and y )</b>
				<input type="text" name="parameters" id="parameters" placeholder="Function Parameters..">
            </div>
            
                <label>Constraints: </label>
                <input type="checkbox" id="chkFor" value="for"/>
                <label for = "chkFor">For</label>
                <input type="checkbox" id="chkWhile" value="while"/>
                <label for = "chkWhile">While</label>
                <input type="checkbox" id="chkRecursion" value="recursion"/>
                <label for = "chkRecursion">Recursion</label>
                
           <div class = "textbox" id="cases">
                 <form id="chells"></form>
                <label>Test</br>Cases:</label>
				<input type="text" id="tcase" name='myInputs[]' placeholder="Input">
                <input type="text" id="tcase2" name='myInputs[]' placeholder="Expected Output">
                <input type="text" id="tcase" name='myInputs[]' placeholder="Input">
                <input type="text" id="tcase2" name='myInputs[]' placeholder="Expected Output">
                <button onclick="addInput('cases')">Add</button>
                <script>
                    var x = 0;
                    function addInput(divID){
                        var t = document.getElementById('true');
                        if(t){
                            return;
                        }
                        if(x < 4){
                        var newdiv = document.createElement('div');
                        newdiv.innerHTML = "<label id='tcase'>" + "<input type='text' name='myInputs[]' placeholder='Input'>";
                        newdiv.innerHTML += "<label id='tcase2'>" + "<input type='text' name='myInputs[]' placeholder='Expected Output'><br>"
                        document.getElementById(divID).appendChild(newdiv);
                        }
                        else{
                            var newdiv = document.createElement('div');
                            newdiv.innerHTML = "<h4 id='true'>Cannot have more than 6 Test Cases</h4>";
                            document.getElementById(divID).appendChild(newdiv);
                        }
                        x++;
                    }
                </script>
            </div>
			<form id="delA" name="delA"></form>
			<p id="demo"></p>
            <script>
                function myFunction() {
                  var x = document.getElementById("snackbar");
                  x.className = "show";
                  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
                  //window.location = "https://web.njit.edu/~ma645/Professor/mainPage/mainPage.html";
                }
            </script>
            <button id="btn-addQuestion" onclick="sendQuestion();myFunction()" align="right">Create</button>
            <script src="addQuestion.js"></script>
</div>
</div>
     <div class="wrapper">
    <div class="qform2">
        <h4>Filter By..</h4>
    </div>
    <form action="" id="filter">
      <div>
        <label>Type</label>
        <input type="text" placeholder="type" autofocus="on"/>

        <label>Difficulty</label>
        <input type="text" placeholder="difficulty"/>

        <label>Keyword</label>
        <input type="text" placeholder="keyword"/>
      </div>
     </form>
        <?php 
            include './questionInfo.php';
            echo '<div class="table-title">
                    <h4>Question Bank</h4>
                    </div>';
            echo '<div class="question-form2">';
            echo '<table align="right" border="1" id="theTable" class="table-fill">';
            echo '<tr><td align="center">' . "<strong>Type</strong>" . 
                    '</td><td align="center">' . "<strong>Difficulty</strong>" .
                    '</td><td align="center">' . "<strong>Question</strong>" . '</td></tr>';
                	//'</td><td align="center">' . "<strong>Function/Parameters</strong>" . '</td></tr>';
            foreach($t_data as $item)
            {
                if($item->question == ''){
                    echo '<tr class="noDISPLAY">';
                }
                else{
                    echo '<tr>';
                }
            echo '<td>'.$item->type.'</td>';
            echo '<td>'.$item->difficulty.'</td>';
            echo '<td>'.$item->question.'</td>';
            //echo '<td>'.$item->parameters.'</td>';
            echo '</tr>';
        }
            echo '</table>';
            echo '</div>';
        
        ?>
    </div>
    <script src="filter.js"></script>
        </body>
    
</html>