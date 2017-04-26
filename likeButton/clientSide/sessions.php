<?php 
// simple ex refreshing on php & sessions ... 
session_start();
if( isset($_SESSION['VIEWS']) ){
  $_SESSION['VIEWS'] += 1;
}else{
  $_SESSION['VIEWS'] = 1;
};

?> 

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>php sessions</title>
</head>
<body>
<h2>page views for this session <?= $_SESSION['VIEWS'] ?> </h2>
<a href="destory_session.php">destory session</a>
</body>
</html>