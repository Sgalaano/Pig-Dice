$(document).ready(function(){
  $("#player1-roll").click(function gala(){
    var galano = Math.floor(Math.random()* 6)+1;
    parseInt($("#round-total-1").text(galano));
    if (galano !== 1){
      total += galano;
      parseInt($("#total-score-1").text(total));
    }
    else{
      total=0
      parseInt($("#total-score-1").text(total));
    }
  });
});

$(document).ready(function(){
  $("#player2-roll").click(function gala2(){
    var galanoGreat = Math.floor(Math.random()* 6)+1;
    parseInt($("#round-total-2").text(galanoGreat));
    if (galano !== 1){
      total += galanoGreat;
      parseInt($("#total-score-2").text(total));
    }
    else{
      total=0
      parseInt($("#total-score-2").text(total));
    }
  });
});
