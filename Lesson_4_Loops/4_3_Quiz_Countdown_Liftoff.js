/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

// your code goes here
var num = 60
var countDown;

while (num >= 0) {
    
    countDown = num === 50 ? "Orbiter transfers from ground to internal power" : num === 31 ? "Ground launch sequencer is go for auto sequence start" : num === 16 ? "Activate launch pad sound suppression system" : num === 10 ? "Activate main engine hydrogen burnoff system" : num === 6 ? "Main engine start" : num === 0 ? "Solid rocket booster ignition and liftoff!" : "T-" + num + " seconds";
    
    console.log(countDown);
    //decrement num
    num = num - 1;
}