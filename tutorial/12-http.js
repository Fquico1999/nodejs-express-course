const http = require('http');

// Note the two parameters in the callback function. 
// The first one is the user request, the incoming request
// The second one is what we are sending back
const server = http.createServer((req, res)=>{

    if (req.url === '/'){
        res.end('Welcome to our home page')
    }
    else if(req.url==='/about'){
        res.end('Here is our short history')
    }else{
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for.</p>
        <a href="/">back home</a>
        `)
    }
})

// What port we're listening
server.listen(5000)