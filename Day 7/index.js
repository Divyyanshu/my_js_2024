const fruits = [
    'mango',
    'graphes',
    [
        'papaya', 'cherry'
    ],
    'watermelone'
]

// const [a, b, [c, d], e] = fruits
// console.log(a, c, d, e)


// const [firstfruit , ...rest] = fruits;
// console.log(firstfruit)
// console.log(...rest)



// object destructor 

const person = {
    named: "divyanshu",
    postion: "software developer",
    address: {
        state: "rajasthan",
        city: "udaipur"
    },
    salary: 150000,
    hobbies: ["travelling", "hiking", "bike riding"]
}

const { named, age = 22, address: { state, city }, hobbies, salary } = person

console.log(person)
console.log(named, hobbies, age, salary)