<?php 
include('database.php');



$Matchid = $_POST['Matchid'];
$Status = $_POST['Status'];
$MatchIdArray = array();

foreach($Matchid as $item) {
    $MatchIdCheck = $conn->query("SELECT id FROM aura WHERE Matchid = $item");
    if($MatchIdCheck->num_rows == 0) {
        if($Status !== "Match finished"){
        array_push($MatchIdArray,array("Matchid"=>$item,"Status"=>false));
        }
    } else {
        array_push($MatchIdArray,array("Matchid"=>$item,"Status"=>true));
    }
}
$MatchIdCount = count($MatchIdArray);
$MatchIdArray['C'] = $MatchIdCount;
$myJSON = json_encode($MatchIdArray);
echo $myJSON;



?>