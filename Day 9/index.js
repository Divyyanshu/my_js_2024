// const details = {
//     firstname: "divyanshu",
//     classname: 12,
//     school: "smps"
// }

// const keys = Object.keys(details)
// console.log(keys)
// const values = Object.values(details)
// console.log(values)

// console.log(details)


// entries
// const entries = Object.entries(details)
// entries.forEach((entry) => {
//     // console.log(entry)
//     console.log(entry[0] + ":" + entry[1])
// });


// spread oprator (...)

const books = {
    bookname: "ikigai",
    author: "jai shankar",
    price: 500,
    edition: 2
}
const books2 = {
    booknamed: "karma",
    authors: "anshuman",
    priced: 700,
    editions: 25
}

const bookstore = { ...books, ...books2 }
const bookstoreadd = { age: 5, ...books2 }
const bookstoreadd2 = { age: 41, ...books, database: "orcle" }
console.log(bookstoreadd2)
console.log(bookstoreadd)
console.log(bookstore)