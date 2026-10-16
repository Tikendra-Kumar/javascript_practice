// async function getData() {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(true){
//                 console.log("Hello Word");
//             }
//             else{
//                 console.log("Nothing else:")
//             }
//         }, 2000)
//     })
// }
// async function main() {
//     console.log("before");
//     let data = await getData();
//     console.log(data);
//     console.log("after");   
// }
// main();

//simple
async function name() {
return "Hello Word";

}
let n= name();
console.log(n);
n.then((data)=>{
    console.log(data)
});