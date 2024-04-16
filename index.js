#! /usr/bin/env node 
import inquirer from "inquirer";
let mybalance = 20000;
let mypin = 1378;
let pinAnswer = await inquirer.prompt([
    { name: "pin",
        type: "number",
        message: "Entry your pin:"
    }
]);
if (pinAnswer.pin === mypin) {
    console.log("Correct pin code");
}
else {
    console.log("Incorrect pin code");
}
;
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        type: "list",
        message: "please select an option:",
        choices: ["withdraw", "fastcash", "check balance"]
    }
]);
if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            type: "number",
            message: "please entry your amount:",
        }
    ]);
    if (amountAns.amount > mybalance) {
        console.log("insufficient balance!");
    }
    else if (mybalance -= amountAns.amount) {
        console.log(`your remaining balance: ${mybalance}`);
    }
}
else if (operationAns.operation === "fastcash") {
    let fastAns = await inquirer.prompt([
        {
            name: "fastcash",
            type: "list",
            message: "please select your amount:",
            choices: ["1000", "5000", "1500", "20000"]
        }
    ]);
    mybalance -= fastAns.fastcash;
    console.log(`You have successfully made a withdrawal: ${fastAns.fastcash} \nYour remaining balance: ${mybalance}`);
}
else if (operationAns.operation === "check balance") {
    console.log(`your balance: ${mybalance}`);
}
