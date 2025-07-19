// function is used to perform multiple task in a single code
// function syntax function keyword function name ex
// function myname (){
//     console.log("m");
//     console.log("a");
//     console.log("n");
//     console.log("i");
// }
// myname
// // ye hai reference
// myname()
// // ye hai execution
// // parameter is a variable listed in function act as a placeholder for the value that will be passed value passed
// // argument is a ctual value will be passed in a function
// // create a function to add two numbers
// // parameters when those value when we define function defintions
// // arguments those value then use for function call time
// // function number (num1,num2){
// //     console.log(num1+num2);
// // }
// // number();
// // istime nan dega kyuki humne koi value hinni di hai
// number(2,3);
// // function m agr console use kare hai iska mtlb ye ni hai ki return karega value
// const result = number(2,3);
// console.log(result);
// // toh result ki value ayegi undefined agr function m consolekrte hai iska mtlb yeni hai ye return kare value ye alg concept hota hai
// // agr humne ek br return exexcute krdiya toh uske bd function kch execute ni karega
// // return ko kse likhte hai
// function number(num1,num2){
//     //   let result = num1+num2;
//     //   return result
//     //   second method se bhi return krskte hai without variable declare kare bina
//     return num1+num2
// }
// // jb bhi mera function execute hoga toh ye return karega result
// // string interpolation se
// function logedIn(userName){
//     return `${userName} just logged in`
// }
// // logedIn("manisha")
// // ye execute hua or isne value return krdi pr apne print krne k liye kaha hinhi hai print krne k liye console use karege
// console.log(logedIn("manisha"));
// // agr koi value pass hini ki hai toh ayega undefined
// // ...rest operator bhi kha jata hai or spread operator bhi use pr depend krta hai kha spread hai or kha rest
// // function m reat operator kaise pas hota hai kaise multiple values pas hoti hai bhot sri value ko ek bundle m krna 
// function countCart(...num1){
//     return num1

// }
// console.log(countCart(200,333,555,55,55));

// function countCard( val1,val2,...num2){
//     return num2
// }
// console.log(countCard(33,33,33,3,44,44));
// iska mtlb hai ki agr jo 33 val1 m 33 val2 m rest value output m agyi
// function m koi object kaise pas krte hai
const my = {
    name:"manisha",
    age:23,
    class:"btech"
}
function userName(anyobject){
    console.log(`passed my object${anyobject.name} this is my values${anyobject.age}`);
}
// userName(my);
// direct object bhi pass krskte hai bina bnye 
userName({
    name:"manvi",
    age:23
})
// function m array kse pass kre
const newArr = [22,22,33,44,44]
function mera(getArray){
    return getArray[3];
}
// console.log(mera(newArr));
// array bhi hum bina bnye consolem hi define kr skte hai without declare variable
console.log(mera([22,33,3,33]))