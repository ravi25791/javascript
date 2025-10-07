const array = [10, 20, 30, 40, 50, 50, 33, 44, 15, 13]
//find out even number

// 1...
// const evenNumber = array.filter((ele) => ele % 2 === 0)
// console.log(evenNumber)


// 2...
// const oddNumber = array.filter((ele) => ele % 2 === 1)
// console.log(oddNumber)


// 3..
// const evenNumber = (arr) => {
//     const evenNum = []
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             evenNum.push(arr[i])
//         }

//     }
//     console.log("Even number :", evenNum)

// }
// console.log(evenNumber(array))

// 4..

// const oddFun = (arr) => {
//     let oddNum = []
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 1) {
//             oddNum.push(arr[i])
//         }
//     }
//     console.log("Odd number is : ", oddNum)
// }

// oddFun(array)




// sum of array
// const sumNum = (arr) => {
//     let sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         // sum += arr[i] sum method of array
//         if (arr[i] > sum) {
//             sum = arr[i]
//         }
//     }
//     return sum
// }

// console.log(sumNum(array))


// var number = prompt("Enter a number : ")

// if (number == 1) {
//     console.log(`${number} : is prime number`)
// } else if (number < 1) {
//     console.log(`${number} : is not a prime number.....`)
// } else {

//     for (var i = 2; i < number; i++) {
//         47
//         if (number % i == 0) {
//             var res = `${number} : is not a prime number`;
//             break;
//         } else {
//             var res = `${number} : is a prime number`;
//         }
//     }
// }
// console.log(res)

// var number = prompt("Enter a number : ")

// if (number == 1) {
//     console.log(`${number} : is prime number`)
// } else if (number < 1) {
//     console.log(`${number} : should be greater than 1`)
// } else {
//     for (var i = 2; i < number; i++) {
//         if (number % i == 0) {
//             var res = `${number} : is not a prime number`
//             break;
//         } else {
//             var res = `${number} : is a prime number`
//         }
//     }
// }
// console.log(res)