/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here

emotions("happy", function laugh(h) {
    var laughter = "";
    for (var l = 0; l < h; l++) {
        laughter += "ha";
    }
    return laughter + "!";
});

// ^^^^^ it worked after tweaking and passed but not sure if I understand “inline” yet…

// call the emotions function here and pass in an
// inline function expression
