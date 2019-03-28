console.log("FST BRK is linked.");

// Selection holder.
let userCharacter = "";
let computerCharacter = "";
let courtSelection = "";

// Character selection.
let characters = ["A", "Z", "Ganoo", "Virginelle", "Claya", "Rail", "Hi-Jack", "Woodini"];
function randomCharacter() {
    let characters = ["A", "Z", "Ganoo", "Virginelle", "4Rail", "Clawdia", "Hi-Jack", "Woodini", "Spooky G"];
    let randomCharacter = characters[Math.floor(Math.random() * characters.length)];
    return randomCharacter;
};

// Court selection. 
let courts = ["Wild Rec. Cntr.", "Rimrock station", " Lakia's Rooftop Hoop", "S. Wish Park"];
function randomCourt() {
    var courts = ["Wild Rec", "Rooftop Hoop", "Dunk Station", "Swish Park", "Forbidden Zone"];
    var randomCourt = courts[Math.floor(Math.random() * courts.length)];
    return randomCourt;
};

// User character.
function characterSelection() {
    var userCharacterText = document.createElement("h3");
    var text = document.createTextNode("Please select your player");
    userCharacterText.appendChild(text);
    document.getElementById("user_character_header_container").append(userCharacterText);
    userCharacterText.setAttribute("id", "userCharacterWordsId");

    // A
    var characterA = document.createElement("button");
    var text = document.createTextNode(characters[0]);
    characterA.appendChild(text);
    document.getElementById("user_character_button_container").append(characterA);
    characterA.setAttribute("id", "aId");
    $("#aId").click(function () {
        userCharacterSelection = characters[0];
        console.log(userCharacterSelection);
        $("#user_character").text(userCharacterSelection);
        document.getElementById("userArt").src="./images/a_game_design_transparent.png";
        chooseOpponentNext()
    });

    // Z
    var characterZ = document.createElement("button");
    var text = document.createTextNode(characters[1]);
    characterZ.appendChild(text);
    document.getElementById("user_character_button_container").append(characterZ);
    characterZ.setAttribute("id", "zId");
    $("#zId").click(function () {
        userCharacterSelection = characters[1];
        console.log(userCharacterSelection);
        $("#user_character").text(userCharacterSelection);
        document.getElementById("userArt").src="./images/z_game_design_transparent.pngg";
        chooseOpponentNext()
    });

    // Ganoo
    var characterGanoo = document.createElement("button");
    var text = document.createTextNode(characters[2]);
    characterGanoo.appendChild(text);
    document.getElementById("user_character_button_container").append(characterGanoo);
    characterGanoo.setAttribute("id", "ganooId");
    $("#ganooId").click(function () {
        userCharacterSelection = characters[2];
        console.log(userCharacterSelection);
        $("#user_character").text(userCharacterSelection);
        document.getElementById("userArt").src="./images/Michael Jackson tramsparent.png";
        chooseOpponentNext()
    });

    // Virginelle
    var characterVirginelle = document.createElement("button");
    var text = document.createTextNode(characters[3]);
    characterVirginelle.appendChild(text);
    document.getElementById("user_character_button_container").append(characterVirginelle);
    characterVirginelle.setAttribute("id", "virginelleId");
    $("#virginelleId").click(function () {
        userCharacterSelection = characters[3];
        console.log(userCharacterSelection);
        $("#user_character").text(userCharacterSelection);
        document.getElementById("userArt").src="./images/She Ra transparent.png";
        chooseOpponentNext()
    });

    // Rail
    var characterRail = document.createElement("button");
    var text = document.createTextNode(characters[4]);
    characterRail.appendChild(text);
    document.getElementById("user_character_button_container").append(characterRail);
    characterRail.setAttribute("id", "railId");
    $("#railId").click(function () {
        userCharacterSelection = characters[4];
        console.log(userCharacterSelection);
        $("#user_character").text(userCharacterSelection);
        document.getElementById("userArt").src="./images/ninja turtle transparent.png";
        chooseOpponentNext()
    });

    // Claya
    var characterClawdia = document.createElement("button");
    var text = document.createTextNode(characters[5]);
    characterClawdia.appendChild(text);
    document.getElementById("user_character_button_container").append(characterClawdia);
    characterClawdia.setAttribute("id", "clawdiaId");
    $("#clawdiaId").click(function () {
        userCharacterSelection = characters[5];
        console.log(userCharacterSelection);
        $("#user_character").text(userCharacterSelection);
        document.getElementById("userArt").src="./images/Terminator Transparent.png";
        chooseOpponentNext()
    });

    // Hi-Jack
    var characterHijack = document.createElement("button");
    var text = document.createTextNode(characters[6]);
    characterHijack.appendChild(text);
    document.getElementById("user_character_button_container").append(characterHijack);
    characterHijack.setAttribute("id", "hiJackId");
    $("#hiJackId").click(function () {
        userCharacterSelection = characters[6];
        console.log(userCharacterSelection);
        $("#user_character").text(userCharacterSelection);
        document.getElementById("userArt").src="./images/Mr. T transparent.png";
        chooseOpponentNext()
    });

    // Woodini
    var characterWoodini = document.createElement("button");
    var text = document.createTextNode(characters[7]);
    characterWoodini.appendChild(text);
    document.getElementById("user_character_button_container").append(characterWoodini);
    characterWoodini.setAttribute("id", "woodiniId");
    $("#woodiniId").click(function () {
        userCharacterSelection = characters[7];
        console.log(userCharacterSelection);
        $("#user_character").text(userCharacterSelection);
        document.getElementById("userArt").src="./images/Madonna Transparent.png";
        chooseOpponentNext()
    });

    // Random Character
    var characterRandom = document.createElement("button");
    var text = document.createTextNode("Random");
    characterRandom.appendChild(text);
    document.getElementById("random_user_button").append(characterRandom);
    characterRandom.setAttribute("id", "randomCharacterId");
    $("#randomCharacterId").click(function () {
        userCharacterSelection = randomCharacter();
        console.log(userCharacterSelection);
        $("#user_character").text(userCharacterSelection);
        chooseOpponentNext()
    });


};

// Opponent character.
function opponentCharacterSelection() {
    var computerCharacterText = document.createElement("h3");
    var text = document.createTextNode("Please select your Opponent");
    computerCharacterText.appendChild(text);
    document.getElementById("computer_character_header_container").append(computerCharacterText);
    computerCharacterText.setAttribute("id", "userCharacterWordsId");


    // A
    var characterA = document.createElement("button");
    var text = document.createTextNode(characters[0]);
    characterA.appendChild(text);
    document.getElementById("computer_character_button_container").append(characterA);
    characterA.setAttribute("id", "oppAId");
    $("#oppAId").click(function () {
        computerCharacterSelection = characters[0];
        console.log(computerCharacterSelection);
        $("#computer_character").text(computerCharacterSelection);
        document.getElementById("computerArt").src="./images/a_game_design_transparent.png";
        chooseCourt();
    });

    // Z
    var characterZ = document.createElement("button");
    var text = document.createTextNode(characters[1]);
    characterZ.appendChild(text);
    document.getElementById("computer_character_button_container").append(characterZ);
    characterZ.setAttribute("id", "oppZId");
    $("#oppZId").click(function () {
        computerCharacterSelection = characters[1];
        console.log(computerCharacterSelection);
        $("#computer_character").text(computerCharacterSelection);
        document.getElementById("computerArt").src="./images/z_game_design_transparent.png";
        chooseCourt();
    });

    // Ganoo
    var characterGanoo = document.createElement("button");
    var text = document.createTextNode(characters[2]);
    characterGanoo.appendChild(text);
    document.getElementById("computer_character_button_container").append(characterGanoo);
    characterGanoo.setAttribute("id", "oppGanooId");
    $("#oppGanooId").click(function () {
        computerCharacterSelection = characters[2];
        console.log(computerCharacterSelection);
        $("#computer_character").text(computerCharacterSelection);
        document.getElementById("computerArt").src="./images/Michael Jackson tramsparent.png";
        chooseCourt();
    });

    // Virginelle
    var characterVirginelle = document.createElement("button");
    var text = document.createTextNode(characters[3]);
    characterVirginelle.appendChild(text);
    document.getElementById("computer_character_button_container").append(characterVirginelle);
    characterVirginelle.setAttribute("id", "oppVirginelleId");
    $("#oppVirginelleId").click(function () {
        computerCharacterSelection = characters[3];
        console.log(computerCharacterSelection);
        $("#computer_character").text(computerCharacterSelection);
        document.getElementById("computerArt").src="./images/She Ra transparent.png";
        chooseCourt();
    });

    // Rail
    var characterRail = document.createElement("button");
    var text = document.createTextNode(characters[4]);
    characterRail.appendChild(text);
    document.getElementById("computer_character_button_container").append(characterRail);
    characterRail.setAttribute("id", "oppRailId");
    $("#oppRailId").click(function () {
        computerCharacterSelection = characters[4];
        console.log(computerCharacterSelection);
        $("#computer_character").text(computerCharacterSelection);
        document.getElementById("computerArt").src="./images/ninja turtle transparent.png";
        chooseCourt();
    });

    // Claya
    var characterClawdia = document.createElement("button");
    var text = document.createTextNode(characters[5]);
    characterClawdia.appendChild(text);
    document.getElementById("computer_character_button_container").append(characterClawdia);
    characterClawdia.setAttribute("id", "oppClawdiaId");
    $("#oppClawdiaId").click(function () {
        computerCharacterSelection = characters[5];
        console.log(computerCharacterSelection);
        $("#computer_character").text(computerCharacterSelection);
        document.getElementById("computerArt").src="./images/Terminator Transparent.png";
        chooseCourt();
    });

    // Hi-Jack
    var characterHijack = document.createElement("button");
    var text = document.createTextNode(characters[6]);
    characterHijack.appendChild(text);
    document.getElementById("computer_character_button_container").append(characterHijack);
    characterHijack.setAttribute("id", "oppHiJackId");
    $("#oppHiJackId").click(function () {
        computerCharacterSelection = characters[6];
        console.log(computerCharacterSelection);
        $("#computer_character").text(computerCharacterSelection);
        document.getElementById("computerArt").src="./images/Mr. T transparent.png";
        chooseCourt();
    });

    // Woodini
    var characterWoodini = document.createElement("button");
    var text = document.createTextNode(characters[7]);
    characterWoodini.appendChild(text);
    document.getElementById("computer_character_button_container").append(characterWoodini);
    characterWoodini.setAttribute("id", "oppWoodiniId");
    $("#oppWoodiniId").click(function () {
        computerCharacterSelection = characters[7];
        console.log(computerCharacterSelection);
        $("#computer_character").text(computerCharacterSelection);
        document.getElementById("computerArt").src="./images/Madonna Transparent.png";
        chooseCourt();
    });

    // Random Character
    var characterRandom = document.createElement("button");
    var text = document.createTextNode("Random");
    characterRandom.appendChild(text);
    document.getElementById("random_computer_button").append(characterRandom);
    characterRandom.setAttribute("id", "oppRandomCharacterId");
    $("#oppRandomCharacterId").click(function () {
        computerCharacterSelection = randomCharacter();
        console.log(computerCharacterSelection);
        $("#computer_character").text(computerCharacterSelection);
        chooseCourt();
    });
};

// Computer character.
function chooseOpponentNext() {
    $("#user_character_header_container").hide()
    $("#user_character_button_container").hide()
    $("#random_user_button").hide()
    opponentCharacterSelection();
};

//Choose Court.
function chooseCourt() {
    $("#computer_character_header_container").hide();
    $("#computer_character_button_container").hide();
    $("#random_computer_button").hide();
    courtSelectionFunc();
};

function courtSelectionFunc() {
    var courtSelectionText = document.createElement("h3");
    var text = document.createTextNode("Please select your court");
    courtSelectionText.appendChild(text);
    document.getElementById("court_selection_header_container").append(courtSelectionText);
    courtSelectionText.setAttribute("id", "courtSelectionTextId");

    // Wild Rec.
    var wildrec = document.createElement("button");
    var text = document.createTextNode(courts[0]);
    wildrec.appendChild(text);
    document.getElementById("court_buttons_container").append(wildrec);
    wildrec.setAttribute("id", "wildRecId");
    $("#wildRecId").click(function () {
        courtselection = courts[0];
        console.log(courtselection);
        $("#court_select").text( courtselection);
    document.querySelector(".main_game_container").style.background= "URL(./images/wild_rec_game_design.png)";
    document.querySelector(".main_game_container").style.backgroundSize= "contain";
    document.querySelector(".main_game_container").style.backgroundRepeat= "no-repeat";
    document.querySelector(".main_game_container").style.backgroundPosition= "center";
    gameScript2();
    });

    // Rimrock Station.
    var rimrock = document.createElement("button");
    var text = document.createTextNode(courts[1]);
    rimrock.appendChild(text);
    document.getElementById("court_buttons_container").append(rimrock);
    rimrock.setAttribute("id", "rimRockId");
    $("#rimRockId").click(function () {
        courtselection = courts[1];
        console.log(courtselection);
        $("#court_select").text( courtselection);
        gameScript2();
    });

    // Lakia's Rooftop Hoop
    var lakiaRtH = document.createElement("button");
    var text = document.createTextNode(courts[2]);
    lakiaRtH.appendChild(text);
    document.getElementById("court_buttons_container").append(lakiaRtH);
    lakiaRtH.setAttribute("id", "lakiaId");
    $("#lakiaId").click(function () {
        courtselection = courts[2];
        console.log(courtselection);
        $("#court_select").text( courtselection);
        gameScript2();
    });

    // 300 S. Wish Park. 
    var swish = document.createElement("button");
    var text = document.createTextNode(courts[3]);
    swish.appendChild(text);
    document.getElementById("court_buttons_container").append(swish);
    swish.setAttribute("id", "swishId");
    $("#swishId").click(function () {
        courtselection = courts[3];
        console.log(courtselection);
        $("#court_select").text( courtselection);
        gameScript2();
    });

    // Random Court
    var randomCourtButton = document.createElement("button");
    var text = document.createTextNode("Random Court");
    randomCourtButton.appendChild(text);
    document.getElementById("random_court_button").append(randomCourtButton);
    randomCourtButton.setAttribute("id", "random_courtId");
    $("#random_courtId").click(function () {
        courtselection = randomCourt();
        console.log(courtselection);
        $("#court_select").text( courtselection);
        gameScript2();
    });


};

$("#Play").click(function () {
    console.log("clicked");
    characterSelection();
    $("#Play").hide();

});