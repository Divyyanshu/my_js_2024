// function printAddress(state){
//     console.log(`my name is ${this.firstName} iam from ${this.city} which is located in ${state}`);
// }

// const person1 = {
//     firstName: "divyanshu",
//     city : "bhilwara"
// }

// // printAddress.call(person1 ,)
// // printAddress.apply(person1 ,[56])

// const bindfn = printAddress.bind(person1 ,['rajasthan'])
// bindfn()



// hoisting
// VAR keyword is hoisted in inital phase and value is undefined 
// console.log(window)
// console.log(firstname)
// var firstname;


// LET & CONST temporal dead zone

// console.log(a)

// let a = 56; insitalized
// let a; declared


// console.log(k)

// const k = 56;


console.log(greet(),greet1(),greet2())

const greet = function(){
    console.log("hello const")
}
let greet1 = function(){
    console.log("hello let")
}
var greet2 = function(){
    console.log("hello var")
}


console.log(greet(),greet1(),greet2())