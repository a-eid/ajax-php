<?php 
// cores headers 
header('Access-Control-Allow-Origin: ');
// to set cookies ... 
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Origin: http://127.0.0.1:8080');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH');
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With "); 
header('Content-Type: application/json');
session_start();

if(!isset($_SESSION['likes'])) {
  $_SESSION['likes'] = [];
}else{
  if( !in_array( $_POST['post'] , $_SESSION['likes'] ) ){
    $_SESSION['likes'][] = $_POST['post'];
  }
}

if(isset($_POST['like'])){
  $_SESSION['liked'][] = $_POST['like'];
  echo $_POST['like'];
}elseif(isset($_POST['unlike'])){
  $id = array_search($_POST['unlike'] , $_SESSION['liked']);
  array_splice($_SESSION['liked'] , $id , 1);
  echo $_POST['unlike']; 
}else{
  echo json_encode($_SESSION['liked']);
}

















