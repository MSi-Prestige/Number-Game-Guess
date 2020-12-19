"use strict";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "🎉 Correct Number!";
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;
// console.log(document.querySelector(".number").textContent);
// console.log(document.querySelector(".score").textContent);

// document.querySelector(".guess").value = 20;
// console.log(document.querySelector(".guess").value);


let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

//TODO: New function for message.
const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
};
//!Listener MAIN.
document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);

    //TODO: When there is no input.--------------------------------------------------------------------------
    if (!guess) {
        // document.querySelector(".message").textContent = "⛔ No number!😒"; //? in new Function 
        displayMessage("⛔ No number!😒");                 //! call function.

        //TODO: When player wins.----------------------------------------------------------------------------
    } else if (guess === secretNumber) {
        // document.querySelector(".message").textContent = "🎉 Correct number!";
        displayMessage("🎉 Correct number!");              //! call function.
        document.querySelector(".number").textContent = secretNumber;
        //TODO: HighScore NEW.-------------------------------------------------------------------------------
        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "25rem";
        document.querySelector(".number").style.fontSize = "10rem";

        //TODO: Refactoring code - 2 x 1 ---------------------------------------------------------------------
    } else if (guess !== secretNumber) {
        if (score > 1) {
            //document.querySelector(".message").textContent = guess > secretNumber ? "💹 Too high!" : "📉 Too low!";
            displayMessage(guess > secretNumber ? "💹 Too high!" : "📉 Too low!"); //!  call function with one of them parametrs.
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".score").textContent = "You lost the game!";
            document.querySelector(".score").textContent = 0;
        }
    }
    //TODO: When guess too hight.(the bigest method)----------------------------------------------------------
    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector(".message").textContent = "💹 Too high!";
    //         score--;
    //         document.querySelector(".score").textContent = score;
    //     } else {
    //         document.querySelector(".score").textContent = "You lost the game!";
    //         document.querySelector(".score").textContent = 0;
    //     }
    //TODO: When guess too low.
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector(".message").textContent = "💹 Too low!";
    //         score--;
    //         document.querySelector(".score").textContent = score;
    //     } else {
    //         document.querySelector(".score").textContent = "You lost the game!";
    //         document.querySelector(".score").textContent = 0;

    //     }
    // }
});

//TODO: RESET - start again ------------------------------------------------------------------------
document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").style.fontSize = "6rem";
    document.querySelector(".guess").value = "";

});



