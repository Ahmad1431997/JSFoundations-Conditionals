const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
//const name = prompt("What's your name? ");
//console.log(`Hi, I'm ${name}.`);
const num1 = prompt("Please enter the first number:");
const num2 = prompt("Please enter the second number:");
const op = prompt("Please choose the operation (+, -, /, *):");

let x= parseInt(num1);
let y= parseInt(num2);
let sol;
if ( x && y){
if (x===parseInt(num1) && y===parseInt(num2) && op==="+"){
    sol = x + y;
    console.log(`${x} ${op} ${y} = ${sol}`);
}else if (x===parseInt(num1) && y===parseInt(num2) && op==="-"){
    sol = x - y;
    console.log(`${x} ${op} ${y} = ${sol}`);
}else if(x===parseInt(num1) && y===parseInt(num2) && op==="*"){
    sol = x * y;
    console.log(`${x} ${op} ${y} = ${sol}`);
}else if (x===parseInt(num1) && y===parseInt(num2) && op==="/"){
    sol = x / y;
    console.log(`${x} ${op} ${y} = ${sol}`);
}else {
    console.log(`the operation is not valid`);

}
}else console.log("invalid number");
