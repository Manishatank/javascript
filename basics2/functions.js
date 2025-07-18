// function is used to perform multiple task in a single code
// function syntax function keyword function name ex
function myname (){
    console.log("m");
    console.log("a");
    console.log("n");
    console.log("i");
}
myname
// ye hai reference
myname()
// ye hai execution
// parameter is a variable listed in function act as a placeholder for the value that will be passed value passed
// argument is a ctual value will be passed in a function
// create a function to add two numbers
// parameters when those value when we define function defintions
// arguments those value then use for function call time
// function number (num1,num2){
//     console.log(num1+num2);
// }
// number();
// istime nan dega kyuki humne koi value hinni di hai
number(2,3);
// function m agr console use kare hai iska mtlb ye ni hai ki return karega value
const result = number(2,3);
console.log(result);
// toh result ki value ayegi undefined agr function m consolekrte hai iska mtlb yeni hai ye return kare value ye alg concept hota hai
// agr humne ek br return exexcute krdiya toh uske bd function kch execute ni karega
// return ko kse likhte hai
function number(num1,num2){
    //   let result = num1+num2;
    //   return result
    //   second method se bhi return krskte hai without variable declare kare bina
    return num1+num2
}
// jb bhi mera function execute hoga toh ye return karega result
// string interpolation se
function logedIn(userName){
    return `${userName} just logged in`
}
// logedIn("manisha")
// ye execute hua or isne value return krdi pr apne print krne k liye kaha hinhi hai print krne k liye console use karege
console.log(logedIn("manisha"));
// agr koi value pass hini ki hai toh ayega undefined