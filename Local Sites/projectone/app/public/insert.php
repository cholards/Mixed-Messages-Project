<?php
// Require connection credentials
require "conn.php";
include('header.php');


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


// Fromat database tables and form fields into a table that shows how SQL query would look like
echo '<table> <th> FILD NAME </th><th> FIELD VALUE </th>';

while ($itirant < $itirations) {
  echo '<tr> <td style="text-transform: capitalize;">' . str_replace('_',' ', $valsHeaders[$itirant])  .'</td> ' . '<td>' . $formVal[$itirant] . '<br>';
  $itirant++ .'</td> </tr>' ;
}

echo '</table>';




include('footer.php'); ?>
</body>
</html>