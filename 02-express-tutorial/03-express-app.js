const express = require('express')
const path = require('path')

const app = express()

// Setup static and middleware
// Serves static files  - static refers to files that are unaltered by the server.
//                      - These can be images, styles, and js.
app.use(express.static('./public'))

// app.get('/', (req, res)=>{
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//     adding to static assets
//     SSR
// })

app.all('*', (req, res)=>{
    res.status(404).send("Resource Not Found");
})


app.listen(5000, ()=>{
    console.log('Server is listening on port 5000...')
})