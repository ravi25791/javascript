console.log("Spread operator")

const num1 = [1, 2, 3, 4]
const num2 = [5, 6, 7, 8, 9]
const myName = "Ravi"

// const total = num1.concat(num2)
const totalStr = [...myName]
const totalNum = [...num1, ...num2]
console.log("Array : ", totalNum)
console.log("Str : ", totalStr)