<?php
 require "conn.php";

 $tablesArray = [];
 $tableSql = "SHOW TABLES";
 $table = mysqli_query($conn, "SHOW TABLES");

 //Save all table names in a array
 foreach ($table as $table_name)
{
    $tname = ($table_name["Tables_in_$db"]);
    array_push($tablesArray, $tname);
}


// for($i = 0; $i = count($tablesArray) ; $i++ ){
//  echo $i . '. ' . $tablesArray[$i]. '.<br>';
// }


if(count($tablesArray) < 1){
    echo 'No tables have been created in this database yet. Please visit the page to create new tables or contact your administratior to uploade some tables for you';

}else {
    echo '<br> <h3>' . count($tablesArray) . ' Table(s)  found in ' . $db . ' </h3>Please select the table you would like to view' ;
}


?>