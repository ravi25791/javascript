function defaultParameter(a, b = 30) {
    return a + b;
}

console.log(defaultParameter(20, 80))
// output - 100

function defaultPar(a, b = 30) {
    return a + b;
}

console.log(defaultPar(20))

// output - 50