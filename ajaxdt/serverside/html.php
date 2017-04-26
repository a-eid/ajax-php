<?php 
// enable CORS 
header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH');
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With "); 

echo "<h1>";
echo "this is an html response send with php from a different origin";
echo "</h1>";
