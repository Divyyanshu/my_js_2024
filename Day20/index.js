const train = {
    trainName: "Jaipur - Udaipur",
    book: function (passangerName, trainNo) {
        console.log(`${passangerName} has booked a ticket on ${this.trainName}(${trainNo})`)
    }
}

train.book("Divyasnhu Tailor", "687286")

const train2 = {
    book: function (passangerName, trainNo, trainName) {
        console.log(`${passangerName} has booked a ticket on ${trainName}(${trainNo})`)
    }
}

train2.book("Divyasnhu Tailor", 687286, "jaipur-mumbai")


// this object using this.binding fuction ,methods

function printName() {
    console.log(this.firstName)
}


// making two object different diffrent name
const person1 = {
    firstName: "divyanshu"
}
const person2 = {
    firstName: "mayank"
}


printName.call(person2)