/*

--------------------------------------------------------------------------------

Game Logic

First part of the Game - the main screen
The user will first select how many "real players" will play, the computer will fill the rest so there will be always 4 players on the Game. I'll ask for the name of the players. The user will also choose the lvl of the computer (meaning their speed reaction and their accuracy)
When you hit the play button, the screen will change to the board one, with all players displayed, their stack of cards left and pile.

Second part - How the game actually works
At that point, i'll have a deck of cards, i'll randomly give each player the same amount of cards.

There will be turns, so:
Turn 1: Player 1 will show one random card of his stack clicking a button.
Turn 2: Player 2 will show one random card of his stack clicking a button.
Turn 3: Player 3 will show one random card of his stack clicking a button.
Turn 4: Player 4 will show one random card of his stack clicking a button.

At any time, a player can press his assigned key. If he does that:
 - I'll check if his card is the same of somebody's card.
    - If so, this player will pass all his pile to the player who had the same card so his stack of cards will be increased (if there is more than 1 player with same card, the stack of cards will be passed to a random player).
    - If not, it means that some player thought he had the same card but it wasn't, so he will take ALL the piles of the other players and add it to his stack.
     - If theres the card that everybody has to take the totem, the player who get it first, will pass his piles to a random player.

When turns are passung, the stack of players will be decreasing, so:
 - If a player gets his stack to 0, he wins the game and a winning screen will appear, then it will say play again and you will see the first screen

----------------------------------------------------------------------------------

*/

//Create the main object
function JungleSpeed() {
  //need to add all cards with the img src and maybe something like name/id to compare them later
  this.cards = [
                {name:"card2",family:"special"},
                {name:"card2",family:"special"},
                {name:"card2",family:"special"},
                {name:"card2",family:"special"},
                {name:"card5",family:"star1"},
                {name:"card6",family:"star1"},
                {name:"card7",family:"star1"},
                {name:"card8",family:"star1"},
                {name:"card9",family:"star2"},
                {name:"card10",family:"star2"},
                {name:"card11",family:"star2"},
                {name:"card12",family:"star2"},
                {name:"card13",family:"squarecircle"},
                {name:"card14",family:"squarecircle"},
                {name:"card15",family:"squarecircle"},
                {name:"card16",family:"squarecircle"},
                {name:"card17",family:"star3"},
                {name:"card18",family:"star3"},
                {name:"card19",family:"star3"},
                {name:"card20",family:"star3"},
                {name:"card21",family:"loop1"},
                {name:"card22",family:"loop1"},
                {name:"card23",family:"loop1"},
                {name:"card24",family:"loop1"},
                {name:"card25",family:"loop2"},
                {name:"card26",family:"loop2"},
                {name:"card27",family:"loop2"},
                {name:"card28",family:"loop2"},
                {name:"card29",family:"star4"},
                {name:"card30",family:"star4"},
                {name:"card31",family:"star4"},
                {name:"card32",family:"star4"},
                {name:"card33",family:"hexagonsquare"},
                {name:"card34",family:"hexagonsquare"},
                {name:"card35",family:"hexagonsquare"},
                {name:"card36",family:"hexagonsquare"},
                {name:"card37",family:"circlecross1"},
                {name:"card38",family:"circlecross1"},
                {name:"card39",family:"circlecross1"},
                {name:"card40",family:"circlecross1"},
                {name:"card41",family:"loop3"},
                {name:"card42",family:"loop3"},
                {name:"card43",family:"loop3"},
                {name:"card44",family:"loop3"},
                {name:"card45",family:"circlecross2"},
                {name:"card46",family:"circlecross2"},
                {name:"card47",family:"circlecross2"},
                {name:"card48",family:"circlecross2"},
                {name:"card49",family:"dots1"},
                {name:"card50",family:"dots1"},
                {name:"card51",family:"dots1"},
                {name:"card52",family:"dots1"},
                {name:"card53",family:"loop4"},
                {name:"card54",family:"loop4"},
                {name:"card55",family:"loop4"},
                {name:"card56",family:"loop4"},
                {name:"card57",family:"hexagoncircle"},
                {name:"card58",family:"hexagoncircle"},
                {name:"card59",family:"hexagoncircle"},
                {name:"card60",family:"hexagoncircle"},
                {name:"card61",family:"circlecross3"},
                {name:"card62",family:"circlecross3"},
                {name:"card63",family:"circlecross3"},
                {name:"card64",family:"circlecross3"},
                {name:"card65",family:"dots2"},
                {name:"card66",family:"dots2"},
                {name:"card67",family:"dots2"},
                {name:"card68",family:"dots2"},
                {name:"card69",family:"circlesquare"},
                {name:"card70",family:"circlesquare"},
                {name:"card71",family:"circlesquare"},
                {name:"card72",family:"circlesquare"},
                {name:"card73",family:"circlecross4"},
                {name:"card74",family:"circlecross4"},
                {name:"card75",family:"circlecross4"},
                {name:"card76",family:"circlecross4"}
              ];

//those are the cards that players need to play, when it gets to 0, game ends
  this.stackPlayer1 = [];
  this.stackPlayer2 = [];
  this.stackPlayer3 = [];
  this.stackPlayer4 = [];

//this is the cards every player had play, it's the cards the player will pass to another when losing
  this.discardsPlayer1 = [];
  this.discardsPlayer2 = [];
  this.discardsPlayer3 = [];
  this.discardsPlayer4 = [];


  JungleSpeed.prototype.players = function (player){

  };

  JungleSpeed.prototype.shuffleCards = function() {
    //Gonna split the total card array in 4 equal piles
    var currentIndex = this.cards.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }

    return this.cards;

  };

  JungleSpeed.prototype.splitArray = function() {

    var shuffleArray = this.shuffleCards();

    for (var i = 0; i < 19; i++) {
      this.stackPlayer1.push(shuffleArray[i]);
    }
    for (var k = 19; k < 38; k++) {
      this.stackPlayer2.push(shuffleArray[k]);
    }
    for (var j = 38; j < 57; j++) {
      this.stackPlayer3.push(shuffleArray[j]);
    }
    for (var a = 57; a < 76; a++) {
      this.stackPlayer4.push(shuffleArray[a]);
    }

  };

  JungleSpeed.prototype.showCard = function(stackplayer) {

  };

}


// END OF CONSTUCTOR - should separate this into another file

// -------------------- INTERACTING WITH THE DOM -----------------------------

//set variables
var jungleSpeed = new JungleSpeed();


var players;
var playerArr = [];
var playerKey = ["Q","P","Z","M"];
var computerLevel = ["dumb","decent","god"];
var stack1 = [];
var stack2 = [];
var stack3 = [];
var stack4 = [];
var playersArray = ["Computer 1", "Computer 2", "Computer 3", "Computer 4"];
var turn = 0;



// Check if the user selects 4 real players, if not, it means there will be a computer, so i'll show the computer lvl options

$(document).on('change', "#number-of-players", function(){

var test = $("#number-of-players").val();

  if (test === "4") {
    $("#cpu").removeClass("show-container");
    $("#cpu").addClass("hide-container");
  } else{
    $("#cpu").removeClass("hide-container");
    $("#cpu").addClass("show-container");
  }

});

// -------------------------------------------------------



// Get the number of players and ask every human player for his name and assign a key to every human

$( "#all-set" ).on('click', function() {

    setAllPlayers();

    SetCpuLvl();

});

// --------------------------------------------------------


//Click the play button, it will only appear if you set the number of players, after that, launch the board

$( "#play" ).on('click', function() {

  $("#first-screen").addClass("hide-container");
  $("#board-screen").addClass("show-container");

  //shuffle and get all stacks for each player
  jungleSpeed.shuffleCards();
  jungleSpeed.splitArray();

  // add cards to each player
  $("#cards-player-1").append("Cards Left to win: " + jungleSpeed.stackPlayer1.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer1.length);

  $("#cards-player-2").append("Cards Left to win: " + jungleSpeed.stackPlayer2.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer2.length);

  $("#cards-player-3").append("Cards Left to win: " + jungleSpeed.stackPlayer3.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer3.length);

  $("#cards-player-4").append("Cards Left to win: " + jungleSpeed.stackPlayer4.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer4.length);

});

// -------------------------------------------------------



// function to check what happen if i press space (change turn) and what happens if i press a key to claim for equal cards

$(document).keypress(function(event){

  var keyPressed = event.key; //capture the key

  console.log(keyPressed);
  $("#player-turn").empty(); // empty all the container

  if (keyPressed === " ") {
    turn ++;//increase the turn so it changes

    switch (turn) { // switch between every turn
      case 1:
          $("#player-turn").append("IT'S " + playerArr[0] + " TURN!");
          $("#card-player-1").empty();
          $("#cards-player-1").empty();

          jungleSpeed.discardsPlayer1.push(jungleSpeed.stackPlayer1[0]);
          jungleSpeed.stackPlayer1.shift();

          $("#card-player-1").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.stackPlayer1[0].name + '.jpg" alt="">');

          $("#cards-player-1").append("Cards Left to win: " + jungleSpeed.stackPlayer1.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer1.length);

      break;

      case 2:
          $("#player-turn").append("IT'S " + playerArr[1] + " TURN!");
          $("#card-player-2").empty();
          $("#cards-player-2").empty();

          jungleSpeed.discardsPlayer2.push(jungleSpeed.stackPlayer2[0]);
          jungleSpeed.stackPlayer2.shift();
          $("#card-player-2").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.stackPlayer2[0].name + '.jpg" alt="">');

          $("#cards-player-2").append("Cards Left to win: " + jungleSpeed.stackPlayer2.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer2.length);

      break;

      case 3:
          $("#player-turn").append("IT'S " + playerArr[2] + " TURN!");
          $("#card-player-3").empty();
          $("#cards-player-3").empty();


          jungleSpeed.discardsPlayer3.push(jungleSpeed.stackPlayer3[0]);
          jungleSpeed.stackPlayer3.shift();
          $("#card-player-3").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.stackPlayer3[0].name + '.jpg" alt="">');

          $("#cards-player-3").append("Cards Left to win: " + jungleSpeed.stackPlayer3.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer3.length);

      break;

      case 4:
        turn = 0;
          $("#player-turn").append("IT'S " + playerArr[3] + " TURN!");
          $("#card-player-4").empty();
          $("#cards-player-4").empty();


          jungleSpeed.discardsPlayer4.push(jungleSpeed.stackPlayer4[0]);
          jungleSpeed.stackPlayer4.shift();
          $("#card-player-4").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.stackPlayer4[0].name + '.jpg" alt="">');

          $("#cards-player-4").append("Cards Left to win: " + jungleSpeed.stackPlayer4.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer4.length);

      break;
    }
  }

  switch (keyPressed) {
    case "q": //player 1

      //player1 win vs player2
      if (jungleSpeed.stackPlayer1[0].family === jungleSpeed.stackPlayer2[0].family) {

        //player 1 gives all his discards to player 2 stack
        var discardPlayer1toPlayer2 = jungleSpeed.discardsPlayer1.length;//only for visual purposes

        var newArrPlayer2 = jungleSpeed.discardsPlayer1.concat(jungleSpeed.discardsPlayer2);
        var finalArrPlayer2 = newArrPlayer2.concat(jungleSpeed.stackPlayer2);
        jungleSpeed.stackPlayer2 = finalArrPlayer2;
        jungleSpeed.discardPlayer1 = [];
        jungleSpeed.discardPlayer2 = [];
        console.log(jungleSpeed.discardPlayer1);
        console.log(jungleSpeed.discardPlayer2);

        //empty the container before refreshing it
        $("#cards-player-2").empty();
        $("#cards-player-1").empty();
        //append the new results of cards-left and discards
        $("#cards-player-1").append("Cards Left to win: " + jungleSpeed.stackPlayer1.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer1.length);
        $("#cards-player-2").append("Cards Left to win: " + jungleSpeed.stackPlayer2.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer2.length);


        alert("You had the same card of player 2 and you clicked first!\n Player 1 pass " + discardPlayer1toPlayer2 + " cards to player 2, so now player 2 needs " + jungleSpeed.stackPlayer2.length + " cards to finish the game");
        console.log(jungleSpeed.discardPlayer1);
        console.log(jungleSpeed.discardPlayer2);


      }
      //player1 win vs player3
      else if (jungleSpeed.stackPlayer1[0].family === jungleSpeed.stackPlayer3[0].family) {

        //player 1 gives all his discards to player 3 stack
        var discardPlayer1toPlayer3 = jungleSpeed.discardsPlayer1.length;
        var newArrPlayer3 = jungleSpeed.discardsPlayer1.concat(jungleSpeed.discardsPlayer3);
        var finalArrPlayer3 = newArrPlayer3.concat(jungleSpeed.stackPlayer3);
        jungleSpeed.stackPlayer3 = finalArrPlayer3;
        jungleSpeed.discardsPlayer1 = [];
        jungleSpeed.discardsPlayer3 = [];
        //empty the container before refreshing it
        $("#cards-player-3").empty();
        $("#cards-player-1").empty();
        //append the new results of cards-left and discards
        $("#cards-player-1").append("Cards Left to win: " + jungleSpeed.stackPlayer1.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer1.length);
        $("#cards-player-3").append("Cards Left to win: " + jungleSpeed.stackPlayer3.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer3.length);


        alert("You had the same card of player 3 and you clicked first!\n Player 1 pass " + discardPlayer1toPlayer3 + " cards to player 3, so now player 3 needs " + jungleSpeed.stackPlayer3.length + " cards to finish the game");
      }
      //player1 win vs player4
      else if (jungleSpeed.stackPlayer1[0].family === jungleSpeed.stackPlayer4[0].family) {

        //player 1 gives all his discards to player 4 stack
        var discardPlayer1toPlayer4 = jungleSpeed.discardsPlayer1.length;
        var newArrPlayer4 = jungleSpeed.discardsPlayer1.concat(jungleSpeed.discardsPlayer4);
        var finalArrPlayer4 = newArrPlayer4.concat(jungleSpeed.stackPlayer4);
        jungleSpeed.stackPlayer4 = finalArrPlayer4;
        jungleSpeed.discardsPlayer1 = [];
        jungleSpeed.discardsPlayer4 = [];
        //empty the container before refreshing it
        $("#cards-player-4").empty();
        $("#cards-player-1").empty();
        //append the new results of cards-left and discards
        $("#cards-player-1").append("Cards Left to win: " + jungleSpeed.stackPlayer1.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer1.length);
        $("#cards-player-4").append("Cards Left to win: " + jungleSpeed.stackPlayer4.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer4.length);


        alert("You had the same card of player 4 and you clicked first!\n Player 1 pass " + discardPlayer1toPlayer4 + " cards to player 4, so now player 4 needs " + jungleSpeed.stackPlayer4.length + " cards to finish the game");

      }
      //player1 fails
      else if (jungleSpeed.stackPlayer1[0].family !== jungleSpeed.stackPlayer2[0].family && jungleSpeed.stackPlayer1[0].family !== jungleSpeed.stackPlayer3[0].family && jungleSpeed.stackPlayer1[0].family !== jungleSpeed.stackPlayer4[0].family) {
        alert("You thought you had a similar card but you didnt!");
      }


      // if (jungleSpeed.stackPlayer1[0].family === jungleSpeed.stackPlayer2[0].family || jungleSpeed.stackPlayer1[0].family === jungleSpeed.stackPlayer3[0].family || jungleSpeed.stackPlayer1[0].family === jungleSpeed.stackPlayer4[0].family) {
      //
      // alert("You rock!");
      // } else {
      // alert("You fucked up");  }

     break;

    case "p": //player 2

      if (jungleSpeed.stackPlayer2[0].family === jungleSpeed.stackPlayer1[0].family || jungleSpeed.stackPlayer2[0].family === jungleSpeed.stackPlayer3[0].family || jungleSpeed.stackPlayer2[0].family === jungleSpeed.stackPlayer4[0].family) {

        alert("You rock!");

      } else {
        alert("You fucked it up");
      }

    break;
    case "z"://player 3

      if (jungleSpeed.stackPlayer3[0].family === jungleSpeed.stackPlayer2[0].family || jungleSpeed.stackPlayer3[0].family === jungleSpeed.stackPlayer1[0].family || jungleSpeed.stackPlayer3[0].family === jungleSpeed.stackPlayer4[0].family) {

        alert("You rock!");

      } else {
        alert("You fucked it up");
      }

    break;
    case "m": //player 4

      if (jungleSpeed.stackPlayer4[0].family === jungleSpeed.stackPlayer2[0].family || jungleSpeed.stackPlayer4[0].family === jungleSpeed.stackPlayer3[0].family || jungleSpeed.stackPlayer4[0].family === jungleSpeed.stackPlayer1[0].family) {

        alert("You rock!");

      } else {
        alert("You fucked it up");
      }

    break;
  }

});

//function to ask for every player name and attach it to the board

function setAllPlayers(){
  players = $("#number-of-players").val();

  for (var i = 0; i < players; i++) {
    playerArr.push(prompt("What's the name of Player " + [i+1] + "?").toUpperCase());

    $('#names-to-play').append(
    '<div><h5>'+ playerArr[i]  + ' will have the "' + playerKey[i] +'" key assigned</h5></div>');

    $("#player-"+(i+1)).append(playerArr[i]);


  }
}


//check for the cpu lvl

function SetCpuLvl(){
  var cpuLvl = $("#lvl-of-cpu").val();

  $("#final-cpu-lvl").append('<div><h5>Will be playing with a ' + computerLevel[cpuLvl] + ' CPU</h5><h3>WHO WILL WIN?</h3></div>');
}




// wait till you click the play button, then launch the board page
