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
const rutasAlumnos = require('./routes/alumnos')
app.use(vs,rutasAlumnos)

const rutasMatriculas = require('./routes/matriculas')
app.use(vs,rutasMatriculas)

const rutasInstrumentos = require('./routes/instrumentos')
app.use(vs,rutasInstrumentos)

const rutasProfesores = require('./routes/profesores')
app.use(vs,rutasProfesores)

const rutasFacturas = require('./routes/facturas')
app.use(vs, rutasFacturas)

const rutasCursos = require('./routes/cursos')
app.use(vs, rutasCursos)

//puerto
const port = process.env.PORT || 3000

//levantar el servidor para escuchar los puertos
app.listen(port,() => {
    console.log(`Escuchando api en http://localhost:${port}${vs}`)
})