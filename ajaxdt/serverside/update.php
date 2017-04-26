<?php
// set header for cross origin request 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH');
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With "); 
header('Content-Type: application/json');

$categories = [
  'Furniture'=> [
      ['id' => 1, 'name' => 'Beds'],
      ['id' => 2, 'name' => 'Benches'],
      ['id' => 3, 'name' => 'Cabinets'],
      ['id' => 4, 'name' => 'Chairs & Stools'],
      ['id' => 5, 'name' => 'Consoles & Desks'],
      ['id' => 6, 'name' => 'Sofas'],
      ['id' => 7, 'name' => 'Tables']
    ],
  'Lighting' => [
      ['id' => 1, 'name' => 'Ceiling'],
      ['id' => 2, 'name' => 'Floor'],
      ['id' => 3, 'name' => 'Table'],
      ['id' => 4, 'name' => 'Wall']
    ],
    'Accessories' => [
      ['id' => 1, 'name' => 'Mirrors'],
      ['id' => 2, 'name' => 'Outdoor & Patio'],
      ['id' => 3, 'name' => 'Pillows'],
      ['id' => 4, 'name' => 'Rugs'],
      ['id' => 5, 'name' => 'Wall Decor & Art'],
    ]
]; 

/**
* returns an array of objects {id: number , name: name}
**/
if( $_POST['category'])
  echo json_encode($categories[ucfirst(strtolower($_POST['category']))]);

















 
