// Two flavors, synchronous - blocking - or asynchronous - non-blocking

const {readFileSync, writeFileSync, write} = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first,'\n' ,second)

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`)

writeFileSync('./content/result-sync.txt', "\n\nAppended Text", {flag:'a'})
