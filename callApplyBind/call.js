// using function As normal way

// let userDetails = {
//     name: "Ravi Kumar",
//     age: 30,
//     city: "patna",
//     printDetails: function () {
//         console.log(`My name is ${this.name} and my age is ${this.age} and my city is ${this.city}`)
//     }
// }
// userDetails.printDetails()

// let userDetails2 = {
//     name: "aditya",
//     age: 20,
//     city: "delhi",
//     printDetails: function () {
//         console.log(`My name is ${this.name} and my age is ${this.age} and my city is ${this.city}`)
//     }
// }

// userDetails2.printDetails()

// let userDetails3 = {
//     name: "sanu",
//     age: 15,
//     city: "new delhi",
//     printDetails: function () {
//         console.log(`My name is ${this.name} and my age is ${this.age} and my city is ${this.city}`)
//     }
// }

// userDetails3.printDetails()

function printDetails() {
    console.log(`My name is ${this.name} and my age is ${this.age} and my city is ${this.city}`)
}

let userDetails = {
    name: "Ravi Kumar",
    age: 30,
    city: "patna"
}
printDetails.call(userDetails)

let userDetails2 = {
    name: "aditya",
    age: 20,
    city: "delhi"
}
printDetails.call(userDetails2)


let userDetails3 = {
    name: "sanu",
    age: 15,
    city: "new delhi"
}

printDetails.call(userDetails3)


