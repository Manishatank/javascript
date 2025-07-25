// syntax of for loop  
for ( let index = 0; index<= 10; index++){
    const element = index;
}

// loop condition k sth 
for (let index = 0; index <= 10; index++){
    const element = index;
    if(element == 5 ){
        console.log("this is perfect")
    }
    console.log(element);
}

// loop k andr loop bhi likh skte hai


for(let i = 0; i<= 10; i++){
     console.log(`this is outer loop:${i}`);
    for(let j=0; j<=10; j++){
        console.log(`this is Inner loop value: ${j} ,  this is inner loop value:${i}`);
    }
    
}

// first outer loop chalega uske bad wo inner loop ko chalayega
// phir uske bd dubara repeat hoga
// break and continue 
// break means jump out of the loop for control the flow of loop use break
// continue means skip your conditon one time and cotinue your loop again 