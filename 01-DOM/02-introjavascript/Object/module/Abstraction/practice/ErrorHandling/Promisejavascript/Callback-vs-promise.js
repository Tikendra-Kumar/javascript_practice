function step1(callback){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("Step 1 done");
          callback();
        }, 2000);
    });
}
//then:
function step2(callback){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("step 2 done")
           callback();
        }, 2000);
    })
}
//and
function step3(callback){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("step 3 done");
           callback();

        },2000); 
    })
}
// now we can chain
step1(()=>{
    step2(()=>{
        step3(()=>{
            console.log("All steps completed"); 
        });
    });
});