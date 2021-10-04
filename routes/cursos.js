const express = require('express')
const router = express.Router()
const {validarInformacion, registrarCurso, obtenerCurso, obtenerCursos, actualizarCurso, eliminarCurso} = require('../controllers/cursos')

/**
 * Endpoint que registra una factura
 */
router.post('/cursos',(req,res) => {
    try {
        validarInformacion(req.body)
        registrarCurso(req.body).then(respuesta => {
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
 * Endpoint que traer una cursos
 */
router.get('/cursos/:id',(req,res) => {
    obtenerCurso(req.params.id).then(respuesta => {
        res.send(respuesta)
    }).catch(error => {
        console.log(error)
        res.send(error)
    })
    
})

/**
 * Endpoint que trae el historial de cursos registrados
 */
router.get('/cursos',(req,res) => {
    obtenerCursos().then(respuesta => {
        res.send(respuesta)
    }).catch(error => {
        console.log(error)
        res.send(error)
    })
    
})

/**
 * Endponit que actualiza una factura
 */
router.put('/cursos/:id',(req,res) => {
    try {
        validarInformacion(req.body)
        actualizarCurso(req.params.id, req.body).then(respuesta => {
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
 * Endponit que elimina una factura
 */
router.delete('/cursos/:id',(req,res) => {
    eliminarCurso(req.params.id).then(respuesta => {
        res.send(respuesta)
    }).catch(error => {
        console.log(error)
        res.send(error)
    })
    
})



module.exports = router;