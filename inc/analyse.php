<?php 
include('database.php');

$sql="SELECT description,League FROM aura";






$MatchGoalArray = [];

if ($result=mysqli_query($conn,$sql)) {
  while ($row=mysqli_fetch_row($result)) {

    array_push($MatchGoalArray,array("GoalData"=>$row[0],"League"=>$row[1]));

}


$MatchJson = json_encode($MatchGoalArray);
echo $MatchJson;   
}
?>