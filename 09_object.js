// two types se objects bnate hai literals ki tarha or constructor ki tarha agr constructor ki trha baangea toh singleton banega
// object literals 
// Object.create /ye bna ek object humne object declare kiya constructor ki trha isme singleton ho mtlb single instance
// // object bna hai literals ki trha
// const user = {
// name:"Manisha",
// class: 5,
// age : 22,
// };
// // object ko access kase kare 
// // two mwthods to access object first 
// console.log(user.class);
// // object ko hum square brackets mein bhi ikh skte hai 
// // console.log(user["name"]); pr key value apki string ki trha likhi jayegi kyuki ye name ko asa a string ki trha leta hai
// // square braket wla method tb use hota ahi jb humare pas do string ho key bhi strin mein ho or value bhi string m ho toh access krne k liye square backets ki trha use hota hai
// // how to declare symbol is a data type of javascript unique
// const mysm = Symbol("Key1");
// // symbol ki value object m declare kre but ise declare nhi hogi
// // const obesd = {
// //     mysm: "key1"
// // }
// const obsed ={
//     [mysm]:"key1"
// }

// hume symbol key square bracket m likhni hogi
// console m bhi access square bracket k sth krna padega
// console.log(user[mysm]); 
// value m koi vhng ni ayega pr data type se pta chaljayega 
// hume symbol object m declare krne k liye ye process krna pdta hai ek object bnkr uske bd symbol declare krke usme object m use krna hai square bracket k sth use krna hai or accse krna hai console m toh bhi bracket m use krna hai
// object ki value . k sth access krte hai object name plus dot or key value
// agr value chng krni hai object ki toh objectname . or = krke value overwrite krni hai
// agr hume value freeze kkrni hai toh Object.freeze or object name kis object pe lgana wo object
// how to declare a function in js
// user it is object . greeting it is function name
// user.greeting = function(){
//     console.log("my new code using function");

// }
// console.log(user.greeting);
// iska output ayega undefined isliye function ko brackets m use krna padega
// console.log(user.greeting());
// singleton object 
// const trienew = new Object()
// console.log(trienew)
// ye singleton object hai istime humne ise koi value ni di ha toh ye abhi output blank hi dega 
// literals m 
// const trienwe = {
    
// }
// console.log(trienwe);
// ye literals hai or isme bhi humne koi value ni di hai toh ye bhi output same hi dega curly braces bs differnce itna hai ki ye literals hai
// singelton m value kse add krni hai
// const ni likhna hai kyuki hume wapis se declare ni krna hai sirf value deni hai 
// trienew.name="manisha"
// trienew.id = "234abs"
// console.log(trienew);
// objects k andr objects kse dege 
const regular = {
    age: 24,
    fullName: {
        userName:"manisha",
        firstName:"manisha",
        lastName:"Tank"
    },
}
console.log(regular.fullName.lastName);
