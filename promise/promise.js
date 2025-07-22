
// -----------promise ----------

// let data = new Promise((resolve, reject) => {
//     // resolve("promise success fully executed")
//     reject("promise has been failed due to some reason")
// })

// data.then((msg) => {
//     console.log(msg)
// })

// // -------------- Promise.All ---------------

// let data = Promise.all([
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("First Promise")
//         }, 3000)
//     }),

//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Second Promise")
//         }, 2000)
//     }),

//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Third Promise")
//         }, 1000)
//     })

// ])

// data.then((item) => {
//     console.log(item)
// }).catch((err) => {
//     console.log(err)
// })


// -------------  Promise.allSettled -----------

let data = Promise.allSettled([
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("1 promise")
        }, 1000);
    }),

    new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(" 2 promise rejected due to error 404")
        }, 2000)
    }),

    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("3 promise")
        }, 3000)
    })
])

data.then((msg) => {
    console.log(msg)
}).catch((err) => {
    console.log(err)
})