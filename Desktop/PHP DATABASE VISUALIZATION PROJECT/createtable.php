<?php

require "conn.php";

// CREATE TABLE

$sql = "CREATE TABLE `users` (
`id` INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
`firstname` VARCHAR(30) NOT NULL,
`lastname` VARCHAR(30) NOT NULL,
`email` VARCHAR(50) UNIQUE,
`dob` DATE,
`regdate` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
);" ;

if ($conn->query($sql) === TRUE) {
  echo "Table created successfully";
} else {
  echo "Error creating table: " . $conn->error;
}


?>