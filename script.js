


function playRound(playerSelection, computerSelection){
    let uscore = 0;
    let cscore = 0;

    
    if(computerSelection== 'stone' && playerSelection == 'paper') {
        cscore = cscore + 1;
        alert("Paper Covers the stone!!");
    } else if (computerSelection== 'stone ' && playerSelection == 'scissor'){
        uscore = uscore + 1;
        alert('Stone Break the Scissor');
    } else if(computerSelection== 'paper' && playerSelection == 'stone'){
        uscore = uscore+1;
        alert("Paper Covers the stone!!");
    } else if(computerSelection== 'paper' && playerSelection == 'scissor'){
        cscore = cscore +1;
        alert ("Sciccors cuts the Paper");
    } else if (computerSelection== 'scissor' && playerSelection == 'paper'){
        uscore = uscore+1;
        alert("Sciccors cuts the Paper");
    } else if(computerSelection== 'scissor' && playerSelection == 'stone'){
        cscore = cscore +1;
        alert('Stone Break the Scissor');
    } else{
        alert('Tie')
    }
   
    return("user : "+ uscore + "com :"+ cscore) ;
}


function getComputerChoice(){
var result = ['stone', 'paper', 'scissor']
[Math.floor(Math.random() * 3)];
return ;
}



for(i=0;i<3;i++){
    const playerSelection =prompt("Enter your chce:");
    const computerSelection = getComputerChoice();
    alert(playRound(playerSelection, computerSelection));
}