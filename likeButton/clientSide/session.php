<?php 
session_start();
if(!isset($_SESSION['likes'])) 
  $_SESSION['likes'] = [] ;
else
  $_SESSION['likes'][] = $_POST['post'];

print_r( $_SESSION );
print_r( $_POST );
?>