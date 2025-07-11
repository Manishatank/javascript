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
// if we convert in string a number value is a number but typeof is string
let my = "manisha";
// if we convert string into a number then give Nan
let never = Number(my);
console.log(never);
// but datatype is number
console.log(typeof never);
// if we convert number as a string output is number given value
let age = 22;
let newage= String(age);
console.log(newage);
// but typeof is string
console.log(typeof newage);
// in which i have learn conversions
/* first if we convert number as a string 
value is number but type is string
2. if we convert string as a number output is Nan and type is Number */


/******************Operations******************************** */ 
// Operator is a special symbol or keywords that tells compiler or interpreter perform specific mathematical logical operations on values and variables
//  arithmetic operators
// console.log(2+2);additional operator
// console.log(2-2);subtration operator
// console.log(2*2)multiple operator
// console.log(2/2)divisional operator
// console.log(2%2)modulous of 2 define remainder
// == it is abstract equality operator   this operator compare equality after typeconversion and === is strict equality operator  before type conversion if both are not same give return false value 
// we add strings both are string easily add
let str1 = "my";
let str2 = " new";
let str3 = str1+str2 ;
console.log(str3);
// but if one is string and other is different create problem  it represent 12 
// console.log("1"+ 2);string m convert hoga 12
// console.log(1+"2");number m convert hoga 12
// console.log("1"+2+2); string m convert hoga 122
// jo value pehle rahegi usi k according conversion hojayega 
// console.log(1+2+"2"); 32hoga pehel wala add hojayega
// console.log(3+2*4%2); 2 output
// console.log(+true); output 1 ayega pehle incremennt hogya
// console.log(true+);output error hoga
// prefix postfix prefix me value pehle increment hojati hai example console.log(++100);
// postfix m bdme example console.log(100++); output 101
// comparison operator
// console.log(2<1); 2 is less than 1 no answer fale
// console.log(2>1);2 is greater then 1 anser true
// console.log(2<=1);2is less than or equal to 1 false
// console.log(2>=1);2 is greater then or equal to 2 true
// console.log(2!=1);2is not equal to 1 true
// console.log(2==1);2 is equal to 1 false
// if we dontcompare same type of datatype it show problems always compare similar data types 
// ex console.log(2<"2")different type datatypes
// comparison of null is create confusion or problem
// console.log(null>0);false
// console.log(null<0);false
// console.log(null>=0);true
// console.log(null<=0);
// undefined ka comparison kise se bhi kro false hi ayegi value
// in javascript comparison or equallity is different type
// === strict check it is check strictly check data type