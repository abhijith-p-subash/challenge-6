/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var player_1 = true;
var currentValue_1 = 0;
var currentValue_2 = 0;
var score_0 = 0;
var score_1 = 0;


// Random Number generator
function rollDice() {
    return dicee = Math.floor((Math.random() * 6) + 1);
}


//Roll Button 
document.querySelector(".btn-roll").addEventListener("click", function () {

    var dice = rollDice();

    //Select dicee image depends on the Number
    switch (dice) {
        case 1:
            document.querySelector("img").src = "dice-" + dice + ".png";
        case 2:
            document.querySelector("img").src = "dice-" + dice + ".png";
        case 3:
            document.querySelector("img").src = "dice-" + dice + ".png";
        case 4:
            document.querySelector("img").src = "dice-" + dice + ".png";
        case 5:
            document.querySelector("img").src = "dice-" + dice + ".png";
        case 6:
            document.querySelector("img").src = "dice-" + dice + ".png";
    }

    //Select player 
    if (player_1 === true) {
        if (dice === 1) {
            player_1 = false;
            currentValue_1 = 0;
            document.getElementById("current-0").innerHTML = currentValue_1;

            //Shows Active Player
            document.querySelector(".player-0-panel").classList.remove("active");
            document.querySelector(".player-1-panel").classList.add("active");
        } else {
            currentValue_1 = currentValue_1 + dice;
            console.log("Player 1 : " + currentValue_1);
            document.getElementById("current-0").innerHTML = currentValue_1;

            //Shows Active Player
            document.querySelector(".player-0-panel").classList.add("active");
        }
    } else {
        if (dice === 1) {
            player_1 = true;
            currentValue_2 = 0;
            document.getElementById("current-1").innerHTML = currentValue_1;

            //Shows Active Player
            document.querySelector(".player-1-panel").classList.remove("active");
            document.querySelector(".player-0-panel").classList.add("active");
        } else {
            currentValue_2 = currentValue_2 + dice;
            console.log("Player 2 :" + currentValue_2);
            document.getElementById("current-1").innerHTML = currentValue_2;

            //Shows Active Player
            document.querySelector(".player-1-panel").classList.add("active");
        }
    }
});


//New Game Button
document.querySelector(".btn-new").addEventListener("click", function () {
    currentValue_1 = 0;
    currentValue_2 = 0;
    score_0 = 0;
    score_1 = 0;
    document.getElementById("current-0").innerHTML = currentValue_1;
    document.getElementById("current-1").innerHTML = currentValue_2;
    document.getElementById("score-0").innerHTML = score_0;
    document.getElementById("score-1").innerHTML = score_1;
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".winner").innerHTML = "";
})



//Hold Button
document.querySelector(".btn-hold").addEventListener("click", function () {
    if (player_1 === true) {
        score_0 = score_0 + currentValue_1;
        document.getElementById("score-0").innerHTML = score_0;
        currentValue_1 = 0;
        document.getElementById("current-0").innerHTML = currentValue_1;
        player_1 = false;

        //Shows Active Player
        document.querySelector(".player-0-panel").classList.remove("active");
        document.querySelector(".player-1-panel").classList.add("active");

        //Show Winner
        if (100 <= score_0) {
            document.querySelector(".winner").innerHTML = "Winner is Player 1";
            document.querySelector(".btn-hold").disabled = true;
            document.querySelector(".btn-roll").disabled = true;
            var sound = new Audio("applause.mp3");
            sound.play();
        }
    } else {
        score_1 = score_1 + currentValue_2;
        document.getElementById("score-1").innerHTML = score_1;
        currentValue_2 = 0;
        document.getElementById("current-1").innerHTML = currentValue_2;
        player_1 = true;

        //Shows Active Player
        document.querySelector(".player-1-panel").classList.remove("active");
        document.querySelector(".player-0-panel").classList.add("active");

        //Show winner
        if (100 <= score_1) {
            document.querySelector(".winner").innerHTML = "Winner is Player 2";
            var sound = new Audio("applause.mp3");
            sound.play();
        }
    }

});










