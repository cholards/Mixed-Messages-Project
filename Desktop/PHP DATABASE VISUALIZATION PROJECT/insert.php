<?php
// Require connection credentials
 require "conn.php";


if($_POST){
for($i=0; $i <= count($_POST) -1; $i++ ){	
	}
$formVal = array();

foreach($_POST as $qey => $val){


  
  array_push($formVal, $val);
	
}
$columns = "'" . implode( "', '",array_values($formVal)) . "'";
  //echo $columns;
 }
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
div {width: 400px; background: #f3f3f3; padding: 15px;  text-align: end;}

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

table, td, th {background-color: #bebebe; border: 1px solid red; padding: 2px;}
</style>
</head>
<body>

<div > 

<?php
// Get all form filds dynamically 
$getSql = "SHOW COLUMNS FROM users";
$result = $conn->query($getSql);
$rows = $result->fetch_all(MYSQLI_ASSOC);

$valsHeaders = [];

// Print each table header to screen as form field
foreach($rows as $header) {

// exclude the record ID from display
if($header['Field'] != 'id' ){

  array_push($valsHeaders, $header['Field']) ;
}

 }
$rowsVal = "'" . implode( "', '",array_values($valsHeaders)) . "'";
 $insertSql = "INSERT INTO $db.users
($rowsVal)
VALUES ($columns);
 ";

echo '<br /> <br />' .'11' . '<br /> <br />' . $insertSql . '<br /> <br />' ;

$itirations = count($rows) - 1;
$itirant = 0;


echo ' <br /> <h3>A total of ' . count($_POST) . ' values will be inserted into the database as follows:' . '</h3><br />' ;

echo '<table> <th> FILD NAME </th><th> FIELD VALUE </th>';

while ($itirant < $itirations) {
  echo '<tr> <td>' . $valsHeaders[$itirant] .'</td> ' . '<td>' . $formVal[$itirant] . '<br>';
  $itirant++ .'</td> </tr>' ;
}

echo '</table>';




?>
</div>
</body>
</html>