// basic funnction 

function helloworld(a, b) {
    console.log(a + b)
}

// helloworld(10,5)

// is used i higherr order function arrow function
const arrowArray = (a, b) => {
    console.log(a - b)
}
arrowArray(10, 8)

const obj = {
    name: "jai",
    age: 45,
    city: "delhi",
    address: "rajsthan",
    getdetails: function getdetails() {
        console.log("xyz")
    }
}

console.log(obj.name)
console.log(obj.address)
console.log(obj.city)
console.log(obj.address)
console.log(obj.getdetails())
console.log(obj)

const allKeys = Object.keys(obj)

console.log(allKeys)
const allvlues = Object.values(obj)
console.log(allvlues)

console.log(`${allKeys} = ${allvlues}`)
