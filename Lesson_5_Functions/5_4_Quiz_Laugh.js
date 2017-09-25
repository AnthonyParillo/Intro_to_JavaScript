/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(h) {
    var laughter = "";
    for (var l = 0; l < h; l++) {
        laughter += "ha";
    }
    return laughter + "!";
}; /* finish the function expression */

console.log(laugh(2));
