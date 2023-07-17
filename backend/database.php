<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, DELETE, PUT, PATCH, OPTIONS');
header('Access-Control-Allow-Headers: token, content-type');
header('Access-Control-Max-Age: 1728000');
header('Content-Length: 0');
header('Content-Type: text/plain');

$servername = "localhost";
$username = "root";
$password = "";
$database = "catalog-db";

$conn = new mysqli($servername, $username, $password, $database);

if($conn->connect_error) {
    die("Connection failed: ".$conn->connect_error);
}

?>