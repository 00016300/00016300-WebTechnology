// import specific service class
const product_service = require('../../../services/product/')

// mention the service's needed actions (methods)
const product_controller = {
    getAll(req, res) {
        res.json(product_service.getAll())
    }
}

module.exports = product_controller