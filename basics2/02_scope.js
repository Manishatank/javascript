// // {} curly braces ko hi scope bola jata hai jab ye kisi function k sth ata hai ya conditional statements k sth ata h toh object m bhi ata hai pr wo uska declaration hai ba
// // jo hum curly braces k andr likhre hai wo hai block scope jo sirf function tk hi simit hai 
// // or jo function se bhr bhi km kra hai wo hai globale scope 
// // var global scope hai or redeclared hai
// // closure means where inner function is access variable of outer function
// // how to make function into function
// function one(){
//     const name = "manisha"
//     function two(){
//         const my = "website"
//         console.log(name);
//         console.log(my);
//     }
//     two()
// }
// one()
// // nested if else
//     if(true){
//         const my ="manisha"
//         if(my=== "manisha"){
//             const website = "new"
//             console.log(my + website);
//         }
//         // console.log(website); ise ayega error kyuki website apne scope se bhr define kra hai toh ayega error isko comment krke dekhte hai
//     }
    // console.log(my); iska mtlb my ka bhi ya scope ni hai isliye ye answer ni dega agr isko comment krte hai toh answer ayega
    // +++++++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++++++++++++++++++
 
    // function ko hum normal function k trha bhi define krskte hai or function ko hum variable bnkr bhi function define krskte hai
    now(4)
    function now(num){
    return num + 2
}
// now(4)

// declare function and hold a variable of a function
myva(4)
const myva= function(num){
    return num + 1
}
// myva(4)ise function se pehle declare krde toh
// execute hogya return krdi value pr humne abhi console ni krwai hai
// agr hum function call ko pehle define krde
// agr humne pehle declare krdiya function call ko toh function wle m run hoga pr variable wle mein run ni hoga
// kyuki function ki value humne assign krdi hai variable ki toh ni chlega isme hum function ko use ni krskte pehle without execution