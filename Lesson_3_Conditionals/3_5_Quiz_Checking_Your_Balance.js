/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 325.00;
var checkBalance = true;
var isActive = true;

// your code goes here


/*fun but tests correct long hand*/
if (checkBalance === true && balance > 0 && isActive === true) {
    console.log("Your balance is $" + balance + ". You are RICH!!!");
}
else if (checkBalance === false) {
    console.log("Bye Falicia!!!"/*Thank You. Have a nice day!"*/);
} 
else if (isActive === false) {
    console.log("Your account is no longer active."/* + " You have been DENIED!!!"*/);
}
else if (balance === "0") {
    console.log("Your account is empty."/* + "YOU ARE BROKE!! GO AWAY!!"*/);
}
else {
    console.log("Your account is negative. Please contact bank.");
}

/*or short*/

if (checkBalance === true) {
    console.log("Thank You. Have a nice day!");
} else {
    if (balance > 0 && isActive === true) {
    console.log("Your balance is $" + balance + ".");
        } else if (isActive === false) {
            console.log("Your account is no longer active.");
        } else if (balance === 0) {
            console.log("Your account is empty.");
        } else {
            console.log("Your account is negative. Please contact bank.");
        }
}

/*or shorter and cleaner but passes Udacity test and works*/

if (checkBalance) {
    if (isActive && balance > 0) {
        console.log(`Your balance is $${balance}.`); /* Research ${…} */
    } else if (!isActive) {
        console.log("Your account is no longer active.");
    } else if (balance === 0) {
        console.log("Your account is empty.");
    } else {
        console.log("Your balance is negative. Please contact bank.");
    }
} else {
    console.log("Thank you. Have a nice day!");
}