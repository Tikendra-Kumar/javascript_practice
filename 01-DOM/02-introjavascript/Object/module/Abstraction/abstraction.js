class abstractclss{


    name() {
        throw new Error("Throw the new error")
        
    }

    
}
class student extends abstractclss{
    name(){
        console.log("Hii Tikendra")
    }
    show(){
        console.log("Hello Nitish and Sweety")
    }
}
const obj = new student();
obj.show();
obj.name();