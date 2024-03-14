const express = require('express')
const product_router = require('./product')

const router = express.Router()

// registering child routes
router.use('/product', product_router)

module.exports = router