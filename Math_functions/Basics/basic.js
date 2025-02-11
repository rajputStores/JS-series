const accountId = 123;
let accountEmail = "manishsingh@imsnoida.com";
var accountCity = "Patna";
accountHolder = "Manish Singh";
let accoutState;

// accountId =12345;   [we cannot redeclare or redefine variables which are already defined with const keyword]

console.log(`AccountEmail`, accountEmail); // to print singh data
console.log(`accoutState`, accoutState); // its showing undefined bcoz of we need to initialize the accountState variable

console.table([accountId, accountCity, accountEmail, accountHolder]); // to get all data at a time in tabular form we use console.table

/*

Note:
-> prefer not to use var .
-> because of issue in block scope and functional scope.
-> for getting output execute this in terminal : NODE Math_functions/Basics/basic.js
-> we can redeclare or redefine variables which are already defined with let,var keyword.

*/
