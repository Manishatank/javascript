// // this current context ko refer krta hai context ka mtlb hai jispr current time pr bt hori hai mtlb usi time 
// // jaise hum ek object bnate hai registration k liye
// const userName={
//     name:"manisha",
//     age:22,
//     // isik andr ek function bnare hai
//      welcomeMessage: function(){
// //    yha humne ek key ko function ki value assign ki hai
//       console.log(`my value is${this.name}, this is my username`)
//       console.log(this);
//      }
// }
// // function call krte hsi
// userName.welcomeMessage();
// // agr hum iske jgha username ki value dusri define karege toh usme jo current value di hai wo print hojayegi kyuki humne this siya tha or ow current context p work kkrti hai
// userName.name = "mahi"
// userName.welcomeMessage();
// agr m khali this ko console krau toh kya ayega pehle function k andr hi try krte hai wo hume complete answer dega current context p kya work kiya
// agr hum console k andr print krayege function k bhr toh wo empty dega curly braces ko dega iska mtlb node k andr blank object show kr hai
// this ki value agr console m jkr karege toh undefined ayegi window ayega kkyuki pehle js browser pr hi run hoti thi or window humara global object hai
// agr hum this ko kisi function k andr console run krte hai toh bhot sari value ati h 
// or bhr run krte hai toh khali ata curly braces blsnk value
// object k andr hi work karega function m agr ko value define karege toh undefined dega
// function chai(){
//      let my = "cha"
//      console.log(this.my);
// }
// chai()
// undefined ayega ye object ki value ko hi lera tha function m ni chlra
// arrow function es6 ka mehtod hai
// how to write arrow function only function keyword is remove thats all
const my = () =>{
     console.log()
}
// undefined ayega
const ne = ()=>{
     let username = "my"
     console.log(this.username);
}
// basic arrow function use isme curly braces use karege toh usme return dena padega ye explict return hai
// undefined output ayega
// arrow function syntax
// ()=>{}braces m parameter pass karege or hum inko kisi variable ko bhi assign krskte hai
// implicit return jb return nhi dege or paranthesi () m likhege toh return ni karna padega
const add = (num1,num2) => (num1+num2);
console.log(add(3,4));
add();
// without return implicit return in arrow function
// object ko return krne k liye hume pranthesis use krna padega islie return use krna padega or agr paranthesis m karege toh undefined ayega

