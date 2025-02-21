// In explicit type conversion, you manually convert one type of data into another using built-in functions.

let result;

// convert string to number
result = Number("5");
console.log(result, "-", typeof result);

// convert boolean to string
result = String(true);
console.log(result, "-", typeof result);

// convert number to boolean
result = Boolean(0);
console.log(result, "-", typeof result);


/*
Here,

Number("5") changes the string "5" into the number 5.
String(true) turns the boolean true into the string "true".
Boolean(0) converts the number 0 to the boolean false because 0 is considered a falsy value in JavaScript.
*/