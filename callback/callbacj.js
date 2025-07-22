
// console.log("function A")

// const funB = () => {
//     setTimeout(function () {
//         console.log("function B")
//     }, 1000)

// }

// const funC = () => {
//     console.log("function C")
// }

// funB()
// funC()

// const funA = (name, frnd) => {
//     console.log(`hello ${name}`)
//     frnd()
// }

const funA = (name, frnd) => {
    setTimeout(function () {
        console.log(`hello ${name}`)
        frnd()
    }, 1000)


}

const funB = () => {
    console.log("Hi Mr")
}


funA("ravi", funB)
