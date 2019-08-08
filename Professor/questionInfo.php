<?php
    //initializing cURL request
    $curl = curl_init();
    $file = 'https://web.njit.edu/~dgp28/cs-490/middle-end/addQuestion.php';
    //https/web.njit.edu/~dgp28/cs-490/middle-end/addQuestion.php
    //https://web.njit.edu/~ma645/Professor/accessTESTCASE.php
    //https://web.njit.edu/~dgp28/cs-490/middle-end/addQuestion.php
    $n = 0;
    
    $items = array();
    foreach($_POST as $post_var=>$val){
    //echo "IN HERE: " . $val ."\n";
    //$en = urlencode($val);
    //echo "ENCODED: " . $en . "</br>";
    $items[] = $val;
    }
    $data2 = http_build_query($items); // Data
    $parsed = parse_str($data2, $output); // Seperating Data into array
   // $enc = rawurlencode($output[3]); // Encoding Parameters, which is index 3

    //echo "Parsed: " . $output[3] . "<br>";
    $replace3 = str_replace(" ","+",$output[3]);

   // echo "Replace TEST: " . $replace3 . "<br>";

   /* echo "Encoded Parsed: " . $enc . "<br>";
    $replace = str_replace("%20","+",$enc);
    echo "Replace: " . $replace . "<br>";
    $dec = urldecode($replace);
    echo "Decoded Parsed: " . $dec . "<br>";
    $replace2 = str_replace(" ","+",$dec);
    echo "Replace Final: " . $replace2 . "<br>";
    echo "THE DATA: " . $data2;*/
    
    
    curl_setopt_array($curl, array(
    CURLOPT_URL => $file,
    CURLOPT_POST => 1,
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_POSTFIELDS => $data2
    ));
   $response = curl_exec($curl); //json
   //echo curl_exec($curl);
    curl_close($curl);

   $t_data = json_decode($response);
?>