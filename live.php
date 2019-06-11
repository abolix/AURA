<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>AURA List</title>
  <link rel="stylesheet" href="style.css">
  <script src="js/jquery-3.3.1.js"></script>
  <script src="js/list.js"></script>
  <script>



  </script>
</head>

<body>






<div class="listcontainer">
<?php
include('inc/database.php');
$query = mysqli_query($conn, "SELECT * FROM aura WHERE MatchStatus='Game in Progress' ORDER BY id DESC");
while($row = mysqli_fetch_assoc($query)) {
    
    echo '<div class="listbox">';
    echo '<td>'.$row['Matchid'].'</td>';
    echo '<div class="listleague">'.$row['League'].'</div>';
    echo '<div class="mainlist">';
    echo '<div class="listteam1">'.$row['Team1'].'</div>';
    echo '<div class="listscore1">'.$row['Team1Score'].'</div>';
    echo '<span>-</span>';
    echo '<div class="listscore2">'.$row['Team2Score'].'</div>';
    echo '<div class="listteam2">'.$row['Team2'].'</div>';
    echo '<ul class="listgoal">';
    if ($row['description'] !== ""){
    $myjsoncode = json_decode($row['description'], true);
    foreach ($myjsoncode as $item) {
      echo '<li>'.$item.'</li>';
  }
    }else {
      echo '<li class="nog">No Goal</li>';
    }
    echo '</ul>';

    echo '</div>';
    echo '</div>';
    
    
    
}

?>
</div>
<!--

    <div class="listbox">


      <div class="listleague">FIFA 17. Europe League</div>



      <div class="mainlist">
        <div class="listteam1">Tottenham Hotspur</div>
        <div class="listscore1">2</div>
        <span>-</span>
        <div class="listscore2">0</div>
        <div class="listteam2">Roma</div>
        <ul class="listgoal">
        <li>16:31</li>
        <li>62:27</li>
        <li>67:00</li>
        <li>71:01</li>
        </ul>
      </div>


    </div>
  </div>
-->
</body>

</html>


