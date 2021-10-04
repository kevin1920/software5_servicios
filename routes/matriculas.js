const express = require('express')
const router = express.Router()
const {validarInformacion, registrarMatricula, obtenerMatricula, obtenerMatriculas, actualizarMatricula, eliminarMatricula, estadoMatricula } = require('../controllers/matriculas')

/**
 * Endpoint que registra una matricula
 */
router.post('/matriculas',(req,res) => {
    try {
        validarInformacion(req.body)
        registrarMatricula(req.body).then(respuesta => {
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
 * Endpoint que traer una matricula en especifico
 */
router.get('/matriculas/:id',(req,res) => {
    obtenerMatricula(req.params.id).then(respuesta => {
        res.send(respuesta)
    }).catch(error => {
        console.log(error)
        res.send(error)
    })
    
})

/**
 * Endpoint que trae el historial de matriculas registradas 
 */
router.get('/matriculas',(req,res) => {
    obtenerMatriculas().then(respuesta => {
        res.send(respuesta)
    }).catch(error => {
        console.log(error)
        res.send(error)
    })
    
})

/**
 * Endponit que actualiza una matricula
 */
router.put('/matriculas/:id',(req,res) => {
    try {
        validarInformacion(req.body)
        actualizarMatricula(req.params.id, req.body).then(respuesta => {
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
 * Endponit que elimina una matricula
 */
router.delete('/matriculas/:id',(req,res) => {
    eliminarMatricula(req.params.id).then(respuesta => {
        res.send(respuesta)
    }).catch(error => {
        console.log(error)
        res.send(error)
    })
    
})

router.put('/aprobarMatriculas/:id',(req,res) => {
    
    estadoMatricula(req.params.id, req.body).then(respuesta => {
        res.status(200).send(respuesta)
    }).catch(error => {
        console.log(error)
        res.status(500).send(error);
    })
   
})



module.exports = router;