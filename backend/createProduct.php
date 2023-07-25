<?php
include "database.php";
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$message = array();
$BranchID = $data['BranchID'];
$ProdName = $data['ProdName'];
$ProdBrand = $data['ProdBrand'];
$Dosage = $data['Dosage'];
$Price = $data['Price'];
$ProductPic = $data['ProductPic'];

$q = mysqli_query($con, "INSERT INTO `products`(`BranchID`, `ProdName`, `ProdBrand`, `Dosage`, `Price`, `ProductPic`) VALUES ('[$BranchID]','[$ProdName]','[$ProdBrand]','[$Dosage]','[$Price]','[$ProductPic]')");

if($q) {
    http_response_code(201);
    $message['status'] = "Success";
}else {
    http_response_code(422);
    $message['status'] = "Error";
}

echo json_encode($message);
echo mysqli_error($con);