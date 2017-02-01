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
    {name:"card2",family:"special",visible:false},
    {name:"card2",family:"special",visible:false},
    {name:"card2",family:"special",visible:false},
    {name:"card2",family:"special",visible:false},
    {name:"card5",family:"star1",visible:false},
    {name:"card6",family:"star1",visible:false},
    {name:"card7",family:"star1",visible:false},
    {name:"card8",family:"star1",visible:false},
    {name:"card9",family:"star2",visible:false},
    {name:"card10",family:"star2",visible:false},
    {name:"card11",family:"star2",visible:false},
    {name:"card12",family:"star2",visible:false},
    {name:"card13",family:"squarecircle",visible:false},
    {name:"card14",family:"squarecircle",visible:false},
    {name:"card15",family:"squarecircle",visible:false},
    {name:"card16",family:"squarecircle",visible:false},
    {name:"card17",family:"star3",visible:false},
    {name:"card18",family:"star3",visible:false},
    {name:"card19",family:"star3",visible:false},
    {name:"card20",family:"star3",visible:false},
    {name:"card21",family:"loop1",visible:false},
    {name:"card22",family:"loop1",visible:false},
    {name:"card23",family:"loop1",visible:false},
    {name:"card24",family:"loop1",visible:false},
    {name:"card25",family:"loop2",visible:false},
    {name:"card26",family:"loop2",visible:false},
    {name:"card27",family:"loop2",visible:false},
    {name:"card28",family:"loop2",visible:false},
    {name:"card29",family:"star4",visible:false},
    {name:"card30",family:"star4",visible:false},
    {name:"card31",family:"star4",visible:false},
    {name:"card32",family:"star4",visible:false},
    {name:"card33",family:"hexagonsquare",visible:false},
    {name:"card34",family:"hexagonsquare",visible:false},
    {name:"card35",family:"hexagonsquare",visible:false},
    {name:"card36",family:"hexagonsquare",visible:false},
    {name:"card37",family:"circlecross1",visible:false},
    {name:"card38",family:"circlecross1",visible:false},
    {name:"card39",family:"circlecross1",visible:false},
    {name:"card40",family:"circlecross1",visible:false},
    {name:"card41",family:"loop3",visible:false},
    {name:"card42",family:"loop3",visible:false},
    {name:"card43",family:"loop3",visible:false},
    {name:"card44",family:"loop3",visible:false},
    {name:"card45",family:"circlecross2",visible:false},
    {name:"card46",family:"circlecross2",visible:false},
    {name:"card47",family:"circlecross2",visible:false},
    {name:"card48",family:"circlecross2",visible:false},
    {name:"card49",family:"dots1",visible:false},
    {name:"card50",family:"dots1",visible:false},
    {name:"card51",family:"dots1",visible:false},
    {name:"card52",family:"dots1",visible:false},
    {name:"card53",family:"loop4",visible:false},
    {name:"card54",family:"loop4",visible:false},
    {name:"card55",family:"loop4",visible:false},
    {name:"card56",family:"loop4",visible:false},
    {name:"card57",family:"hexagoncircle",visible:false},
    {name:"card58",family:"hexagoncircle",visible:false},
    {name:"card59",family:"hexagoncircle",visible:false},
    {name:"card60",family:"hexagoncircle",visible:false},
    {name:"card61",family:"circlecross3",visible:false},
    {name:"card62",family:"circlecross3",visible:false},
    {name:"card63",family:"circlecross3",visible:false},
    {name:"card64",family:"circlecross3",visible:false},
    {name:"card65",family:"dots2",visible:false},
    {name:"card66",family:"dots2",visible:false},
    {name:"card67",family:"dots2",visible:false},
    {name:"card68",family:"dots2",visible:false},
    {name:"card69",family:"circlesquare",visible:false},
    {name:"card70",family:"circlesquare",visible:false},
    {name:"card71",family:"circlesquare",visible:false},
    {name:"card72",family:"circlesquare",visible:false},
    {name:"card73",family:"circlecross4",visible:false},
    {name:"card74",family:"circlecross4",visible:false},
    {name:"card75",family:"circlecross4",visible:false},
    {name:"card76",family:"circlecross4",visible:false}
  ];

  this.coverCard = "card1";

  this.playerArr = [
    {name: "", type: "", lvl:""},
    {name: "", type: "", lvl:""},
    {name: "", type: "", lvl:""},
    {name: "", type: "", lvl:""}
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

  // Array of players




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
// var playerArr = [];
var playerKey = ["Q","P","Z","M"];
var computerLevel = ["Dumb","Decent","God"];
var stack1 = [];
var stack2 = [];
var stack3 = [];
var stack4 = [];
var playerArr = ["Computer 1", "Computer 2", "Computer 3", "Computer 4"];
var turn = 0;
var randomPlayer;
var randomLvl;




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


//function to ask for every player name and attach it to the board

function setAllPlayers(){
  players = $("#number-of-players").val();
  console.log(players);

  if (players === "3") {
    for (var j = 3; j < 4; j++) {
      jungleSpeed.playerArr[j].name = prompt("Give a name to the computer you will play against!").toUpperCase();
      jungleSpeed.playerArr[j].type = "cpu";
    }
  }
  if (players === "2") {
    for (var k = 2; k < 4; k++) {
      jungleSpeed.playerArr[k].name = prompt("Give a name to the computer you will play against!").toUpperCase();
      jungleSpeed.playerArr[k].type = "cpu";
    }
  }
  if (players === "1") {
    for (var y = 1; y < 4; y++) {
      jungleSpeed.playerArr[y].name = prompt("Give a name to the computer you will play against!").toUpperCase();
      jungleSpeed.playerArr[y].type = "cpu";
    }
  }

  for (var i = 0; i < players; i++) {
    jungleSpeed.playerArr[i].name = prompt("What's the name of Player " + [i+1] + "?").toUpperCase();
    jungleSpeed.playerArr[i].type = "human";
  }

  SetCpuLvl();

  for (var q = 0; q < 4; q++) {

    if (jungleSpeed.playerArr[q].type === "human") {
      $('#names-to-play').append(
        '<div><h5>'+ jungleSpeed.playerArr[q].name  + ' will have the "' + playerKey[q] +'" key assigned</h5></div>');
      } else{
        $('#names-to-play').append(
          '<div><h5>'+ jungleSpeed.playerArr[q].lvl + " " + jungleSpeed.playerArr[q].name  + ' will be the computer!</h5></div>');
        }

      }

    }


    //check for the cpu lvl

    function SetCpuLvl(){
      var cpuLvl = $("#lvl-of-cpu").val();

      var lvlCpu = computerLevel[cpuLvl];
      console.log(lvlCpu);
      for (var i = 0; i < 4; i++) {
        if (jungleSpeed.playerArr[i].type === "cpu") {
          jungleSpeed.playerArr[i].lvl = lvlCpu;
        }
      }

      // $("#final-cpu-lvl").append('<div><h5>Will be playing with a ' + computerLevel[cpuLvl] + ' CPU</h5><h3>WHO WILL WIN?</h3></div>');
    }



    // Get the number of players and ask every human player for his name and assign a key to every human

    $( "#all-set" ).on('click', function() {

      setAllPlayers();

      SetCpuLvl();

      for (var q = 0; q < 4; q++) {
        $("#player-"+(q+1)).append(jungleSpeed.playerArr[q].name);
      }

      $('#play').removeClass("hide-container");
      $('#play').addClass("show-container");


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

      console.log(jungleSpeed);

    });

    // -------------------------------------------------------



    // function to check what happen if i press space (change turn) and what happens if i press a key to claim for equal cards

    $(document).keypress(function(event){

      var keyPressed = event.key; //capture the key

      console.log(keyPressed);
      $("#player-turn").empty(); // empty all the container

      //Win condition for each player

      // if (jungleSpeed.stackPlayer1.length === 0) {
      //   alert("PLAYER 1 WIN!!!");
      // }
      // if (jungleSpeed.stackPlayer2.length === 0) {
      //   alert("PLAYER 2 WIN!!!");
      // }
      // if (jungleSpeed.stackPlayer3.length === 0) {
      //   alert("PLAYER 3 WIN!!!");
      // }
      // if (jungleSpeed.stackPlayer4.length === 0) {
      //   alert("PLAYER 4 WIN!!!");
      // }

      if (keyPressed === " ") {
        turn ++;//increase the turn so it changes

        console.log(jungleSpeed.stackPlayer1[0]);
        console.log(jungleSpeed.stackPlayer2[0]);
        console.log(jungleSpeed.stackPlayer3[0]);
        console.log(jungleSpeed.stackPlayer4[0]);

        switch (turn) { // switch between every turn
          case 1:
          $("#player-turn").append("IT'S " + jungleSpeed.playerArr[0].name + " TURN!");
          $("#card-player-1").empty();
          $("#cards-player-1").empty();

          jungleSpeed.discardsPlayer1.push(jungleSpeed.stackPlayer1[0]);
          jungleSpeed.stackPlayer1.shift();
          jungleSpeed.stackPlayer1[0].visible = true;

          $("#card-player-1").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.stackPlayer1[0].name + '.jpg" alt="">');

          $("#cards-player-1").append("Cards Left to win: " + jungleSpeed.stackPlayer1.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer1.length);

          break;

          case 2:


          // if (jungleSpeed.playerArr[1].type === "cpu") {
          //   setTimeout(player2Options, 3000);
          // }

          $("#player-turn").append("IT'S " + jungleSpeed.playerArr[1].name + " TURN!");
          $("#card-player-2").empty();
          $("#cards-player-2").empty();

          jungleSpeed.discardsPlayer2.push(jungleSpeed.stackPlayer2[0]);
          jungleSpeed.stackPlayer2.shift();
          jungleSpeed.stackPlayer2[0].visible = true;

          $("#card-player-2").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.stackPlayer2[0].name + '.jpg" alt="">');

          $("#cards-player-2").append("Cards Left to win: " + jungleSpeed.stackPlayer2.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer2.length);

          break;

          case 3:

          // if (jungleSpeed.playerArr[2].type === "cpu") {
          //   setTimeout(player3Options, 3000);
          // }

          $("#player-turn").append("IT'S " + jungleSpeed.playerArr[2].name + " TURN!");
          $("#card-player-3").empty();
          $("#cards-player-3").empty();


          jungleSpeed.discardsPlayer3.push(jungleSpeed.stackPlayer3[0]);
          jungleSpeed.stackPlayer3.shift();
          jungleSpeed.stackPlayer3[0].visible = true;

          $("#card-player-3").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.stackPlayer3[0].name + '.jpg" alt="">');

          $("#cards-player-3").append("Cards Left to win: " + jungleSpeed.stackPlayer3.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer3.length);

          break;

          case 4:
          turn = 0;

          $("#player-turn").append("IT'S " + jungleSpeed.playerArr[3].name + " TURN!");
          $("#card-player-4").empty();
          $("#cards-player-4").empty();


          jungleSpeed.discardsPlayer4.push(jungleSpeed.stackPlayer4[0]);
          jungleSpeed.stackPlayer4.shift();
          jungleSpeed.stackPlayer4[0].visible = true;

          $("#card-player-4").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.stackPlayer4[0].name + '.jpg" alt="">');

          $("#cards-player-4").append("Cards Left to win: " + jungleSpeed.stackPlayer4.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer4.length);

          break;
        }
        console.log(jungleSpeed.stackPlayer1[0]);
        console.log(jungleSpeed.stackPlayer2[0]);
        console.log(jungleSpeed.stackPlayer3[0]);
        console.log(jungleSpeed.stackPlayer4[0]);
      }

      if (jungleSpeed.playerArr[3].type === "cpu") {

        randomLvl = Math.floor((Math.random() * 10) + 1);
        console.log(randomLvl);

          //player4 win vs player1
          if (jungleSpeed.stackPlayer4[0].family === jungleSpeed.stackPlayer1[0].family && jungleSpeed.stackPlayer4[0].visible === true && jungleSpeed.stackPlayer1[0].visible === true) {

            setTimeout(player4WinPlayer1, 2000);
            return;

          }
          //player4 win vs player2
          else if (jungleSpeed.stackPlayer4[0].family === jungleSpeed.stackPlayer2[0].family && jungleSpeed.stackPlayer4[0].visible === true && jungleSpeed.stackPlayer2[0].visible === true) {

            setTimeout(player4WinPlayer2, 2000);
            return;

          }
          //player4 win vs player3
          else if (jungleSpeed.stackPlayer4[0].family === jungleSpeed.stackPlayer3[0].family && jungleSpeed.stackPlayer4[0].visible === true && jungleSpeed.stackPlayer3[0].visible === true) {

            setTimeout(player4WinPlayer3, 2000);
            return;

          }
          //special card appears
          else if ((jungleSpeed.stackPlayer1[0].family === "special" || jungleSpeed.stackPlayer2[0].family === "special" || jungleSpeed.stackPlayer3[0].family === "special" || jungleSpeed.stackPlayer4[0].family === "special")) {
            if (jungleSpeed.stackPlayer1[0].visible === true && jungleSpeed.stackPlayer2[0].visible === true && jungleSpeed.stackPlayer3[0].visible === true && jungleSpeed.stackPlayer4[0].visible === true) {

              setTimeout(player4SpecialCard, 1500);
              return;
            }
          }


        if (randomLvl > 9) {
          //player4 fails

          setTimeout(player4Fails, 1000);
          return;
        }

      }

      //this should be only accesible if you are a human player


      switch (keyPressed) {
        case "q": //player 1

        player1Options();

        break;

        case "p": //player 2

        player2Options();

        break;

        case "z"://player 3

        player3Options();

        break;

        case "m": //player 4

        player4Options();

        break;
      }


    });



    function player1Options(){

      //player1 win vs player2
      if (jungleSpeed.stackPlayer1[0].family === jungleSpeed.stackPlayer2[0].family) {

        //player 1 gives all his discards to player 2 stack
        var discardPlayer1toPlayer2 = jungleSpeed.discardsPlayer1.length;//only for visual purposes

        var newArrPlayer2 = jungleSpeed.discardsPlayer1.concat(jungleSpeed.discardsPlayer2);
        var finalArrPlayer2 = newArrPlayer2.concat(jungleSpeed.stackPlayer2);
        jungleSpeed.stackPlayer2 = finalArrPlayer2;
        jungleSpeed.discardsPlayer1 = [];
        jungleSpeed.discardsPlayer2 = [];
        jungleSpeed.stackPlayer2[0].visible = false;


        //empty the container before refreshing it
        $("#cards-player-2").empty();
        $("#cards-player-1").empty();
        $("#card-player-2").empty();
        $("#card-player-1").empty();

        //append the new results of cards-left and discards
        $("#cards-player-1").append("Cards Left to win: " + jungleSpeed.stackPlayer1.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer1.length);
        $("#cards-player-2").append("Cards Left to win: " + jungleSpeed.stackPlayer2.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer2.length);

        $("#card-player-2").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-1").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');




        alert("You had the same card of player 2 and you clicked first!\n Player 1 pass " + discardPlayer1toPlayer2 + " cards to player 2, so now player 2 needs " + jungleSpeed.stackPlayer2.length + " cards to finish the game");

        return true;

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
        jungleSpeed.stackPlayer3[0].visible = false;

        //empty the container before refreshing it
        $("#cards-player-3").empty();
        $("#cards-player-1").empty();
        $("#card-player-3").empty();
        $("#card-player-1").empty();
        //append the new results of cards-left and discards
        $("#cards-player-1").append("Cards Left to win: " + jungleSpeed.stackPlayer1.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer1.length);
        $("#cards-player-3").append("Cards Left to win: " + jungleSpeed.stackPlayer3.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer3.length);
        $("#card-player-1").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-3").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');

        alert("You had the same card of player 3 and you clicked first!\n Player 1 pass " + discardPlayer1toPlayer3 + " cards to player 3, so now player 3 needs " + jungleSpeed.stackPlayer3.length + " cards to finish the game");

        return true;

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
        jungleSpeed.stackPlayer4[0].visible = false;

        //empty the container before refreshing it
        $("#cards-player-4").empty();
        $("#cards-player-1").empty();
        $("#card-player-4").empty();
        $("#card-player-1").empty();
        //append the new results of cards-left and discards
        $("#cards-player-1").append("Cards Left to win: " + jungleSpeed.stackPlayer1.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer1.length);
        $("#cards-player-4").append("Cards Left to win: " + jungleSpeed.stackPlayer4.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer4.length);
        $("#card-player-1").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-4").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');


        alert("You had the same card of player 4 and you clicked first!\n Player 1 pass " + discardPlayer1toPlayer4 + " cards to player 4, so now player 4 needs " + jungleSpeed.stackPlayer4.length + " cards to finish the game");

        return true;

      }
      //special card appears
      else if (jungleSpeed.stackPlayer1[0].family === "special" || jungleSpeed.stackPlayer2[0].family === "special" || jungleSpeed.stackPlayer3[0].family === "special" || jungleSpeed.stackPlayer4[0].family === "special") {
        console.log("SPECIAL");

        randomPlayer = Math.floor((Math.random() * 3) + 1);
        console.log(randomPlayer);
        if (randomPlayer === 1) {
          //player 1 gives all his discards to player 2 stack

          var newArrRandomPlayer2 = jungleSpeed.discardsPlayer1.concat(jungleSpeed.discardsPlayer2.concat(jungleSpeed.discardsPlayer3.concat(jungleSpeed.discardsPlayer4)));
          var finalArrRandomPlayer2 = newArrRandomPlayer2.concat(jungleSpeed.stackPlayer2);
          jungleSpeed.stackPlayer2 = finalArrRandomPlayer2;
          jungleSpeed.discardsPlayer1 = [];
          jungleSpeed.discardsPlayer2 = [];
          jungleSpeed.discardsPlayer3 = [];
          jungleSpeed.discardsPlayer4 = [];
          jungleSpeed.stackPlayer1[0].visible = false;
          jungleSpeed.stackPlayer2[0].visible = false;
          jungleSpeed.stackPlayer3[0].visible = false;
          jungleSpeed.stackPlayer4[0].visible = false;



          //empty the container before refreshing it
          $("#cards-player-1").empty();
          $("#cards-player-2").empty();
          $("#cards-player-3").empty();
          $("#cards-player-4").empty();
          $("#card-player-1").empty();
          $("#card-player-2").empty();
          $("#card-player-3").empty();
          $("#card-player-4").empty();

          //append the new results of cards-left and discards
          $("#cards-player-1").append("Cards Left to win: " + jungleSpeed.stackPlayer1.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer1.length);
          $("#cards-player-2").append("Cards Left to win: " + jungleSpeed.stackPlayer2.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer2.length);
          $("#cards-player-3").append("Cards Left to win: " + jungleSpeed.stackPlayer3.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer3.length);
          $("#cards-player-4").append("Cards Left to win: " + jungleSpeed.stackPlayer4.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer4.length);
          $("#card-player-1").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
          $("#card-player-2").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
          $("#card-player-3").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
          $("#card-player-4").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');

          alert("The SPECIAL card appeared and player 1 clicked first\n Player 2 has been choosen randomly so he gets all the discard cards from the other 3 players, it means " + newArrRandomPlayer2.length +" cards. So now player 2 needs " + jungleSpeed.stackPlayer2.length + " cards to finish the game");

        }

        if (randomPlayer === 2) {
          //player 1 gives all his discards to player 3 stack
          var newArrRandomPlayer3 = jungleSpeed.discardsPlayer1.concat(jungleSpeed.discardsPlayer2.concat(jungleSpeed.discardsPlayer3.concat(jungleSpeed.discardsPlayer4)));
          var finalArrRandomPlayer3 = newArrRandomPlayer3.concat(jungleSpeed.stackPlayer3);
          jungleSpeed.stackPlayer3 = finalArrRandomPlayer3;
          jungleSpeed.discardsPlayer1 = [];
          jungleSpeed.discardsPlayer2 = [];
          jungleSpeed.discardsPlayer3 = [];
          jungleSpeed.discardsPlayer4 = [];
          jungleSpeed.stackPlayer1[0].visible = false;
          jungleSpeed.stackPlayer2[0].visible = false;
          jungleSpeed.stackPlayer3[0].visible = false;
          jungleSpeed.stackPlayer4[0].visible = false;



          //empty the container before refreshing it
          $("#cards-player-1").empty();
          $("#cards-player-2").empty();
          $("#cards-player-3").empty();
          $("#cards-player-4").empty();
          $("#card-player-1").empty();
          $("#card-player-2").empty();
          $("#card-player-3").empty();
          $("#card-player-4").empty();

          //append the new results of cards-left and discards
          $("#cards-player-1").append("Cards Left to win: " + jungleSpeed.stackPlayer1.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer1.length);
          $("#cards-player-2").append("Cards Left to win: " + jungleSpeed.stackPlayer2.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer2.length);
          $("#cards-player-3").append("Cards Left to win: " + jungleSpeed.stackPlayer3.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer3.length);
          $("#cards-player-4").append("Cards Left to win: " + jungleSpeed.stackPlayer4.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer4.length);
          $("#card-player-1").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
          $("#card-player-2").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
          $("#card-player-3").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
          $("#card-player-4").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');

          alert("The SPECIAL card appeared and player 1 clicked first\n Player 3 has been choosen randomly so he gets all the discard cards from the other 3 players, it means " + newArrRandomPlayer3.length +" cards. So now player 3 needs " + jungleSpeed.stackPlayer3.length + " cards to finish the game");
        }
        if (randomPlayer === 3) {
          //player 1 gives all his discards to player 4 stack
          var newArrRandomPlayer4 = jungleSpeed.discardsPlayer1.concat(jungleSpeed.discardsPlayer2.concat(jungleSpeed.discardsPlayer3.concat(jungleSpeed.discardsPlayer4)));
          var finalArrRandomPlayer4 = newArrRandomPlayer4.concat(jungleSpeed.stackPlayer4);
          jungleSpeed.stackPlayer4 = finalArrRandomPlayer4;
          jungleSpeed.discardsPlayer1 = [];
          jungleSpeed.discardsPlayer2 = [];
          jungleSpeed.discardsPlayer3 = [];
          jungleSpeed.discardsPlayer4 = [];
          jungleSpeed.stackPlayer1[0].visible = false;
          jungleSpeed.stackPlayer2[0].visible = false;
          jungleSpeed.stackPlayer3[0].visible = false;
          jungleSpeed.stackPlayer4[0].visible = false;



          //empty the container before refreshing it
          $("#cards-player-1").empty();
          $("#cards-player-2").empty();
          $("#cards-player-3").empty();
          $("#cards-player-4").empty();
          $("#card-player-1").empty();
          $("#card-player-2").empty();
          $("#card-player-3").empty();
          $("#card-player-4").empty();

          //append the new results of cards-left and discards
          $("#cards-player-1").append("Cards Left to win: " + jungleSpeed.stackPlayer1.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer1.length);
          $("#cards-player-2").append("Cards Left to win: " + jungleSpeed.stackPlayer2.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer2.length);
          $("#cards-player-3").append("Cards Left to win: " + jungleSpeed.stackPlayer3.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer3.length);
          $("#cards-player-4").append("Cards Left to win: " + jungleSpeed.stackPlayer4.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer4.length);
          $("#card-player-1").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
          $("#card-player-2").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
          $("#card-player-3").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
          $("#card-player-4").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');

          alert("The SPECIAL card appeared and player 1 clicked first\n Player 4 has been choosen randomly so he gets all the discard cards from the other 3 players, it means " + newArrRandomPlayer4.length +" cards. So now player 4 needs " + jungleSpeed.stackPlayer4.length + " cards to finish the game");
        }

        return true;

      }
      //player1 fails
      else if (jungleSpeed.stackPlayer1[0].family !== jungleSpeed.stackPlayer2[0].family && jungleSpeed.stackPlayer1[0].family !== jungleSpeed.stackPlayer3[0].family && jungleSpeed.stackPlayer1[0].family !== jungleSpeed.stackPlayer4[0].family) {

        //player 1 will get all discards card from other players and add them to their stack cards

        var newArrPlayer1 = jungleSpeed.discardsPlayer1.concat(jungleSpeed.discardsPlayer2.concat(jungleSpeed.discardsPlayer3.concat(jungleSpeed.discardsPlayer4)));
        var finalArrPlayer1 = newArrPlayer1.concat(jungleSpeed.stackPlayer1);
        jungleSpeed.stackPlayer1 = finalArrPlayer1;
        jungleSpeed.discardsPlayer1 = [];
        jungleSpeed.discardsPlayer2 = [];
        jungleSpeed.discardsPlayer3 = [];
        jungleSpeed.discardsPlayer4 = [];
        jungleSpeed.stackPlayer1[0].visible = false;
        jungleSpeed.stackPlayer2[0].visible = false;
        jungleSpeed.stackPlayer3[0].visible = false;
        jungleSpeed.stackPlayer4[0].visible = false;



        //empty the container before refreshing it
        $("#cards-player-1").empty();
        $("#cards-player-2").empty();
        $("#cards-player-3").empty();
        $("#cards-player-4").empty();
        $("#card-player-1").empty();
        $("#card-player-2").empty();
        $("#card-player-3").empty();
        $("#card-player-4").empty();

        //append the new results of cards-left and discards
        $("#cards-player-1").append("Cards Left to win: " + jungleSpeed.stackPlayer1.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer1.length);
        $("#cards-player-2").append("Cards Left to win: " + jungleSpeed.stackPlayer2.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer2.length);
        $("#cards-player-3").append("Cards Left to win: " + jungleSpeed.stackPlayer3.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer3.length);
        $("#cards-player-4").append("Cards Left to win: " + jungleSpeed.stackPlayer4.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer4.length);
        $("#card-player-1").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-2").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-3").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-4").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');

        alert("Player 1 thought he had something equal but he didn't, he gets all the discard cards from the other players, he now have " + jungleSpeed.stackPlayer1.length + " cards left to win");

        return false;


      }


    }




    function player2Options(){
      //player2 win vs player1
      if (jungleSpeed.stackPlayer2[0].family === jungleSpeed.stackPlayer1[0].family) {

        //player 2 gives all his discards to player 1 stack
        var discardPlayer2toPlayer1 = jungleSpeed.discardsPlayer2.length;//only for visual purposes

        var newArrForPlayer1 = jungleSpeed.discardsPlayer1.concat(jungleSpeed.discardsPlayer2);
        var finalArrForPlayer1 = newArrForPlayer1.concat(jungleSpeed.stackPlayer1);
        jungleSpeed.stackPlayer1 = finalArrForPlayer1;
        jungleSpeed.discardsPlayer1 = [];
        jungleSpeed.discardsPlayer2 = [];
        jungleSpeed.stackPlayer1[0].visible = false;




        //empty the container before refreshing it
        $("#cards-player-1").empty();
        $("#cards-player-2").empty();
        $("#card-player-2").empty();
        $("#card-player-1").empty();
        //append the new results of cards-left and discards
        $("#cards-player-2").append("Cards Left to win: " + jungleSpeed.stackPlayer2.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer2.length);
        $("#cards-player-1").append("Cards Left to win: " + jungleSpeed.stackPlayer1.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer1.length);
        $("#card-player-2").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-1").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');


        alert("You had the same card of player 1 and you clicked first!\n Player 2 pass " + discardPlayer2toPlayer1 + " cards to player 1, so now player 1 needs " + jungleSpeed.stackPlayer1.length + " cards to finish the game");



      }
      //player2 win vs player3
      else if (jungleSpeed.stackPlayer2[0].family === jungleSpeed.stackPlayer3[0].family) {

        //player 2 gives all his discards to player 3 stack
        var discardPlayer2toPlayer3 = jungleSpeed.discardsPlayer2.length;
        var newArrForPlayer3 = jungleSpeed.discardsPlayer2.concat(jungleSpeed.discardsPlayer3);
        var finalArrForPlayer3 = newArrForPlayer3.concat(jungleSpeed.stackPlayer3);
        jungleSpeed.stackPlayer3 = finalArrForPlayer3;
        jungleSpeed.discardsPlayer2 = [];
        jungleSpeed.discardsPlayer3 = [];
        jungleSpeed.stackPlayer3[0].visible = false;

        //empty the container before refreshing it
        $("#cards-player-3").empty();
        $("#cards-player-2").empty();
        $("#card-player-2").empty();
        $("#card-player-3").empty();
        //append the new results of cards-left and discards
        $("#cards-player-2").append("Cards Left to win: " + jungleSpeed.stackPlayer2.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer2.length);
        $("#cards-player-3").append("Cards Left to win: " + jungleSpeed.stackPlayer3.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer3.length);
        $("#card-player-3").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-2").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');


        alert("You had the same card of player 3 and you clicked first!\n Player 2 pass " + discardPlayer2toPlayer3 + " cards to player 3, so now player 3 needs " + jungleSpeed.stackPlayer3.length + " cards to finish the game");
      }
      //player2 win vs player4
      else if (jungleSpeed.stackPlayer2[0].family === jungleSpeed.stackPlayer4[0].family) {

        //player 1 gives all his discards to player 4 stack
        var discardPlayer2toPlayer4 = jungleSpeed.discardsPlayer2.length;
        var newArrForPlayer4 = jungleSpeed.discardsPlayer2.concat(jungleSpeed.discardsPlayer4);
        var finalArrForPlayer4 = newArrForPlayer4.concat(jungleSpeed.stackPlayer4);
        jungleSpeed.stackPlayer4 = finalArrForPlayer4;
        jungleSpeed.discardsPlayer2 = [];
        jungleSpeed.discardsPlayer4 = [];
        jungleSpeed.stackPlayer4[0].visible = false;

        //empty the container before refreshing it
        $("#cards-player-4").empty();
        $("#cards-player-2").empty();
        $("#card-player-2").empty();
        $("#card-player-4").empty();
        //append the new results of cards-left and discards
        $("#cards-player-2").append("Cards Left to win: " + jungleSpeed.stackPlayer2.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer2.length);
        $("#cards-player-4").append("Cards Left to win: " + jungleSpeed.stackPlayer4.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer4.length);
        $("#card-player-2").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-4").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');


        alert("You had the same card of player 4 and you clicked first!\n Player 2 pass " + discardPlayer2toPlayer4 + " cards to player 4, so now player 4 needs " + jungleSpeed.stackPlayer4.length + " cards to finish the game");

      }

      //special card appears
      else if (jungleSpeed.stackPlayer1[0].family === "special" || jungleSpeed.stackPlayer2[0].family === "special" || jungleSpeed.stackPlayer3[0].family === "special" || jungleSpeed.stackPlayer4[0].family === "special") {
        console.log("SPECIAL");

        randomPlayer = Math.floor((Math.random() * 3) + 1);

        if (randomPlayer === 1) {
          //player 2 gives all his discards to player 1 stack
          var newArrDiscardForPlayer1 = jungleSpeed.discardsPlayer2.concat(jungleSpeed.discardsPlayer1.concat(jungleSpeed.discardsPlayer3.concat(jungleSpeed.discardsPlayer4)));
          var finalArrDiscardForPlayer1 = newArrDiscardForPlayer1.concat(jungleSpeed.stackPlayer1);
          jungleSpeed.stackPlayer1 = finalArrDiscardForPlayer1;
          jungleSpeed.discardsPlayer1 = [];
          jungleSpeed.discardsPlayer2 = [];
          jungleSpeed.discardsPlayer3 = [];
          jungleSpeed.discardsPlayer4 = [];
          jungleSpeed.stackPlayer1[0].visible = false;
          jungleSpeed.stackPlayer2[0].visible = false;
          jungleSpeed.stackPlayer3[0].visible = false;
          jungleSpeed.stackPlayer4[0].visible = false;


          //empty the container before refreshing it
          $("#cards-player-1").empty();
          $("#cards-player-2").empty();
          $("#cards-player-3").empty();
          $("#cards-player-4").empty();
          $("#card-player-1").empty();
          $("#card-player-2").empty();
          $("#card-player-3").empty();
          $("#card-player-4").empty();

          //append the new results of cards-left and discards
          $("#cards-player-1").append("Cards Left to win: " + jungleSpeed.stackPlayer1.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer1.length);
          $("#cards-player-2").append("Cards Left to win: " + jungleSpeed.stackPlayer2.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer2.length);
          $("#cards-player-3").append("Cards Left to win: " + jungleSpeed.stackPlayer3.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer3.length);
          $("#cards-player-4").append("Cards Left to win: " + jungleSpeed.stackPlayer4.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer4.length);
          $("#card-player-1").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
          $("#card-player-2").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
          $("#card-player-3").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
          $("#card-player-4").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');

          alert("The SPECIAL card appeared and player 2 clicked first\n Player 1 has been choosen randomly so he gets all the discard cards from the other 3 players, it means " + newArrDiscardForPlayer1.length +" cards. So now player 1 needs " + jungleSpeed.stackPlayer1.length + " cards to finish the game");
        }

        if (randomPlayer === 2) {
          //player 2 gives all his discards to player 3 stack
          var newArrDiscardForPlayer3 = jungleSpeed.discardsPlayer2.concat(jungleSpeed.discardsPlayer1.concat(jungleSpeed.discardsPlayer3.concat(jungleSpeed.discardsPlayer4)));
          var finalArrDiscardForPlayer3 = newArrDiscardForPlayer3.concat(jungleSpeed.stackPlayer3);
          jungleSpeed.stackPlayer3 = finalArrDiscardForPlayer3;
          jungleSpeed.discardsPlayer1 = [];
          jungleSpeed.discardsPlayer2 = [];
          jungleSpeed.discardsPlayer3 = [];
          jungleSpeed.discardsPlayer4 = [];
          jungleSpeed.stackPlayer1[0].visible = false;
          jungleSpeed.stackPlayer2[0].visible = false;
          jungleSpeed.stackPlayer3[0].visible = false;
          jungleSpeed.stackPlayer4[0].visible = false;

          //empty the container before refreshing it
          $("#cards-player-1").empty();
          $("#cards-player-2").empty();
          $("#cards-player-3").empty();
          $("#cards-player-4").empty();
          $("#card-player-1").empty();
          $("#card-player-2").empty();
          $("#card-player-3").empty();
          $("#card-player-4").empty();

          //append the new results of cards-left and discards
          $("#cards-player-1").append("Cards Left to win: " + jungleSpeed.stackPlayer1.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer1.length);
          $("#cards-player-2").append("Cards Left to win: " + jungleSpeed.stackPlayer2.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer2.length);
          $("#cards-player-3").append("Cards Left to win: " + jungleSpeed.stackPlayer3.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer3.length);
          $("#cards-player-4").append("Cards Left to win: " + jungleSpeed.stackPlayer4.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer4.length);
          $("#card-player-1").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
          $("#card-player-2").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
          $("#card-player-3").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
          $("#card-player-4").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');

          alert("The SPECIAL card appeared and player 2 clicked first\n Player 3 has been choosen randomly so he gets all the discard cards from the other 3 players, it means " + newArrDiscardForPlayer3.length +" cards. So now player 3 needs " + jungleSpeed.stackPlayer3.length + " cards to finish the game");
        }
        if (randomPlayer === 3) {
          //player 2 gives all his discards to player 4 stack
          var newArrDiscardForPlayer4 = jungleSpeed.discardsPlayer2.concat(jungleSpeed.discardsPlayer1.concat(jungleSpeed.discardsPlayer3.concat(jungleSpeed.discardsPlayer4)));
          var finalArrDiscardForPlayer4 = newArrDiscardForPlayer4.concat(jungleSpeed.stackPlayer4);
          jungleSpeed.stackPlayer4 = finalArrDiscardForPlayer4;
          jungleSpeed.discardsPlayer1 = [];
          jungleSpeed.discardsPlayer2 = [];
          jungleSpeed.discardsPlayer3 = [];
          jungleSpeed.discardsPlayer4 = [];
          jungleSpeed.stackPlayer1[0].visible = false;
          jungleSpeed.stackPlayer2[0].visible = false;
          jungleSpeed.stackPlayer3[0].visible = false;
          jungleSpeed.stackPlayer4[0].visible = false;

          //empty the container before refreshing it
          $("#cards-player-1").empty();
          $("#cards-player-2").empty();
          $("#cards-player-3").empty();
          $("#cards-player-4").empty();
          $("#card-player-1").empty();
          $("#card-player-2").empty();
          $("#card-player-3").empty();
          $("#card-player-4").empty();

          //append the new results of cards-left and discards
          $("#cards-player-1").append("Cards Left to win: " + jungleSpeed.stackPlayer1.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer1.length);
          $("#cards-player-2").append("Cards Left to win: " + jungleSpeed.stackPlayer2.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer2.length);
          $("#cards-player-3").append("Cards Left to win: " + jungleSpeed.stackPlayer3.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer3.length);
          $("#cards-player-4").append("Cards Left to win: " + jungleSpeed.stackPlayer4.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer4.length);
          $("#card-player-1").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
          $("#card-player-2").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
          $("#card-player-3").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
          $("#card-player-4").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');

          alert("The SPECIAL card appeared and player 2 clicked first\n Player 4 has been choosen randomly so he gets all the discard cards from the other 3 players, it means " + newArrDiscardForPlayer4.length +" cards. So now player 4 needs " + jungleSpeed.stackPlayer4.length + " cards to finish the game");
        }


      }
      //player2 fails
      else if (jungleSpeed.stackPlayer2[0].family !== jungleSpeed.stackPlayer1[0].family && jungleSpeed.stackPlayer2[0].family !== jungleSpeed.stackPlayer3[0].family && jungleSpeed.stackPlayer2[0].family !== jungleSpeed.stackPlayer4[0].family) {

        //player 2 will get all discards card from other players and add them to their stack cards

        var newArrForPlayer2 = jungleSpeed.discardsPlayer2.concat(jungleSpeed.discardsPlayer1.concat(jungleSpeed.discardsPlayer3.concat(jungleSpeed.discardsPlayer4)));
        var finalArrForPlayer2 = newArrForPlayer2.concat(jungleSpeed.stackPlayer2);
        jungleSpeed.stackPlayer2 = finalArrForPlayer2;
        jungleSpeed.discardsPlayer1 = [];
        jungleSpeed.discardsPlayer2 = [];
        jungleSpeed.discardsPlayer3 = [];
        jungleSpeed.discardsPlayer4 = [];
        jungleSpeed.stackPlayer1[0].visible = false;
        jungleSpeed.stackPlayer2[0].visible = false;
        jungleSpeed.stackPlayer3[0].visible = false;
        jungleSpeed.stackPlayer4[0].visible = false;

        //empty the container before refreshing it
        $("#cards-player-1").empty();
        $("#cards-player-2").empty();
        $("#cards-player-3").empty();
        $("#cards-player-4").empty();
        $("#card-player-1").empty();
        $("#card-player-2").empty();
        $("#card-player-3").empty();
        $("#card-player-4").empty();

        //append the new results of cards-left and discards
        $("#cards-player-1").append("Cards Left to win: " + jungleSpeed.stackPlayer1.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer1.length);
        $("#cards-player-2").append("Cards Left to win: " + jungleSpeed.stackPlayer2.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer2.length);
        $("#cards-player-3").append("Cards Left to win: " + jungleSpeed.stackPlayer3.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer3.length);
        $("#cards-player-4").append("Cards Left to win: " + jungleSpeed.stackPlayer4.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer4.length);
        $("#card-player-1").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-2").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-3").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-4").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');

        alert("Player 2 thought he had something equal but he didn't, he gets all the discard cards from the other players, he now have " + jungleSpeed.stackPlayer2.length + " cards left to win");
      }

    }



    function player3Options(){

      //player3 win vs player1
      if (jungleSpeed.stackPlayer3[0].family === jungleSpeed.stackPlayer1[0].family) {

        //player 3 gives all his discards to player 1 stack
        var discardPlayer3toPlayer1 = jungleSpeed.discardsPlayer3.length;//only for visual purposes

        var newArrToPlayer1 = jungleSpeed.discardsPlayer1.concat(jungleSpeed.discardsPlayer3);
        var finalArrToPlayer1 = newArrToPlayer1.concat(jungleSpeed.stackPlayer1);
        jungleSpeed.stackPlayer1 = finalArrToPlayer1;
        jungleSpeed.discardsPlayer1 = [];
        jungleSpeed.discardsPlayer3 = [];
        jungleSpeed.stackPlayer1[0].visible = false;




        //empty the container before refreshing it
        $("#cards-player-1").empty();
        $("#cards-player-3").empty();
        $("#card-player-3").empty();
        $("#card-player-1").empty();
        //append the new results of cards-left and discards
        $("#cards-player-3").append("Cards Left to win: " + jungleSpeed.stackPlayer3.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer3.length);
        $("#cards-player-1").append("Cards Left to win: " + jungleSpeed.stackPlayer1.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer1.length);
        $("#card-player-3").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-1").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');


        alert("You had the same card of player 1 and you clicked first!\n Player 3 pass " + discardPlayer3toPlayer1 + " cards to player 1, so now player 1 needs " + jungleSpeed.stackPlayer1.length + " cards to finish the game");



      }
      //player3 win vs player2
      else if (jungleSpeed.stackPlayer3[0].family === jungleSpeed.stackPlayer2[0].family) {

        //player 3 gives all his discards to player 2 stack
        var discardPlayer3toPlayer2 = jungleSpeed.discardsPlayer3.length;
        var newArrToPlayer2 = jungleSpeed.discardsPlayer3.concat(jungleSpeed.discardsPlayer2);
        var finalArrToPlayer2 = newArrToPlayer2.concat(jungleSpeed.stackPlayer2);
        jungleSpeed.stackPlayer2 = finalArrToPlayer2;
        jungleSpeed.discardsPlayer3 = [];
        jungleSpeed.discardsPlayer2 = [];
        jungleSpeed.stackPlayer2[0].visible = false;

        //empty the container before refreshing it
        $("#cards-player-2").empty();
        $("#cards-player-3").empty();
        $("#card-player-2").empty();
        $("#card-player-3").empty();
        //append the new results of cards-left and discards
        $("#cards-player-3").append("Cards Left to win: " + jungleSpeed.stackPlayer3.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer3.length);
        $("#cards-player-2").append("Cards Left to win: " + jungleSpeed.stackPlayer2.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer2.length);
        $("#card-player-2").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-3").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');


        alert("You had the same card of player 2 and you clicked first!\n Player 3 pass " + discardPlayer3toPlayer2 + " cards to player 2, so now player 2 needs " + jungleSpeed.stackPlayer2.length + " cards to finish the game");
      }
      //player3 win vs player4
      else if (jungleSpeed.stackPlayer3[0].family === jungleSpeed.stackPlayer4[0].family) {

        //player 3 gives all his discards to player 4 stack
        var discardPlayer3toPlayer4 = jungleSpeed.discardsPlayer3.length;
        var newArrToPlayer4 = jungleSpeed.discardsPlayer3.concat(jungleSpeed.discardsPlayer4);
        var finalArrToPlayer4 = newArrToPlayer4.concat(jungleSpeed.stackPlayer4);
        jungleSpeed.stackPlayer4 = finalArrToPlayer4;
        jungleSpeed.discardsPlayer3 = [];
        jungleSpeed.discardsPlayer4 = [];
        jungleSpeed.stackPlayer4[0].visible = false;

        //empty the container before refreshing it
        $("#cards-player-4").empty();
        $("#cards-player-3").empty();
        $("#card-player-4").empty();
        $("#card-player-3").empty();
        //append the new results of cards-left and discards
        $("#cards-player-3").append("Cards Left to win: " + jungleSpeed.stackPlayer3.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer3.length);
        $("#cards-player-4").append("Cards Left to win: " + jungleSpeed.stackPlayer4.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer4.length);
        $("#card-player-3").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-4").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');


        alert("You had the same card of player 4 and you clicked first!\n Player 3 pass " + discardPlayer3toPlayer4 + " cards to player 4, so now player 4 needs " + jungleSpeed.stackPlayer4.length + " cards to finish the game");

      }


      //special card appears
      else if (jungleSpeed.stackPlayer1[0].family === "special" || jungleSpeed.stackPlayer2[0].family === "special" || jungleSpeed.stackPlayer3[0].family === "special" || jungleSpeed.stackPlayer4[0].family === "special") {
        console.log("SPECIAL");

        randomPlayer = Math.floor((Math.random() * 3) + 1);
        console.log(randomPlayer);

        if (randomPlayer === 1) {
          //player 3 gives all his discards to player 1 stack
          var newArrDiscardToPlayer1 = jungleSpeed.discardsPlayer3.concat(jungleSpeed.discardsPlayer1.concat(jungleSpeed.discardsPlayer2.concat(jungleSpeed.discardsPlayer4)));
          var finalArrDiscardToPlayer1 = newArrDiscardToPlayer1.concat(jungleSpeed.stackPlayer1);
          jungleSpeed.stackPlayer1 = finalArrDiscardToPlayer1;
          jungleSpeed.discardsPlayer1 = [];
          jungleSpeed.discardsPlayer2 = [];
          jungleSpeed.discardsPlayer3 = [];
          jungleSpeed.discardsPlayer4 = [];
          jungleSpeed.stackPlayer1[0].visible = false;
          jungleSpeed.stackPlayer2[0].visible = false;
          jungleSpeed.stackPlayer3[0].visible = false;
          jungleSpeed.stackPlayer4[0].visible = false;


          //empty the container before refreshing it
          $("#cards-player-1").empty();
          $("#cards-player-2").empty();
          $("#cards-player-3").empty();
          $("#cards-player-4").empty();
          $("#card-player-1").empty();
          $("#card-player-2").empty();
          $("#card-player-3").empty();
          $("#card-player-4").empty();

          //append the new results of cards-left and discards
          $("#cards-player-1").append("Cards Left to win: " + jungleSpeed.stackPlayer1.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer1.length);
          $("#cards-player-2").append("Cards Left to win: " + jungleSpeed.stackPlayer2.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer2.length);
          $("#cards-player-3").append("Cards Left to win: " + jungleSpeed.stackPlayer3.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer3.length);
          $("#cards-player-4").append("Cards Left to win: " + jungleSpeed.stackPlayer4.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer4.length);
          $("#card-player-1").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
          $("#card-player-2").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
          $("#card-player-3").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
          $("#card-player-4").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');


          alert("The SPECIAL card appeared and player 3 clicked first\n Player 1 has been choosen randomly so he gets all the discard cards from the other 3 players, it means " + newArrDiscardToPlayer1.length +" cards. So now player 1 needs " + jungleSpeed.stackPlayer1.length + " cards to finish the game");

        }

        if (randomPlayer === 2) {
          //player 3 gives all his discards to player 2 stack

          var newArrDiscardToPlayer2 = jungleSpeed.discardsPlayer3.concat(jungleSpeed.discardsPlayer1.concat(jungleSpeed.discardsPlayer2.concat(jungleSpeed.discardsPlayer4)));
          var finalArrDiscardToPlayer2 = newArrDiscardToPlayer2.concat(jungleSpeed.stackPlayer2);
          jungleSpeed.stackPlayer2 = finalArrDiscardToPlayer2;
          jungleSpeed.discardsPlayer1 = [];
          jungleSpeed.discardsPlayer2 = [];
          jungleSpeed.discardsPlayer3 = [];
          jungleSpeed.discardsPlayer4 = [];
          jungleSpeed.stackPlayer1[0].visible = false;
          jungleSpeed.stackPlayer2[0].visible = false;
          jungleSpeed.stackPlayer3[0].visible = false;
          jungleSpeed.stackPlayer4[0].visible = false;

          //empty the container before refreshing it
          $("#cards-player-1").empty();
          $("#cards-player-2").empty();
          $("#cards-player-3").empty();
          $("#cards-player-4").empty();
          $("#card-player-1").empty();
          $("#card-player-2").empty();
          $("#card-player-3").empty();
          $("#card-player-4").empty();

          //append the new results of cards-left and discards
          $("#cards-player-1").append("Cards Left to win: " + jungleSpeed.stackPlayer1.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer1.length);
          $("#cards-player-2").append("Cards Left to win: " + jungleSpeed.stackPlayer2.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer2.length);
          $("#cards-player-3").append("Cards Left to win: " + jungleSpeed.stackPlayer3.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer3.length);
          $("#cards-player-4").append("Cards Left to win: " + jungleSpeed.stackPlayer4.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer4.length);
          $("#card-player-1").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
          $("#card-player-2").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
          $("#card-player-3").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
          $("#card-player-4").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');


          alert("The SPECIAL card appeared and player 3 clicked first\n Player 2 has been choosen randomly so he gets all the discard cards from the other 3 players, it means " + newArrDiscardToPlayer2.length +" cards. So now player 2 needs " + jungleSpeed.stackPlayer2.length + " cards to finish the game");
        }
        if (randomPlayer === 3) {
          //player 3 gives all his discards to player 4 stack
          var newArrDiscardToPlayer4 = jungleSpeed.discardsPlayer3.concat(jungleSpeed.discardsPlayer1.concat(jungleSpeed.discardsPlayer2.concat(jungleSpeed.discardsPlayer4)));
          var finalArrDiscardToPlayer4 = newArrDiscardToPlayer4.concat(jungleSpeed.stackPlayer4);
          jungleSpeed.stackPlayer4 = finalArrDiscardToPlayer4;
          jungleSpeed.discardsPlayer1 = [];
          jungleSpeed.discardsPlayer2 = [];
          jungleSpeed.discardsPlayer3 = [];
          jungleSpeed.discardsPlayer4 = [];
          jungleSpeed.stackPlayer1[0].visible = false;
          jungleSpeed.stackPlayer2[0].visible = false;
          jungleSpeed.stackPlayer3[0].visible = false;
          jungleSpeed.stackPlayer4[0].visible = false;

          //empty the container before refreshing it
          $("#cards-player-1").empty();
          $("#cards-player-2").empty();
          $("#cards-player-3").empty();
          $("#cards-player-4").empty();
          $("#card-player-1").empty();
          $("#card-player-2").empty();
          $("#card-player-3").empty();
          $("#card-player-4").empty();

          //append the new results of cards-left and discards
          $("#cards-player-1").append("Cards Left to win: " + jungleSpeed.stackPlayer1.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer1.length);
          $("#cards-player-2").append("Cards Left to win: " + jungleSpeed.stackPlayer2.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer2.length);
          $("#cards-player-3").append("Cards Left to win: " + jungleSpeed.stackPlayer3.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer3.length);
          $("#cards-player-4").append("Cards Left to win: " + jungleSpeed.stackPlayer4.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer4.length);
          $("#card-player-1").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
          $("#card-player-2").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
          $("#card-player-3").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
          $("#card-player-4").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');


          alert("The SPECIAL card appeared and player 3 clicked first\n Player 4 has been choosen randomly so he gets all the discard cards from the other 3 players, it means " + newArrDiscardToPlayer4.length +" cards. So now player 4 needs " + jungleSpeed.stackPlayer4.length + " cards to finish the game");
        }


      }

      //player3 fails
      else if (jungleSpeed.stackPlayer3[0].family !== jungleSpeed.stackPlayer1[0].family && jungleSpeed.stackPlayer3[0].family !== jungleSpeed.stackPlayer2[0].family && jungleSpeed.stackPlayer3[0].family !== jungleSpeed.stackPlayer4[0].family) {

        //player 3 will get all discards card from other players and add them to their stack cards

        var newArrToPlayer3 = jungleSpeed.discardsPlayer3.concat(jungleSpeed.discardsPlayer1.concat(jungleSpeed.discardsPlayer2.concat(jungleSpeed.discardsPlayer4)));
        var finalArrToPlayer3 = newArrToPlayer3.concat(jungleSpeed.stackPlayer3);
        jungleSpeed.stackPlayer3 = finalArrToPlayer3;
        jungleSpeed.discardsPlayer1 = [];
        jungleSpeed.discardsPlayer2 = [];
        jungleSpeed.discardsPlayer3 = [];
        jungleSpeed.discardsPlayer4 = [];
        jungleSpeed.stackPlayer1[0].visible = false;
        jungleSpeed.stackPlayer2[0].visible = false;
        jungleSpeed.stackPlayer3[0].visible = false;
        jungleSpeed.stackPlayer4[0].visible = false;

        //empty the container before refreshing it
        $("#cards-player-1").empty();
        $("#cards-player-2").empty();
        $("#cards-player-3").empty();
        $("#cards-player-4").empty();
        $("#card-player-1").empty();
        $("#card-player-2").empty();
        $("#card-player-3").empty();
        $("#card-player-4").empty();

        //append the new results of cards-left and discards
        $("#cards-player-1").append("Cards Left to win: " + jungleSpeed.stackPlayer1.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer1.length);
        $("#cards-player-2").append("Cards Left to win: " + jungleSpeed.stackPlayer2.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer2.length);
        $("#cards-player-3").append("Cards Left to win: " + jungleSpeed.stackPlayer3.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer3.length);
        $("#cards-player-4").append("Cards Left to win: " + jungleSpeed.stackPlayer4.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer4.length);
        $("#card-player-1").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-2").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-3").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-4").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');

        alert("Player 3 thought he had something equal but he didn't, he gets all the discard cards from the other players, he now have " + jungleSpeed.stackPlayer3.length + " cards left to win");
      }


    }



    function player4Options(){


      //player4 win vs player1
      if (jungleSpeed.stackPlayer4[0].family === jungleSpeed.stackPlayer1[0].family) {

        player4WinPlayer1();

      }
      //player4 win vs player2
      else if (jungleSpeed.stackPlayer4[0].family === jungleSpeed.stackPlayer2[0].family) {

        player4WinPlayer2();

      }
      //player4 win vs player3
      else if (jungleSpeed.stackPlayer4[0].family === jungleSpeed.stackPlayer3[0].family) {

        player4WinPlayer3();

      }
      //special card appears
      else if (jungleSpeed.stackPlayer1[0].family === "special" || jungleSpeed.stackPlayer2[0].family === "special" || jungleSpeed.stackPlayer3[0].family === "special" || jungleSpeed.stackPlayer4[0].family === "special") {

        player4SpecialCard();

      }
      //player4 fails
      else if (jungleSpeed.stackPlayer4[0].family !== jungleSpeed.stackPlayer1[0].family && jungleSpeed.stackPlayer4[0].family !== jungleSpeed.stackPlayer2[0].family && jungleSpeed.stackPlayer4[0].family !== jungleSpeed.stackPlayer3[0].family) {

        player4Fails();

      }
    }







    function player4WinPlayer1(){

      //player 4 gives all his discards to player 1 stack
      var discardPlayer4toPlayer1 = jungleSpeed.discardsPlayer4.length;//only for visual purposes

      var newArrToThePlayer1 = jungleSpeed.discardsPlayer1.concat(jungleSpeed.discardsPlayer4);
      var finalArrToThePlayer1 = newArrToThePlayer1.concat(jungleSpeed.stackPlayer1);
      jungleSpeed.stackPlayer1 = finalArrToThePlayer1;
      jungleSpeed.discardsPlayer1 = [];
      jungleSpeed.discardsPlayer4 = [];
      jungleSpeed.stackPlayer1[0].visible = false;




      //empty the container before refreshing it
      $("#cards-player-1").empty();
      $("#cards-player-4").empty();
      $("#card-player-4").empty();
      $("#card-player-1").empty();
      //append the new results of cards-left and discards
      $("#cards-player-4").append("Cards Left to win: " + jungleSpeed.stackPlayer4.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer4.length);
      $("#cards-player-1").append("Cards Left to win: " + jungleSpeed.stackPlayer1.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer1.length);
      $("#card-player-4").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
      $("#card-player-1").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');


      alert("You had the same card of player 1 and you clicked first!\n Player 4 pass " + discardPlayer4toPlayer1 + " cards to player 1, so now player 1 needs " + jungleSpeed.stackPlayer1.length + " cards to finish the game");




    }

    function player4WinPlayer2(){

      //player 4 gives all his discards to player 2 stack
      var discardPlayer4toPlayer2 = jungleSpeed.discardsPlayer4.length;
      var newArrToThePlayer2 = jungleSpeed.discardsPlayer2.concat(jungleSpeed.discardsPlayer4);
      var finalArrToThePlayer2 = newArrToThePlayer2.concat(jungleSpeed.stackPlayer2);
      jungleSpeed.stackPlayer2 = finalArrToThePlayer2;
      jungleSpeed.discardsPlayer4 = [];
      jungleSpeed.discardsPlayer2 = [];
      jungleSpeed.stackPlayer2[0].visible = false;

      //empty the container before refreshing it
      $("#cards-player-2").empty();
      $("#cards-player-4").empty();
      $("#card-player-2").empty();
      $("#card-player-4").empty();
      //append the new results of cards-left and discards
      $("#cards-player-4").append("Cards Left to win: " + jungleSpeed.stackPlayer4.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer4.length);
      $("#cards-player-2").append("Cards Left to win: " + jungleSpeed.stackPlayer2.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer2.length);
      $("#card-player-2").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
      $("#card-player-4").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');


      alert("You had the same card of player 2 and you clicked first!\n Player 4 pass " + discardPlayer4toPlayer2 + " cards to player 2, so now player 2 needs " + jungleSpeed.stackPlayer2.length + " cards to finish the game");

    }

    function player4WinPlayer3(){

      //player 4 gives all his discards to player 3 stack
      var discardPlayer4toPlayer3 = jungleSpeed.discardsPlayer4.length;
      var newArrToThePlayer3 = jungleSpeed.discardsPlayer3.concat(jungleSpeed.discardsPlayer4);
      var finalArrToThePlayer3 = newArrToThePlayer3.concat(jungleSpeed.stackPlayer3);
      jungleSpeed.stackPlayer3 = finalArrToThePlayer3;
      jungleSpeed.discardsPlayer4 = [];
      jungleSpeed.discardsPlayer3 = [];
      jungleSpeed.stackPlayer3[0].visible = false;

      //empty the container before refreshing it
      $("#cards-player-3").empty();
      $("#cards-player-4").empty();
      $("#card-player-3").empty();
      $("#card-player-4").empty();
      //append the new results of cards-left and discards
      $("#cards-player-4").append("Cards Left to win: " + jungleSpeed.stackPlayer4.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer4.length);
      $("#cards-player-3").append("Cards Left to win: " + jungleSpeed.stackPlayer3.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer3.length);
      $("#card-player-4").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
      $("#card-player-3").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');


      alert("You had the same card of player 3 and you clicked first!\n Player 4 pass " + discardPlayer4toPlayer3 + " cards to player 3, so now player 3 needs " + jungleSpeed.stackPlayer3.length + " cards to finish the game");

    }

    // function player4SpecialCard(){
    //
    //   randomPlayer = Math.floor((Math.random() * 3) + 1);
    //   if (randomPlayer === 1) {
    //     //player 4 gives all his discards to player 2 stack
    //     var discardRandomChosenPlayer2 = jungleSpeed.discardsPlayer4.length;//only for visual purposes
    //
    //     var newRandomChosenArrPlayer2 = jungleSpeed.discardsPlayer4.concat(jungleSpeed.discardsPlayer2);
    //     var finalRandomChosenArrPlayer2 = newRandomChosenArrPlayer2.concat(jungleSpeed.stackPlayer2);
    //     jungleSpeed.stackPlayer2 = finalRandomChosenArrPlayer2;
    //     jungleSpeed.discardsPlayer4 = [];
    //     jungleSpeed.discardsPlayer2 = [];
    //
    //
    //     //empty the container before refreshing it
    //     $("#cards-player-2").empty();
    //     $("#cards-player-4").empty();
    //     $("#card-player-2").empty();
    //     $("#card-player-4").empty();
    //     //append the new results of cards-left and discards
    //     $("#cards-player-4").append("Cards Left to win: " + jungleSpeed.stackPlayer4.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer4.length);
    //     $("#cards-player-2").append("Cards Left to win: " + jungleSpeed.stackPlayer2.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer2.length);
    //     $("#card-player-4").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
    //     $("#card-player-2").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
    //
    //
    //     alert("The SPECIAL card appeared and player 4 clicked first\n Player 2 has been choose randomly so Player 4 pass " + discardRandomChosenPlayer2 + " cards to player 2, so now player 2 needs " + jungleSpeed.stackPlayer2.length + " cards to finish the game");
    //   }
    //
    //   if (randomPlayer === 2) {
    //     //player 4 gives all his discards to player 3 stack
    //     var discardRandomChosenPlayer3 = jungleSpeed.discardsPlayer4.length;//only for visual purposes
    //
    //     var newRandomChosenArrPlayer3 = jungleSpeed.discardsPlayer4.concat(jungleSpeed.discardsPlayer3);
    //     var finalRandomChosenArrPlayer3 = newRandomChosenArrPlayer3.concat(jungleSpeed.stackPlayer3);
    //     jungleSpeed.stackPlayer3 = finalRandomChosenArrPlayer3;
    //     jungleSpeed.discardsPlayer4 = [];
    //     jungleSpeed.discardsPlayer3 = [];
    //
    //
    //     //empty the container before refreshing it
    //     $("#cards-player-3").empty();
    //     $("#cards-player-4").empty();
    //     $("#card-player-3").empty();
    //     $("#card-player-4").empty();
    //     //append the new results of cards-left and discards
    //     $("#cards-player-4").append("Cards Left to win: " + jungleSpeed.stackPlayer4.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer4.length);
    //     $("#cards-player-3").append("Cards Left to win: " + jungleSpeed.stackPlayer3.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer3.length);
    //     $("#card-player-4").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
    //     $("#card-player-3").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
    //
    //
    //     alert("The SPECIAL card appeared and player 4 clicked first\n Player 3 has been choose randomly so Player 4 pass " + discardRandomChosenPlayer3 + " cards to player 3, so now player 3 needs " + jungleSpeed.stackPlayer3.length + " cards to finish the game");
    //   }
    //   if (randomPlayer === 3) {
    //     //player 1 gives all his discards to player 2 stack
    //     var discardRandomChosenPlayer1 = jungleSpeed.discardsPlayer4.length;//only for visual purposes
    //
    //     var newRandomChosenArrPlayer1 = jungleSpeed.discardsPlayer4.concat(jungleSpeed.discardsPlayer1);
    //     var finalRandomChosenArrPlayer1 = newRandomChosenArrPlayer1.concat(jungleSpeed.stackPlayer1);
    //     jungleSpeed.stackPlayer1 = finalRandomChosenArrPlayer1;
    //     jungleSpeed.discardsPlayer4 = [];
    //     jungleSpeed.discardsPlayer1 = [];
    //
    //
    //     //empty the container before refreshing it
    //     $("#cards-player-1").empty();
    //     $("#cards-player-4").empty();
    //     $("#card-player-4").empty();
    //     $("#card-player-1").empty();
    //     //append the new results of cards-left and discards
    //     $("#cards-player-4").append("Cards Left to win: " + jungleSpeed.stackPlayer4.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer4.length);
    //     $("#cards-player-1").append("Cards Left to win: " + jungleSpeed.stackPlayer1.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer1.length);
    //     $("#card-player-4").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
    //     $("#card-player-1").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
    //
    //
    //     alert("The SPECIAL card appeared and player 4 clicked first\n Player 4 has been choose randomly so Player 1 pass " + discardRandomChosenPlayer1 + " cards to player 4, so now player 4 needs " + jungleSpeed.stackPlayer4.length + " cards to finish the game");
    //   }
    //
    // }

    function player4Fails(){

      //player 4 will get all discards card from other players and add them to their stack cards

      var newArrForThePlayer4 = jungleSpeed.discardsPlayer4.concat(jungleSpeed.discardsPlayer1.concat(jungleSpeed.discardsPlayer2.concat(jungleSpeed.discardsPlayer3)));
      var finalArrToThePlayer4 = newArrForThePlayer4.concat(jungleSpeed.stackPlayer4);
      jungleSpeed.stackPlayer4 = finalArrToThePlayer4;
      jungleSpeed.discardsPlayer1 = [];
      jungleSpeed.discardsPlayer2 = [];
      jungleSpeed.discardsPlayer3 = [];
      jungleSpeed.discardsPlayer4 = [];
      jungleSpeed.stackPlayer1[0].visible = false;
      jungleSpeed.stackPlayer2[0].visible = false;
      jungleSpeed.stackPlayer3[0].visible = false;
      jungleSpeed.stackPlayer4[0].visible = false;

      //empty the container before refreshing it
      $("#cards-player-1").empty();
      $("#cards-player-2").empty();
      $("#cards-player-3").empty();
      $("#cards-player-4").empty();
      $("#card-player-1").empty();
      $("#card-player-2").empty();
      $("#card-player-3").empty();
      $("#card-player-4").empty();

      //append the new results of cards-left and discards
      $("#cards-player-1").append("Cards Left to win: " + jungleSpeed.stackPlayer1.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer1.length);
      $("#cards-player-2").append("Cards Left to win: " + jungleSpeed.stackPlayer2.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer2.length);
      $("#cards-player-3").append("Cards Left to win: " + jungleSpeed.stackPlayer3.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer3.length);
      $("#cards-player-4").append("Cards Left to win: " + jungleSpeed.stackPlayer4.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer4.length);
      $("#card-player-1").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
      $("#card-player-2").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
      $("#card-player-3").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
      $("#card-player-4").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');

      alert("Player 4 thought he had something equal but he didn't, he gets all the discard cards from the other players, he now have " + jungleSpeed.stackPlayer4.length + " cards left to win");

    }


    function player4SpecialCard(){

      randomPlayer = Math.floor((Math.random() * 3) + 1);
      if (randomPlayer === 1) {

        //player 4 will get all discards card from other players and add them to their stack cards

        var newArrForThePlayer1 = jungleSpeed.discardsPlayer4.concat(jungleSpeed.discardsPlayer1.concat(jungleSpeed.discardsPlayer2.concat(jungleSpeed.discardsPlayer3)));
        var finalArrToThePlayer1 = newArrForThePlayer1.concat(jungleSpeed.stackPlayer1);
        jungleSpeed.stackPlayer1 = finalArrToThePlayer1;
        jungleSpeed.discardsPlayer1 = [];
        jungleSpeed.discardsPlayer2 = [];
        jungleSpeed.discardsPlayer3 = [];
        jungleSpeed.discardsPlayer4 = [];
        jungleSpeed.stackPlayer1[0].visible = false;
        jungleSpeed.stackPlayer2[0].visible = false;
        jungleSpeed.stackPlayer3[0].visible = false;
        jungleSpeed.stackPlayer4[0].visible = false;

        //empty the container before refreshing it
        $("#cards-player-1").empty();
        $("#cards-player-2").empty();
        $("#cards-player-3").empty();
        $("#cards-player-4").empty();
        $("#card-player-1").empty();
        $("#card-player-2").empty();
        $("#card-player-3").empty();
        $("#card-player-4").empty();

        //append the new results of cards-left and discards
        $("#cards-player-1").append("Cards Left to win: " + jungleSpeed.stackPlayer1.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer1.length);
        $("#cards-player-2").append("Cards Left to win: " + jungleSpeed.stackPlayer2.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer2.length);
        $("#cards-player-3").append("Cards Left to win: " + jungleSpeed.stackPlayer3.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer3.length);
        $("#cards-player-4").append("Cards Left to win: " + jungleSpeed.stackPlayer4.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer4.length);
        $("#card-player-1").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-2").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-3").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-4").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');

        alert("The SPECIAL card appeared and player 4 clicked first\n Player 1 has been choosen randomly so he gets all the discard cards from the other 3 players, it means " + newArrForThePlayer1.length +" cards. So now player 4 needs " + jungleSpeed.stackPlayer4.length + " cards to finish the game");
      }
      if (randomPlayer === 2) {

        //player 4 will get all discards card from other players and add them to their stack cards

        var newArrForThePlayer2 = jungleSpeed.discardsPlayer4.concat(jungleSpeed.discardsPlayer1.concat(jungleSpeed.discardsPlayer2.concat(jungleSpeed.discardsPlayer3)));
        var finalArrToThePlayer2 = newArrForThePlayer2.concat(jungleSpeed.stackPlayer2);
        jungleSpeed.stackPlayer2 = finalArrToThePlayer2;
        jungleSpeed.discardsPlayer1 = [];
        jungleSpeed.discardsPlayer2 = [];
        jungleSpeed.discardsPlayer3 = [];
        jungleSpeed.discardsPlayer4 = [];
        jungleSpeed.stackPlayer1[0].visible = false;
        jungleSpeed.stackPlayer2[0].visible = false;
        jungleSpeed.stackPlayer3[0].visible = false;
        jungleSpeed.stackPlayer4[0].visible = false;

        //empty the container before refreshing it
        $("#cards-player-1").empty();
        $("#cards-player-2").empty();
        $("#cards-player-3").empty();
        $("#cards-player-4").empty();
        $("#card-player-1").empty();
        $("#card-player-2").empty();
        $("#card-player-3").empty();
        $("#card-player-4").empty();

        //append the new results of cards-left and discards
        $("#cards-player-1").append("Cards Left to win: " + jungleSpeed.stackPlayer1.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer1.length);
        $("#cards-player-2").append("Cards Left to win: " + jungleSpeed.stackPlayer2.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer2.length);
        $("#cards-player-3").append("Cards Left to win: " + jungleSpeed.stackPlayer3.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer3.length);
        $("#cards-player-4").append("Cards Left to win: " + jungleSpeed.stackPlayer4.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer4.length);
        $("#card-player-1").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-2").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-3").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-4").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');

        alert("The SPECIAL card appeared and player 4 clicked first\n Player 2 has been choosen randomly so he gets all the discard cards from the other 3 players, it means " + newArrForThePlayer2.length +" cards. So now player 4 needs " + jungleSpeed.stackPlayer2.length + " cards to finish the game");
      }
      if (randomPlayer === 3) {

        //player 4 will get all discards card from other players and add them to their stack cards

        var newArrForThePlayer3 = jungleSpeed.discardsPlayer4.concat(jungleSpeed.discardsPlayer1.concat(jungleSpeed.discardsPlayer2.concat(jungleSpeed.discardsPlayer3)));
        var finalArrToThePlayer3 = newArrForThePlayer3.concat(jungleSpeed.stackPlayer3);
        jungleSpeed.stackPlayer3 = finalArrToThePlayer3;
        jungleSpeed.discardsPlayer1 = [];
        jungleSpeed.discardsPlayer2 = [];
        jungleSpeed.discardsPlayer3 = [];
        jungleSpeed.discardsPlayer4 = [];
        jungleSpeed.stackPlayer1[0].visible = false;
        jungleSpeed.stackPlayer2[0].visible = false;
        jungleSpeed.stackPlayer3[0].visible = false;
        jungleSpeed.stackPlayer4[0].visible = false;

        //empty the container before refreshing it
        $("#cards-player-1").empty();
        $("#cards-player-2").empty();
        $("#cards-player-3").empty();
        $("#cards-player-4").empty();
        $("#card-player-1").empty();
        $("#card-player-2").empty();
        $("#card-player-3").empty();
        $("#card-player-4").empty();

        //append the new results of cards-left and discards
        $("#cards-player-1").append("Cards Left to win: " + jungleSpeed.stackPlayer1.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer1.length);
        $("#cards-player-2").append("Cards Left to win: " + jungleSpeed.stackPlayer2.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer2.length);
        $("#cards-player-3").append("Cards Left to win: " + jungleSpeed.stackPlayer3.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer3.length);
        $("#cards-player-4").append("Cards Left to win: " + jungleSpeed.stackPlayer4.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer4.length);
        $("#card-player-1").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-2").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-3").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-4").append('<img class="img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');

        alert("The SPECIAL card appeared and player 4 clicked first\n Player 3 has been choosen randomly so he gets all the discard cards from the other 3 players, it means " + newArrForThePlayer3.length +" cards. So now player 4 needs " + jungleSpeed.stackPlayer3.length + " cards to finish the game");
      }

    }


    // wait till you click the play button, then launch the board page
