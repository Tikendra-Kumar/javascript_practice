const person= {
    great(){
        return "hello";

    }

}
 const student= {
    great(){
        return super.great() + " , i am a student";
    }

 }
 Object.setPrototypeOf(student,person);
 console.log(student.great());