let score = "33abc";
// it is not a number or not a string
console.log(typeof score);
// second method write typeof in method
console.log(typeof(score)); 
// output in string data type in small letter of string if we try to convert data type  in other type
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
// output of valueInNumber
console.log(valueInNumber);
// Nan is also a data type if the value is chng in output but value is not chng give nan not a number
// if value of score is null output is 0 in valueNumber conversion me and typeof show object 
// if undefined value of score output undefined in typeof and in valueInNumber is Nan
// if value is boolean true is 1 and false is 0
// if value is string it is not convert then output is Nan

// Notes
// "33"= 33 in number
/*"33abc"=not convert easily give Nan type is number */
let loggedIn = 1;
let value = Boolean(loggedIn);
console.log(value);
// if value is empty outuput is false "" otherwise "name" output is true
// if we convert in string a number vlue is a number but typeof is string

