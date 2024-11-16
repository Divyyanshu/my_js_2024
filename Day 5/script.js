// array Methods 
// 1. push 
// const numberArray = [15,2,3,4]
// const newArray = [] ; 
// for(let i=0 ; i < numberArray.length ; i++){
//     newArray.push(numberArray[i])
// }

// console.log(newArray)

// // for of loop 
// for (let item of numberArray){
//     newArray.push(item)
// }

// include 
//you have to create a new array 
// then you have to add a new item to that array
//if the item is already exist in the array console.log('item already exist) if item is not in the array push the item in the array ;

// const friends = ["divyanshu" , "jai" , "ankit" , "harsh" , "mayank"];
// const newFriendsArray = "jai";

// if(!friends.includes(newFriendsArray)){
//     friends.push(newFriendsArray)
//     console.log(newFriendsArray)
// }else{
//     alert("invalid")
// }
// console.log(friends)

// splice methods 

// const products = ["ac", "cooler", "fan", "washing machine", "mobile", "laptop"];

// const newProducts = products.splice(0, 7, "texture", "jooker");

// console.log(newProducts)
// console.log(products)

const numbersArr = [1, 2, 3, 4, 5];

const findOutput = numbersArr.findIndex((item) => {
    return item > 4;
});

console.log(findOutput);