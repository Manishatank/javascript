// Date is object how to declare date
let myDate = new Date();
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toTimeString());
// month 0 se start hote hai javascript k andr
// timestamp is a digital record of date and time when event and occured and data was created modifid and accessed
// how to use timestamp
let myCreate = new Date("2025","01",23);
console.log(myCreate);
let myTimeStamp = Date.now();
console.log(myTimeStamp);
// agr hume exact time chahiye
console.log(myCreate.getTime());
// String interpolation means 
// (`&{variable value}`) this is string interpolation
new Date.toLocaleDateString('Dafault',{
    weekday: "",
    timeZone:"$",
    

})

