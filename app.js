const conf = require('dotenv').config

const express = require('express')

const app = express()

const port = process.env.port || 3000

app.get('/', (req, res)=>{
    return res.status(200).json({
        message: 'Hello World!'
    })
})

app.listen(port, ()=>{
    console.log('Server is running at port ' + port)
})