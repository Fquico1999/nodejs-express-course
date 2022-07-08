const http = require('http')
const {readFileSync} = require('fs');

// Get all files
// Note that we use the synchronous file read here. It doesnt really matter because we're
// not reading the file every time someone hits the server, only when the server is instantiated

const homePage = readFileSync('./navbar-app/index.html')
const styleCss = readFileSync('./navbar-app/styles.css')
const logo = readFileSync('./navbar-app/logo.svg')
const logic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res)=>{
    //console.log(req.url)
    const url = req.url;

    //home page
    if (url === '/'){
        //Express will take care of this
        res.writeHead(200, {'content-type':'text/html'})
        res.write(homePage)
        res.end()
    }
    //styles
    else if(url == '/styles.css'){
        //Express takes care of this
        res.writeHead(200, {'content-type':'text/css'})
        res.write(styleCss)
        res.end()

    }    //logo
    else if(url == '/logo.svg'){
        //Express takes care of this
        res.writeHead(200, {'content-type':'image/svg+xml'})
        res.write(logo)
        res.end()

    }
    else if(url == '/browser-app.js'){
        //Express takes care of this
        res.writeHead(200, {'content-type':'text/javascript'})
        res.write(logic)
        res.end()

    }
    //about page
    else if(url == '/about'){
        //Express takes care of this
        res.writeHead(200, {'content-type':'text/html'})
        res.write('<h1>about page</h1>')
        res.end()

    // 404
    }else{
        //Express takes care of this
        res.writeHead(404, {'content-type':'text/html'})
        res.write('<h1> page not found</h1>')
        res.end()

    }
})

server.listen(5000)