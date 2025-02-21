/*

The strict equal to operator === evaluates to
true if both the values and the types of the operands are the same.
false if either the values or the types of the operands are not the same.

*/


// Note: same value, same type
console.log(2 === 2);  // true

// same value, different type
console.log(2 === "2");  // false



//.........................NOTE.......................................

/*

Difference between the == and === operators.
The == (equality) operator only checks the values of the operands and not their types. For example,

However, the === (strict equality) operator checks both the values and types of the

// only checks the values
console.log(2 == "2");  // true

// checks both the values and the types
console.log(2 === "2");  // false
*/