// ===GAME TRACKER'S MAIN LOGIC FILE===

// creates the "rollTypes" array that holds roll modifiers
var rollTypes = new Array("natural");
var rollType = rollTypes[Math.floor(Math.random() * rollTypes.length)];
//look into how to pull random element from array
// creates the "turnLog" array that holds player turn data
var turnLog = new Array();
// starting function
function tracker() {
    // add roll modifier prompt
    var ans = confirm("Would you like to enter a roll modifier? Click Ok for yes and Cancel for no.");
    // roll modifier loop if true addModifier function is executed if false gamePrompts and continuePrompt functions are executed
    if (ans === true) {
        addModifier();
    } else {
        gamePrompts();
        continuePrompt();
    }
    // addModifier function code
    function addModifier() {
        var modifier = prompt("Please enter the modifier:");
        rollTypes.push(modifier);
        var ans = confirm("Would you like to enter another roll modifier?");
        if (ans === true) {
            addModifier();
        } else if (ans === false) {
            gamePrompts();
            continuePrompt();
        }
    }
    // gamePrompts function code (application primary function)
    function gamePrompts() {
        var playerName = prompt("Who's turn is it?");
        alert("Dungeon Master should now read scenario. Press \"OK\" when finished.");
        var playerAction = prompt("What action does " + playerName + " take?");
        var i = Math.random() * 20 + 1;
        i = Math.floor(i);
        var turn = playerName + " " + playerAction + " and rolls a " + rollType + " " + i;
        alert(turn);
        turnLog.push(turn);
    }

    // continuePrompt function code
    function continuePrompt() {
        ans = confirm("Would you like to roll again?");
        if (ans === true) {
            do {
                gamePrompts();
                ans = confirm("Would you like to roll again?");
            }
            while (ans === true);
        } else if (ans === false) {
            alert("Hope you had a great game, see you again soon.");
            // this for loop should take the contents of the turnLog array and print it out within the p tags with the id of truns as of now only the first "turn" is printed also the hope you had a great game alert doesn't display.
            for (var n; n < turnLog.length; n++) {
                document.getElementById("turns").innerHTML = (turnLog[n]);
            }
        }
    }
}

// print button logic below
function print() {
    window.print();
}