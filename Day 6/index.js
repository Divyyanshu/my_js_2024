// const named = [{firstName : 'divyanshu' , lastName : 'Tailor'},{firstName : 'Mayank' , lastName : 'Jain'}]

// const fullName = name.map((item)=>{
//  return item.firstName + item.lastName
// })
// console.log(fullName)
// console.log(named)


const products = [{
    name: 'mobile',
    price: 18000
},
{
    name: 'Laptop',
    price: 15000
},
{
    name: 'iron',
    price: 4000
}]

const FilterOutput = products.filter((item) => {
    // console.log(product)
    return item.price > 16000
})

console.log(FilterOutput)
console.log(products)

const product = [{
    name: 'mobile',
    price: 18000
},
{
    name: 'Laptop',
    price: 15000
},
{
    name: 'iron',
    price: 4000
}]

const findOutput = product.find((item) => {
    // console.log(product)
    return item.price > 5000
})

console.log(findOutput)
console.log(product)
