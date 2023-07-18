<?php

require 'database.php';
$query = "SELECT * FROM branches";
if($is_query_run = mysqli_query($conn, $query)) {
    $branch_data = [];
    while($query_executed = mysqli_fetch_assoc($is_query_run)){
        $branch_data[] = $query_executed;
    }
}
else{
    echo "Error in execution!";
}

echo json_encode($branch_data);

?>