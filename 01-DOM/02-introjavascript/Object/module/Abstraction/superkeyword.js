// class animal{
//     constructor(name){
//         this.name= name;

//     }
// }
// class dog extends animal{
//     constructor(name,bread){
//         super(name);    
//         this.name = name;
//         this.bread =bread;

//     }
// }
// let d1 = new dog("pappi", "husky");
// console.log(d1.name);
// console.log(d1.bread);  

//using super to call parent methods
class animal{
    speak(){
        console.log("animal makes a sound");

    }

}
class dog extends animal{
    speak(){
        console.log("dog barks");
        super.speak();
    }
}
let d = new dog();
d.speak();