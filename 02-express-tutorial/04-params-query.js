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

app.get('/products/:productID/reviews/:reviewID', (req, res)=>{
    console.log(req.params)
    res.send('This is a dummy product review')
})

// The way query functions is that any key value pair included after a ? in the url
// i.e /api/v1/query?key1=value1&key2=value2 will be made available in the req.query object
// As key value pairs - {key1: 'value1', key2:  'value2'}
app.get('/api/v1/query', (req, res) => {
    console.log(req.query)

    // Set up query for search and limit
    const {search, limit} = req.query
    let sortedProducts = [...products] // Use let since we can potentially alter this list.

    if (search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if (limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1 ){
        //res.status(200).send('no products match your search')

        // Ensure we use return here, otherwise express will move onto next line
        // and have two returns for a single request.
        return res.status(200).json({sucess: true, data:[]})
    }
    res.status(200).json(sortedProducts)
})


app.get('/people', (req, res)=>{
    res.json(people)
})

app.get('/people/:personID', (req, res)=>{
    const person = people.find((person)=> person.id === Number(req.params.personID))

    if (person){
        res.send(`<h1>Hello ${person.name}</h1>`)
    }else{
        res.status(404).send("Person Not Found")
    }
})

// Handle 404
app.all('*', (req, res)=>{
    res.status(404).send('<h1>404 Resource Not Found</h1>')
})



app.listen(5000, ()=>{
    console.log('Listening on port 5000...')
})