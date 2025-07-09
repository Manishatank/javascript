// variable and constant
// variable is a container that store some value in computer memory it is a storage that store value in computer memory
// variable value is change according to conditions and situation
// constant are  not change if we declare then it is always be same or constant 
// keywords are reserved words in programming language that has specific purpose and specific work in programming language
const accountId= 12344;
let accountName = "manisha";
var accountEmail = "tankmanisha05@gmail.com";
// accountId = 2354;
console.log(accountId);

/*console.table is a type or method of javascript that displayed data in tabular form that give data in tabular form read or write all variable name in console.table it use square brackets
ex  console.table([accountId , accountName])*/
console.table([accountName,accountEmail,accountId]);

/*var is not prefer in new javascript because of issue of block scope and function scope */
/*only use let and const */
/*var is global scope and reaasignes and redeclared 
let is block scope it is reassigned but cannot be redeclared
const is not reassigned and not redeclared it is constant */