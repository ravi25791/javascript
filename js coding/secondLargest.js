console.log("Hello Second Largest Number");
let array = [3, 5, 7, 34, 2, 97, 2, 5, 89, 5];

const maxNum = array.sort((a, b) => b - a)[0]
const minNum = array.sort((a, b) => a - b)[0]

console.log("Max Number : ", maxNum)
console.log("Min Number : ", minNum)

const max1 = Math.max(...array)
const min1 = Math.min(...array)

console.log("max1 : ", max1)
console.log("max1 : ", min1)

maxVal = []
minVal = []
// for(var i=0; i<array.length; i++){
//     if()
// }