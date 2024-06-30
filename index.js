const express = require('express')
const exphbs = require('express-handlebars')
const port = 3000

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))

const conn = require('./db/conn')

// controller
const ProductController = require('./controllers/ProductController')

// routes
const productsRoutes = require('./routes/productRoutes')

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', ProductController.showProducts)
app.use('/products', productsRoutes)

app.listen(port, ()=>{
    console.log(`Servidor online! http://localhost:${port}`)
})