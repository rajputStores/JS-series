/*
The equal to operator == evaluates to
true if the values of the operands are equal.
false if the values of the operands are not equal.

Note: In JavaScript, == is a comparison operator, whereas = is an assignment operator. If you mistakenly use = instead of ==, you might get unexpected results.

*/

// NOte: same value, same type
console.log(5 == 5);  // true

// same value, different type
console.log(2 == "2");  // true

// different values, same type
console.log("hello" == "Hello");  // false