// IIFE means immediatelly invoked function expression 
// or iife isliye use hota hai ki global scope k pollution se bchne k liye iimdiately function run krane k liye 
// interview purpose global scope k polltuion se prblm hoti hai uske variable declation uske pollution ko htane k liye iife ka use krte hai
// iife code komimmediately run toh krdeta hai pr use ptani hota hai kha stp krna hai isliye semo column lgana chahiye
// syntax (isme apna function declare krna hai or)(exexute hoga function iski wjhse) domparanthesi
// ex 
(function my(){
    console.log(`db connected`)
})();
// ye hai iife method function execute hojayega immmediately
// arrow function bhi chaljayega isme ex
(()=>{
    console.log(`db connected two`)
})()
// answer dono se ayega bs semi column lgana hai wrna error ayega first code ko end krne k liye tbhhi dusra run hoga wrna error hi dega
// named iife jb uska name ho jse pura function likha jata hai
// unnamed defie arrow function jha name ni hota without name 
// parameter pass krna hai toh krdo
// do agr iife likhne hai ek sth toh pehle wle m end mein semicolumn likhna hai tbhi execute hoga wrna oh error hi ayegga