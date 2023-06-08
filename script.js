const rBtn = document.getElementById('rock');
const pBtn = document.getElementById('paper');
const sBtn = document.getElementById('scissors');
const resetbtn = document.getElementById('reset');

let computerMove = '';
let result = '';

const scores = JSON.parse(localStorage.getItem('scores')) || {
    myPoint:0,
    computerPoint:0,
    ties:0
};
document.getElementById("myPoint").innerHTML = scores.myPoint;
document.getElementById("computerPoint").innerHTML = scores.computerPoint;
document.getElementById("ties").innerHTML = scores.ties;

rBtn.addEventListener('click', function(){
   computerMove = getComMove();
   changeImg("Rock");
   playGame("Rock");
});
pBtn.addEventListener('click', function(){ 
   computerMove = getComMove();
   changeImg("Paper");
   playGame("Paper");
});
sBtn.addEventListener('click', function(){
   computerMove = getComMove();
   changeImg("Scissors");
   playGame("Scissors");
});
resetbtn.addEventListener('click', function(){
    scores.myPoint = 0;
    scores.computerPoint = 0;
    scores.ties = 0;
    document.getElementById("myPoint").innerHTML = scores.myPoint;
    document.getElementById("computerPoint").innerHTML = scores.computerPoint;
    document.getElementById("ties").innerHTML = scores.ties;
    localStorage.removeItem('scores');
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
    if(playerMove === "Rock")
    {
        if(computerMove === "Rock"){
            result = "Tie"
        }
        else if(computerMove === "Paper"){
            result = "You Lose!"
        }
        else if(computerMove === "Scissors"){
            result = "You won!"
        }
    }
    if(playerMove === "Paper")
    {
        if(computerMove === "Rock"){
            result = "You won!"
        }
        else if(computerMove === "Paper"){
            result = "Tie!"
        }
        else if(computerMove === "Scissors"){
            result = "You Lose!"
        }
    }
    if(playerMove === "Scissors")
    {
        if(computerMove === "Rock"){
            result = "You Lose!"
        }
        else if(computerMove === "Paper"){
            result = "You won!"
        }
        else if(computerMove === "Scissors"){
            result = "Tie!"
        }
    }

    if(result === "You won!"){
        scores.myPoint++;
    }
    else if(result === "You Lose!"){
        scores.computerPoint++;
    }
    else{
        scores.ties++;
    }
    document.getElementById("myPoint").innerHTML = scores.myPoint;
    document.getElementById("computerPoint").innerHTML = scores.computerPoint;
    document.getElementById("ties").innerHTML = scores.ties;
    document.getElementById("result-text").innerHTML = result;
    const json_string = JSON.stringify(scores);
    localStorage.setItem('scores', json_string);
}
function changeImg(yourInput){
   const display = document.querySelector('.display-area');
   const my = yourInput.toLocaleLowerCase;
   const com = computerMove.toLocaleLowerCase;
   display.innerHTML = ` <div class="display">
            <span id="result-text"></span>
            <div class="move">
                <div class="your-move">
                    Your Move:<img id="my-move-img" src="images/${my}-emoji.png">
                </div>
                <div class="computer-move">
                <img id="com-move-img" src="images/${com}-emoji.png">:Computer Move
                </div>
            </div>
        </div>`;
}