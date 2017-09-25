/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 */
 
// declare your function
function laugh(num) {
    var ha = "";
    for (var h = 0; h < num ; h++) {
         ha = ha + "ha";
    }

// then, call it!
    return ha + "!"; //don't put punctuation in console.log
}

// print the output with console.log
console.log(laugh(10));