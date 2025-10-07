const getData = () => {
    console.log("Debounce working")
}

const getDebouncing = (fn, delay) => {
    let timer;
    return function () {
        clearTimeout(timer)
        timer = setTimeout(() => {
            getData()
        }, delay)
    }
}

const debouncing = getDebouncing(getData, 400)