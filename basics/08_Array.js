// Array is an object it is a  collection of  multiple elements under a single variable
// in javascript array is resizeable you can add more elemnts after declaration of array array are not associative you can declare array
// Array is give shallow property means access in original array give refernce in original array deep copy means access in copy aray not in original array
// how to declare array
let myArray = [0,3,4,5,6];
console.log(myArray);
let myArr = new Array(3,4,5,5);
console.log(myArr);
// Array methods
myArr.push(5);
console.log(myArr);
// push is add value in array from the last
// popis the method of array in which pop is delete value of array in the last we declare pop without an argument
myArr.pop();
console.log(myArr);
// unshift is the method of arry insert the element in the starting of array
myArr.unshift(4);
console.log(myArr);
// shift is the method of array remove element in the starting of array
myArr.shift();
console.log(myArr);
// includes for question and answer it is the method give answer in true or false
// join humare array ko string m convert krdeta h dekhne m similar hoge pr type of string hoga join wlre array ka
// slice or splice method
// slice method array ko manipulate ni krta h but splice array ko manipulate krta hai
// declare slice or splice method
const myar1 = new Arr (myArr.slice(1,3));
console.log(myar1);
console.log(myArr);
// splice method origial array ko manipulate krta h pr output m range value ko deta h mtlb humne agr 1 2 range likhi toh wo wohi dega pr wo original array ko chng krdega
console.log(myArr.splice())

// array agr do array lere h or unpr mehtod lgare h jse 
const marvel_heros = ["thor","ironman","btaman"];
const new_heros = ["superman","badman","shaktiman"];
marvel_heros.push(new_heros);
console.log(marvel_heros);
// ye jo new heros wala array h as a element lelega array k andr array ab 0 1 2 or new heros ko 3 element lega ye
// or agr hume 3 element wle k elemeent ko search krna h toh [2] [1]
// concat do array ko add krta h or new array return krta h existing arrray return ni krta hai
// push return krta hai existing array ko pr concate return krta h new array ko
// spread operator do array ko spread krdeta hai
// flat method jb use hota hai jb array k andr array array k andr array ye new array retur karega ek single concatinate array or isme argument dena hota hai kitni depth tk solve krna hai
// isarray se pta chalega array hai ya ni hai or from se array m convert hojayega agr array ni hai toh
// .of method