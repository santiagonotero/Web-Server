const express = require('express')
const app = express()
const PORT =process.env.PORT || 8080

const contenedor = require('./contenedor.js')

let instanciaArchivo = new contenedor('./Productos.json')

app.get('/', (req, res)=>{
    res.send('Directorio Raíz')
})

app.get('/productos', (req, res)=>{
    instanciaArchivo.getAll().then((info)=>{
        res.send(JSON.parse(info))
    })
})

app.get('/productoRandom', (req, res)=>{
    instanciaArchivo.getAll().then((info)=>{
        const datosParseados = JSON.parse(info)
        const numAleatorio=Math.floor(Math.random()*datosParseados.length)
        res.send(datosParseados[numAleatorio])
    })
})

app.listen(PORT, (req, res)=>{

})

