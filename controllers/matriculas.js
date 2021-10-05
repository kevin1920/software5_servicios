/**
 * Validar que se llenen todos los campos en el registro de una matricula
 * @param {*} info 
 */

 let validarInformacion = info => {
    if(!info.fecha || !info.cedulaEstudiante){
        throw {
            ok:false, 
            mensaje:"Todos los campos son obligatorios"
        };
    }
}

/**
 * Metodo que crea un id aleatorio para las matriculas
 * @param {*} length 
 * @returns 
 */
let makeRandomId= (length) => {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
   }
   return result;
}

var listaMatriculas = [];


/**
 * Metodo que inserta una matricula en la estructura de datos 
 * @param {*} info 
 */
 let registrarMatricula = async info => {
    let matricula = {id : makeRandomId(3), fecha: info.fecha, cedulaEstudiante: info.cedulaEstudiante, estado: 'prematriculado'}
    listaMatriculas.push(matricula)
    return {'status': 'ok'}
}

/**
 * Metodo que obtiene el historial de matriculas que han ingresado
 * 
 */
 let obtenerMatriculas = async () => {
    return listaMatriculas;
}

/**
 * Metodo que obtiene una Matricula en especifico
 * @param {*} id
 */
 let obtenerMatricula = async id => {
     let bandera = false
     let matriculaAlumno = ''
     listaMatriculas.forEach(matricula => {
         if(id === matricula.id){
            bandera = true
            matriculaAlumno = matricula
         }
     })
     if(bandera){
        return matriculaAlumno;
     }else{
        return {'status': bandera}
     }
   
}

/**
 * Metodo que actualiza una Matricula en especifico
 * @param {*} info 
 */
 let actualizarMatricula = async (id, info) => {
    let bandera = false
    listaMatriculas.forEach(matricula => {
        if(id == matricula.id){
            matricula['fecha'] = info.fecha
            matricula['cedulaEstudiante'] = info.cedulaEstudiante
            bandera = true
        }
    })
   return {'status': bandera};
}

/**
 * Metodo que elimina un Matricula en especifico
 * @param {*} id
 */
 let eliminarMatricula = async (id) => {
    let bandera = false
    listaMatriculas.forEach(matricula => {
        if(id == matricula.id){
            let i = listaMatriculas.indexOf(matricula)
            listaMatriculas.splice(i,1)
            bandera = true
        }
    })
   return {'status': bandera};
}

/**
 * Metodo que actualiza el estado de una Matricula en especifico
 * @param {*} id
 */
 let estadoMatricula = async (id, info) => {
    let bandera = false
    listaMatriculas.forEach(matricula => {
        if(id == matricula.id){
            matricula['estado'] = info.estado
            bandera = true
        }
    })
   return {'status': bandera};
}



module.exports = {validarInformacion,registrarMatricula,obtenerMatriculas,obtenerMatricula,actualizarMatricula,eliminarMatricula, estadoMatricula}