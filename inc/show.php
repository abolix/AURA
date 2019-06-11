<?php 
include('database.php');

//Display error message
if ($conn->connect_error) {
    die('Error : ('. $conn->connect_errno .') '. $conn->connect_error);
}

$sql="SELECT TABLE_NAME FROM information_schema.TABLES WHERE TABLE_SCHEMA = '<schema name>'";
$result=$conn->query($sql);
while ( $tables = $result->fetch_assoc())
{
echo "<br>".$tables['TABLE_NAME'];
}
// Free memory by clearing result
$result->free();

?>
