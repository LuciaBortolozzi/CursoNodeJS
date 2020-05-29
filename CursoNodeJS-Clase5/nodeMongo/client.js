const mongoose = require('mongoose')
const Schema = mongoose.Schema

const usuarioSchema = new Schema({
    nombre: String,
    edad: Number, 
})

const usuarioModel = mongoose.model('usuarios', usuarioSchema)

mongoose.connect('mongodb+srv://admin:admin@misdatos-mbjgg.mongodb.net/mibase', {

//mongoose.connect('mongodb://localhost/mibase', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, err => {
        if (err) return console.log(`Error en conexion de base de datos ${err}`)
        console.log('Conexion OK')

        const usuarioNuevo = new usuarioModel({
            nombre: 'Pablo',
            edad: 28, 
        })

        /* usuarioNuevo.save( err => {
            if(!err){
                console.log('Insert ok')
            }
        }) */

        usuarioModel.find({}, (err, usuarios) => {
            if(!err){
                usuarios.forEach(usuario => {
                    console.log(usuario)
                })
            }
        })
})