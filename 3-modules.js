// Require Modules
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alt-flavor')

//this runs the function inside the file
// when you import a module you invoke it
require('./7-mind-granade')

//alt flavor way
console.log(data)

//regular way
console.log(names)
sayHi(names.jane)
sayHi(names.john)
