const user = {
    name: 'Ravi Kumar',
    age: '20',
    address: {
        city: 'Patna',
        state: 'Bihar'
    },
    getData: function () {
        console.log(`My name is ${user.name}`)
    }
}

user.getData()

// 1.
const userCopy = { ...user }
console.log("Spread Operator : ", userCopy)

// 2.
const userAssign = Object.assign({}, user)
console.log("Object Assign : ", userAssign)

user.address.city = "new delhi"
console.log(user.address.city)


//deepCopy
const deepCopy = JSON.parse(JSON.stringify(user))
console.log("Deep Copy : ", deepCopy)