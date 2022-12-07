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
    $submitType =  $_POST['submit-type'];
    $itemsArrayStr =  $_POST['wishlist-item-array'];
    $participantID = $_SESSION['currentUserId'];

    $dateNow = date('Y-m-d H:i:s');

    // die("Submit Type: $submitType | Array Str: $itemsArrayStr");
    $query = "INSERT INTO `wishlists`(`wishlist_id`, `wishlist_items_array`, `captured_date`, `family_participants_participant_id`) 
    VALUES 
    (null,'$itemsArrayStr','$dateNow',$participantID)";

    $result = $dbconn->query($query);

    if (!$result) header("Location: ../../capture/failed/"); //die("A Fatal Error has occured. DBCONN Error Message: " . $dbconn->error);

    $result = null;
    $dbconn->close();

    // take user to success screen
    header("Location: ../../capture/success/");
} catch (\Throwable $th) {
    throw $th;
}
