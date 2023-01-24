<?php 

$host = 'ls-8026fb6b85acd3a73cb9223a82436335efa6f316.creakdql8ke4.us-east-1.rds.amazonaws.com';
$db = 'testdb';
$user = 'dbmasteruser';
$pass = 'ZOtn7+W1.A<gN=VR~Oue>9.3^#`fBUaY';

$conn = new mysqli($host, $user, $pass, $db);

//Check connection
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error) . '<br />';
} else {
	echo "Connected successfully" . ' <br /> <br />';
	


 }

?>