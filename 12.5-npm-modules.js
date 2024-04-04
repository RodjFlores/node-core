/*

    `npm i -g` is a global install
    `npm i <packagename>` to local install package

    `npm init` to start al node project
*/

//Lodash is now usable
const _ = require('lodash')

const item = [1, [2,3,4],4,5]
const newItems = _.flattenDeep(item)
console.log(newItems)
console.log('ok')