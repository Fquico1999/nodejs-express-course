const express = require('express');
const app = express()

// req => middleware => res

// Note the inclusion of next, it is required to move onto the next method.
const logger = (req, res, next)=>{
    const method = req.method;
    const url  = req.url;
    const time = new Date().getFullYear();

    console.log(method, url, time)
    next()
}

// Note how we can pass functions into routes to be executed.
// Here we are passing in the logger function.
app.get('/', logger, (req, res)=>{

    // If we want to log the method, url, and year,
    // One approach is to just do it for every route.
    // In that case we need to copy and paste for every route
    // Instead we can make it middleware.
    // const method = req.method;
    // const url  = req.url;
    // const time = new Date().getFullYear();

    // console.log(method, url, time)

    res.send("Home")
})

app.get('/about',logger, (req, res)=>{
    res.send('About')
})

app.all("*", (req, res)=>{
    res.status(404).send("Resource Not Found")
})

app.listen(5000, ()=>{
    console.log("Listening on Port 5000...")
})