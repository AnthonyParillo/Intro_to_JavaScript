/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;
var name;

while (x <= 20/* your stop condition goes here */) {
    name = x % 3 === 0 && x % 5 === 0 ? "JuliaJames" : x % 3 === 0 ? "Julia" : x % 5 === 0 ? "James" : x;  // check divisibility
    console.log(name); // print Julia, James, or JuliaJames
    x = x + 1;  // increment x
}
