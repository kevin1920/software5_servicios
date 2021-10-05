const express = require('express')
const router = express.Router()
const {validarInformacion, registrarAlumno, obtenerAlumnos, obtenerAlumno, actualizarAlumno, eliminarAlumno } = require('../controllers/alumnos')

/**
 * Endpoint que registra un alumno
 */
router.post('/alumnos',(req,res) => {
    try {
        validarInformacion(req.body)
        registrarAlumno(req.body).then(respuesta => {
            res.status(200).send(respuesta)
        }).catch(error => {
            console.log(error)
            res.status(500).send(error);
        })
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
    
})

/**
 * Endpoint que traer un alumno en especifico
 */
router.get('/alumnos/:id',(req,res) => {
    obtenerAlumno(req.params.id).then(respuesta => {
        res.status(200).send(respuesta)
    }).catch(error => {
        console.log(error)
        res.status(500).send(error)
    })
    
})

/**
 * Endpoint que trae el historial de alumnos registrados
 */
router.get('/alumnos',(req,res) => {
    obtenerAlumnos().then(respuesta => {
        res.status(200).send(respuesta)
    }).catch(error => {
        console.log(error)
        res.status(500).send(error)
    })
    
})

/**
 * Endponit que actualiza un alumno
 */
router.put('/alumnos/:id',(req,res) => {
    try {
        validarInformacion(req.body)
        actualizarAlumno(req.params.id, req.body).then(respuesta => {
            res.status(200).send(respuesta)
        }).catch(error => {
            console.log(error)
            res.status(500).send(error);
        })
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
    
})
/**
 * Endponit que elimina un alumno
 */
router.delete('/alumnos/:id',(req,res) => {
    eliminarAlumno(req.params.id).then(respuesta => {
        res.status(200).send(respuesta)
    }).catch(error => {
        console.log(error)
        res.status(500).send(error)
    })
    
})


module.exports = router;