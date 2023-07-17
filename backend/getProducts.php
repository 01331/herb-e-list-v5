<?php

require 'database.php';
$query = "SELECT * FROM products";
if($is_query_run = mysqli_query($conn, $query)) {
    $user_data = [];
    while($query_executed = mysqli_fetch_assoc($is_query_run)){
        $user_data[] = $query_executed;
    }
}
else{
    echo "Error in execution!";
}

echo json_encode($user_data);

?>