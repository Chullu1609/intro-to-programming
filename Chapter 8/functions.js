"use strict"

let ourFirstFunction = function () {
    console.log("Hello world!");
    };
    ourFirstFunction();

let sayHelloTo = function (name) {
    console.log("Hello " + name + "!");
    };
sayHelloTo("Chulumanco");

let drawSmileys = function (howManyTimes) {
    for (let i = 0; i < howManyTimes; i++) {
    console.log(i + " :-)");
    }
    };
    drawSmileys(8);

let printMultipleTimes = function (howManyTimes, whatToDraw) {
    for (let i = 0; i < howManyTimes; i++) {
    console.log(i + " " + whatToDraw);
    }
    };
    printMultipleTimes(5, ":-(")

let double = function (number) {
    return number * 2;
};
console.log(double(444));
console.log(double(5) + double(6));
console.log(double(double(8)));

function doouble(number) {
    return number * 2;
};

let pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)];
    };
    let randomBodyParts = ["Forehead", "Nose", "Hair"];
    let randomAdjectives = ["Smelly", "Dumb", "Stupid"];
    let randomWords = ["Cow", "Marmot", "Stick", "Monkey", "Rat"];


//Random Insult Generator Using functions
function pickRandomWord(words) {
    return words[Math.floor(Math.random() * words.length)];
}

function generateRandomInsult() {
    let randomBodyParts = ["Face", "Nose", "Forehead"];
    let randomAdjectives = ["Smelly", "Dumb", "Stupid"];
    let randomWords = ["Fly", "Pig", "Frog", "Monkey", "Hippo"];
    
    let randomBodyPart = pickRandomWord(randomBodyParts);
    let randomAdjective = pickRandomWord(randomAdjectives);
    let randomWord = pickRandomWord(randomWords);
    let randomString = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!";
    
    return randomString;
}

console.log(generateRandomInsult());

//Arrithmetic with functions
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}
let answer = add(multiply(36325, 9824), 777);
console.log(answer);

 //Are these Arrays the same Challenge

 function areArraysSame(arr1, arr2) {
 // Check if arrays have the same length
    if (arr1.length !== arr2.length) {
        return false;
    }

 // Go through each element of the arrays
    for (let i = 0; i < arr1.length; i++) {
 // If any pair of elements is not equal, function to return false
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

 // If all elements are equal, return true
    return true;
 }
 // To test out the function
 console.log(areArraysSame([1, 2, 3], [4, 5, 6]));
console.log(areArraysSame([1, 2, 3], [1, 2, 3]));
console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4]));

