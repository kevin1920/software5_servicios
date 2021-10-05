const express = require('express')
const router = express.Router()
const {validarInformacion, registrarFactura, obtenerFacturas, obtenerFactura, actualizarFactura, eliminarFactura} = require('../controllers/facturas')

/**
 * Endpoint que registra una factura
 */
router.post('/facturas',(req,res) => {
    try {
        validarInformacion(req.body)
        registrarFactura(req.body).then(respuesta => {
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
 * Endpoint que traer una facturas
 */
router.get('/facturas/:id',(req,res) => {
    obtenerFactura(req.params.id).then(respuesta => {
        res.status(200).send(respuesta)
    }).catch(error => {
        console.log(error)
        res.status(500).send(error)
    })
    
})

/**
 * Endpoint que trae el historial de facturas registrados
 */
router.get('/facturas',(req,res) => {
    obtenerFacturas().then(respuesta => {
        res.status(200).send(respuesta)
    }).catch(error => {
        console.log(error)
        res.status(500).send(error)
    })
    
})

/**
 * Endponit que actualiza una factura
 */
router.put('/facturas/:id',(req,res) => {
    try {
        validarInformacion(req.body)
        actualizarFactura(req.params.id, req.body).then(respuesta => {
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
router.delete('/facturas/:id',(req,res) => {
    eliminarFactura(req.params.id).then(respuesta => {
        res.status(200).send(respuesta)
    }).catch(error => {
        console.log(error)
        res.status(500).send(error)
    })
    
})



module.exports = router;