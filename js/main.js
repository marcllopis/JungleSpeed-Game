
// END OF CONSTUCTOR - should separate this into another file

//----------------------------------------------------------------------
//------------------------ SET ALL VARIABLES----------------------------
//----------------------------------------------------------------------


var jungleSpeed = new JungleSpeed();


var players;
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
var cpuIQ;
var cpuSpeed;


//----------------------------------------------------------------------
//------- LANDING PAGE, EVERYTHING ABOUT SET UP HAPPENS HERE------------
//----------------------------------------------------------------------

//----------------------------------------------------------------------
//----------------- CHECK FOR NUMBER AND CPU PLAYERS--------------------
//----------------------------------------------------------------------

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

//----------------------------------------------------------------------
//------------------------- ALL SET BUTTON -----------------------------
//----------------------------------------------------------------------

$( "#all-set" ).on('click', function() {

  setAllPlayers();

  SetCpuLvl();

  for (var q = 0; q < 4; q++) {
    $("#player-"+(q+1)).append(jungleSpeed.playerArr[q].name);
  }

  $('#play').removeClass("hide-container");
  $('#play').addClass("show-container");


});

//----------------------------------------------------------------------
//-------------------------- PLAY BUTTON -------------------------------
//----------------------------------------------------------------------

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



//----------------------------------------------------------------------
//------------------ ASK FOR ALL NAMES FUNCTION-------------------------
//----------------------------------------------------------------------

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

    //----------------------------------------------------------------------
    //-------------------- LVL OF CPU FUNCTION -----------------------------
    //----------------------------------------------------------------------

    function SetCpuLvl(){
      var cpuLvl = $("#lvl-of-cpu").val();

      var lvlCpu = computerLevel[cpuLvl];
      console.log(lvlCpu);
      for (var i = 0; i < 4; i++) {
        if (jungleSpeed.playerArr[i].type === "cpu") {
          jungleSpeed.playerArr[i].lvl = lvlCpu;
        }
      }
      if (lvlCpu === "Dumb") {
        cpuIQ = 90;
        cpuSpeed = 3100;
      }
      else if (lvlCpu === "Decent") {
        cpuIQ = 95;
        cpuSpeed = 2800;
      }
      else if (lvlCpu === "God") {
        cpuIQ = 100;
        cpuSpeed = 2300;
      }

      console.log(cpuIQ);
      console.log(cpuSpeed);

    }



    //----------------------------------------------------------------------
    //------------------- ENDING OF THE LANDING PAGE------------------------
    //----------------------------------------------------------------------


    //----------------------------------------------------------------------
    //-------------- GAME IS ON, EVERYTHING HAPPENS HERE--------------------
    //----------------------------------------------------------------------

    //----------------------------------------------------------------------
    //------------------- EVENT FOR EVERY KEY PRESSED-----------------------
    //----------------------------------------------------------------------

    $(document).keypress(function(event){

      var keyPressed = event.key; //capture the key

      console.log(keyPressed);
      $("#player-turn").empty(); // empty all the container

      //----------------------------------------------------------------------
      //--------------------- CHANGE TURN ON THE GAME-------------------------
      //----------------------------------------------------------------------

      if (keyPressed === " ") {

        keyPressedSpace();

      }

      //----------------------------------------------------------------------
      //--------------------- SPACE PRESSED FUNCTION--------------------------
      //----------------------------------------------------------------------

      function keyPressedSpace(){
        $("#totem").removeClass("animated fadeOutUp");
        $("#totem").removeClass("animated fadeOutDown");
        $("#totem").removeClass("animated fadeOutLeft");
        $("#totem").removeClass("animated fadeOutRight");

        turn ++;//increase the turn so it changes
        timer();

        switch (turn) { // switch between every turn
          case 1: //player 1 turn

          setTimeout(turn1, 1500);

          break;

          case 2://player 2 turn

          setTimeout(turn2, 1500);

          break;

          case 3://player 3 turn

          setTimeout(turn3, 1500);

          break;

          case 4: //player 4 turn

          setTimeout(turn4, 1500);

          break;
        }
      }

      //----------------------------------------------------------------------
      //--------------------- KEYS PRESSED ON THE GAME------------------------
      //----------------------------------------------------------------------

      switch (keyPressed) {
        case "q": //player 1
        player1Options();
        jungleSpeed.keyPressedBeforePlayer1 = true;

        break;

        case "p": //player 2
        if (jungleSpeed.playerArr[1].type === "cpu") {
          alert("You are not the computer! Don't cheat!!");
          return;
        }
        player2Options();
        jungleSpeed.keyPressedBeforePlayer2 = true;
        break;

        case "z"://player 3
        if (jungleSpeed.playerArr[2].type === "cpu") {
          alert("You are not the computer! Don't cheat!!");
          return;
        }
        player3Options();
        jungleSpeed.keyPressedBeforePlayer3 = true;
        break;

        case "m": //player 4
        if (jungleSpeed.playerArr[3].type === "cpu") {
          alert("You are not the computer! Don't cheat!!");
          return;
        }
        player4Options();
        jungleSpeed.keyPressedBeforePlayer4 = true;
        break;
      }


      //----------------------------------------------------------------------
      //------------------- COMPUTER THINGS ON THE GAME-----------------------
      //----------------------------------------------------------------------

      if (jungleSpeed.playerArr[3].type === "cpu") {

        setTimeout(checkerComputer4, cpuSpeed);

      }
      if (jungleSpeed.playerArr[2].type === "cpu") {

        setTimeout(checkerComputer3, cpuSpeed);

      }
      if (jungleSpeed.playerArr[1].type === "cpu") {

        setTimeout(checkerComputer2, cpuSpeed);

      }

    });


    //----------------------------------------------------------------------
    //--------------------- FUNCTIONS FOR EACH TURN-------------------------
    //----------------------------------------------------------------------

    //----------------------------------------------------------------------
    //------------------------------ TURN 1---------------------------------
    //----------------------------------------------------------------------


    function turn1(){
      console.log(jungleSpeed.stackPlayer1.length);
      if (jungleSpeed.stackPlayer1.length === 1) {
        alert("PLAYER 1 WIN!!!");
      }
      $("#card-player-1").empty();
      $("#cards-player-1").empty();
      jungleSpeed.keyPressedBeforePlayer1 = false;
      jungleSpeed.keyPressedBeforePlayer2 = false;
      jungleSpeed.keyPressedBeforePlayer3 = false;
      jungleSpeed.keyPressedBeforePlayer4 = false;

      jungleSpeed.discardsPlayer1.push(jungleSpeed.stackPlayer1[0]);
      jungleSpeed.stackPlayer1.shift();
      jungleSpeed.stackPlayer1[0].visible = true;

      $("#card-player-1").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.stackPlayer1[0].name + '.jpg" alt="">');

      $("#cards-player-1").append("Cards Left to win: " + jungleSpeed.stackPlayer1.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer1.length);

    }

    //----------------------------------------------------------------------
    //------------------------------ TURN 2---------------------------------
    //----------------------------------------------------------------------

    function turn2(){

      if (jungleSpeed.stackPlayer2.length === 1) {
        alert("PLAYER 2 WIN!!!");
      }

      $("#card-player-2").empty();
      $("#cards-player-2").empty();
      jungleSpeed.keyPressedBeforePlayer1 = false;
      jungleSpeed.keyPressedBeforePlayer2 = false;
      jungleSpeed.keyPressedBeforePlayer3 = false;
      jungleSpeed.keyPressedBeforePlayer4 = false;

      jungleSpeed.discardsPlayer2.push(jungleSpeed.stackPlayer2[0]);
      jungleSpeed.stackPlayer2.shift();
      jungleSpeed.stackPlayer2[0].visible = true;

      $("#card-player-2").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.stackPlayer2[0].name + '.jpg" alt="">');

      $("#cards-player-2").append("Cards Left to win: " + jungleSpeed.stackPlayer2.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer2.length);

    }

    //----------------------------------------------------------------------
    //------------------------------ TURN 3---------------------------------
    //----------------------------------------------------------------------

    function turn3(){
      if (jungleSpeed.stackPlayer3.length === 1) {
        alert("PLAYER 3 WIN!!!");
      }

      // $("#player-turn").append("IT'S " + jungleSpeed.playerArr[2].name + " TURN!");
      $("#card-player-3").empty();
      $("#cards-player-3").empty();
      jungleSpeed.keyPressedBeforePlayer1 = false;
      jungleSpeed.keyPressedBeforePlayer2 = false;
      jungleSpeed.keyPressedBeforePlayer3 = false;
      jungleSpeed.keyPressedBeforePlayer4 = false;

      jungleSpeed.discardsPlayer3.push(jungleSpeed.stackPlayer3[0]);
      jungleSpeed.stackPlayer3.shift();
      jungleSpeed.stackPlayer3[0].visible = true;

      $("#card-player-3").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.stackPlayer3[0].name + '.jpg" alt="">');

      $("#cards-player-3").append("Cards Left to win: " + jungleSpeed.stackPlayer3.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer3.length);

    }

    //----------------------------------------------------------------------
    //------------------------------ TURN 4---------------------------------
    //----------------------------------------------------------------------

    function turn4(){

      if (jungleSpeed.stackPlayer4.length === 1) {
        alert("PLAYER 4 WIN!!!");
      }
      turn = 0;

      $("#card-player-4").empty();
      $("#cards-player-4").empty();
      jungleSpeed.keyPressedBeforePlayer1 = false;
      jungleSpeed.keyPressedBeforePlayer2 = false;
      jungleSpeed.keyPressedBeforePlayer3 = false;
      jungleSpeed.keyPressedBeforePlayer4 = false;

      jungleSpeed.discardsPlayer4.push(jungleSpeed.stackPlayer4[0]);
      jungleSpeed.stackPlayer4.shift();
      jungleSpeed.stackPlayer4[0].visible = true;

      $("#card-player-4").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.stackPlayer4[0].name + '.jpg" alt="">');

      $("#cards-player-4").append("Cards Left to win: " + jungleSpeed.stackPlayer4.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer4.length);

    }


    //----------------------------------------------------------------------
    //------------------------ COUNTDOWN TIMER------------------------------
    //----------------------------------------------------------------------

    function timer(){
      var counter = 3;
      function start(counter){
        if (counter > 0) {
          $("#player-turn").html("<h1>" + counter + "</h1>");
          counter--;
          setTimeout(function(){start(counter);}, 500);
        } else {
          console.log(turn);
          console.log(jungleSpeed.playerArr[turn].name);

          if (turn === 0) {
            turn = 4;
          }

          $("#player-turn").html('IT IS ' + jungleSpeed.playerArr[turn - 1].name + ' TURN!<h4 class="text-center">PRESS "SPACE" TO CHANGE TURN</h4>');

          if (turn === 4) {
            turn = 0;
          }


          return;

        }
      }
      start(counter);
    }

    //----------------------------------------------------------------------
    //----------------------- VOICE RECOGNITION ----------------------------
    //----------------------------------------------------------------------

    // Speech to text
    if (annyang) {
      console.log("Im in te voice recorder");
      // Let's define our first command. First the text we expect, and then the function it should call
      var commands = {
        'next, start': function() {
          keyPressedSpace();
        }
      };
      console.log(commands);

      // Add our commands to annyang
      annyang.addCommands(commands);

      // Start listening. You can call this here, or attach this call to an event, button, etc.
      annyang.start();
    }

    //----------------------------------------------------------------------
    //-------------------- PLAYER BEHAVIOUR FUNCTIONS-----------------------
    //----------------------------------------------------------------------


    //----------------------------------------------------------------------
    //-------------------- PLAYER1 BEHAVIOUR FUNCTIONS----------------------
    //----------------------------------------------------------------------
    function player1Options(){

      //player1 win vs player2
      if (jungleSpeed.stackPlayer1[0].family === jungleSpeed.stackPlayer2[0].family && jungleSpeed.stackPlayer1[0].visible === true && jungleSpeed.stackPlayer2[0].visible === true) {

        player1WinPlayer2();

      }
      //player1 win vs player3
      else if (jungleSpeed.stackPlayer1[0].family === jungleSpeed.stackPlayer3[0].family && jungleSpeed.stackPlayer1[0].visible === true && jungleSpeed.stackPlayer3[0].visible === true) {

        player1WinPlayer3();

      }
      //player1 win vs player4
      else if (jungleSpeed.stackPlayer1[0].family === jungleSpeed.stackPlayer4[0].family && jungleSpeed.stackPlayer1[0].visible === true && jungleSpeed.stackPlayer4[0].visible === true) {

        player1WinPlayer4();

      }
      //special card appears

      else if ((jungleSpeed.stackPlayer1[0].family === "special" && jungleSpeed.stackPlayer1[0].visible === true) ||
      (jungleSpeed.stackPlayer2[0].family === "special" && jungleSpeed.stackPlayer2[0].visible === true) || (jungleSpeed.stackPlayer3[0].family === "special" && jungleSpeed.stackPlayer3[0].visible === true) || (jungleSpeed.stackPlayer4[0].family === "special"  && jungleSpeed.stackPlayer4[0].visible === true)) {

        player1SpecialCard();

      }
      //player1 fails
      else if (jungleSpeed.stackPlayer1[0].family !== jungleSpeed.stackPlayer2[0].family && jungleSpeed.stackPlayer1[0].family !== jungleSpeed.stackPlayer3[0].family && jungleSpeed.stackPlayer1[0].family !== jungleSpeed.stackPlayer4[0].family) {

        player1Fails();

      }

    }

    //----------------------------------------------------------------------
    //-------------------- PLAYER2 BEHAVIOUR FUNCTIONS----------------------
    //----------------------------------------------------------------------
    function player2Options(){
      //player2 win vs player1
      if (jungleSpeed.stackPlayer2[0].family === jungleSpeed.stackPlayer1[0].family && jungleSpeed.stackPlayer2[0].visible === true && jungleSpeed.stackPlayer1[0].visible === true) {

        player2WinPlayer1();

      }
      //player2 win vs player3
      else if (jungleSpeed.stackPlayer2[0].family === jungleSpeed.stackPlayer3[0].family && jungleSpeed.stackPlayer2[0].visible === true && jungleSpeed.stackPlayer3[0].visible === true) {

        player2WinPlayer3();

      }
      //player2 win vs player4
      else if (jungleSpeed.stackPlayer2[0].family === jungleSpeed.stackPlayer4[0].family && jungleSpeed.stackPlayer2[0].visible === true && jungleSpeed.stackPlayer4[0].visible === true) {

        player2WinPlayer4();

      }
      //special card appears
      else if ((jungleSpeed.stackPlayer1[0].family === "special" && jungleSpeed.stackPlayer1[0].visible === true) ||
      (jungleSpeed.stackPlayer2[0].family === "special" && jungleSpeed.stackPlayer2[0].visible === true) || (jungleSpeed.stackPlayer3[0].family === "special" && jungleSpeed.stackPlayer3[0].visible === true) || (jungleSpeed.stackPlayer4[0].family === "special" && jungleSpeed.stackPlayer4[0].visible === true)) {

        player2SpecialCard();

      }
      //player2 fails
      else if (jungleSpeed.stackPlayer2[0].family !== jungleSpeed.stackPlayer1[0].family && jungleSpeed.stackPlayer2[0].family !== jungleSpeed.stackPlayer3[0].family && jungleSpeed.stackPlayer2[0].family !== jungleSpeed.stackPlayer4[0].family) {

        player2Fails();

      }

    }

    //----------------------------------------------------------------------
    //-------------------- PLAYER3 BEHAVIOUR FUNCTIONS----------------------
    //----------------------------------------------------------------------
    function player3Options(){

      //player3 win vs player1
      if (jungleSpeed.stackPlayer3[0].family === jungleSpeed.stackPlayer1[0].family && jungleSpeed.stackPlayer3[0].visible === true && jungleSpeed.stackPlayer1[0].visible === true) {

        player3WinPlayer1();

      }
      //player3 win vs player2
      else if (jungleSpeed.stackPlayer3[0].family === jungleSpeed.stackPlayer2[0].family && jungleSpeed.stackPlayer3[0].visible === true && jungleSpeed.stackPlayer2[0].visible === true) {

        player3WinPlayer2();

      }
      //player3 win vs player4
      else if (jungleSpeed.stackPlayer3[0].family === jungleSpeed.stackPlayer4[0].family && jungleSpeed.stackPlayer3[0].visible === true && jungleSpeed.stackPlayer4[0].visible === true) {

        player3WinPlayer4();

      }

      //special card appears
      else if ((jungleSpeed.stackPlayer1[0].family === "special" && jungleSpeed.stackPlayer1[0].visible === true) ||
      (jungleSpeed.stackPlayer2[0].family === "special" && jungleSpeed.stackPlayer2[0].visible === true) || (jungleSpeed.stackPlayer3[0].family === "special" && jungleSpeed.stackPlayer3[0].visible === true) || (jungleSpeed.stackPlayer4[0].family === "special" && jungleSpeed.stackPlayer4[0].visible === true)) {

        player3SpecialCard();

      }
      //player3 fails
      else if (jungleSpeed.stackPlayer3[0].family !== jungleSpeed.stackPlayer1[0].family && jungleSpeed.stackPlayer3[0].family !== jungleSpeed.stackPlayer2[0].family && jungleSpeed.stackPlayer3[0].family !== jungleSpeed.stackPlayer4[0].family) {

        player3Fails();

      }

    }

    //----------------------------------------------------------------------
    //-------------------- PLAYER4 BEHAVIOUR FUNCTIONS----------------------
    //----------------------------------------------------------------------

    function player4Options(){

      //player4 win vs player1
      if (jungleSpeed.stackPlayer4[0].family === jungleSpeed.stackPlayer1[0].family && jungleSpeed.stackPlayer4[0].visible === true && jungleSpeed.stackPlayer1[0].visible === true) {

        player4WinPlayer1();

      }
      //player4 win vs player2
      else if (jungleSpeed.stackPlayer4[0].family === jungleSpeed.stackPlayer2[0].family && jungleSpeed.stackPlayer4[0].visible === true && jungleSpeed.stackPlayer2[0].visible === true) {

        player4WinPlayer2();

      }
      //player4 win vs player3
      else if (jungleSpeed.stackPlayer4[0].family === jungleSpeed.stackPlayer3[0].family && jungleSpeed.stackPlayer4[0].visible === true && jungleSpeed.stackPlayer3[0].visible === true) {

        player4WinPlayer3();

      }
      //special card appears
      else if ((jungleSpeed.stackPlayer1[0].family === "special" && jungleSpeed.stackPlayer1[0].visible === true) ||
      (jungleSpeed.stackPlayer2[0].family === "special" && jungleSpeed.stackPlayer2[0].visible === true) || (jungleSpeed.stackPlayer3[0].family === "special" && jungleSpeed.stackPlayer3[0].visible === true) || (jungleSpeed.stackPlayer4[0].family === "special" && jungleSpeed.stackPlayer4[0].visible === true)) {

        player4SpecialCard();

      }
      //player4 fails
      else if (jungleSpeed.stackPlayer4[0].family !== jungleSpeed.stackPlayer1[0].family && jungleSpeed.stackPlayer4[0].family !== jungleSpeed.stackPlayer2[0].family && jungleSpeed.stackPlayer4[0].family !== jungleSpeed.stackPlayer3[0].family) {

        player4Fails();

      }
    }


    //----------------------------------------------------------------------
    //--------------------------- PLAYER 1 FUNCTIONS------------------------
    //----------------------------------------------------------------------

    function player1WinPlayer2() {

      //player 1 gives all his discards to player 2 stack
      var discardPlayer1toPlayer2 = jungleSpeed.discardsPlayer1.length;//only for visual purposes

      var newArrPlayer2 = jungleSpeed.discardsPlayer1.concat(jungleSpeed.discardsPlayer2);
      var finalArrPlayer2 = newArrPlayer2.concat(jungleSpeed.stackPlayer2);
      jungleSpeed.stackPlayer2 = finalArrPlayer2;
      jungleSpeed.discardsPlayer1 = [];
      jungleSpeed.discardsPlayer2 = [];
      jungleSpeed.stackPlayer2[0].visible = false;
      jungleSpeed.keyPressedBeforePlayer1 = true;
      turn = 1;

      //empty the container before refreshing it
      $("#cards-player-2").empty();
      $("#cards-player-1").empty();
      $("#card-player-2").empty();
      $("#card-player-1").empty();

      //append the new results of cards-left and discards
      $("#cards-player-1").append("Cards Left to win: " + jungleSpeed.stackPlayer1.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer1.length);
      $("#cards-player-2").append("Cards Left to win: " + jungleSpeed.stackPlayer2.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer2.length);

      $("#card-player-2").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
      $("#card-player-1").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');

      $("#totem").addClass("animated fadeOutUp");

      alert("HEY " + jungleSpeed.playerArr[0].name + "\nYou had the same card of player 2 and you clicked first!\n Player 1 pass " + discardPlayer1toPlayer2 + " cards to player 2, so now player 2 needs " + jungleSpeed.stackPlayer2.length + " cards to finish the game");

      return true;

    }
    function player1WinPlayer3() {
      //player 1 gives all his discards to player 3 stack
      var discardPlayer1toPlayer3 = jungleSpeed.discardsPlayer1.length;
      var newArrPlayer3 = jungleSpeed.discardsPlayer1.concat(jungleSpeed.discardsPlayer3);
      var finalArrPlayer3 = newArrPlayer3.concat(jungleSpeed.stackPlayer3);
      jungleSpeed.stackPlayer3 = finalArrPlayer3;
      jungleSpeed.discardsPlayer1 = [];
      jungleSpeed.discardsPlayer3 = [];
      jungleSpeed.stackPlayer3[0].visible = false;
      jungleSpeed.keyPressedBeforePlayer1 = true;
      turn = 2;

      //empty the container before refreshing it
      $("#cards-player-3").empty();
      $("#cards-player-1").empty();
      $("#card-player-3").empty();
      $("#card-player-1").empty();
      //append the new results of cards-left and discards
      $("#cards-player-1").append("Cards Left to win: " + jungleSpeed.stackPlayer1.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer1.length);
      $("#cards-player-3").append("Cards Left to win: " + jungleSpeed.stackPlayer3.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer3.length);
      $("#card-player-1").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
      $("#card-player-3").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');

      alert("HEY " + jungleSpeed.playerArr[0].name + "\nYou had the same card of player 3 and you clicked first!\n Player 1 pass " + discardPlayer1toPlayer3 + " cards to player 3, so now player 3 needs " + jungleSpeed.stackPlayer3.length + " cards to finish the game");

      $("#totem").addClass("animated fadeOutUp");

      return true;

    }
    function player1WinPlayer4() {

      //player 1 gives all his discards to player 4 stack
      var discardPlayer1toPlayer4 = jungleSpeed.discardsPlayer1.length;
      var newArrPlayer4 = jungleSpeed.discardsPlayer1.concat(jungleSpeed.discardsPlayer4);
      var finalArrPlayer4 = newArrPlayer4.concat(jungleSpeed.stackPlayer4);
      jungleSpeed.stackPlayer4 = finalArrPlayer4;
      jungleSpeed.discardsPlayer1 = [];
      jungleSpeed.discardsPlayer4 = [];
      jungleSpeed.stackPlayer4[0].visible = false;
      jungleSpeed.keyPressedBeforePlayer1 = true;
      turn = 3;

      //empty the container before refreshing it
      $("#cards-player-4").empty();
      $("#cards-player-1").empty();
      $("#card-player-4").empty();
      $("#card-player-1").empty();
      //append the new results of cards-left and discards
      $("#cards-player-1").append("Cards Left to win: " + jungleSpeed.stackPlayer1.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer1.length);
      $("#cards-player-4").append("Cards Left to win: " + jungleSpeed.stackPlayer4.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer4.length);
      $("#card-player-1").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
      $("#card-player-4").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');


      alert("HEY " + jungleSpeed.playerArr[0].name + "\nYou had the same card of player 4 and you clicked first!\n Player 1 pass " + discardPlayer1toPlayer4 + " cards to player 4, so now player 4 needs " + jungleSpeed.stackPlayer4.length + " cards to finish the game");

      $("#totem").addClass("animated fadeOutUp");


      return true;

    }
    function player1SpecialCard() {

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
        jungleSpeed.keyPressedBeforePlayer1 = true;
        turn = 1;

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
        $("#card-player-1").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-2").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-3").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-4").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');

        alert("HEY " + jungleSpeed.playerArr[0].name + "\nThe SPECIAL card appeared and player 1 clicked first\n Player 2 has been choosen randomly so he gets all the discard cards from the other 3 players, it means " + newArrRandomPlayer2.length +" cards. So now player 2 needs " + jungleSpeed.stackPlayer2.length + " cards to finish the game");

        $("#totem").addClass("animated fadeOutUp");

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
        jungleSpeed.keyPressedBeforePlayer1 = true;
        turn = 2;

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
        $("#card-player-1").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-2").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-3").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-4").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');

        alert("HEY " + jungleSpeed.playerArr[0].name + "\nThe SPECIAL card appeared and player 1 clicked first\n Player 3 has been choosen randomly so he gets all the discard cards from the other 3 players, it means " + newArrRandomPlayer3.length +" cards. So now player 3 needs " + jungleSpeed.stackPlayer3.length + " cards to finish the game");

        $("#totem").addClass("animated fadeOutUp");

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
        jungleSpeed.keyPressedBeforePlayer1 = true;
        turn = 3;

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
        $("#card-player-1").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-2").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-3").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-4").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');

        alert("HEY" + jungleSpeed.playerArr[0].name + "\nThe SPECIAL card appeared and player 1 clicked first\n Player 4 has been choosen randomly so he gets all the discard cards from the other 3 players, it means " + newArrRandomPlayer4.length +" cards. So now player 4 needs " + jungleSpeed.stackPlayer4.length + " cards to finish the game");

        $("#totem").addClass("animated fadeOutUp");

      }

      return true;

    }
    function player1Fails() {

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
      jungleSpeed.keyPressedBeforePlayer1 = true;
      turn = 0;

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
      $("#card-player-1").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
      $("#card-player-2").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
      $("#card-player-3").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
      $("#card-player-4").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');

      $("#totem").addClass("animated fadeOutUp");

      alert("HEY " + jungleSpeed.playerArr[0].name + "\nYou thought you had something equal but you didn't, you get all the discard cards from the other players, and now you have " + jungleSpeed.stackPlayer1.length + " cards left to win");

      return false;

    }

    //----------------------------------------------------------------------
    //--------------------------- PLAYER 2 FUNCTIONS------------------------
    //----------------------------------------------------------------------

    function player2WinPlayer1() {
      //player 2 gives all his discards to player 1 stack
      var discardPlayer2toPlayer1 = jungleSpeed.discardsPlayer2.length;//only for visual purposes

      var newArrForPlayer1 = jungleSpeed.discardsPlayer1.concat(jungleSpeed.discardsPlayer2);
      var finalArrForPlayer1 = newArrForPlayer1.concat(jungleSpeed.stackPlayer1);
      jungleSpeed.stackPlayer1 = finalArrForPlayer1;
      jungleSpeed.discardsPlayer1 = [];
      jungleSpeed.discardsPlayer2 = [];
      jungleSpeed.stackPlayer1[0].visible = false;
      jungleSpeed.keyPressedBeforePlayer2 = true;
      turn = 0;

      //empty the container before refreshing it
      $("#cards-player-1").empty();
      $("#cards-player-2").empty();
      $("#card-player-2").empty();
      $("#card-player-1").empty();
      //append the new results of cards-left and discards
      $("#cards-player-2").append("Cards Left to win: " + jungleSpeed.stackPlayer2.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer2.length);
      $("#cards-player-1").append("Cards Left to win: " + jungleSpeed.stackPlayer1.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer1.length);
      $("#card-player-2").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
      $("#card-player-1").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');

      alert("HEY " + jungleSpeed.playerArr[1].name + "\nYou had the same card of player 1 and you clicked first!\n Player 2 pass " + discardPlayer2toPlayer1 + " cards to player 1, so now player 1 needs " + jungleSpeed.stackPlayer1.length + " cards to finish the game");

      $("#totem").addClass("animated fadeOutRight");

    }
    function player2WinPlayer3() {

      //player 2 gives all his discards to player 3 stack
      var discardPlayer2toPlayer3 = jungleSpeed.discardsPlayer2.length;
      var newArrForPlayer3 = jungleSpeed.discardsPlayer2.concat(jungleSpeed.discardsPlayer3);
      var finalArrForPlayer3 = newArrForPlayer3.concat(jungleSpeed.stackPlayer3);
      jungleSpeed.stackPlayer3 = finalArrForPlayer3;
      jungleSpeed.discardsPlayer2 = [];
      jungleSpeed.discardsPlayer3 = [];
      jungleSpeed.stackPlayer3[0].visible = false;
      jungleSpeed.keyPressedBeforePlayer2 = true;
      turn = 2;

      //empty the container before refreshing it
      $("#cards-player-3").empty();
      $("#cards-player-2").empty();
      $("#card-player-2").empty();
      $("#card-player-3").empty();
      //append the new results of cards-left and discards
      $("#cards-player-2").append("Cards Left to win: " + jungleSpeed.stackPlayer2.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer2.length);
      $("#cards-player-3").append("Cards Left to win: " + jungleSpeed.stackPlayer3.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer3.length);
      $("#card-player-3").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
      $("#card-player-2").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');

      alert("HEY " + jungleSpeed.playerArr[1].name + "\nYou had the same card of player 3 and you clicked first!\n Player 2 pass " + discardPlayer2toPlayer3 + " cards to player 3, so now player 3 needs " + jungleSpeed.stackPlayer3.length + " cards to finish the game");

      $("#totem").addClass("animated fadeOutRight");

    }
    function player2WinPlayer4() {

      //player 1 gives all his discards to player 4 stack
      var discardPlayer2toPlayer4 = jungleSpeed.discardsPlayer2.length;
      var newArrForPlayer4 = jungleSpeed.discardsPlayer2.concat(jungleSpeed.discardsPlayer4);
      var finalArrForPlayer4 = newArrForPlayer4.concat(jungleSpeed.stackPlayer4);
      jungleSpeed.stackPlayer4 = finalArrForPlayer4;
      jungleSpeed.discardsPlayer2 = [];
      jungleSpeed.discardsPlayer4 = [];
      jungleSpeed.stackPlayer4[0].visible = false;
      jungleSpeed.keyPressedBeforePlayer2 = true;
      turn = 3;

      //empty the container before refreshing it
      $("#cards-player-4").empty();
      $("#cards-player-2").empty();
      $("#card-player-2").empty();
      $("#card-player-4").empty();
      //append the new results of cards-left and discards
      $("#cards-player-2").append("Cards Left to win: " + jungleSpeed.stackPlayer2.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer2.length);
      $("#cards-player-4").append("Cards Left to win: " + jungleSpeed.stackPlayer4.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer4.length);
      $("#card-player-2").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
      $("#card-player-4").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');

      alert("HEY " + jungleSpeed.playerArr[1].name + "\nYou had the same card of player 4 and you clicked first!\n Player 2 pass " + discardPlayer2toPlayer4 + " cards to player 4, so now player 4 needs " + jungleSpeed.stackPlayer4.length + " cards to finish the game");

      $("#totem").addClass("animated fadeOutRight");

    }
    function player2SpecialCard() {

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
        jungleSpeed.keyPressedBeforePlayer2 = true;
        turn = 0;

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
        $("#card-player-1").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-2").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-3").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-4").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');

        alert("HEY " + jungleSpeed.playerArr[1].name + "\nThe SPECIAL card appeared and player 2 clicked first\n Player 1 has been choosen randomly so he gets all the discard cards from the other 3 players, it means " + newArrDiscardForPlayer1.length +" cards. So now player 1 needs " + jungleSpeed.stackPlayer1.length + " cards to finish the game");

        $("#totem").addClass("animated fadeOutRight");

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
        jungleSpeed.keyPressedBeforePlayer2 = true;
        turn = 2;

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
        $("#card-player-1").append('<animated flipInY  class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-2").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-3").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-4").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');

        alert("HEY " + jungleSpeed.playerArr[1].name + "\nThe SPECIAL card appeared and player 2 clicked first\n Player 3 has been choosen randomly so he gets all the discard cards from the other 3 players, it means " + newArrDiscardForPlayer3.length +" cards. So now player 3 needs " + jungleSpeed.stackPlayer3.length + " cards to finish the game");

        $("#totem").addClass("animated fadeOutRight");

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
        jungleSpeed.keyPressedBeforePlayer2 = true;
        turn = 3;

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
        $("#card-player-1").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-2").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-3").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-4").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');

        alert("HEY " + jungleSpeed.playerArr[1].name + "\nThe SPECIAL card appeared and player 2 clicked first\n Player 4 has been choosen randomly so he gets all the discard cards from the other 3 players, it means " + newArrDiscardForPlayer4.length +" cards. So now player 4 needs " + jungleSpeed.stackPlayer4.length + " cards to finish the game");

        $("#totem").addClass("animated fadeOutRight");

      }
    }
    function player2Fails() {
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
      jungleSpeed.keyPressedBeforePlayer2 = true;
      turn = 1;

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
      $("#card-player-1").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
      $("#card-player-2").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
      $("#card-player-3").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
      $("#card-player-4").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');

      alert("HEY " + jungleSpeed.playerArr[1].name + "\nYou thought you had something equal but you didn't, you get all the discard cards from the other players and you now have " + jungleSpeed.stackPlayer2.length + " cards left to win");

      $("#totem").addClass("animated fadeOutRight");

    }

    //----------------------------------------------------------------------
    //--------------------------- PLAYER 3 FUNCTIONS------------------------
    //----------------------------------------------------------------------
    function player3WinPlayer1() {
      //player 3 gives all his discards to player 1 stack
      var discardPlayer3toPlayer1 = jungleSpeed.discardsPlayer3.length;//only for visual purposes

      var newArrToPlayer1 = jungleSpeed.discardsPlayer1.concat(jungleSpeed.discardsPlayer3);
      var finalArrToPlayer1 = newArrToPlayer1.concat(jungleSpeed.stackPlayer1);
      jungleSpeed.stackPlayer1 = finalArrToPlayer1;
      jungleSpeed.discardsPlayer1 = [];
      jungleSpeed.discardsPlayer3 = [];
      jungleSpeed.stackPlayer1[0].visible = false;
      jungleSpeed.keyPressedBeforePlayer3 = true;
      turn = 0;

      //empty the container before refreshing it
      $("#cards-player-1").empty();
      $("#cards-player-3").empty();
      $("#card-player-3").empty();
      $("#card-player-1").empty();
      //append the new results of cards-left and discards
      $("#cards-player-3").append("Cards Left to win: " + jungleSpeed.stackPlayer3.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer3.length);
      $("#cards-player-1").append("Cards Left to win: " + jungleSpeed.stackPlayer1.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer1.length);
      $("#card-player-3").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
      $("#card-player-1").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');

      alert("HEY " + jungleSpeed.playerArr[2].name + "\nYou had the same card of player 1 and you clicked first!\n Player 3 pass " + discardPlayer3toPlayer1 + " cards to player 1, so now player 1 needs " + jungleSpeed.stackPlayer1.length + " cards to finish the game");

      $("#totem").addClass("animated fadeOutDown");

    }
    function player3WinPlayer2() {

      //player 3 gives all his discards to player 2 stack
      var discardPlayer3toPlayer2 = jungleSpeed.discardsPlayer3.length;
      var newArrToPlayer2 = jungleSpeed.discardsPlayer3.concat(jungleSpeed.discardsPlayer2);
      var finalArrToPlayer2 = newArrToPlayer2.concat(jungleSpeed.stackPlayer2);
      jungleSpeed.stackPlayer2 = finalArrToPlayer2;
      jungleSpeed.discardsPlayer3 = [];
      jungleSpeed.discardsPlayer2 = [];
      jungleSpeed.stackPlayer2[0].visible = false;
      jungleSpeed.keyPressedBeforePlayer3 = true;
      turn = 1;

      //empty the container before refreshing it
      $("#cards-player-2").empty();
      $("#cards-player-3").empty();
      $("#card-player-2").empty();
      $("#card-player-3").empty();
      //append the new results of cards-left and discards
      $("#cards-player-3").append("Cards Left to win: " + jungleSpeed.stackPlayer3.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer3.length);
      $("#cards-player-2").append("Cards Left to win: " + jungleSpeed.stackPlayer2.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer2.length);
      $("#card-player-2").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
      $("#card-player-3").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');


      alert("HEY " + jungleSpeed.playerArr[2].name + "\nYou had the same card of player 2 and you clicked first!\n Player 3 pass " + discardPlayer3toPlayer2 + " cards to player 2, so now player 2 needs " + jungleSpeed.stackPlayer2.length + " cards to finish the game");

      $("#totem").addClass("animated fadeOutDown");

    }
    function player3WinPlayer4() {

      //player 3 gives all his discards to player 4 stack
      var discardPlayer3toPlayer4 = jungleSpeed.discardsPlayer3.length;
      var newArrToPlayer4 = jungleSpeed.discardsPlayer3.concat(jungleSpeed.discardsPlayer4);
      var finalArrToPlayer4 = newArrToPlayer4.concat(jungleSpeed.stackPlayer4);
      jungleSpeed.stackPlayer4 = finalArrToPlayer4;
      jungleSpeed.discardsPlayer3 = [];
      jungleSpeed.discardsPlayer4 = [];
      jungleSpeed.stackPlayer4[0].visible = false;
      jungleSpeed.keyPressedBeforePlayer3 = true;
      turn = 3;

      //empty the container before refreshing it
      $("#cards-player-4").empty();
      $("#cards-player-3").empty();
      $("#card-player-4").empty();
      $("#card-player-3").empty();
      //append the new results of cards-left and discards
      $("#cards-player-3").append("Cards Left to win: " + jungleSpeed.stackPlayer3.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer3.length);
      $("#cards-player-4").append("Cards Left to win: " + jungleSpeed.stackPlayer4.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer4.length);
      $("#card-player-3").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
      $("#card-player-4").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');

      alert("HEY " + jungleSpeed.playerArr[2].name + "\nYou had the same card of player 4 and you clicked first!\n Player 3 pass " + discardPlayer3toPlayer4 + " cards to player 4, so now player 4 needs " + jungleSpeed.stackPlayer4.length + " cards to finish the game");

      $("#totem").addClass("animated fadeOutDown");

    }
    function player3SpecialCard() {
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
        jungleSpeed.keyPressedBeforePlayer3 = true;
        turn = 0;

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
        $("#card-player-1").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-2").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-3").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-4").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');

        alert("HEY " + jungleSpeed.playerArr[2].name + "\nThe SPECIAL card appeared and player 3 clicked first\n Player 1 has been choosen randomly so he gets all the discard cards from the other 3 players, it means " + newArrDiscardToPlayer1.length +" cards. So now player 1 needs " + jungleSpeed.stackPlayer1.length + " cards to finish the game");

        $("#totem").addClass("animated fadeOutDown");

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
        jungleSpeed.keyPressedBeforePlayer3 = true;
        turn = 1;

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
        $("#card-player-1").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-2").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-3").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-4").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');

        alert("HEY " + jungleSpeed.playerArr[2].name + "\nThe SPECIAL card appeared and player 3 clicked first\n Player 2 has been choosen randomly so he gets all the discard cards from the other 3 players, it means " + newArrDiscardToPlayer2.length +" cards. So now player 2 needs " + jungleSpeed.stackPlayer2.length + " cards to finish the game");

        $("#totem").addClass("animated fadeOutDown");

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
        jungleSpeed.keyPressedBeforePlayer3 = true;
        turn = 3;

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
        $("#card-player-1").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-2").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-3").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-4").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');

        alert("HEY " + jungleSpeed.playerArr[2].name + "\nThe SPECIAL card appeared and player 3 clicked first\n Player 4 has been choosen randomly so he gets all the discard cards from the other 3 players, it means " + newArrDiscardToPlayer4.length +" cards. So now player 4 needs " + jungleSpeed.stackPlayer4.length + " cards to finish the game");

        $("#totem").addClass("animated fadeOutDown");

      }

    }
    function player3Fails() {
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
      jungleSpeed.keyPressedBeforePlayer3 = true;
      turn = 2;

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
      $("#card-player-1").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
      $("#card-player-2").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
      $("#card-player-3").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
      $("#card-player-4").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');

      alert("HEY " + jungleSpeed.playerArr[2].name + "\nYou thought you had something equal but you didn't, you get all the discard cards from the other players and now you have " + jungleSpeed.stackPlayer3.length + " cards left to win");

      $("#totem").addClass("animated fadeOutDown");

    }

    //----------------------------------------------------------------------
    //--------------------------- PLAYER 4 FUNCTIONS------------------------
    //----------------------------------------------------------------------

    function player4WinPlayer1(){

      //player 4 gives all his discards to player 1 stack
      var discardPlayer4toPlayer1 = jungleSpeed.discardsPlayer4.length;//only for visual purposes

      var newArrToThePlayer1 = jungleSpeed.discardsPlayer1.concat(jungleSpeed.discardsPlayer4);
      var finalArrToThePlayer1 = newArrToThePlayer1.concat(jungleSpeed.stackPlayer1);
      jungleSpeed.stackPlayer1 = finalArrToThePlayer1;
      jungleSpeed.discardsPlayer1 = [];
      jungleSpeed.discardsPlayer4 = [];
      jungleSpeed.stackPlayer1[0].visible = false;
      jungleSpeed.keyPressedBeforePlayer4 = true;
      turn = 0;

      //empty the container before refreshing it
      $("#cards-player-1").empty();
      $("#cards-player-4").empty();
      $("#card-player-4").empty();
      $("#card-player-1").empty();
      //append the new results of cards-left and discards
      $("#cards-player-4").append("Cards Left to win: " + jungleSpeed.stackPlayer4.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer4.length);
      $("#cards-player-1").append("Cards Left to win: " + jungleSpeed.stackPlayer1.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer1.length);
      $("#card-player-4").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
      $("#card-player-1").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');

      alert("HEY " + jungleSpeed.playerArr[3].name + "\nYou had the same card of player 1 and you clicked first!\n Player 4 pass " + discardPlayer4toPlayer1 + " cards to player 1, so now player 1 needs " + jungleSpeed.stackPlayer1.length + " cards to finish the game");

      $("#totem").addClass("animated fadeOutLeft");

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
      jungleSpeed.keyPressedBeforePlayer4 = true;
      turn = 1;

      //empty the container before refreshing it
      $("#cards-player-2").empty();
      $("#cards-player-4").empty();
      $("#card-player-2").empty();
      $("#card-player-4").empty();
      //append the new results of cards-left and discards
      $("#cards-player-4").append("Cards Left to win: " + jungleSpeed.stackPlayer4.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer4.length);
      $("#cards-player-2").append("Cards Left to win: " + jungleSpeed.stackPlayer2.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer2.length);
      $("#card-player-2").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
      $("#card-player-4").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');

      alert("HEY " + jungleSpeed.playerArr[3].name + "\nYou had the same card of player 2 and you clicked first!\n Player 4 pass " + discardPlayer4toPlayer2 + " cards to player 2, so now player 2 needs " + jungleSpeed.stackPlayer2.length + " cards to finish the game");

      $("#totem").addClass("animated fadeOutLeft");

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
      jungleSpeed.keyPressedBeforePlayer4 = true;
      turn = 2;

      //empty the container before refreshing it
      $("#cards-player-3").empty();
      $("#cards-player-4").empty();
      $("#card-player-3").empty();
      $("#card-player-4").empty();
      //append the new results of cards-left and discards
      $("#cards-player-4").append("Cards Left to win: " + jungleSpeed.stackPlayer4.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer4.length);
      $("#cards-player-3").append("Cards Left to win: " + jungleSpeed.stackPlayer3.length + "<br>Discard Stack: " + jungleSpeed.discardsPlayer3.length);
      $("#card-player-4").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
      $("#card-player-3").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');

      alert("HEY " + jungleSpeed.playerArr[3].name + "\nYou had the same card of player 3 and you clicked first!\n Player 4 pass " + discardPlayer4toPlayer3 + " cards to player 3, so now player 3 needs " + jungleSpeed.stackPlayer3.length + " cards to finish the game");

      $("#totem").addClass("animated fadeOutLeft");

    }

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
      jungleSpeed.keyPressedBeforePlayer4 = true;
      turn = 3;

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
      $("#card-player-1").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
      $("#card-player-2").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
      $("#card-player-3").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
      $("#card-player-4").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');

      alert("HEY " + jungleSpeed.playerArr[3].name + "\nYou thought you had something equal but you didn't, you get all the discard cards from the other players and now you have " + jungleSpeed.stackPlayer4.length + " cards left to win");

      $("#totem").addClass("animated fadeOutLeft");

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
        jungleSpeed.keyPressedBeforePlayer4 = true;
        turn = 0;

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
        $("#card-player-1").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-2").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-3").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-4").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');

        alert("HEY " + jungleSpeed.playerArr[3].name + "\nThe SPECIAL card appeared and player 4 clicked first\n Player 1 has been choosen randomly so he gets all the discard cards from the other 3 players, it means " + newArrForThePlayer1.length +" cards. So now player 4 needs " + jungleSpeed.stackPlayer4.length + " cards to finish the game");

        $("#totem").addClass("animated fadeOutLeft");

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
        jungleSpeed.keyPressedBeforePlayer4 = true;
        turn = 1;

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
        $("#card-player-1").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-2").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-3").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-4").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');

        alert("HEY " + jungleSpeed.playerArr[3].name + "\nThe SPECIAL card appeared and player 4 clicked first\n Player 2 has been choosen randomly so he gets all the discard cards from the other 3 players, it means " + newArrForThePlayer2.length +" cards. So now player 4 needs " + jungleSpeed.stackPlayer2.length + " cards to finish the game");

        $("#totem").addClass("animated fadeOutLeft");

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
        jungleSpeed.keyPressedBeforePlayer4 = true;
        turn = 2;

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
        $("#card-player-1").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-2").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-3").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');
        $("#card-player-4").append('<img class="animated flipInY img-responsive img-card-custom" src="img/' + jungleSpeed.coverCard + '.jpg" alt="">');

        alert("HEY " + jungleSpeed.playerArr[3].name + "\nThe SPECIAL card appeared and player 4 clicked first\n Player 3 has been choosen randomly so he gets all the discard cards from the other 3 players, it means " + newArrForThePlayer3.length +" cards. So now player 4 needs " + jungleSpeed.stackPlayer3.length + " cards to finish the game");

        $("#totem").addClass("animated fadeOutLeft");
      }
    }


    //----------------------------------------------------------------------
    //--------------------------- COMPUTER FUNCTIONS------------------------
    //----------------------------------------------------------------------


    //Computer player 2 function

    function checkerComputer2(){

      randomLvl = Math.floor((Math.random() * 100) + 1);
      // console.log(randomLvl);

      console.log("hello im computer 2");
      if (jungleSpeed.keyPressedBeforePlayer1 === false && jungleSpeed.keyPressedBeforePlayer2 === false && jungleSpeed.keyPressedBeforePlayer3 === false && jungleSpeed.keyPressedBeforePlayer4 === false) {


        //player2 win vs player1
        if (jungleSpeed.stackPlayer2[0].family === jungleSpeed.stackPlayer1[0].family && jungleSpeed.stackPlayer2[0].visible === true && jungleSpeed.stackPlayer1[0].visible === true) {
          if (jungleSpeed.keyPressedBeforePlayer1 === false) {
            player2WinPlayer1();
            return;
          }
        }
        //player2 win vs player3
        else if (jungleSpeed.stackPlayer2[0].family === jungleSpeed.stackPlayer3[0].family && jungleSpeed.stackPlayer2[0].visible === true && jungleSpeed.stackPlayer3[0].visible === true) {
          if (jungleSpeed.keyPressedBeforePlayer3 === false) {
            player2WinPlayer3();
            return;
          }
        }
        //player2 win vs player4
        else if (jungleSpeed.stackPlayer2[0].family === jungleSpeed.stackPlayer4[0].family && jungleSpeed.stackPlayer2[0].visible === true && jungleSpeed.stackPlayer4[0].visible === true) {
          if (jungleSpeed.keyPressedBeforePlayer4 === false) {
            player2WinPlayer4();
            return;
          }
        }
        //special card for each player
        else if (jungleSpeed.stackPlayer1[0].family === "special" && jungleSpeed.stackPlayer1[0].visible === true) {

          player2SpecialCard();

          return;
        }
        else if (jungleSpeed.stackPlayer2[0].family === "special" && jungleSpeed.stackPlayer2[0].visible === true) {
          player2SpecialCard();

          return;
        }
        else if (jungleSpeed.stackPlayer3[0].family === "special" && jungleSpeed.stackPlayer3[0].visible === true) {
          player2SpecialCard();

          return;
        }
        else if (jungleSpeed.stackPlayer4[0].family === "special" && jungleSpeed.stackPlayer4[0].visible === true) {
          player2SpecialCard();

          return;
        }
      }

      //Chance of failing
      if (randomLvl > cpuIQ) {
        if (jungleSpeed.stackPlayer2[0].visible === false) {
          return;
        }
        if (jungleSpeed.stackPlayer2[0].visible === true && (jungleSpeed.stackPlayer1[0].visible === false && jungleSpeed.stackPlayer4[0].visible === false && jungleSpeed.stackPlayer3[0].visible === false)) {
          return;
        }
        //player2 fails
        player2Fails();
        return;
      }


    }


    // Computer player 3 function


    function checkerComputer3(){

      randomLvl = Math.floor((Math.random() * 100) + 1);
      // console.log(randomLvl);

      console.log("hello im computer 3");
      if (jungleSpeed.keyPressedBeforePlayer1 === false && jungleSpeed.keyPressedBeforePlayer2 === false && jungleSpeed.keyPressedBeforePlayer3 === false && jungleSpeed.keyPressedBeforePlayer4 === false) {


        //player3 win vs player1
        if (jungleSpeed.stackPlayer3[0].family === jungleSpeed.stackPlayer1[0].family && jungleSpeed.stackPlayer3[0].visible === true && jungleSpeed.stackPlayer1[0].visible === true) {
          if (jungleSpeed.keyPressedBeforePlayer1 === false) {
            player3WinPlayer1();
            return;
          }
        }
        //player3 win vs player2
        else if (jungleSpeed.stackPlayer3[0].family === jungleSpeed.stackPlayer2[0].family && jungleSpeed.stackPlayer3[0].visible === true && jungleSpeed.stackPlayer2[0].visible === true) {
          if (jungleSpeed.keyPressedBeforePlayer2 === false) {
            player3WinPlayer2();
            return;
          }
        }
        //player3 win vs player4
        else if (jungleSpeed.stackPlayer3[0].family === jungleSpeed.stackPlayer4[0].family && jungleSpeed.stackPlayer3[0].visible === true && jungleSpeed.stackPlayer4[0].visible === true) {
          if (jungleSpeed.keyPressedBeforePlayer4 === false) {
            player3WinPlayer4();
            return;
          }
        }
        else if (jungleSpeed.stackPlayer1[0].family === "special" && jungleSpeed.stackPlayer1[0].visible === true) {

          player3SpecialCard();

          return;
        }
        else if (jungleSpeed.stackPlayer2[0].family === "special" && jungleSpeed.stackPlayer2[0].visible === true) {
          player3SpecialCard();

          return;
        }
        else if (jungleSpeed.stackPlayer3[0].family === "special" && jungleSpeed.stackPlayer3[0].visible === true) {
          player3SpecialCard();

          return;
        }
        else if (jungleSpeed.stackPlayer4[0].family === "special" && jungleSpeed.stackPlayer4[0].visible === true) {
          player3SpecialCard();

          return;
        }
      }

      //Chance of failing
      if (randomLvl > cpuIQ) {
        if (jungleSpeed.stackPlayer3[0].visible === false) {
          return;
        }
        if (jungleSpeed.stackPlayer3[0].visible === true && (jungleSpeed.stackPlayer1[0].visible === false && jungleSpeed.stackPlayer2[0].visible === false && jungleSpeed.stackPlayer4[0].visible === false)) {
          return;
        }
        //player4 fails
        player3Fails();
        return;
      }

    }

    // Computer player 4 function

    function checkerComputer4(){

      randomLvl = Math.floor((Math.random() * 100) + 1);
      // console.log(randomLvl);

      console.log("hello im computer 4");
      if (jungleSpeed.keyPressedBeforePlayer1 === false && jungleSpeed.keyPressedBeforePlayer2 === false && jungleSpeed.keyPressedBeforePlayer3 === false && jungleSpeed.keyPressedBeforePlayer4 === false) {


        //player4 win vs player1
        if (jungleSpeed.stackPlayer4[0].family === jungleSpeed.stackPlayer1[0].family && jungleSpeed.stackPlayer4[0].visible === true && jungleSpeed.stackPlayer1[0].visible === true) {
          if (jungleSpeed.keyPressedBeforePlayer1 === false) {
            player4WinPlayer1();
            return;
          }
        }
        //player4 win vs player2
        else if (jungleSpeed.stackPlayer4[0].family === jungleSpeed.stackPlayer2[0].family && jungleSpeed.stackPlayer4[0].visible === true && jungleSpeed.stackPlayer2[0].visible === true) {
          if (jungleSpeed.keyPressedBeforePlayer2 === false) {
            player4WinPlayer2();
            return;
          }
        }
        //player4 win vs player3
        else if (jungleSpeed.stackPlayer4[0].family === jungleSpeed.stackPlayer3[0].family && jungleSpeed.stackPlayer4[0].visible === true && jungleSpeed.stackPlayer3[0].visible === true) {
          if (jungleSpeed.keyPressedBeforePlayer3 === false) {
            player4WinPlayer3();
            return;
          }
        }
        else if (jungleSpeed.stackPlayer1[0].family === "special" && jungleSpeed.stackPlayer1[0].visible === true) {

          player4SpecialCard();

          return;
        }
        else if (jungleSpeed.stackPlayer2[0].family === "special" && jungleSpeed.stackPlayer2[0].visible === true) {
          player4SpecialCard();

          return;
        }
        else if (jungleSpeed.stackPlayer3[0].family === "special" && jungleSpeed.stackPlayer3[0].visible === true) {
          player4SpecialCard();

          return;
        }
        else if (jungleSpeed.stackPlayer4[0].family === "special" && jungleSpeed.stackPlayer4[0].visible === true) {
          player4SpecialCard();

          return;
        }
      }

      //Chance of failing
      if (randomLvl > cpuIQ) {
        if (jungleSpeed.stackPlayer4[0].visible === false) {
          return;
        }
        if (jungleSpeed.stackPlayer4[0].visible === true && (jungleSpeed.stackPlayer1[0].visible === false && jungleSpeed.stackPlayer2[0].visible === false && jungleSpeed.stackPlayer3[0].visible === false)) {
          return;
        }
        //player4 fails
        player4Fails();
        return;
      }


    }
