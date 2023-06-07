const rBtn = document.getElementById('rock');
const pBtn = document.getElementById('paper');
const sBtn = document.getElementById('scissors');
let result = '';
let  myPoint = 0;
let computerPoint =0;

rBtn.addEventListener('click', function(){
   const result = playGame("Rock");
   document.getElementById('result').innerHTML = result;
   calculatePoints();
});
pBtn.addEventListener('click', function(){
   const result = playGame("Paper");
   document.getElementById('result').innerHTML = result;
   calculatePoints();
});
sBtn.addEventListener('click', function(){
   const result = playGame("Scissors");
   document.getElementById('result').innerHTML = result;
   calculatePoints();
});

function getComMove(){
    const randomNumber = Math.random();
    let comResult = null;
    if(randomNumber >= 0 && randomNumber < 1 / 3){
        comResult = "Rock";
    }
    else if(randomNumber >= 1/3 && randomNumber < 2 / 3){
        comResult = "Paper";
    }
    else if(randomNumber >= 2 / 3 && randomNumber < 1){
        comResult = "Scissors";
    }
    return comResult;
}
function playGame(playerMove){
    const comResult = getComMove();
    if(playerMove === "Rock")
    {
        if(comResult === "Rock"){
            result = "Tie"
        }
        else if(comResult === "Paper"){
            result = "You Lose!"
        }
        else if(comResult === "Scissors"){
            result = "You won!"
        }
    }
    if(playerMove === "Paper")
    {
        if(comResult === "Rock"){
            result = "You won!"
        }
        else if(comResult === "Paper"){
            result = "Tie!"
        }
        else if(comResult === "Scissors"){
            result = "You Lose!"
        }
    }
    if(playerMove === "Scissors")
    {
        if(comResult === "Rock"){
            result = "You Lose!"
        }
        else if(comResult === "Paper"){
            result = "You won!"
        }
        else if(comResult === "Scissors"){
            result = "Tie!"
        }
    }   
    return `You picked ${playerMove} and Computer picked ${comResult}. ${result}`;
}
function calculatePoints(){
    if(result === "You won!"){
        myPoint++;
    }
    else if(result === "You Lose!"){
        computerPoint++;
    }
    document.getElementById("myPoint").innerHTML = myPoint;
    document.getElementById("computerPoint").innerHTML = computerPoint;
}