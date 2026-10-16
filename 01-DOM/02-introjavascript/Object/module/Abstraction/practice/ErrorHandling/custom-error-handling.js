function checkage(age){
    if(age<17){
        throw new Error("You must be at least 18 years old.");
    }
    return "access granted"; 
}   
try{
   console.log(checkage(15)) ;
    

}
catch(e){
    console.log(e.message);
    console.log(e.name);
}