function randomNumber() {
    return Math.floor(Math.random() * 6) + 1
}
function playDice() {
    let result1 = randomNumber();
    let result2 = randomNumber();
    let sum = result1 + result2;
    // if (sum === 7 || sum === 8) {
    //     console.log("you win")
    // } else {
    //     console.log("you lose")
    // }
    sum === 8 || sum === 13 ? console.log("you win") : console.log("you lose")
}

playDice();


const numbers = [1, 2, 3, 4];
const squared = numbers.map((num) => {
    return num * num
});



console.log(numbers)
console.log(squared)