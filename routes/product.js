// Rutas para producto

const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

// api/productos
router.post('/', productController.createProduct);
router.get('/', productController.getProducts);
router.put('/:id', productController.editProduct);
router.get('/:id', productController.getProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;