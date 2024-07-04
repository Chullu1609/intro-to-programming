 "use strict"

 // Creating an array of words
 let words = [
    "programming",
    "proteas",
    "lowercase",
    "awesome"
 ];

 // Choosing a random word
 let word = words[Math.floor(Math.random() * words.length)];

 // My answerArray
 let answerArray = [];
 for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
 }

 let remainingLetters = word.length;
 // Only 10 guesses allowed
 let guessesLeft = 10;

 // While loop on the game
 while (remainingLetters > 0 && guessesLeft > 0) {
 // Show the player their progress
    alert(answerArray.join(" "));
    
 // Get a guess from the player
    let guess = prompt("Guess a letter, or click Cancel to stop playing.");
    
     if (guess === null) {
 // Exit the game loop if player clicks Cancel
        break;
     } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
     } else {
 // Convert guess to lowercase
        guess = guess.toLowerCase();
        
 // Check if the guess has already been guessed
         if (answerArray.includes(guess)) {
            alert("You've already guessed that letter.");
            continue;
         }
        
 // Update the game state with the guess
        let correctGuess = false;
        for (let j = 0; j < word.length; j++) {
 // Check if not already guessed
        if (word[j] === guess) {
        if (answerArray[j] === '_') { 
            answerArray[j] = guess;
            remainingLetters--;
        }
        correctGuess = true;
         }
         }
      
 // Decrease guesses left if the guess was incorrect
        if (!correctGuess) {
            guessesLeft--;
         }
        
 // Inform the player if their guess was correct
        if (correctGuess) {
            alert("Good job! '" + guess + "' is in the word.");
        } else {
            alert("Sorry, '" + guess + "' is not in the word. You have " + guessesLeft + " guesses left.");
        }
    }
 }

 // Check if the game ended because of running out of guesses
 if (guessesLeft === 0) {
    alert("You've run out of guesses! The answer was '" + word + "'. Better luck next time!");
 } else {
 // Show the answer and congratulate the player
    alert("Congratulations! The answer was '" + word + "'. Well done!");
}
