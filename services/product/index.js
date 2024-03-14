const fs = require('fs')
// access global mock db file
const products = require(global.mock_db)

// write services method implementations
const product_service = {
    getAll() {
        return products
    },
    create(req, res) {
        let new_id = genRandId(4)
                
        const product = req.body

        const new_product = {
            id: new_id,
            product: product
        }

        products.push(new_product)
        
        writeToFile(products)
        
        return new_product
    }
}

// create function for overwriting the db file updated db content
let writeToFile = async (users) => {
    await 
        fs.writeFileSync(
            global.mock_db,
            JSON.stringify(
                users, null, 4
            ),
            'utf8'
        )
}

// generate random id inspired by uuid
let genRandId = (count) =>{
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < count; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
}

module.exports = product_service