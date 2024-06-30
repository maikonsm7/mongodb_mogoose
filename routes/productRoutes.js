const express = require('express')
const router = express.Router()

const ProductController = require('../controllers/ProductController')

router.get('/add', ProductController.createProduct)
router.post('/add', ProductController.createProductSave)
router.get('/:id', ProductController.getProduct)
router.get('/remove/:id', ProductController.removeProduct)
router.get('/edit/:id', ProductController.editProduct)
router.post('/edit', ProductController.editProductSave)
router.get('/', ProductController.showProducts)

module.exports = router