
let uscore = 0;
let cscore = 0;
consol

function getComputerChoice(){
    var result = ['stone', 'paper', 'scissor']
    [Math.floor(Math.random() * 3)];
    return result;
}


function playRound(playerSelection,computerSelection){
    
    textCase='' 
      
    if(computerSelection== 'stone' && playerSelection == 'paper') {
        cscore++;
        textCase="Paper Covers the stone!!";
    } else if (computerSelection== 'stone ' && playerSelection == 'scissor'){
        uscore++;
        textCase='Stone Break the Scissor';
    } else if(computerSelection== 'paper' && playerSelection == 'stone'){
        uscore++;
        textCase="Paper Covers the stone!";
    } else if(computerSelection== 'paper' && playerSelection == 'scissor'){
        cscore ++;
        textCase= "Sciccors cuts the Paper";
    } else if (computerSelection== 'scissor' && playerSelection == 'paper'){
        uscore ++;
        textCase="Sciccors cuts the Paper";
    } else if(computerSelection== 'scissor' && playerSelection == 'stone'){
        cscore ++;
        textCase='Stone Break the Scissor';
    } else{
        textCase='Tie'
    }
   const finalResult = [uscore,cscore,textCase]
    return finalResult
}

function getPlayerSelection(){
    prompt ('SK')
}

for(i=0;i<=3;i++){
const playerSelection = 'stone';
const computerSelection = getComputerChoice();
return (playRound(playerSelection, computerSelection));
}

const stone = document.querySelector('#stone')
const paper = document.querySelector('#paper')
const scissor = document.querySelector('#scissor')
const player_score =document.querySelector('#sb-p')




