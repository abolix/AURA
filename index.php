<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>AURA Project</title>
    <link rel="stylesheet" href="style.css">
    <script src="js/jquery-3.3.1.js"></script>
    

</head>
<body>


<div class="form">
<label>Custom Match Retriver : </label>
<div class="searchbox">
<input id="MatchID" type="text" placeholder="Match ID Number ...." />
<input id="SubmitButton" type="submit" name="button" value="Submit"/>
</div>
</div>



<div class="container">
<button id="autocheck" type="submit">Auto Check</button>

<div id="split"></div>
<div id="MatchStatus" class="left box"></div>
<div id="Time" class="left box"></div>



<div id="teamstatus" class="left box">
<div id="Team1Name" class="inline"></div>
<div id="Team1Score" class="score inline"></div>
<span id="statspan"></span>
<div id="Team2Score" class="score inline"></div>
<div id="Team2Name" class="inline"></div>

</div>



</div>

<script src="js/script.js"></script>
<script>
//CreateData();
var MatchIDInput;
  document.getElementById('SubmitButton').onclick = function() {
    ID = document.getElementById("MatchID").value;
    getData();
}
document.getElementById('autocheck').onclick = function() {
    NewMatches();
}

if ($('#Team1Name').is(':empty')){
            $('#teamstatus').css('display', 'none');
        }
</script>
<!--<script src="js/betname_full.js"></script> For ODDS -->










</body>
</html>