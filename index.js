//importar librerias
const express = require('express')
const cors = require('cors')

//incializar la libreria
const app = express()
app.use(express.json())
app.use(cors())

//versiones
const vs = "/api/v1/"

//importar las rutas con los endpoints especificos
const rutasInscripciones = require('./routes/inscripciones')
app.use(vs,rutasInscripciones)

//puerto
const port = 3000

//levantar el servidor para escuchar los puertos
app.listen(port,() => {
    console.log(`Escuchando api en http://localhost:${port}`)
})