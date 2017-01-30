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
                "card1",
                "card2",
                "card3",
                "card4",
                "card5",
                "card6",
                "card7",
                "card8",
                "card9",
                "card10",
                "card11",
                "card12",
                "card13",
                "card14",
                "card15",
                "card16",
                "card17",
                "card18",
                "card19",
                "card20",
                "card21",
                "card22",
                "card23",
                "card24",
                "card25",
                "card26",
                "card27",
                "card28",
                "card29",
                "card30",
                "card31",
                "card32",
                "card33",
                "card34",
                "card35",
                "card36",
                "card37",
                "card38",
                "card39",
                "card40",
                "card41",
                "card42",
                "card43",
                "card44",
                "card45",
                "card46",
                "card47",
                "card48",
                "card49",
                "card50",
                "card51",
                "card52",
                "card53",
                "card54",
                "card55",
                "card56",
                "card57",
                "card58",
                "card59",
                "card60",
                "card61",
                "card62",
                "card63",
                "card64",
                "card65",
                "card66",
                "card67",
                "card68",
                "card69",
                "card70",
                "card71",
                "card72",
                "card73",
                "card74",
                "card75",
                "card76",
              ];

  this.stackPlayer1 = [];
  this.stackPlayer2 = [];
  this.stackPlayer3 = [];
  this.stackPlayer4 = [];

  this.discardsPlayer1 = [];
  this.discardsPlayer2 = [];
  this.discardsPlayer3 = [];
  this.discardsPlayer4 = [];


  JungleSpeed.prototype.players = function (player){
    // Do i need to put something here?
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

  JungleSpeed.prototype.showCard = function() {

    //When the game starts, every 3 seconds countdown, i'll show a card for the user. this card will then got the discard array.

  };

}


// END OF CONSTUCTOR - should separate this into another file

// -------------------- INTERACTING WITH THE DOM -----------------------------

//set variables
var jungleSpeed = new JungleSpeed();

console.log(jungleSpeed.cards);
jungleSpeed.shuffleCards();
jungleSpeed.splitArray();
console.log(jungleSpeed.stackPlayer1);
console.log(jungleSpeed.stackPlayer2);
console.log(jungleSpeed.stackPlayer3);
console.log(jungleSpeed.stackPlayer4);



var players;
var playerArr = [];
var playerKey = ["Q","P","Z","M"];
var computerLevel = ["dumb","decent","god"];
var stack1 = [];
var stack2 = [];
var stack3 = [];
var stack4 = [];



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
    // get the lvl of the computer if there is
    SetCpuLvl();

});

// --------------------------------------------------------


//Click the play button, it will only appear if you set the number of players, after that, launch the board

$( "#play" ).on('click', function() {

  $("#first-screen").addClass("hide-container");
  $("#board-screen").addClass("show-container");

});

// -------------------------------------------------------













function setAllPlayers(){
  players = $("#number-of-players").val();

  for (var i = 0; i < players; i++) {
    playerArr.push(prompt("What's the name of Player " + [i+1] + "?"));

    $('#names-to-play').append(
    '<div><h5>'+ playerArr[i]  + ' will have the "' + playerKey[i] +'" key assigned</h5></div>');
  }
}

function SetCpuLvl(){
  var cpuLvl = $("#lvl-of-cpu").val();

  $("#final-cpu-lvl").append('<div><h5>Will be playing with a ' + computerLevel[cpuLvl] + ' CPU</h5><h3>WHO WILL WIN?</h3></div>');
}




// wait till you click the play button, then launch the board page
