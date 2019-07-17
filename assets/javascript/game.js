// create variables for all all crystals set to undefined for now
var crystal1;
var crystal2;
var crystal3;
var crystal4;
// create variables for wins, losses and totalScore set to zero
var wins = 0;
var losses = 0;
var totalScore = 0;

// create a function with variable for both mathRandom used for game
var randNumToCompareWith = function () {
    return Math.floor(Math.random() * (120 - 19 + 1)) + 19;
};
var allCrystalRandomNum = function () {
    return Math.floor(Math.random() * (12 - 1 + 1)) + 1;
};

// Auto refresh randNumToCompareWith -- only added to if win++ block
var autoRefresh = setInterval(function(){
    $("#randNumber").text(mainRandNumToCompareWith);
}, 500);

// create a function variable and inside scoreChecker add an if else to check if the player win or if the score goes over randNumToCompareWith ---- if score is over then game is lost or over -- restart -- add a reload or restart function somewhere-- autoRefresh--

var scoreChecker = function(compareAllCrystals) {
    totalScore += compareAllCrystals;
    console.log(mainRandNumToCompareWith);
    console.log(totalScore);
    console.log(compareAllCrystals);
// if I win while clicking all four crystals.. alert name below or add a point to the board
    if (totalScore === mainRandNumToCompareWith) {
        wins++;
        // Auto refresh randNumToCompareWith
        autoRefresh;
        alert('You won!');
        // add text to board with jQuery
        $("#win").text(wins);
        
         crystal1 = allCrystalRandomNum();
         crystal2 = allCrystalRandomNum();
         crystal3 = allCrystalRandomNum();
         crystal4 = allCrystalRandomNum();
         mainRandNumToCompareWith = randNumToCompareWith();
         
         totalScore = 0;

// if I lose while clicking all four crystals.. alert statement below or add a point the board 
    } else if  (totalScore > mainRandNumToCompareWith) {
        losses++;
        alert('You Lost!');
        // add text to board with jQuery
        $("#lose").text(losses);
        mainRandNumToCompareWith = randNumToCompareWith();

        totalScore = 0;

        };

    // while winning or losing just keep adding score to the board
    $("#scoreBoard").text(totalScore);
    return;
};

// jQuery function for crystal count
$(document).ready(function () {
// ready on reload or refresh   
    mainRandNumToCompareWith = randNumToCompareWith();
    $("#randNumber").text(mainRandNumToCompareWith);
    
// variables stored locally in rerady function
     crystal1 = allCrystalRandomNum();
     crystal2 = allCrystalRandomNum();
     crystal3 = allCrystalRandomNum();
     crystal4 = allCrystalRandomNum();
    
    $("#crystal1").click(function () {
// Alert and console function not working correctly
        $("#scoreBoard").text(allCrystalRandomNum());

        scoreChecker(crystal1);

        // console.log(allCrystalRandomNum() + " crys1");
        // alert(crystal1);
    });

    $("#crystal2").click(function () {
        $("#scoreBoard").text(allCrystalRandomNum());

        scoreChecker(crystal2);

        // console.log(allCrystalRandomNum() + " crys2");
        // alert(crystal2);
    });


    $("#crystal3").click(function() {
        $("#scoreBoard").text(allCrystalRandomNum());

        scoreChecker(crystal3);

        // console.log(allCrystalRandomNum() + " crys3");
        // alert(crystal3);
    });

    $("#crystal4").click(function() {
        $("#scoreBoard").text(allCrystalRandomNum());

        scoreChecker(crystal4);

        // console.log(allCrystalRandomNum() + " crys4");
        // alert(crystal4);
    });
});

// Add sound and animation



