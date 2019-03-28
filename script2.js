// Values.
let value = ["offense", "defense"];
var randomDiv = value[Math.floor(Math.random() * value.length)];
console.log(randomDiv);

let offVal = ["Shoot", "Crossover", "Pass",];
let defVal = ["Block", "Lockdown", "Steal"];

let userValues = "";
let computerValues = "";

let userMoveOptions = "";
let computerMoveOptions = "";

let userPossession = "";
let compuerPossession = "";

let userMove = "";
let ComputerMove = "";

let userScore = 1;
let computerScore = 1;

var randomPossession = value[Math.floor(Math.random() * value.length)];
console.log(randomPossession);

function newGame(){
 $("#newGame").click(function(){
    window.location.reload(true)
 });
};
/*function rematchGame(){
    $("#rematchGame").click(function(){
        userScore= 1;
        computerScore= 1;
    });
};
*/
function jumpball() {

    if (randomPossession == value[0]) {
        $("#defensive_button_container").hide();
        userValues = offVal;
        computerValues = defVal;
        userPossession = value[0];
        computerPossesion = value[1];
        console.log("your moves:" + offVal);
        console.log("computer moves:" + defVal);
    }
    else {
        $("#offensive_button_container").hide();
        userValues = defVal;
        compValues = offVal;
        userPossession = value[1];
        computerPossesion = value[0];
        console.log("your moves:" + defVal);
        console.log("computer moves:" + offVal);
    };
};
function toggleswitch() {
    $("#offensive_button_container, #defensive_button_container").toggle();
};
function stopGameforUser() {
    if (userScore > 5) {
       // $("#user").html("!!! CONGRATULATIONS YOU WIN !!!")
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        $("#computer_score").hide();
        $("#user_score").hide();
        $("#offensive_button_container").hide();
        $("#defensive_button_container").hide();
        $("#user_move").hide();
        $("#computer_move").hide();
        $("#match_response").hide();
        $("#gameOver").text("Congratulations! You win!");
        /*
        var rematchButton = document.createElement("button");
        var text = document.createTextNode("Rematch");
        rematchButton.appendChild(text);
        document.getElementById("game_reset").append(rematchButton);
        rematchButton.setAttribute("id", "rematchGame");
        rematchGame();
        */
        var newGameButton = document.createElement("button");
        var text = document.createTextNode("Play again");
        newGameButton.appendChild(text);
        document.getElementById("game_reset").append(newGameButton);
        newGameButton.setAttribute("id", "newGame");
        newGame();
    }
};
function stopGameforComputer() {
    if (computerScore > 5) {
       // $("#user").html("!!! OH NO YOU LOSE !!!")
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        $("#computer_score").hide();
        $("#user_score").hide();
        $("#offensive_button_container").hide();
        $("#defensive_button_container").hide();
        $("#user_move").hide();
        $("#computer_move").hide();
        $("#match_response").hide();
        $("#gameOver").text("Sorry, you lose");
        /*
        var rematchButton = document.createElement("button");
        var text = document.createTextNode("Rematch");
        rematchButton.appendChild(text);
        document.getElementById("game_reset").append(rematchButton);
        rematchButton.setAttribute("id", "rematchGame");
        rematchGame();
        */
        var newGameButton = document.createElement("button");
        var text = document.createTextNode("Play again");
        newGameButton.appendChild(text);
        document.getElementById("game_reset").append(newGameButton);
        newGameButton.setAttribute("id", "newGame");
        newGame();

    }
};
function userScoreboard() {

    //counter++;
    //$("#user_score").html("User score: " + userScore++)
    $("#user_score").text( userScore++);
    //userScore++;
    console.log(userScore);
    stopGameforUser();
};
function computeScoreboard() {

    //counter++;
    //$("#computer_score").html("Computer score: "+ computerScore++)
    $("#computer_score").text(computerScore++);
    //computerScore++;
    console.log(computerScore);
    stopGameforComputer();
};
function offensive_buttons() {
    var shootButton = document.createElement("button");
    var text = document.createTextNode("Shoot");
    shootButton.appendChild(text);
    document.getElementById("offensive_button_container").append(shootButton);
    shootButton.setAttribute("id", "shootId");

    var crossoverButton = document.createElement("button");
    var text = document.createTextNode("Cross Over");
    crossoverButton.appendChild(text);
    document.getElementById("offensive_button_container").append(crossoverButton);
    crossoverButton.setAttribute("id", "crossoverId");

    var passButton = document.createElement("button");
    var text = document.createTextNode("Pass");
    passButton.appendChild(text);
    document.getElementById("offensive_button_container").append(passButton);
    passButton.setAttribute("id", "passtId");

};
function defensive_buttons() {
    var blockButton = document.createElement("button");
    var text = document.createTextNode("Block");
    blockButton.appendChild(text);
    document.getElementById("defensive_button_container").append(blockButton);
    blockButton.setAttribute("id", "blockId");

    var lockdownButton = document.createElement("button");
    var text = document.createTextNode("Lockdown");
    lockdownButton.appendChild(text);
    document.getElementById("defensive_button_container").append(lockdownButton);
    lockdownButton.setAttribute("id", "lockdownId");

    var stealButton = document.createElement("button");
    var text = document.createTextNode("Steal");
    stealButton.appendChild(text);
    document.getElementById("defensive_button_container").append(stealButton);
    stealButton.setAttribute("id", "stealId");

};
function gameScript2() {
    console.log("script 2is linked");
    $("#court_selection_header_container").hide();
    $("#court_buttons_container").hide();
    $("#random_court_button").hide();
    $("#user_score").text(userCharacter + "00" );
    $("#computer_score").text(computerCharacter + "00 ");

    var shootButton = document.createElement("button");
    var text = document.createTextNode("Shoot");
    shootButton.appendChild(text);
    document.getElementById("offensive_button_container").append(shootButton);
    shootButton.setAttribute("id", "shootId");

    var crossoverButton = document.createElement("button");
    var text = document.createTextNode("Cross Over");
    crossoverButton.appendChild(text);
    document.getElementById("offensive_button_container").append(crossoverButton);
    crossoverButton.setAttribute("id", "crossoverId");

    var passButton = document.createElement("button");
    var text = document.createTextNode("Pass");
    passButton.appendChild(text);
    document.getElementById("offensive_button_container").append(passButton);
    passButton.setAttribute("id", "passId");

    var blockButton = document.createElement("button");
    var text = document.createTextNode("Block");
    blockButton.appendChild(text);
    document.getElementById("defensive_button_container").append(blockButton);
    blockButton.setAttribute("id", "blockId");

    var lockdownButton = document.createElement("button");
    var text = document.createTextNode("Lockdown");
    lockdownButton.appendChild(text);
    document.getElementById("defensive_button_container").append(lockdownButton);
    lockdownButton.setAttribute("id", "lockdownId");

    var stealButton = document.createElement("button");
    var text = document.createTextNode("Steal");
    stealButton.appendChild(text);
    document.getElementById("defensive_button_container").append(stealButton);
    stealButton.setAttribute("id", "stealId");

    jumpball();

    // Offensive button click response logic.
    // Shoot
    $("#shootId").click(function () {
        console.log("your moves:" + userValues);
        console.log("computer moves:" + computerValues);
        computerMove = defVal[Math.floor(Math.random() * defVal.length)];
        console.log(computerMove);
        console.log("You choose: shoot")
        console.log("Computer did: " + computerMove);
        if (computerMove == defVal[0]) {
            console.log("lose")
            $("#match_response").text("Lose: Your shot was blocked. It happens to the best of us.")
            $("#user_move").text("Shoot")
            $("#computer_move").text(computerMove)
            toggleswitch();
            computeScoreboard();
        }
        else if (computerMove == defVal[2]) {
            console.log("win")
            $("#match_response").text("Win: Your opponent attempted to steal but you shot it right in there face")
            $("#user_move").text("Shoot")
            $("#computer_move").text(computerMove)
            userScoreboard();
        }
        else {
            console.log("draw")
            $("#match_response").text("Draw: Your opponent put the locks down. This might be tough.")
            $("#user_move").text("Shoot")
            $("#computer_move").text(computerMove)
        }
    });
    // Crossover
    $("#crossoverId").click(function () {
        console.log("your moves:" + userValues);
        console.log("computer moves:" + computerValues);
        computerMove = defVal[Math.floor(Math.random()*defVal.length)];
        console.log(computerMove);
        console.log("You choose: crossover")
        console.log("Computer did:"+computerMove);
        if(computerMove == defVal[0]){
            console.log("win")
        $("#match_response").text("Win: Your opponent bit on the crossover. Good move!")
        $("#user_move").text("Crossover")
        $("#computer_move").text(computerMove)
            userScoreboard()
            
        }
        else{ console.log("lose")
         $("#match_response").text("Lose: Your opponent saw the crossover coming. Try again.")
         $("#user_move").text("Crossover")
         $("#computer_move").text(computerMove)
            toggleswitch();
            computeScoreboard();
        }
    });
    // Pass
    $("#passId").click(function () {
        console.log("your moves:" + userValues);
        console.log("computer moves:" + computerValues);
        computerMove = defVal[Math.floor(Math.random()*defVal.length)];
        console.log(computerMove);
        console.log("You choose: pass")
        console.log("Computer did:"+computerMove);
        if(computerMove == defVal[0]){
            console.log("win")
        $("#match_response").text("Win: You got the ball to the open man. Good court vision.")
        $("#user_move").text("Pass")
        $("#computer_move").text(computerMove)
            userScoreboard();
        }
        else if(computerMove == defVal[2]){
            console.log("lose")
        $("#match_response").text("Lose: Your opponent read the play and stole the ball. Keep going.")
        $("#user_move").text("Pass")
        $("#computer_move").text(computerMove)
            toggleswitch();
            computeScoreboard();
        }
        else{ 
            console.log("draw");
        $("#match_response").text("Draw: Your opponent is locked in. It won't be that easy.")
        $("#user_move").text("Pass")
        $("#computer_move").text(computerMove)
        }
    });

    // Defensive button click response logic.
    // Block
    $("#blockId").click(function () {
        console.log("your moves:" + userValues);
        console.log("computer moves:" + computerValues);
        computerMove = offVal[Math.floor(Math.random() * offVal.length)];

        console.log(computerMove);

        console.log("You choose: block")
        console.log("Computer did:" + computerMove);

        if (computerMove == offVal[0]) {
            console.log("win");
            $("#match_response").text("Win: You beat that shot up! Let them know you're not the one.")
            $("#user_move").text("Block")
            $("#computer_move").text(computerMove)
            userScoreboard();
            toggleswitch();
        }
        else {
            console.log("lose");
            $("#match_response").text("Lose: Your opponent is just too fast. Keep up!")
            $("#user_move").text("Block")
            $("#computer_move").text(computerMove)

            computeScoreboard();
        }

    });
    // Lockdown
    $("#lockdownId").click(function () {
        console.log("your moves:" + userValues);
        console.log("computer moves:" + computerValues);
        computerMove = offVal[Math.floor(Math.random()*offVal.length)];
        
        console.log(computerMove);
        
        console.log("You choose: lockdown")
        console.log("Computer did:"+computerMove);
        
        if(computerMove == offVal[0]){
            console.log("draw");
             $("#match_response").text("Draw: Good defense. Now to convert!")
             $("#user_move").text("Lockdown")
             $("#computer_move").text(computerMove)
            
        }
        else if(computerMove == offVal[1]){
            toggleswitch();
            console.log("win");
             $("#match_response").text("Win: Your defense is just too good for their tired moves.")
            userScoreboard();
            $("#user_move").text("Lockdown")
            $("#computer_move").text(computerMove)
        }
        else{
            console.log("draw")
             $("#match_response").text("Draw: Good defense. Lets go!")
             $("#user_move").text("Lockdown")
             $("#computer_move").text(computerMove)
        }
    });
    // Steal
    $("#stealId").click(function () {
        console.log("your moves:" + userValues);
        console.log("computer moves:" + computerValues);
        compMove = offVal[Math.floor(Math.random()*offVal.length)];
        
        console.log(computerMove);
        
        console.log("You choose: steal")
        console.log("Computer did:"+computerMove);
        
        if(compMove == offVal[0]){
            console.log("lose");
             $("#match_response").text("Lose: You made the wrong read. No worries, keep going!")
             $("#user_move").text("Steal")
             $("#computer_move").text(computerMove)
            computeScoreboard();
        }
        else{
            console.log("win")
             $("#match_response").text("Win: Good eye. Even better defense!")
             $("#user_move").text("Steal")
             $("#computer_move").text(computerMove)
            toggleswitch();
            userScoreboard();
        }
    });


};


