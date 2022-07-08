const {readFile, writeFile, read} = require('fs')


// If we don't provide encoding, it will return a Buffer

// Notice how easy it is for the callbacks to become messy and
// hard to read. Solutions to this are to either use Promises
// or to use async await. 
readFile('./content/first.txt','utf8' ,(err, res)=>{
    if (err){
        console.log(err)
        return
    }
    console.log(res)

    const first = res 

    readFile('./content/second.txt', 'utf8', (err, res)=>{
        if (err){
            console.log(err)
            return  
        }
        console.log(res) 

        const second = res 

        writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err)=>{
            if (err){
                console.log(err)
            }
        })
    })
    
})