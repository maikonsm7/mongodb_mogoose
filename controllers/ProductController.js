const Product = require('../models/Product')

class ProductController {
    static async showProducts(req, res) {
        try {
            const products = await Product.find().lean()
            res.render('products/all', {products})
        } catch (error) {
            console.log('Erro: ', error)
        }
    }

    static createProduct(req, res) {
        res.render('products/add')
    }

    static async createProductSave(req, res) {
        const name = req.body.name
        const price = req.body.price
        const description = req.body.description

        const product = new Product({name, price, description})

        try {
            await product.save()
            res.redirect('/products')
        } catch (error) {
            console.log('Erro: ', error)
        }
    }

    static async getProduct(req, res){
        const id = req.params.id
        try {
            const product = await Product.findById(id).lean()
            res.render('products/product', {product})
        } catch (error) {
            console.log('Erro: ', error)
        }
    }

    static async removeProduct(req, res){
        const id = req.params.id
        try {
            await Product.deleteOne({_id: id})
            res.redirect('/products')
        } catch (error) {
            console.log('Erro: ', error)
        }
    }

    static async editProduct(req, res){
        const id = req.params.id
        try {
            const product = await Product.findById(id).lean()
            res.render('products/edit', {product})
        } catch (error) {
            console.log('Erro: ', error)
        }
    }

    static async editProductSave(req, res) {
        const id = req.body.id
        const name = req.body.name
        const price = req.body.price
        const description = req.body.description

        const product = { name, price, description }

        try {
            await Product.updateOne({_id: id}, product)
            res.redirect('/products')
        } catch (error) {
            console.log('Erro: ', error)
        }
    }
}

module.exports = ProductController