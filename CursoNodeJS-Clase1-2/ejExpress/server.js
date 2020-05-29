const express = require('express')
const bodyParser = require('body-parser')
const PORT = 8080
const app = express()

app.use(express.static(__dirname+'/public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use((req, res, next) => {
    console.log('----------------------------')
    console.log('Fecha y Hora ', new Date().toLocaleString())
    console.log('----------------------------')
    console.log('req.query', req.query)
    console.log('req.body', req.body)
    console.log('----------------------------')
    next()
})

app.use((req, res, next) => {
    console.log('----------------------------')
    console.log('Timestamp', Date.now())
    console.log('----------------------------')

    next()
})

/* app.get('/', (req, res) => {
    res.sendFile(__dirname+'/public/index.html')
}) 
*/

app.get('/datos/:numero?', (req, res) => {
    let numero = req.params.numero
    /* console.log(req.query) */
    res.send('Datos: ' + numero)
})

app.delete('/datos', (req, res) => {
    console.log(req.query)
    res.send('Datos Borrados')
})

app.post('/datos', (req, res) => {
    /* console.log(req.query) */
    /* res.send('Datos Recibidos') */
    res.redirect('/')
})

app.put('/datos', (req, res) => {
    /* console.log(req.query) */
    res.send('Datos Modificados')
})


app.get('*', (req, res) => {
    res.send('Ruta no implementada')
})

app.listen(PORT, err => {
    if(err) return console.log(`Error en servidor ${err}`)
    console.log(`Servidor express escuchando en el puerto ${PORT}`)
})