// In certain situations, JavaScript automatically converts data of one type to another (to the right type). This is known as implicit conversion.


// numeric string used with + gives string type
let result;

// convert number to string
result = "3" + 2; 
console.log(result, "-", typeof(result));

result = "3" + true; 
console.log(result, "-", typeof(result));

result = "3" + null; 
console.log(result, "-", typeof(result));


/*

Here,

"3" + 2 - Converts the number 2 to string and joins it to "3", resulting in the string "32".
"3" + true - Converts the boolean true to string and joins it to "3", resulting in the string "3true".
"3" + null - Converts null to string and joins it to "3", resulting in the string "3null".

*/