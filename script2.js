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
    $("#offensiveButtonContainer, #defensiveButtonContainer").toggle();
};
function stopGameforUser() {
    if (userScore > 5) {
       // $("#user").html("!!! CONGRATULATIONS YOU WIN !!!")
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        $("#computerScore").hide();
        $("#userScore").hide();
        $("#offensiveButtonContainer").hide();
        $("#defensiveButtonContainer").hide();
        $("#userMove").hide();
        $("#computerMove").hide();
        $("#matchResponse").hide();
        $("#gameOver").text("Congratulations! You win!");
        /*
        var rematchButton = document.createElement("button");
        var text = document.createTextNode("Rematch");
        rematchButton.appendChild(text);
        document.getElementById("gameReset").append(rematchButton);
        rematchButton.setAttribute("id", "rematchGame");
        rematchGame();
        */
        var newGameButton = document.createElement("button");
        var text = document.createTextNode("Play again");
        newGameButton.appendChild(text);
        document.getElementById("gameReset").append(newGameButton);
        newGameButton.setAttribute("id", "newGame");
        newGame();
    }
};
function stopGameforComputer() {
    if (computerScore > 5) {
       // $("#user").html("!!! OH NO YOU LOSE !!!")
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        $("#computerScore").hide();
        $("#userScore").hide();
        $("#offensiveButtonContainer").hide();
        $("#defensiveButtonContainer").hide();
        $("#userMove").hide();
        $("#computerMove").hide();
        $("#matchResponse").hide();
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
        document.getElementById("gameReset").append(newGameButton);
        newGameButton.setAttribute("id", "newGame");
        newGame();

    }
};
function userScoreboard() {

    //counter++;
    //$("#user_score").html("User score: " + userScore++)
    $("#userScore").text( userScore++);
    //userScore++;
    console.log(userScore);
    stopGameforUser();
};
function computeScoreboard() {

    //counter++;
    //$("#computer_score").html("Computer score: "+ computerScore++)
    $("#computerScore").text(computerScore++);
    //computerScore++;
    console.log(computerScore);
    stopGameforComputer();
};
function offensiveButtons() {
    var shootButton = document.createElement("button");
    var text = document.createTextNode("Shoot");
    shootButton.appendChild(text);
    document.getElementById("offensiveButtonContainer").append(shootButton);
    shootButton.setAttribute("id", "shootId");

    var crossoverButton = document.createElement("button");
    var text = document.createTextNode("Cross Over");
    crossoverButton.appendChild(text);
    document.getElementById("offensiveButtonContainer").append(crossoverButton);
    crossoverButton.setAttribute("id", "crossoverId");

    var passButton = document.createElement("button");
    var text = document.createTextNode("Pass");
    passButton.appendChild(text);
    document.getElementById("offensiveButtonContainer").append(passButton);
    passButton.setAttribute("id", "passtId");

};
function defensiveButtons() {
    var blockButton = document.createElement("button");
    var text = document.createTextNode("Block");
    blockButton.appendChild(text);
    document.getElementById("defensiveButtonContainer").append(blockButton);
    blockButton.setAttribute("id", "blockId");

    var lockdownButton = document.createElement("button");
    var text = document.createTextNode("Lockdown");
    lockdownButton.appendChild(text);
    document.getElementById("defensiveButtonContainer").append(lockdownButton);
    lockdownButton.setAttribute("id", "lockdownId");

    var stealButton = document.createElement("button");
    var text = document.createTextNode("Steal");
    stealButton.appendChild(text);
    document.getElementById("defensiveButtonContainer").append(stealButton);
    stealButton.setAttribute("id", "stealId");

};
function gameScript2() {
    console.log("script 2is linked");
    $("#courtSelectionHeaderContainer").hide();
    $("#courtButtonsContainer").hide();
    $("#randomCourtButton").hide();
    $("#userScore").text(userCharacter + "00" );
    $("#computerScore").text(computerCharacter + "00 ");

    var shootButton = document.createElement("button");
    var text = document.createTextNode("Shoot");
    shootButton.appendChild(text);
    document.getElementById("offensiveButtonContainer").append(shootButton);
    shootButton.setAttribute("id", "shootId");

    var crossoverButton = document.createElement("button");
    var text = document.createTextNode("Cross Over");
    crossoverButton.appendChild(text);
    document.getElementById("offensiveButtonContainer").append(crossoverButton);
    crossoverButton.setAttribute("id", "crossoverId");

    var passButton = document.createElement("button");
    var text = document.createTextNode("Pass");
    passButton.appendChild(text);
    document.getElementById("offensiveButtonContainer").append(passButton);
    passButton.setAttribute("id", "passId");

    var blockButton = document.createElement("button");
    var text = document.createTextNode("Block");
    blockButton.appendChild(text);
    document.getElementById("defensiveButtonContainer").append(blockButton);
    blockButton.setAttribute("id", "blockId");

    var lockdownButton = document.createElement("button");
    var text = document.createTextNode("Lockdown");
    lockdownButton.appendChild(text);
    document.getElementById("defensiveButtonContainer").append(lockdownButton);
    lockdownButton.setAttribute("id", "lockdownId");

    var stealButton = document.createElement("button");
    var text = document.createTextNode("Steal");
    stealButton.appendChild(text);
    document.getElementById("defensiveButtonContainer").append(stealButton);
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
            $("#matchResponse").text("Lose: Your shot was blocked. It happens to the best of us.")
            $("#userMove").text("Shoot")
            $("#computerMove").text(computerMove)
            toggleswitch();
            computeScoreboard();
        }
        else if (computerMove == defVal[2]) {
            console.log("win")
            $("#matchResponse").text("Win: Your opponent attempted to steal but you shot it right in there face")
            $("#userMove").text("Shoot")
            $("#computerMove").text(computerMove)
            userScoreboard();
        }
        else {
            console.log("draw")
            $("#matchResponse").text("Draw: Your opponent put the locks down. This might be tough.")
            $("#userMove").text("Shoot")
            $("#computerMove").text(computerMove)
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
        $("#matchResponse").text("Win: Your opponent bit on the crossover. Good move!")
        $("#userMove").text("Crossover")
        $("#computerMove").text(computerMove)
            userScoreboard()
            
        }
        else{ console.log("lose")
         $("#matchResponse").text("Lose: Your opponent saw the crossover coming. Try again.")
         $("#userMove").text("Crossover")
         $("#computerMove").text(computerMove)
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
        $("#matchResponse").text("Win: You got the ball to the open man. Good court vision.")
        $("#userMove").text("Pass")
        $("#computerMove").text(computerMove)
            userScoreboard();
        }
        else if(computerMove == defVal[2]){
            console.log("lose")
        $("#matchResponse").text("Lose: Your opponent read the play and stole the ball. Keep going.")
        $("#userMove").text("Pass")
        $("#computerMove").text(computerMove)
            toggleswitch();
            computeScoreboard();
        }
        else{ 
            console.log("draw");
        $("#matchResponse").text("Draw: Your opponent is locked in. It won't be that easy.")
        $("#userMove").text("Pass")
        $("#computerMove").text(computerMove)
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
            $("#matchResponse").text("Win: You beat that shot up! Let them know you're not the one.")
            $("#userMove").text("Block")
            $("#computerMove").text(computerMove)
            userScoreboard();
            toggleswitch();
        }
        else {
            console.log("lose");
            $("#matchResponse").text("Lose: Your opponent is just too fast. Keep up!")
            $("#userMove").text("Block")
            $("#computerMove").text(computerMove)

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
             $("#matchResponse").text("Draw: Good defense. Now to convert!")
             $("#userMove").text("Lockdown")
             $("#computerMove").text(computerMove)
            
        }
        else if(computerMove == offVal[1]){
            toggleswitch();
            console.log("win");
             $("#matchResponse").text("Win: Your defense is just too good for their tired moves.")
            userScoreboard();
            $("#userMove").text("Lockdown")
            $("#computerMove").text(computerMove)
        }
        else{
            console.log("draw")
             $("#matchResponse").text("Draw: Good defense. Lets go!")
             $("#userMove").text("Lockdown")
             $("#computerMove").text(computerMove)
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
             $("#matchResponse").text("Lose: You made the wrong read. No worries, keep going!")
             $("#userMove").text("Steal")
             $("#computerMove").text(computerMove)
            computeScoreboard();
        }
        else{
            console.log("win")
             $("#matchResponse").text("Win: Good eye. Even better defense!")
             $("#userMove").text("Steal")
             $("#computerMove").text(computerMove)
            toggleswitch();
            userScoreboard();
        }
    });


};


