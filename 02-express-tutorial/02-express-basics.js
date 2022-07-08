const express = require('express')
const app = express()

// Can also do app = require('express')();

app.get('/', (req, res)=>{
    console.log('User hit the resource')
    res.status(200).send('Home Page')
})


app.get('/about', (req, res)=>{
    res.status(200).send('About Page')
})

//There is a default 404 response in express, but we can alter it
// .all() handles all http verbs
app.all('*', (req, res)=>{
    res.status(404).send('<h1>Resource Not Found</h1>')
})

// When we instantiate the server, the cb function is called
app.listen(5000, ()=>{
    console.log('Server is listening on port 5000...');
})

// Useful methods in express
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use - middleware
// app.listen