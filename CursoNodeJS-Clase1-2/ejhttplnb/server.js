const http = require('http')

const PORT = process.env.app_port || process.env.PORT || 8080

let visitas = 0

const server = http.createServer((req, res) => {
    let url = req.url
    let metodo = req.method
    console.log(url, metodo)

    if(metodo == 'GET'){

        if(url == '/'){

            res.writeHead(200, {'content-type':'text/html'})
            res.write('<h1 style="color:blue;">Hola, soy http server</h1>')
            res.write(`<h2 style="color:red;">FyH: ${new Date().toLocaleString()}</h2>`)
            res.end(`<p style="color:magenta;">Visitas: ${++visitas} </p>`)
        
        } else if (url = '/datos'){

            res.end('RUTA DATOS')

        } else {

            res.end('RUTA NO IMPLEMENTADA')

        }

    } else {
        
        res.end('METODO NO IMPLEMENTADO')
    
    }    
})

server.listen(PORT, err => {
    if(err) return console.log(`Error en servidor ${err}`)
    console.log(`Servidor http escuchando en el puerto ${PORT}`)
})
