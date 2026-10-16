// async function test(){
//     return "Hello";
// }
// let result = test();
// console.log(result); //promise{'Hello'}
// result.then((data)=>{
//     console.log(data)
// });

// //why beacuse javascript internally converts it to:
// function test(){
//     setTimeout(()=>{
//         console.log('hii komal')    
//     }, 1000);
// }
//exmple 3- Returning a number
// async function add() {
//     return 10;

    
// }
// let value = add(10);
// //console.log(value); // promise {10}
// add().then((val)=>{ console.log(val)

// })

// .catch((err) =>{ console.log(err)

// })



// Example 4 - Returning a promise inside async
const pro = new Promise((resolve, reject)=>{
    let success = true
    if(success){
        resolve("js")
    }
    else{
        reject("error")
    }
})
async function getData() {
    return pro;    
}
getData().then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
});
