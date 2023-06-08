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
   changeImg("rock");
   playGame("rock");
});
pBtn.addEventListener('click', function(){ 
   computerMove = getComMove();
   changeImg("paper");
   playGame("paper");
});
sBtn.addEventListener('click', function(){
   computerMove = getComMove();
   changeImg("scissors");
   playGame("scissors");
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
        comResult = "rock";
    }
    else if(randomNumber >= 1/3 && randomNumber < 2 / 3){
        comResult = "paper";
    }
    else if(randomNumber >= 2 / 3 && randomNumber < 1){
        comResult = "scissors";
    }
    return comResult;
}
function playGame(playerMove){
    if(playerMove === "rock")
    {
        if(computerMove === "rock"){
            result = "Tie"
        }
        else if(computerMove === "paper"){
            result = "You Lose!"
        }
        else if(computerMove === "scissors"){
            result = "You won!"
        }
    }
    if(playerMove === "paper")
    {
        if(computerMove === "rock"){
            result = "You won!"
        }
        else if(computerMove === "paper"){
            result = "Tie!"
        }
        else if(computerMove === "scissors"){
            result = "You Lose!"
        }
    }
    if(playerMove === "scissors")
    {
        if(computerMove === "rock"){
            result = "You Lose!"
        }
        else if(computerMove === "paper"){
            result = "You won!"
        }
        else if(computerMove === "scissors"){
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
   display.innerHTML = ` <div class="display">
            <span id="result-text"></span>
            <div class="move">
                <div class="your-move">
                    Your Move:<img id="my-move-img" src="images/${yourInput}-emoji.png">
                </div>
                <div class="computer-move">
                <img id="com-move-img" src="images/${computerMove}-emoji.png">:Computer Move
                </div>
            </div>
        </div>`;
}
