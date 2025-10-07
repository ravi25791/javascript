const CalCulate = (n) => {
    let sum = 0;
    for (var i = 0; i <= n; i++) {
        sum += i
    }
    return sum
}

const memoization = (fun) => {
    let cache = [0]
    return function (...args) {
        let n = args[0]
        console.log("Result from Cache")
        if (n in cache) {
            return cache[n]
        } else {
            console.log("Calculating First Time")
            let result = fun(n)
            cache[n] = result
            fun()
        }
    }

}
console.time()
const efficient = memoization(CalCulate);
console.log(efficient(30));
console.timeEnd()


// console.log(CalCulate(5))
