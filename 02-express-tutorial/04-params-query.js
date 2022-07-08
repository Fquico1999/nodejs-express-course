const express = require("express");
const app = express()
const {products, people } = require("./data")


app.get('/', (req, res)=>{
    res.send(`<h1>Home Page</h1> 
    <li><a href='products'>Products</a></li>
    <li><a href='people'>People</a></li>`)
})

app.get('/products', (req, res)=>{
    // Send back products but without description
    const newProducts = products.map((product)=>{
        const {id, name, image} = product;
        return{id, name, image}
    })
    res.json(newProducts)
})

app.get('/products/:productID', (req, res)=>{
    console.log(req.params)
    // :productID gets added to req.params as a String
    const singleProduct =  products.find((product)=> product.id === Number(req.params.productID))
    if (singleProduct){
        res.json(singleProduct)
    }else{
        res.status(404).send('404 Resource Not Found')
    }
})


app.get('/people', (req, res)=>{
    res.json(people)
})

// Handle 404
app.all('*', (req, res)=>{
    res.status(404).send('<h1>404 Resource Not Found</h1>')
})



app.listen(5000, ()=>{
    console.log('Listening on port 5000...')
})