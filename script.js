let userscore = 0;
let robotscore = 0;
const userscore_span=document.getElementById("Player 1 score");
const robotscore_span=document.getElementById("Player 2 score");
const scoreboard_div=document.querySelector(".scoreboard");
const result_p=document.querySelector(".result>p");
const rock_div=document.getElementById("rock");
const paper_div=document.getElementById("paper");
const scissors_div=document.getElementById("scissors");

function getrobotchoice(){
    const choice=['r','p','s'];
    const random_no=Math.floor(Math.random()*3);
    return choice[random_no];
}

function convert_toword(letter){
    switch(letter){
        case 'r':return "Rock";
        break;
        case 'p':return "Paper";
        break;
        case 's':return "Scissors";
        break;
    }
}

function win(userchoice, robotchoice){
    userscore++;
    userscore_span.innerHTML=userscore;
    robotscore_span.innerHTML=robotscore;
    const small_user="( "+convert_toword(userchoice)+" )";
    const small_robot="( "+convert_toword(robotchoice)+" )";
    result_p.innerHTML="User"+small_user.fontsize(3).sub()+" beats Robot"+small_robot.fontsize(3).sub()+". You win!!";
    document.getElementById("Player 1 score").classList.add("greenglow");
    setTimeout(function(){document.getElementById("Player 1 score").classList.remove("greenglow");},300);
    document.getElementById("Player 2 score").classList.add("redglow");
    setTimeout(function(){document.getElementById("Player 2 score").classList.remove("redglow");},300);
    switch(userchoice){
        case 'r':
            document.getElementById("rock").classList.add("greenglow");
            setTimeout(function(){document.getElementById("rock").classList.remove("greenglow");},300);
            break;
        case 'p': 
            document.getElementById("paper").classList.add("greenglow");
            setTimeout(function(){document.getElementById("paper").classList.remove("greenglow");},300);
            break;
        case 's':
            document.getElementById("scissors").classList.add("greenglow");
            setTimeout(function(){document.getElementById("scissors").classList.remove("greenglow");},300);
            break;
    }


}
function lose(userchoice, robotchoice){
    robotscore++;
    userscore_span.innerHTML=userscore;
    robotscore_span.innerHTML=robotscore;
    const small_user="( "+convert_toword(userchoice)+" )";
    const small_robot="( "+convert_toword(robotchoice)+" )";

    result_p.innerHTML="User"+small_user.fontsize(3).sub()+" loses to Robot"+small_robot.fontsize(3).sub()+". You lose!!";
    document.getElementById("Player 1 score").classList.add("redglow");
    setTimeout(function(){document.getElementById("Player 1 score").classList.remove("redglow");},300);
    document.getElementById("Player 2 score").classList.add("greenglow");
    setTimeout(function(){document.getElementById("Player 2 score").classList.remove("greenglow");},300);
    switch(userchoice){
        case 'r':
            document.getElementById("rock").classList.add("redglow");
            setTimeout(function(){document.getElementById("rock").classList.remove("redglow");},300);
            break;
        case 'p': 
            document.getElementById("paper").classList.add("redglow");
            setTimeout(function(){document.getElementById("paper").classList.remove("redglow");},300);
            break;
        case 's':
            document.getElementById("scissors").classList.add("redglow");
            setTimeout(function(){document.getElementById("scissors").classList.remove("redglow");},300);
            break;
    }

}
function tie(userchoice, robotchoice){
    userscore_span.innerHTML=userscore;
    robotscore_span.innerHTML=robotscore;
    const small_user="( "+convert_toword(userchoice)+" )";
    result_p.innerHTML="Both have selected same choices"+small_user.fontsize(3).sub() +". Match tie!! ";
    document.getElementById("Player 1 score").classList.add("grayglow");
    setTimeout(function(){document.getElementById("Player 1 score").classList.remove("grayglow");},300);
    document.getElementById("Player 2 score").classList.add("grayglow");
    setTimeout(function(){document.getElementById("Player 2 score").classList.remove("grayglow");},300);
    switch(userchoice){
        case 'r':
            document.getElementById("rock").classList.add("grayglow");
            setTimeout(function(){document.getElementById("rock").classList.remove("grayglow");},300);
            break;
        case 'p': 
            document.getElementById("paper").classList.add("grayglow");
            setTimeout(function(){document.getElementById("paper").classList.remove("grayglow");},300);
            break;
        case 's':
            document.getElementById("scissors").classList.add("grayglow");
            setTimeout(function(){document.getElementById("scissors").classList.remove("grayglow");},300);
            break;
    }
}

function game(userchoice){
    const robotchoice=getrobotchoice();
    switch(userchoice+robotchoice){
        case "rs":
        case "pr":
        case "sp":
            win(userchoice,robotchoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userchoice,robotchoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            tie(userchoice,robotchoice);
            break;
    }
}


function main(){
    rock_div.addEventListener("click", function(){
        game('r')
    });
    paper_div.addEventListener("click", function(){
        game('p');
    });
    scissors_div.addEventListener("click", function(){
        game('s');
    });
}
main();

function reset(){
    userscore=0;
    robotscore=0;
    userscore_span.innerHTML=userscore;
    robotscore_span.innerHTML=robotscore;
}
