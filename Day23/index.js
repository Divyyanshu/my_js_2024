// function Players(name, team) {
//     this.firstname = name,
//         this.team = team
//     this.sport = function () {
//         console.log(`${this.firstname} plays for ${this.team}`)
//     }
// }

// const virat = new Players('Virat', 'India')
// virat.sport()
// console.log(virat)
// const rohit = new Players('Rohit', 'India')
// rohit.sport()
// console.log(rohit)

// Players()

// function Books(title, author) {
//     this.titleName = title,
//         this.BookAuthor = author,
//         this.FinalBook = function () {
//             console.log(`${this.titleName} book author name is ${this.BookAuthor}`)
//         }
// }
// const ikigai = new Books('Ikigai', "jamson")

// ikigai.FinalBook()

// oops


class Books {
    constructor(name, author) {
        this.name = name, this.author = author;
    }
}

const book1 = new Books('fsd', 'dfsa')
console.log(book1)

console.log(Books)