/*
    var ID;
    ID = "186037050";
    var API = "https://1xirsp68.com/LiveFeed/GetGameZip?id=" + ID + "&lng=en&cfview=0&isSubGames=true&GroupEvents=true&allEventsGroupSubGames=true&countevents=250&partner=36";
    $.getJSON(API, function (data) {
        if (!data.Success) {
            console.log('OOPS ! I cant reach the 1X API.');
        }else {
        var TimeAll = data.Value.SC.TS;
        var TimeMinute = Math.floor(TimeAll / 60)
        var TimeSecond = TimeAll - (TimeMinute * 60);
        console.log(TimeMinute + ":" + TimeSecond);
        }
    });
*/
function Test() {
    $.ajax({
        url: 'http://localhost/aura/list.php',
        success: function(data) {
            window.location.reload(); // This is not jQuery but simple plain ol' JS
        }
      });
}
setTimeout(Test, 4000); 