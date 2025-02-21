// Note: The typeof operator gives the data type of the variable.

//Type of for String
const str="Manish Singh";
console.log(typeof str);  //String

const str2 = '3';
console.log(typeof str2); // string

const str3 = 'true';
console.log(typeof str3); // string


//typeof for Number

const number1 = 3;
console.log(typeof number1); // number

const number2 = 3.433;
console.log(typeof number2); // number

const number3 = 3e5
console.log(typeof number3); // number

const number4 = 3/0;
console.log(typeof number4); // number


// ypeof for BigInt
const bigInt1 = 900719925124740998n;
console.log(typeof bigInt1); // bigint

const bigInt2 = 1n;
console.log(typeof bigInt2); // bigint


// typeof for Boolean
const boolean1 = true;
console.log(typeof boolean1); // boolean

const boolean2 = false;
console.log(typeof boolean2); // boolean

// typeof for Undefined
let variableName
console.log(typeof variableName1); // undefined

let variableName2 = undefined;
console.log(typeof variableName2); // undefined

// typeof for null
const name = null;
console.log(typeof name); // object

console.log(typeof null); // object


