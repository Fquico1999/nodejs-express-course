const express = require('express');
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')


// How do we apply the logger middleware to all of these routes without manually passing it in?
// We use app.use()
// Order matters! If you have a route before using the middleware, it won't be applied to that route.
// app.use(logger)

// Also, we can pass in a path which means that any url with /api as root will
// have this middleware applied to it.
//app.use('/api', logger)

// To use multiple middleware we can add them to a list
// They are executed in order.
app.use([logger, authorize])


app.get('/', (req, res)=>{
    res.send("Home")
})

app.get('/about', (req, res)=>{
    res.send('About')
})

app.get('/contacts', (req, res)=>{
    res.send("Contacts")
})

app.get('/api/products', (req, res)=>{
    res.send('Products')
})

app.get('/api/items', (req, res)=>{
    res.send('Items')
})

app.all("*", (req, res)=>{
    res.status(404).send("Resource Not Found")
})

app.listen(5000, ()=>{
    console.log("Listening on Port 5000...")
})