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
$id = $_GET['id'];

$q = mysqli_query($con, "UPDATE `products` SET ,`BranchID`='[$BranchID]',`ProdName`='[$ProdName]',`ProdBrand`='[$ProdBrand]',`Dosage`='[$Dosage]',`Price`='[$Price]',`ProductPic`='[$ProductPic]' WHERE 'id' = '($id)' LIMIT 1");

if($q) {
    $message['status'] = "Success";
}else {
    http_response_code(422);
    $message['status'] = "Error";
}

echo json_encode($message);
echo mysqli_error($con);