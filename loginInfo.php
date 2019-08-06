<?php
    //initializing cURL request
    $curl = curl_init();
    $ucid = $_POST['ucid'];
    $pass = $_POST['password'];

    $file = 'https://web.njit.edu/~dgp28/cs-490/middle-end/login.php';

    $data = array(
        ucid => $ucid,
        password => $pass
    );

    curl_setopt_array($curl, array(
    CURLOPT_URL => $file,
    CURLOPT_POST => 1,
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_POSTFIELDS => $data
    ));
    echo curl_exec($curl);
    curl_close($curl);
 /*------------------------------------------------------------------*/
    //initializing cURL request
?>