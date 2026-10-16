function test(){
    return "Hello";
}
let result = test();
console.log(result); //promise{'Hello'}
result.then((data)=>{
    console.log(data)
});