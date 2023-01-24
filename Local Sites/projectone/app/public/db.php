<?php 
$host = 'localhost';
$db = 'local';
$user = 'root';
$pass = 'root';

$conn = new mysqli($host, $user, $pass);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error) . '<br />';
} else {
	echo "Connected  successfully" . '<br />';
}

$sql = "SELECT * FROM users";
$result = $conn->query($sql);

$result = mysqli_query($conn, $sql);
$returned = mysqli_fetch_all($result, MYSQLI_ASSOC);

print_r($returned);

$conn->close();

?>