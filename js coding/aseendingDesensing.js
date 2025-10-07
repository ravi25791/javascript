console.log("Assending and desensing order");
let array = [3, 5, 7, 2, 8];

// Ascending order
let asseding = array.sort((a, b) => a - b);
console.log("Assending order:", asseding);

// Descending order
let desensing = array.sort((a, b) => b - a);
console.log("Desensing order:", desensing);