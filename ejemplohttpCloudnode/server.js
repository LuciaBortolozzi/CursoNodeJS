const http = require('http')

const PORT = process.env.app_port || process.env.PORT || 8080

let visitas = 0
const server = http.createServer((req,res) => {
    let url = req.url
    console.log(url)

    if(url == '/') {
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1 style="color:blue;">Hola, soy http Server</h1>')
        res.write(`<h2 style="color:red;">FyH: ${new Date().toLocaleString()}</h2>`)
        res.end(`<p style="color:magenta;">Visitas: ${++visitas} </p>`)
    }
})

server.listen(PORT, err => {
    if(err) return console.log(`Error en servidor ${err}`)
    console.log(`Servidor http escuchando en el puerto ${PORT}`)
})