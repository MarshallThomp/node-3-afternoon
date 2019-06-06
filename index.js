const express = require('express')
const massive = require('massive')
require('dotenv').config()

const ctrl = require('./controllers/products_controller')

const app = express()
app.use(express.json())

let { SERVER_PORT, CONNECTION_STRING } = process.env

massive(CONNECTION_STRING).then(db => {
    console.log('db is connected')
    app.set('db', db)
}).catch(err => console.log(err))

app.post('/api/products', ctrl.create)
app.get('/api/products', ctrl.getAll)
app.get('/api/products/:id', ctrl.getOne)
app.put('/api/products/:id', ctrl.update)
app.delete('/api/products/:id', ctrl.delete)

app.listen(SERVER_PORT, () => {
    console.log('listening on port', SERVER_PORT)
})