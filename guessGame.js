/**
    Write a javascript program to generate a random number and store it in a variable. The program then takes
    an input from the user to tell them whether the guess was correct, greater or lesser then the original number.
    100 - (no.of guesses) is the score of the user.
    The program is expected to terminate once the number is guessed.
    Number should be between 1 and 100.
**/


const randomNum=(min,max)=>{
    return Math.floor(Math.random() * (max-min)+ min);
}
const numRandom = randomNum(1,100);
console.log(numRandom)

let guessedNum;
let counter = 1;
do {
    
    guessedNum = prompt("Enter a Number(1-100):");
    guessedNum = Number.parseInt(guessedNum);
    if (guessedNum < numRandom) {
        console.log(`Correct Number is greater than "${guessedNum}".`);
    }
    else if (guessedNum > numRandom){
        console.log(`correct Number is Lesser than "${guessedNum}".`);
    }
    //console.log(counter);
    counter++;

} while (guessedNum!= numRandom && counter <=100);
console.log(counter-1)
let guessedCount = counter - 1
let score = 100 - guessedCount
console.log(`Congratulations! Number ${numRandom} is the right answer.`);
console.log(`Your Score is ${score}.`)