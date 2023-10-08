/*There area two ways to create an object
                 1.Single Ton
               2.Object Literals
*/
// There are 2 ways to access the the values of objects :
//      1. eg obj.name ...........System Processes key written in this form "name" .So accesing the 
//                                value of objects in this form is not considered  a good practice

//      2. eg obj["name"]
const  obj ={
    name :"Furqan Lateef",
    "college":"CCSIT",
    address:"Moradabad",
    operationalDays:["Monday","Tuesday","Wedensday","Saturday"],
    rating : true,
    ratingValue : 8

}
// console.log(obj["college"])
// console.log(obj.college)
// obj.name = "Burhan Lateef"
// Object.freeze(obj)
// obj.college="Vignan University"
obj.greeting = function(){
    console.log("Hello Furqan")
}
obj.greetingTwo = function(){
    console.log(`Helle ${this.name} how are you`)
}
console.log(obj.greeting())
console.log(obj.greetingTwo())
console.table([obj])