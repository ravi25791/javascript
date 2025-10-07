
const throttaling = (fn, delay) => {
    return function (...args) {
        document.getElementById("mtdisable").disabled = true
        setTimeout(() => {
            fn()
        }, delay);
    }
}

const myThrottalFun = throttaling(() => {
    document.getElementById("mtdisable").disabled = false
    console.log("Button Clicked")
}, 2000)


const testFunction = () => {
    console.log("Debouncing working")
}

const funDebounce = (fun, delay) => {
    let timer
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fun()
        }, delay)
    }
}

const debouncing = funDebounce(testFunction, 1000)