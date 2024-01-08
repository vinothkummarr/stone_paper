let uscore = 0;
let cscore = 0;

function playRound(playerSelection, computerSelection){
    
    if(computerSelection== 'stone' && playerSelection == 'paper') {
        cscore = cscore + 1;
        alert("Paper Covers the stone!!");
    } else if (computerSelection== 'stone ' && playerSelection == 'scissor'){
        uscore = uscore + 1;
        alert ('Stone Break the Scissor');
    } else if(computerSelection== 'paper' && playerSelection == 'stone'){
        uscore = uscore+1;
        alert("Paper Covers the stone!!");
    } else if(computerSelection== 'paper' && playerSelection == 'scissor'){
        cscore = cscore +1;
        alert ("Sciccors cuts the Paper");
    } else if (computerSelection== 'scissor' && playerSelection == 'paper'){
        uscore = uscore+1;
        alert ("Sciccors cuts the Paper");
    } else if(computerSelection== 'scissor' && playerSelection == 'stone'){
        cscore = cscore +1;
        alert ('Stone Break the Scissor');
    } else{
        alert ('Tie')
    }
    prompt("user : "+ uscore + "com :"+ cscore);
}

const computerSelection = getComputerChoice();
const playerSelection = getUserChoice();


function getComputerChoice(){
var result = ['stone', 'paper', 'scissor']
[Math.floor(Math.random() * 3)];
return result;
}


function getUserChoice(){
const userInput = prompt("Enter your choice:");
return userInput;
}
for(i=1;i<3;i++){
    prompt(playRound(playerSelection, computerSelection));
}