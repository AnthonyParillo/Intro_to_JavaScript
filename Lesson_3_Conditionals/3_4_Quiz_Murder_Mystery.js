var room = "ballroom";
var suspect = "Ms. Van Cleve";

var weapon = "";
var solved = false;

/*Weapons*/
if (room === "ballroom") {
       weapon = "poison";
       if (suspect === "Mr. Kalehoff") {
           solved = true;
       }
} else if (room === "gallery") {
    weapon = "trophy";
    if (suspect === "Ms. Van Cleve") {
           solved = true;
       }
} else if (room === "billiards room") {
    weapon = "pool stick";
    if (suspect === "Mrs. Sparr") {
           solved = true;
       }
} else {
    weapon = "knife";
    if (suspect === "Mr. Parkes") {
           solved = true;
       }
}

if (solved === true) {
    console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}
    else {
        console.log("I don't know whodunnit!?!" + " But it wasn't " + suspect + " with " + weapon + "!");
    }

