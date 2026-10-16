class staticdemo{
    static a =20;

    b=30;   
    static D1(){
        console.log(this.a);

    }
    D2(){
        console.log("This is a non static method");

}
}
let d= new staticdemo();
console.log(staticdemo.a);
staticdemo.a=100;
console.log(staticdemo.a)


console.log(d.a);
staticdemo.D1();
d.D2();

