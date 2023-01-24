<?php

require('db.php');

if(isset($_POST['submit'])){
echo htmlspecialchars($_POST['email']) . '<br />';
echo htmlspecialchars($_POST['city']) . '<br />';
echo htmlspecialchars($_POST['inputZip']) . '<br />';
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
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" name="email" class="form-control" id="inputEmail4" placeholder="Email">
    </div>
   
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" name="city" class="form-control"  id="inputCity">
    </div>
   
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" name="inputZip" class="form-control" id="inputZip">
    </div>
  </div>
 <br />
  </div>
  <button type="submit" name="submit" value="submit" class="btn btn-dark">Sign in</button>
</form>


<?php include('footer.php'); ?>
