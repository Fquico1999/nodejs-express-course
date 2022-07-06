// Modules
// Split code into modules

// const john = 'john'
// const peter = 'peter'

// const sayHi = (name) => {
//     console.log(`Hello there ${name}`);
// }

// sayHi('susan')
// sayHi(john)
// sayHi(peter)

// Instead of this, have functions in seperate files and access them throughout the app

// CommonJS, every file is a module (default)
// Modules  are encapsulated code, only share minimum
// const secret = 'SUPER SECRET'

const names = require('./4-names')
// or can also
// const {john, peter} = require('./4-names')
const sayHi = require('./5-utils')
console.log(names)

const data = require('./6-alternative-flavor')
console.log(data)

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

// If function in file, will execute when import
require('./7-mind-grenade')