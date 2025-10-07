
// 1. Find Max Number in Array
let array = [3, 5, 7, 2, 8];
let max = Math.max(...array)
console.log(" 1.Max Number :", max)


// 2. Find Min Number in Array
let minNum = Math.min(...array)
console.log("2.Min Number :", minNum)


// 3. Find Max Number in Array
const maxNumFun = (arr) => {
    let manNum = [0]
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] > manNum) {
            manNum = arr[i]
        }
    }
    return manNum
}
console.log("3.Max Number :", maxNumFun(array))

// 4. Find Min Number in Array

function minNumFun(arr) {
    let minNumf = [3]
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] < minNumf) {
            minNumf = arr[i]
        }
    }
    return minNumf
}
console.log("4.Min Number :", minNumFun(array))


// 5. Find Max Number in Array using reduce
let mamNumber = array.reduce((a, b) => a > b ? a : b)
console.log("5.Max Number :", mamNumber)

// 6. Find Min Number in Array using reduce
let minNumber = array.reduce((a, b) => a < b ? a : b)
console.log("6.Min Number :", minNumber)

//7. Find Max Number in Array using sort
let maxNumSort = array.sort((a, b) => b - a)[0]
console.log("7.Max Number with sort:", maxNumSort);