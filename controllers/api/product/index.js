// import specific service class
const product_service = require('../../../services/product/')

// mention the service's needed actions (methods)
const product_controller = {
    getAll(req, res) {
        res.json(product_service.getAll())
    },
    create(req, res) {
        res.status(201).json(
            product_service.create(req, res)
        )
    },
    update(req, res) {
        const product = product_service.update(req.params.id, req.body)
        
        if (product) {
            res.json(product)
        } else {
            res.status(404).send('Product not found!')
        }
    },
    delete(req, res) {
        const product = product_service.getById(req.params.id)
        
        if (product) {
            product_service.delete(req.params.id)
            res.status(204).send('Product deleted successfully')
        } else {
            res.status(404).send('Product not found!')
        }
    }
}

module.exports = product_controller