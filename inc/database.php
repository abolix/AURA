
<?php
$servername = "localhost";
$username = "aura";
$password = "aura";
$dbname = "aura";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
?>