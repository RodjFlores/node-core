const {readFileSync,writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.json','utf8')

console.log(first, second)

//flag a appends
const writtenFile = writeFileSync('./content/third.txt',
`here is the ${second}`, {flag:'a'})
console.log(writtenFile)

console.log('End of Files')