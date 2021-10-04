/**
 * Validar que se llenen todos los campos en el registro de un Profesor
 * @param {*} info 
 */

 let validarInformacion = info => {
    if(!info.nombre || !info.tipoIdentificacion || !info.numIdentificacion || !info.fechaNacimiento || !info.email || !info.telefono || !info.instrumento){
        throw {
            ok:false, 
            mensaje:"Todos los campos son obligatorios"
        };
    }
}

var listaProfesores = [];


/**
 * Metodo que inserta un profesor en la estructura de datos 
 * @param {*} info 
 */
 let registrarProfesor = async info => {
    let profesor = {nombre : info.nombre, tipoIdentificacion: info.tipoIdentificacion, numIdentificacion: info.numIdentificacion, email: info.email, telefono: info.telefono, instrumento:info.instrumento}
    listaProfesores.push(profesor)
    console.log(listaProfesores)
    return {'status': 'ok'}
}

/**
 * Metodo que obtiene el historial de profesores que han ingresado
 * @param {*} info 
 */
 let obtenerProfesores = async () => {
    console.log(listaProfesores)
    return listaProfesores;
}

/**
 * Metodo que obtiene un profesor en especifico
 * @param {*} info 
 */
 let obtenerProfesor = async id => {
     let bandera = false
     let profesorE = ''
     listaProfesores.forEach(profesor => {
         if(id === profesor.numIdentificacion){
            bandera = true
            profesorE = profesor
         }
     })
     if(bandera){
        return profesorE;
     }else{
        return {'status': bandera}
     }
   
}

/**
 * Metodo que actualiza un profesor en especifico
 * @param {*} info 
 */
 let actualizarProfesor = async (id, info) => {
    let bandera = false
    listaProfesores.forEach(profesor => {
        if(id == profesor.numIdentificacion){
            profesor['nombre'] = info.nombre
            profesor['tipoIdentificacion'] = info.tipoIdentificacion
            profesor['numIdentificacion'] = info.numIdentificacion
            profesor['email'] = info.email
            profesor['telefono'] = info.telefono
            profesor['instrumento'] = info.instrumento
            bandera = true
        }
    })
   return {'status': bandera};
}

/**
 * Metodo que elimina un profesor en especifico
 * @param {*} info 
 */
 let eliminarProfesor = async (id) => {
    let bandera = false
    listaProfesores.forEach(profesor => {
        if(id == profesor.numIdentificacion){
            let i = listaProfesores.indexOf(profesor)
            listaProfesores.splice(i,1)
            bandera = true
        }
    })
   return {'status': bandera};
}



module.exports = {validarInformacion,registrarProfesor,obtenerProfesores,obtenerProfesor,actualizarProfesor,eliminarProfesor}