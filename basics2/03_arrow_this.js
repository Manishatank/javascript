// this current context ko refer krta hai context ka mtlb hai jispr current time pr bt hori hai mtlb usi time 
// jaise hum ek object bnate hai registration k liye
const userName={
    name:"manisha",
    age:22,
    // isik andr ek function bnare hai
     welcomeMessage :function myName(){
//    yha humne ek key ko function ki value assign ki hai
      console.log(`my value is${this.userName} this is my username`)
     }
}
// function call krte hsi
userName.welcomeMessage();

