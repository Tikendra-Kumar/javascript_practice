class AuthenticationError extends Error{
    constructor(message){
        super(message);
        this.message = "Authenticator Error";       
    }
}
function login(username, password){
    if(!username || !password){
        throw new AuthenticationError("user have enter the valid username and valid password");
       
    }
     if(username! = "Raja Rajput"){
        throw new AuthenticationError
        }
   
}