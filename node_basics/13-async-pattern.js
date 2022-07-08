const {readFile, writeFile, write} = require('fs').promises;
const util = require('util');

//const readFilePromise = util.promisify(readFile)
//const writeFilePromise = util.promisify(writeFile)


// Here we will go through Promises, however in future we will use
// the async await pattern.

const getText = (path) =>{
    return new Promise((resolve, reject)=>{
        readFile(path, 'utf8', (err, data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data)
            }
        })
    })
}

// getText('./content/first.txt')
//     .then( (result)=> console.log(result))
//     .catch( (err)=> console.log(err))

const start = async() =>{
    try {
        //const first = await readFilePromise('./content/first.txt', 'utf8');
        //const second = await readFilePromise('./content/second.txt', 'utf8');
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        console.log(first, second)
        //await writeFilePromise('./content/result-async.txt', `Here is the result: ${first} ${second}`)
        await writeFile('./content/result-async.txt', `Here is the result: ${first} ${second}`)
    } catch (error) {
        console.log(error)
    }
}

start()