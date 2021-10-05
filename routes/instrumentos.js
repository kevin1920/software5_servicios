const express = require('express')
const router = express.Router()
const {validarInformacion, registrarInstrumento, obtenerInstrumentos, obtenerInstrumento, actualizarInstrumento, eliminarInstrumento} = require('../controllers/instrumentos')

/**
 * Endpoint que registra un instrumento
 */
router.post('/instrumentos',(req,res) => {
    try {
        validarInformacion(req.body)
        registrarInstrumento(req.body).then(respuesta => {
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
 * Endpoint que traer un instrumento en especifico
 */
router.get('/instrumentos/:id',(req,res) => {
    obtenerInstrumento(req.params.id).then(respuesta => {
        res.status(200).send(respuesta)
    }).catch(error => {
        console.log(error)
        res.status(500).send(error)
    })
    
})

/**
 * Endpoint que trae el historial de instrumentos registrados
 */
router.get('/instrumentos',(req,res) => {
    obtenerInstrumentos().then(respuesta => {
        res.status(200).send(respuesta)
    }).catch(error => {
        console.log(error)
        res.status(500).send(error)
    })
    
})

/**
 * Endponit que actualiza un instrumento
 */
router.put('/instrumentos/:id',(req,res) => {
    try {
        validarInformacion(req.body)
        actualizarInstrumento(req.params.id, req.body).then(respuesta => {
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
 * Endponit que elimina un instrumento
 */
router.delete('/instrumentos/:id',(req,res) => {
    eliminarInstrumento(req.params.id).then(respuesta => {
        res.status(200).send(respuesta)
    }).catch(error => {
        console.log(error)
        res.status(500).send(error)
    })
    
})





module.exports = router;