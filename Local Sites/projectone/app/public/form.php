<?php

require('conn.php');

if(isset($_POST['submit'])){
echo htmlspecialchars($_POST['email']) . '<br />';

}else{
    echo 'NO VALUES';
}
?>
<!DOCTYPE html>
<html>

<?php include('header.php'); ?>

<br />
<form action="form.php" method="POST" >
  <div class="form-row">
   
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
	echo '<br>' . '<div class="form-group col-md-2"><label>' . str_replace('_',' ',$header['Field'])  . ': '. "</label>" .'<br>' . "<input name='" . $header['Field']. "placeholder='" . $header['Field']. "'"  .  "type='text'>" . "</div>";
}
 }

echo count($_POST);
?>
 <br />
  </div>
  <button type="submit" name="submit" value="submit" class="btn btn-dark">Sign in</button>
</form>



<?php include('footer.php'); ?>
