// it is most important basic of js because its define how javascript run over program how it execute over program
// javascript single thread process language hai kyuki isme sb process m hota hai

// execution context do part m hota hai 
// 1 global execution useContext
// 2 functional execution context or function execution context 
// 3 eval execution context monggose m use hota hai wo
// jb js ko code diya jata hai toh first global ec hota hai ye toh hoga hi or ise ek variable refer kiya jata hai this
// agr run karege global execution ko browser ka  execution  context alg hota hai or node wagera execution context alg hota hia 
// browser ka exexution imp hota hai usme this ki value object hoti hai thread k andr execute hota hai single thread p work hota hai js mein
// do phases m execution hota hai iska memory  creation phases or creation phase same hai dono
// two types of phase in which execute
// 1 memory creation phase iske andr sirf variable wagera ko memory of space diya jata hai nsirf jgha allocate hoti hai bs
// 2 execution phase  sb execute isme hota hai
// hume dekhna hai ki code kaise execute hota hai toh ex 
let val1 = 10;
let val2 = 5;
function addNum (num1,num2){
    let total = num1+num2;
    return total

}
let result1 = addNum(val1+val2);
let result2 = addNum(10,5);
// steps how to execute code in javascript according to this example
// 1 global execution  se run hota hai or this word m allocate krdege code ko or global environment or global execuion same hai 
// 2 memory phase m sare variable ko store karege ounke name liye jayege or unme sbko value dege undefined
// .val1 = undefined
// .val2 = undefined
// . addNum = defintion //(ye hai function toh isme undefined ni defintion kyuki sirf define hi hua hai function execute ni kiya hai)
// . result1 = undefined
// . result2 = undefined 
// first cycle cmplt memory phase cmplt ye hoga hi hoga
// 3 Execution phase 
// 1 . val1 ko milegi = 10
// .val2 = 5
// .addNum function hai toh alg apna new environment bnayega function jitni br bhi ayega wo apna alg environment bnayega 
// isme new variable enviroment +  execution thread
// ab addNum function hai dusra box bnayega toh usme dono process dubara hoge memory phase or execution phase pe addNum k liye
// add num k bd hum jb jayege toh next line m add ki valu hi mngre hai tb hume ye function ka bnan padega pr hume addNum ki puri defintion dekhni hai
// Memory phase addNum 
// . val1 = undefined
// . val2 = undefined
// total = undefined
// execution phase
// num1 = 10
// num2 = 5
// total = num1 +num2 = 15 
// ye value ane k bd sara dlt bhi hota hai or phirse global execution wle phase pr hi poch jata hai 
// 15 ayega answer kyuki  val1 ki value hai 10 val2 ki value 5 hai
// ye ab jayega global execution phase mein kyuki total return kra hai toh ye jayegi global execution phase mein
// dlt honek bd global execution m result1 ki value hogi 15
// ab result2 ye bhi ek function hai
// dubara se new variable environment + exexcution thread  ye dubara hoga memory phase execution or total value ane k bd dlt global execution m value chli jayegi




// ++++++++++++++++++++++++++++++ call stack +++++++++++++++++++++++++++++++++++++++++++++++++++++==========

// jse humare pas koi bhi function hai or wo stack m call hoga or  exceute hoga or bhr nikl jayega pehel global execution phir sare function ayege
// bht sare function ek sth rkhe hai toh pehel konsa bhr niklega
// stack m lifo use hota hai last in first out

