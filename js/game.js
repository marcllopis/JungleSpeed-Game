
//Create the main object
function JungleSpeed() {

  this.cards = [
    {name:"card4",family:"special",visible:false},
    {name:"card4",family:"special",visible:false},
    {name:"card4",family:"special",visible:false},
    {name:"card4",family:"special",visible:false},
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

  this.stackPlayer1 = [];
  this.stackPlayer2 = [];
  this.stackPlayer3 = [];
  this.stackPlayer4 = [];

  this.discardsPlayer1 = [];
  this.discardsPlayer2 = [];
  this.discardsPlayer3 = [];
  this.discardsPlayer4 = [];

  this.keyPressedBeforePlayer1 = false;
  this.keyPressedBeforePlayer2 = false;
  this.keyPressedBeforePlayer3 = false;
  this.keyPressedBeforePlayer4 = false;


  JungleSpeed.prototype.shuffleCards = function() {
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

}
