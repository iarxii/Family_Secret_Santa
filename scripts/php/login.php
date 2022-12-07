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
    $email = $_POST['email'];
    $password = $_POST['password'];

    $query = "SELECT * FROM `family_participants` WHERE `email_address` = '$email' AND `password` = '$password'";

    $result = $dbconn->query($query);
    if (!$result) die("A Fatal Error has occured. Please try again and if the problem persists, please contact the system administrator.");

    $rows = $result->num_rows;

    if ($rows == 0) {
        //there is no result so notify user that the account cannot be found
        header("Location: ../../index.html?return=unf&e=$email");
        // echo "error[User not found]";
    } else {
        for ($j = 0; $j < $rows; ++$j) {
            $row = $result->fetch_array(MYSQLI_ASSOC);

            $_SESSION['currentUserAuth'] = true;
            $_SESSION['currentUserId'] = $row["participant_id"];
            $_SESSION['currentUserNameSurname'] = $row["name_surname"];
            $_SESSION['currentUserEmail'] = $row["email_address"];
        }

        $result->close();
        $dbconn->close();
        
        header("Location: ../../capture/new-wishlist.html?id=".$_SESSION['currentUserId']);
        // echo "success[". $_SESSION['currentUserId']."]";
    }
} catch (\Throwable $th) {
    throw $th;
}
