// business logic
var player1 = {};
var player2 = {};

var rollDice=function() {
  return Math.floor(6*Math.random()) + 1;
}

function User() {
  this.roll = 0;
  this.roundTotal = 0;
  this.totalScore = 0;
  //nextplayer.Math.floor(2*Math.random()) + 1;
};


// checking for score 1
User.prototype.rollOne = function() {
  if (this.roll === 1) {
    this.roundTotal = 0;
    alert("next player's turn!" + " You rolled a 1!")
  } else {
    this.roundTotal += this.roll;
  }
}
// Hold functionality
User.prototype.Hold = function() {
  this.totalScore += this.roundTotal;
  this.roundTotal = 0;
  alert("Next players turn!!");
  if(this.totalScore >= 100) {
    alert("you have won");
  }
}
// Winner checking functionality
User.prototype.winner = function() {
  if(this.totalScore >= 100) {
    alert("You won")
  }
  newGame();
}
// New Game prototype
User.prototype.newGame = function() {
  this.roll = 0;
  this.totalScore = 0;
  this.roundTotal = 0;
}

// front end
$("document").ready(function(){
$("#newGame").click(function(){
$("#dice-roll-1, #round-total-1, #total-score-1, #dice-roll-2, #round-total-2, #total-score-2").empty();
});
player1 = new User();
player2 = new User();
$("button#player1-roll").click(function () {
  player1.roll = rollDice();
  $("#dice-roll-1").text(player1.roll);
  player1.rollOne();
  $("#round-total-1").text(player1.roundTotal);
});

$("button#player1-hold").click(function () {
  player1.Hold();
  $("#total-score-1").text(player1.totalScore);
  $("#dice-roll-1").empty();
  $("#round-total-1").empty();
})

$("button#player2-roll").click(function () {
  player2.roll = rollDice();
  $("#dice-roll-2").text(player2.roll);
  secondPlayer.rollOne();
  $("#round-total-2").text(player2.roundTotal);
});

$("button#player2-hold").click(function () {
  player2.Hold();
  $("#total-score-2").text(player2.totalScore);
  $("#dice-roll-2, #round-total-2").empty();
})

$("button#newGame").click(function () {

})

});
