// //Instead of
// function step1(callback){
//     setTimeout(()=>{
//         console.log("Step 1 done");
//         callback();
//     }, 2000);
// }
// we can return a promise
function step1(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("Step 1 done");
            resolve();
        }, 2000);
    });
}
//then:
function step2(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("step 2 done")
            resolve();
        }, 2000);
    })
}
//and
function step3(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("step 3 done");
            resolve();

        },2000); 
    })
}
// now we can chain
step1()
.then(()=> step2())
.then(()=> step3())
.then(()=> {
    console.log("all steps completed");
});