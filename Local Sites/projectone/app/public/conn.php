<?php 

$host = 'localhost';
$db = 'local';
$user = 'root';
$pass = 'root';

$conn = new mysqli($host, $user, $pass, $db);

//Check connection
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error) . '<br />';
} else {
	echo "Connected successfully......." . ' <br /> <br />';
	

 }

?>