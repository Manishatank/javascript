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
// const regular = {
//     age: 24,
//     fullName: {
//         userName:"manisha",
//         firstName:"manisha",
//         lastName:"Tank"
//     },
// }
// console.log(regular.fullName.lastName);
// // agr hume do object ko jodna hai toh hume tisra variable bnkr or dono object jse object3 = {obj1, obj2}nhi krskte iska mtlb hoga pehel object k andr object
// const obj3 = Object.assign({},obj1,obj2);
// console.log(obj3);
// // curly braces is mein as a target km karega agr ni lgayege blank curly bracs toh iska mtlb h sari object ki value ek hi mein h or targrt ki value of variable dono same hote hai
// // but hum use karege spread method ...
// ex const obj3 = {...obj1,...obj2}
// console.log(obj3);
// // ... spread method hai
// // datbase se jb value ati hai toh array object ki form m ati hai
// const obj = [
//     {
//         id:"mzn",
//         name:"manisha"
//     }
// ]
// // koi value acces krni hai ye hai array ka object toh variable name obj[1].name
// // .name isliye kyulki array k andr object hai
// console.log(Object.keys(obj));
// // means hume object ki keys chahiye or kisobject ki keys chahiye define krna pdta hai
// // iska jo data type ayega wo arrray m ayega
// // agr kisi value ka pta lagana hai object k pas wo value hai ya ni toh use kareg hasownProperty('')jo value puchni hai
// console.log(obj3.hasOwnProprety(''));
// iska jo resullt ayega wo boolean ma ayega
// destructuring array ki bhi hoti hai or object ki bhi
const course = {
    coursename:"js",
    courseprice:"123",
    courseInstructor:"Manisha"
}
const {coursename} = course
// valuea ccess krni hai course value courseconstructor curlly braces mein jo find krni hai or course se value leni hai method hai kisi value ko access krne k liye
console.log(coursename);
// name agr bda lgra hai toh coursename: name ye name coursename ki jgha name ho jayega
// api jo ati hai json method mein ati hai 
// json ki value bhi string m hoti hai wobhi object hai value bhi stiring hoti hai or key bhi string or koi variable ni hota hai
// ex {
//     "name":"manisha",
//     "class":"btech"
// }
// json form pehle api backend se xml form m ati thi
// api hamesha jaruri ni hai ki object m nile kbhi kbhi array k andr bhi object 