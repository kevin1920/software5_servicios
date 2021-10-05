const express = require('express')
const router = express.Router()
const {validarInformacion, registrarProfesor, obtenerProfesores, obtenerProfesor, actualizarProfesor, eliminarProfesor } = require('../controllers/profesores')

/**
 * Endpoint que registra un profesor
 */
router.post('/profesores',(req,res) => {
    try {
        validarInformacion(req.body)
        registrarProfesor(req.body).then(respuesta => {
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
 * Endpoint que traer un profesor en especifico
 */
router.get('/profesores/:id',(req,res) => {
    obtenerProfesor(req.params.id).then(respuesta => {
        res.status(200).send(respuesta)
    }).catch(error => {
        console.log(error)
        res.status(500).send(error)
    })
    
})

/**
 * Endpoint que trae el historial de profesores registrados
 */
router.get('/profesores',(req,res) => {
    obtenerProfesores().then(respuesta => {
        res.status(200).send(respuesta)
    }).catch(error => {
        console.log(error)
        res.status(500).send(error)
    })
    
})

/**
 * Endponit que actualiza un profesor
 */
router.put('/profesores/:id',(req,res) => {
    try {
        validarInformacion(req.body)
        actualizarProfesor(req.params.id, req.body).then(respuesta => {
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
 * Endponit que elimina un profesor
 */
router.delete('/profesores/:id',(req,res) => {
    eliminarProfesor(req.params.id).then(respuesta => {
        res.status(200).send(respuesta)
    }).catch(error => {
        console.log(error)
        res.status(500).send(error)
    })
    
})


module.exports = router;