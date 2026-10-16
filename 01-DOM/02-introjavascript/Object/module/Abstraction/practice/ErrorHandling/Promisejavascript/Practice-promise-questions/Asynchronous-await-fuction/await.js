// async function getUser() {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(true){
//                 resolve("user data");
//             }
//             else{
//                 reject("error");
//             }
//         }, 6000);
//     });
// }
// async function main() {
//     console.log("befor");
//     let data = await getUser();
//     console.log(data);
//     console.log("after");
// }
// main();
//Example 2
async function getUser() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(false){
                resolve("user data");
            }
            else{
                reject(new Error("Network request failed"));
            }
        }, 6000);
    });
}
async function main() {
    console.log("befor");
    try{
         let data = await getUser();
        console.log(data);
    
}
catch(error){
    console.log(error.message)
}
console.log("after");
    }
    main();
   