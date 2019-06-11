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





<?php


echo '<table>';
echo '<tr>';
echo '<th>ردیف</th><th>کاربر</th><th>تلفن</th><th>شماره سفارش</th><th>مبلغ</th><th>توضیحات</th><th>تاریخ</th><th>وضعیت</th>';
echo '</tr>';

$i = 1;
include('inc/database.php');
$query = mysqli_query($conn, "SELECT * FROM aura WHERE MatchStatus='Match finished' ORDER BY id DESC");
while($row = mysqli_fetch_assoc($query)) {
    
  echo '<tr>';
  echo '<td>'.$i.'</td>';
  echo '<td>'.$row['League'].'</td>';
  echo '</tr>';
    
    
    
}

?>
</div>

</body>

</html>


