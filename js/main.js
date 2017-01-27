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
  this.cards = [
                "card1",
                "card2",
                "card3",
                "card4",
                "card5",
                "card6",
                "card7",
                "card8",
                "card1",
                "card2",
                "card3",
                "card4",
                "card5",
                "card6",
                "card7",
                "card8"
              ];

  JungleSpeed.prototype.players = function (player){
    var cpu = "cpu";
    if (player !== cpu) {
      var newPlayer = [prompt("Name of the player:")];
    }
    // TODO should be able to choose the lvl of the CPU somehow if it's gonna be a cpu playing
  };

  JungleSpeed.prototype.splitInStacks = function() {
    //Gonna split the total card array in 4 equal piles
  };

  JungleSpeed.prototype.turnRandomCard = function() {
    //Gonna create a function that will show one random card everytime the user clicks the show button
  };

}


// END OF CONSTUCTOR - should separate this into another file

// -------------------- INTERACTING WITH THE DOM -----------------------------

//set variables
var players;
var playerArr = [];
var playerKey = ["Q","P","Z","M"];
var computerLevel = ["dumb","decent","god"];


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

// Get the number of players and ask every human player for his name and assign a key to every human

$( "#all-set" ).on('click', function() {
    players = $("#number-of-players").val();

    for (var i = 0; i < players; i++) {
      playerArr.push(prompt("What's the name of Player " + [i+1] + "?"));

      $('#names-to-play').append(
      '<div><h5>'+ playerArr[i]  + ' will have the "' + playerKey[i] +'" key assigned</h5></div>');
    }


    // get the lvl of the computer if there is

    var cpuLvl = $("#lvl-of-cpu").val();

    $("#final-cpu-lvl").append('<div><h5>Will be playing with a ' + computerLevel[cpuLvl] + ' CPU</h5><h3>WHO WILL WIN?</h3></div>');


});





// wait till you click the play button, then launch the board page
