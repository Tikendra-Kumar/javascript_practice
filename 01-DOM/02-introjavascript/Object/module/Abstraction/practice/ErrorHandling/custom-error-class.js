class validationerror extends Error{
    constructor(message){
        super(message);
        this.validationerror= "Validatio Error";

    }

}
function validateEmail(email){
    if(!email.includes("@")){
        throw new validationerror("user have enterd invalid email");

    }
    return "valid email";

}
try{
    console.log(validateEmail("tikku.com"));
}
catch(error){
    if(error instanceof validationerror){
        console.log("Validation Error = ", error.message);
    }
    else{
        console.log("validation Error = ", error.message);
    }
}