// Method 1
// const myFunc = require('./exportCommonJS')
// myFunc('John', 'Doe')

// Method 2
const obj = require('./exportCommonJS')
const myFunc = obj.getFullName
myFunc('John', 'Doe')