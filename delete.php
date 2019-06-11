<?php
include('inc/database.php');
$conn->query("DELETE FROM aura WHERE MatchStatus='Game is not started yet'");
$conn->query("DELETE FROM aura WHERE MatchStatus='Game in Progress'");
$conn->query("DELETE FROM aura WHERE NOT StartTime='00:00'");
$conn->query("delete from aura where id in
(select max(id) from the_table
   group by Team1, description
   having count(*) > 1)");
?>