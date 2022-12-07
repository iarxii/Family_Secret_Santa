<?php
session_start();

define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'adaptivc_secret_santa_db_user');
define('DB_PASSWORD', 'adaptivc_secret_santa_db_109238');
define('DB_DATABASE', 'adaptivc_secret_santa_db');

$dbconn = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_DATABASE);

//Connection Test==============================================>
if ($dbconn->connect_error) die("Fatal Error");
//end of Connection Test============================================>

try {
    $lastid = $name = $surname = $email = $password = null;

    $name =  $_POST['name'];
    $surname =  $_POST['surname'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $query = "INSERT INTO `family_participants`(`participant_id`, `name_surname`, `password`, `email_address`) 
    VALUES (null,'$name $surname','$password','$email')";

    $result = $dbconn->query($query);
    if (!$result) header("Location: ../../index.html?return=fatal");

    // get the last id
    $lastid = $dbconn->insert_id;

    $result->null;
    $dbconn->close();

    header("Location: ../../capture/new-wishlist.html?id=$lastid");
} catch (\Throwable $th) {
    throw $th;
}
