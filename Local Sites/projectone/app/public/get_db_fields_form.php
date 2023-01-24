<?php
// Require connection credentials
 require "conn.php";
?>


<!-- Beging of HTML to server form fields -->
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>INSERT FORM</title>

<!-- Form styling -->
	<style>
body {background-color: powderblue;}
h1   {color: blue;}
p    {color: red;}
div {width: 400px; background: #f3f3f3; padding: 15px; text-transform: uppercase; text-align: end;}

input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}

input[type=button], input[type=submit], input[type=reset] {
  background-color: #04AA6D;
  border: none;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
}
</style>
</head>
<body>

<div > 

<?php
// Get all form filds dynamically 
$getSql = "SHOW COLUMNS FROM users";
$result = $conn->query($getSql);
$rows = $result->fetch_all(MYSQLI_ASSOC);


// Print each table header to screen as form field
echo '<form action="insert.php" method="POST">';
foreach($rows as $header) {

// exclude the record ID from display
if($header['Field'] != 'id' ){
  echo $header['Field'];
	echo "<label>" . $header['Field'] . ': '. "</label>" . "<input name='" . $header['Field'] . "type='text'>" . "<br /> <br />";
}
 }
echo '<input type="submit" value="Submit">';
echo '</form>';
echo '5' . '<br /> <br />';
echo count($_POST);


?>
</div>
</body>
</html>