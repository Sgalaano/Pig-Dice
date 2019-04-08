$(document).ready(function(){
  var rollVal1 = 0;
  var totalScore = 0;
  $("player1-roll").click(function(){
    var random1 = Math.floor((Math.random()*6) + 1);

    rollVal1=rollVal1 + random1;

    $("#round-total-1").text(random1);
    $("#player1-hold").click(function() {
      totalScore=totalScore + rollVal1;
      $("#total-score-1").text(totalScore)
      rollval1 = 0;
    });
  });
});

$(document).ready(function(){
  var rollval2 = 0;
  var totalscore = 0;
  $("player2-roll").click(function(){
    var random2 = Math.floor((Math.random()*6) + 1);

    rollval2=rollval2 + random2

    $("#round-total-2").text(random2);
    $("#player2-hold").click(function() {
      totalScore=totalscore + rollval2;
      $("#total-score-2").text(totalScore)
      rollval2 = 0;
    });
  });
});
