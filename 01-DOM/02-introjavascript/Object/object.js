
const studen = {
    name : "nitish",
    age : "30",
    rollNo:"102325",
    couresename:"Master of computer Application"
    

}
studen.age = "55"
delete studen.name
const numberKyes = Object.keys(studen)
console.log(numberKyes.includes("name"))
const studenOper= {...studen, name:"tikku"}
console.log(studenOper)
const stdudenAssign = Object.assign(studen,{age:"60"})
console.log(stdudenAssign)
//create shallow copy and modify nested value

const shallow ={
 name :"john",
 age:"40",
 location:{city:"nagina", pin:"246752"}
 
}
console.log(shallow)
