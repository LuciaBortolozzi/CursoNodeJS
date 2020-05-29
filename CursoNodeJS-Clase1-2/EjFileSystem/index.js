const fs = require('fs')

/* 

Lectura y Escritura de Archivos en forma asincronica

*/

console.log('Inicio')

//lectura 1
let datos = fs.readFile('../datos.txt', 'utf-8', (err, datos) => {
    console.log('RD1', datos)

    //escritura
    fs.writeFile('../datos.txt', new Date().toLocaleString(), (err, datos) => {
        console.log('WR OK')

        //lectura 2

        datos = fs.readFile('../datos.txt', 'utf-8', (err, datos) => {
            console.log('RD2', datos)
        })
    })
})

console.log('Fin')

/*

Lectura y Escritura de Archivos en forma sincronica



console.log('Inicio')

//lectura 1
let datos = fs.readFileSync('../datos.txt', 'utf-8')
console.log('RD1', datos)

//escritura
fs.writeFileSync('../datos.txt', new Date().toLocaleString())
console.log('WR OK')

//lectura 2

datos = fs.readFileSync('../datos.txt', 'utf-8')
console.log('RD2', datos)


console.log('Fin')

*/

