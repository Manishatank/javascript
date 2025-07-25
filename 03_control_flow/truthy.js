// if we assume string value is truthy 
const userEmail = "manisha"
if (userEmail){
    console.log("its is the true value")
}else{
    console.log("truthy")
}
// agr koi value ni hoti toh truthy print hota 
// value hai toh its is the true value print hoga 

// ++++++++++++++truthy true and falsy value +++++++++++++++++++
// falsy value 
// false , 0, -0,Nan,null , undefined, BigInt 0n , ""
// truthy value 
// "0" STRING K ANDR AGR 0 hai toh truth value hai
// 'false' truthy value hai chahe single quotes se likho ya double quaotes
// string k andr kch bhi value add hogyi toh truthy value hai
// [],{}, function(){} ye bhi truth value hai
// agr hume array check krna hai toh hum direct ni karege
// if(userEmail.lenth=== 0 ){
//     console.log("array is empty")
// }




// +++++++++++++++++++++++++++++++++++++++Nulish coalesing operator(??): work only null undefined +++++++++++++++++++++++++++++++++++++
let val1;
val1 = 5 ?? 10 ;
val1 = null ?? 15;
val1 = undefined ?? 18;
console.log(val1);
// its operator is only for null and undefined Nullish or null operator both are same


// ternaary operator
// condition ? true : false
// ex 
const iceTeaPrice = 100;
iceTeaPrice <=80 ? console.log("this is true") : console.log("this is false");