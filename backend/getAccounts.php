<?php

require 'database.php';
$query = "SELECT * FROM pharmaccount";
if($is_query_run = mysqli_query($conn, $query)) {
    $account_data = [];
    while($query_executed = mysqli_fetch_assoc($is_query_run)){
        $account_data[] = $query_executed;
    }
}
else{
    echo "Error in execution!";
}

echo json_encode($account_data);

?>