 "use strict"

 // Creating an array of words
 let words = [
    "programming",
    "proteas",
    "lowercase",
    "awesome"];

 // Function to pick a random word from my array of words
 let pickWord = function () {
    return words[Math.floor(Math.random() * words.length)];};

 // Function to setup the answer array for the chosen word
 let setupAnswerArray = function (word) {
    let answerArray = [];
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    return answerArray;
 };

 // Function to show player's progress using alert
 let showPlayerProgress = function (answerArray) {
    alert(answerArray.join(" "));
 };

 // Function to use prompt to get a guess
 let getGuess = function () {
    return prompt("Guess a letter, or click Cancel to stop playing.");
 };

 // Function to update game state with the guess
 let updateGameState = function (guess, word, answerArray) {
    let correctGuess = false;
    let occurrences = 0;
    for (let j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            if (answerArray[j] === '_') {
                answerArray[j] = guess;
                correctGuess = true;
            }
            occurrences++;
        }
    }
    return [correctGuess, occurrences];
 };

 // Function to show the answer and congratulate the player
 let showAnswerAndCongratulatePlayer = function (answerArray) {
    alert("Congratulations! The answer was '" + answerArray.join("") + "'. Well done!");
 };

 // Let variables for the Game
 let word = pickWord();
 let answerArray = setupAnswerArray(word);
 let remainingLetters = word.length;
 let guessesLeft = 10;

 // Game loop
 while (remainingLetters > 0 && guessesLeft > 0) {
 // Player shown progress
    showPlayerProgress(answerArray);

 // Getting a guess from the player
    let guess = getGuess();

    if (guess === null) {
 // Exit the game loop if player clicks Cancel
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
        continue;
    } else {
 // Convert guess to lowercase
        guess = guess.toLowerCase();

 // Check if the guess has already been guessed
        if (answerArray.includes(guess)) {
            alert("You've already guessed that letter.");
            continue;
        }

 // Update the game state with the guess
         let [correctGuess, occurrences] = updateGameState(guess, word, answerArray);
         if (correctGuess) {
            alert("Good job! '" + guess + "' is in the word.");
            remainingLetters -= occurrences;
         } else {
            guessesLeft--;
            alert("Sorry, '" + guess + "' is not in the word. You have " + guessesLeft + " guesses left.");
         }
         }
 }

 // Check if the game ended because of running out of guesses
 if (guessesLeft === 0) {
    alert("You've run out of guesses! The answer was '" + word + "'. Better luck next time!");
 } else {
    // Show the answer and congratulate the player
    showAnswerAndCongratulatePlayer(answerArray);
 }
