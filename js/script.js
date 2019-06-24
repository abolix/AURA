

    var SportMatchID,SportStatus,SportLeague,SportStatus2,JsonResponse,ID;
    var ResponseArray = [];
    function CreateData() {
    var SportAPI = "https://1xirsp78.com/LiveFeed/Get1x2_VZip?sports=85&count=10&lng=en&mode=4&cyberFlag=1&country=75&partner=36&getEmpty=true";
    $.getJSON(SportAPI, function (SportData) {

        var List = SportData.Value;
        var MatchIDList = [];
        
        
        for (var ListItem in List) {
        SportMatchID = List[ListItem].I;
        SportStatus = List[ListItem].SC.I;
        SportStatus2 = List[ListItem].SC.CPS;
        SportLeague = List[ListItem].L;
        if (SportLeague !== "FIFA18. Penalty") { // Do NOT ACCEPT PENALTY
            MatchIDList.push(SportMatchID);
        }
        }
        function AjaxResponse(){ 
            console.log(JsonResponse);
            var ResponseData = JSON.parse(JsonResponse);
       //     console.log(ResponseData.C);

            var i;
            for (i = 0; i < ResponseData.C; i++) {
                ResponseArray.push(ResponseData[i].Status);
           //     console.log(ResponseArray);
                if (!ResponseData[i].Status) {
                ID = ResponseData[i].Matchid;
                getData();
                break;
                }
            }


        }
        $.ajax({
            type: "POST",
            url: "inc/matchid.php",             
            cache: false,             
            data: {Matchid: MatchIDList,Status: SportStatus,Status2: SportStatus2},
            success: function(response){                    
                JsonResponse = response;
                AjaxResponse();


            }

        });

    });


    }



var GoalData = [];
var MyID, MyLeague, MyTeam1Name, MyTeam2Name, MyStartTime ,MyTeam1Score ,MyTeam2Score ,MyMatchStatus;
var Team1ScoreChecker = 99;
var Team2ScoreChecker = 99;
function getData() {

   // var ID = SportMatchID;
    MyID = ID;
    var API = "https://1xirsp78.com/LiveFeed/GetGameZip?id=" + ID + "&lng=en&cfview=0&isSubGames=true&GroupEvents=true&allEventsGroupSubGames=true&countevents=250&partner=36";
    $.getJSON(API, function (data) {
        //var MyBet = data.Value.GE[2].E[0][0].T;




        if (!data.Success) {
            console.log('OOPS ! I cant reach the 1X API.');
        }else {
        var TimeAll = data.Value.SC.TS;
        var TimeMinute = Math.floor(TimeAll / 60)
        var TimeSecond = TimeAll - (TimeMinute * 60);
        var Team1Score = data.Value.SC.FS.S1;
        var Team2Score = data.Value.SC.FS.S2;
        var Team1Name = data.Value.O1;
        var Team2Name = data.Value.O2;
        var LeagueName = data.Value.L;
        var MatchStatus = data.Value.SC.I;
        


        //Time Second Time Minute Befre Start Game = NaN
        if (isNaN(TimeMinute)) {
            TimeMinute = "00";
        }
        if (isNaN(TimeSecond)) {
            TimeSecond = "00";
        }


        if (TimeSecond.toString().length == 1) {
            TimeSecond = "0" + TimeSecond;
        }
        if (Team1Score == null) {
            Team1Score = "0";
        }
        if (Team2Score == null) {
            Team2Score = "0";
        }
        if (MatchStatus == null) {
            MatchStatus = "Game in Progress";
            // Half time | Game in Progress | Match finished | Pre-match bets
        }
        if (MatchStatus == "Pre-match bets") {
            MatchStatus = "Game is not started yet";
        }






        

        //UI
        
        // UI : Match Status
        
        $('#split').css('display', 'block');
        if (MatchStatus == "Game in Progress"){
            $('#MatchStatus').css('background', '#feca57');
            $("#MatchStatus").text(MatchStatus);
        }
        if (MatchStatus == "Game is not started yet"){
            $('#MatchStatus').css('background', '#2e86de');
            $("#MatchStatus").text(MatchStatus);
        }
        if (MatchStatus == "Match finished") {
            $('#MatchStatus').css('background', '#ee5253');
            $("#MatchStatus").text(MatchStatus);
        }
        if (MatchStatus == "Half time") {
            $('#MatchStatus').css('background', '#0abde3');
            $("#MatchStatus").text(MatchStatus);
        }


        //UI : Team Names And Scores
        if (MatchStatus == "Game is not started yet"){
            $("#Team1Score").text(Team1Name);
            $("#Team2Score").text(Team2Name);
            $("#Team1Name").text("");
            $("#Team2Name").text("");
            $("#statspan").text("VS");
            
        }else {
            $("#Team1Name").text(Team1Name);
            $("#Team2Name").text(Team2Name);
            $("#Team1Score").text(Team1Score);
            $("#Team2Score").text(Team2Score);
            $("#statspan").text("-");
        }

        // UI : Time
        if (MatchStatus == "Game is not started yet"){
            $("#Time").text("Remaining time to start : " + TimeMinute + ":" + TimeSecond);
        }else {
            $("#Time").text(TimeMinute + ":" + TimeSecond);
        }

        if ($('#Team1Score').is(':empty')){
            $('#teamstatus').css('display', 'none');
        }else {
            $('#teamstatus').css('display', 'block');
        }







        // Bet Lock Checker || ODD Lock Checker
        var OddLockArray = [];
        var lockdata = data.Value.GE;
        for (var LockGE in lockdata) {
            var Arraydata = lockdata[LockGE].E;
            for (var LockGF in Arraydata) {
                var SecondArraydata = Arraydata[LockGF];
                for (var LockGG in SecondArraydata) {
                    var OddLock = SecondArraydata[LockGG].B;
                    if (OddLock !== null) {
                        OddLockArray.push(OddLock);
                    }

                }
            }
        }
        function allTrue(obj){
          for(var o in obj)
              if(!obj[o]) return false;
            
          return true;
        }    
        var CheckOddLock = allTrue(OddLockArray)
        if (CheckOddLock) {
            OddLock = "Odd Locked !";
        } else {
            OddLock = "-";
        }





        // Goal Checker
        if (Team1Score > Team1ScoreChecker) {
            console.log("%c GOOOAL for " + Team1Name, "color:green");
            GoalData.push(TimeMinute + ":" + TimeSecond);
            var GoalJson = JSON.stringify(GoalData);
            console.log(GoalJson);
        }
        if (Team2Score > Team2ScoreChecker) {
            console.log("%c GOOOAL for " + Team2Name, "color:green");
            GoalData.push(TimeMinute + ":" + TimeSecond);
            var GoalJson = JSON.stringify(GoalData);
            console.log(GoalJson);
        }
        Team1ScoreChecker = Team1Score;
        Team2ScoreChecker = Team2Score;



        // Set Variable Global For Database 
        MyLeague = LeagueName;
        MyTeam1Name = Team1Name;
        MyTeam2Name = Team2Name;
        MyStartTime = TimeMinute + ":" + TimeSecond;
        MyTeam1Score = Team1Score;
        MyTeam2Score = Team2Score;
        MyMatchStatus = MatchStatus;



        


        // Game not Started
        if (MatchStatus == "Game is not started yet") {
            console.log(LeagueName)
            console.log("Remaining time to start : ", TimeMinute + ":" + TimeSecond );
            console.log(Team1Name + " VS " + Team2Name)

            $.ajax({
                url: "inc/datasender.php",
                type: "POST",
                cache: false,
                data: { Matchid: MyID, League: MyLeague, Team1: MyTeam1Name, Team1Score: MyTeam1Score, Team2Score: MyTeam2Score, Team2: MyTeam2Name,StartTime: MyStartTime , description: GoalData , MatchStatus:MyMatchStatus },
                success: function (data) {
                    console.log("%c" + data , "color:purple");
                }
              });
        } else {
            // Live Game
            //Connect To Database
                  $.ajax({
                    url: "inc/datasender.php",
                    type: "POST",
                    cache: false,
                    data: { Matchid: MyID, League: MyLeague, Team1: MyTeam1Name, Team1Score: MyTeam1Score, Team2Score: MyTeam2Score, Team2: MyTeam2Name,StartTime: MyStartTime , description: GoalData , MatchStatus:MyMatchStatus },
                    success: function (data) {
                        console.log("%c" + data , "color:purple");
                    }
                  });
            console.log(LeagueName)
            console.log("Time ", TimeMinute + ":" + TimeSecond + " | " + MatchStatus);
            console.log(Team1Name + " : " + Team1Score + " | " + Team2Name + " : " + Team2Score)
            console.warn(OddLock);
                  //ODD LOCK DEBUG
         //   console.warn(CheckOddLock + " | " + OddLockArray);
        }

        if (MatchStatus == "Match finished") {
            Team1ScoreChecker = 99;
            Team2ScoreChecker = 99;
            GoalData = [];
            console.log('%c Match Ended !','color:red');
            NewMatches();
            
        }else {
           setTimeout(getData, 4000);
        }

        //console.log(betsModel[MyBet]);
        

        return MyID, MyLeague, MyTeam1Name, MyTeam2Name, MyStartTime, GoalData, MyMatchStatus;
    }
    });
    }


    function NewMatches() {// Half time | Game in Progress | Match finished | Pre-match bets | Game is not started yet
        var MatchStatusx = $('#MatchStatus').text();
        if (MatchStatusx !== "Half time" && MatchStatusx !== "Game in Progress" && MatchStatusx !== "Pre-match bets" && MatchStatusx !== "Game is not started yet" ) {
            console.log(MatchStatusx);
            CreateData();
            setTimeout(NewMatches, 8000); 
    } 
    }

// Analyser
// Devide Match 5 Minutes
var JsonData,MYLength;
var FIFAALL = [];
var FIFA17E = [];
var FIFA17C = [];
var FIFA18W = [];
var FIFA19F = [];
var FIFA19G = [];
/*
FIFA17E = "FIFA 17. Europe League";
FIFA17C = "FIFA 17. Champions League";
FIFA18W = "FIFA 18. World Championship";
FIFA19F = "FIFA 19. France Championship";
FIFA19G = "FIFA 19. Germany Championship";
*/
function AnalyseProcess() {
        for (var MatchAnalyse in JsonData) {
            AnalyseLeague = JsonData[MatchAnalyse].League;
            AnalyseGoalData = JsonData[MatchAnalyse].GoalData;

            
            if (AnalyseGoalData !== "") {
            AnalyseGoalData = JSON.parse(AnalyseGoalData);
            MYLength = AnalyseGoalData.length - 1;
            //console.log(AnalyseGoalData.length);
            //console.log(AnalyseLeague);
            var GoalAnalyseData = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
            var ValueDot;
            var ValueDevide;
            var ValueRounded;


                
          $.each(AnalyseGoalData, function( index, value ) {
                // Index = Number Of Data in 1 Match
                // Goal Times
                ValueDot = value.replace(":", ".");
                ValueDevide = ValueDot / 5;
                ValueRounded = Math.round(ValueDevide);
                if (ValueRounded <= 18) {
                GoalAnalyseData[ValueRounded] = GoalAnalyseData[ValueRounded] + 1;
                }
             

                // LOG once when Tracking is done !
      /*          if ( index == MYLength){


                }*/
              });
       //       console.log(AnalyseGoalData);
       //       console.log(GoalAnalyseData);

            if (AnalyseLeague == "FIFA 17. Europe League") {
                FIFA17E.push(GoalAnalyseData);
                FIFAALL.push(GoalAnalyseData);
            }
            if (AnalyseLeague == "FIFA 17. Champions League") {
                FIFA17C.push(GoalAnalyseData);
                FIFAALL.push(GoalAnalyseData);
            }
            if (AnalyseLeague == "FIFA 18. World Championship") {
                FIFA18W.push(GoalAnalyseData);
                FIFAALL.push(GoalAnalyseData);
            }
            if (AnalyseLeague == "FIFA 19. France Championship") {
                FIFA19F.push(GoalAnalyseData);
                FIFAALL.push(GoalAnalyseData);
            }
            if (AnalyseLeague == "FIFA 19. Germany Championship") {
                FIFA19G.push(GoalAnalyseData);
                FIFAALL.push(GoalAnalyseData);
            }


            }else {
                GoalAnalyseData = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                if (AnalyseLeague == "FIFA 17. Europe League") {
                    FIFA17E.push(GoalAnalyseData);
                    FIFAALL.push(GoalAnalyseData);
                }
                if (AnalyseLeague == "FIFA 17. Champions League") {
                    FIFA17C.push(GoalAnalyseData);
                    FIFAALL.push(GoalAnalyseData);
                }
                if (AnalyseLeague == "FIFA 18. World Championship") {
                    FIFA18W.push(GoalAnalyseData);
                    FIFAALL.push(GoalAnalyseData);
                }
                if (AnalyseLeague == "FIFA 19. France Championship") {
                    FIFA19F.push(GoalAnalyseData);
                    FIFAALL.push(GoalAnalyseData);
                }
                if (AnalyseLeague == "FIFA 19. Germany Championship") {
                    FIFA19G.push(GoalAnalyseData);
                    FIFAALL.push(GoalAnalyseData);
                }
                // ::TODO
            }
        }
    }
    // Get Database Data
    function Analyse() {
        $.ajax({
            type: "POST",
            url: "inc/analyse.php",             
            cache: false,             
            success: function(response){                    
                JsonData = JSON.parse(response);
                AnalyseProcess();
                TheAnalyser();
            }

        });
    }

    //Analyse();
    var Y = [];
  //  var TestAna = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
   var NewPlusArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
   var TestAna = [0,0,0,0,1,0,0,"x","x","x","x","x","x","x","x","x","x","x","x"];
    function TheAnalyser() {
            // THE Analyser
            // Array 9 Objets !
            // console.log(FIFA17E);

            $.each(TestAna, function( index1, value1 ) {
                if(!isNaN(value1)) {
                Y.push("x")
                // X Means Time Already Past
            }else {
                Y.push(0);
            }
            });

        //    console.log(Y);
        //    ["x", "x", "x", "x", "x", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    var rowCount = 0;
    $.each(FIFAALL, function( index, value ) {
        var ArrayToText = value.join("");
        var MySearch = TestAna.join("");
        var MySearchReplaced = MySearch.replace(/x/g,"");
        var FindText = ArrayToText.startsWith(MySearchReplaced);
        if (FindText) {
    //    console.log(value);
        rowCount++;
        for (var Plus = 0;Plus <= 18;Plus++) {
        NewPlusArray[Plus] = NewPlusArray[Plus] + value[Plus];
        }
     //       $.each(value, function( index2, value2 ) {
     //       if (value2 !== "x") {
     //          console.log(index2 + ":" + value2);
     //       }
     //       });
        }else{
   //         console.log("Not Found");
        }
        
});

for (var Plus = 0;Plus <= 18;Plus++) {
    NewPlusArray[Plus] = Math.round((100 * NewPlusArray[Plus]) / rowCount);
}

console.log(NewPlusArray);

//console.log(Y);
}
  
       Analyse();
