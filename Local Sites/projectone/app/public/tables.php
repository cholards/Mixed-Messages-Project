<?php
 require "conn.php";

 

?>
<!DOCTYPE html>
<html>

<?php include('header.php'); ?>

<p>
    <?php 

    echo " <h2 style='text-transform: uppercase;'>SHOWING ALL TABLES IN <strong style='color: red;'> $db </strong> </h2>";
    
    $tablesArray = [];
    $tableSql = "SHOW TABLES";
    $table = mysqli_query($conn, $tableSql);
   
    //Save all table names in a array
    foreach ($table as $table_name)
   {
       $tname = ($table_name["Tables_in_$db"]);
       array_push($tablesArray, $tname);
       
   }
   
   // Format the tabels into an ordered list of items

   echo '<form method="post">' . '<ol>';
   foreach($tablesArray as $item ){
    $itemName =  str_replace('_', ' ', $item);
    echo "<li> " . "<input type='submit' name='$itemName' value='$itemName' style= 'text-align: left; margin: 5px; width: 60%; padding: 7px 5px; border: none; text-transform: capitalize; background-color: #fefefe; opacity: 0.5;' />" . '</li>' ;
   }

   if(isset($_POST)) {
   $activeTableName = str_replace(' ', '_', implode(',',$_POST));
   $activeTable = implode(',',$_POST);
}
   echo '</ol> </form>';


   if($activeTable && $activeTableName) {
    echo '<form method="post" action="form.php">' . '<button type="submit" class="btn btn-danger"> You are about to edit <a class="link-light" href="/form.php/' . $activeTable . '">' .'<span style="text-transform: capitalize">' . $activeTable . '</span>'. '</a></button> </form>';
}

   //;

   // Summary of displayed items
   
   if(count($tablesArray) < 1){
       echo '<br>No tables have been created in this database yet. Please visit the page to create new tables or contact your administratior to uploade some tables for you';
   
   }else {
       echo '<br> <br> <h5>' . count($tablesArray) . ' Table(s)  found in ' . $db . ' </h5>Please select the table you would like to view' ;
   }
   
    ?>
    
</p>

<?php 
echo '<script>
document.write("THis is the remix");

</script>';

?>



<?php include('footer.php'); ?>


