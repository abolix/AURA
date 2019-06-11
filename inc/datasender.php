<?php 
include('database.php');
// Define Variable
$Matchid = $_POST['Matchid'];
if (isset($_POST["League"])){
    $League = $_POST['League'];
} else {
    $League = "";
}
if (isset($_POST["Team1"])){
    $Team1 = $_POST['Team1'];
} else {
    $Team1 = "";
}
if (isset($_POST["Team1Score"])){
    $Team1Score = $_POST['Team1Score'];
} else {
    $Team1Score = "";
}
if (isset($_POST["Team2Score"])){
    $Team2Score = $_POST['Team2Score'];
} else {
    $Team2Score = "";
}
if (isset($_POST["Team2"])){
    $Team2 = $_POST['Team2'];
} else {
    $Team2 = "";
}
if (isset($_POST["StartTime"])){
    $StartTime = $_POST['StartTime'];
} else {
    $StartTime = "";
}
if (isset($_POST["MatchStatus"])){
    $MatchStatus = $_POST['MatchStatus'];
} else {
    $MatchStatus = "";
}




    // Check if there is a Match in Database 
    $MatchIdCheck = $conn->query("SELECT id FROM aura WHERE Matchid = $Matchid");
    if($MatchIdCheck->num_rows == 0) {
        // IF match does not exist
        $sql = "INSERT INTO aura (League, Matchid, Team1, Team1Score, Team2Score, Team2, StartTime, description, MatchStatus)
        VALUES ('$League', '$Matchid', '$Team1', '$Team1Score', '$Team2Score', '$Team2', '$StartTime', '$GoalTimeChecker', '$MatchStatus')";
        if ($conn->query($sql) === TRUE) {
            // IF Database IS Created
            echo "Database Status : " . $Matchid . " Created";
        } else {
            // Database can't create !
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }else {




// IF game is not started
if($MatchStatus !== "Game is not started yet"){
// if game is going to be started
if($StartTime == "00:00") {
    $conn->query("UPDATE aura SET StartTime='$StartTime' WHERE Matchid='$Matchid'");
}
$description = "";
// if there was a goal record
if(!empty($_POST['description'])) {
    $description = $_POST['description'];
    $GoalTimeChecker = json_encode($description);
    // make sure if there is a goal record
    if ($GoalTimeChecker !== NULL) {
        $GoalCheck = $conn->query("UPDATE aura SET description='$GoalTimeChecker' WHERE Matchid='$Matchid'");
        // Seriosly , i don't know what the fuck this do . but i like it :|
        if ($conn->query($GoalCheck) === TRUE) {
            echo "Database Status : Goal Updated";
        }
        }
 }

// UPDATOR
$conn->query("UPDATE aura SET Team1='$Team1' WHERE Matchid='$Matchid'");
$conn->query("UPDATE aura SET Team2='$Team2' WHERE Matchid='$Matchid'");
$conn->query("UPDATE aura SET MatchStatus='$MatchStatus' WHERE Matchid='$Matchid'");
$conn->query("UPDATE aura SET Team1Score='$Team1Score' WHERE Matchid='$Matchid'");
$conn->query("UPDATE aura SET Team2Score='$Team2Score' WHERE Matchid='$Matchid'");

}
}

?>
