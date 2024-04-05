#! /usr/bin/env node 
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 30 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-30"
    }
]);
console.log(answer);
// connditional statement
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congrats! you guessed a correct number");
}
else {
    console.log("Oops! try again");
}
