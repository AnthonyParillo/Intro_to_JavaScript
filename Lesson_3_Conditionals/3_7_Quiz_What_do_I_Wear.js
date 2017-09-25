/*
 * Programming Quiz: What do I Wear? (3-7)
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;

// your code goes here

// Small
if ((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve > 8.12 && shirtSleeve < 8.38)) {
    console.log("S");
}
// Medium
else if ((shirtWidth > 19 && shirtWidth < 22) && (shirtLength >= 29 && shirtLength < 30) && (shirtSleeve > 8.37 && shirtSleeve < 8.63)) {
    console.log("M");
}
// Large
else if ((shirtWidth > 21 && shirtWidth < 24) && (shirtLength >= 30 && shirtLength < 31) && (shirtSleeve > 8.62 && shirtSleeve < 8.88)) {
    console.log("L");
}
// XLarge
else if ((shirtWidth > 23 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength < 33) && (shirtSleeve > 8.87 && shirtSleeve < 9.63)) {
    console.log("XL");
}
// 2XL
else if ((shirtWidth > 25 && shirtWidth < 28) && (shirtLength >= 33 && shirtLength < 34) && (shirtSleeve > 9.62 && shirtSleeve < 10.13)) {
    console.log("2XL");
}
// 3XL
else if (shirtWidth >= 28 && shirtLength >= 34 && shirtSleeve >= 10.12) {
    console.log("3XL");
}
//N/A
else {
    console.log("N/A");
}
