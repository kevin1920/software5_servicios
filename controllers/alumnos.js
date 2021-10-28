/**
 * Validar que se llenen todos los campos en el registro de un alumno
 * @param {*} info 
 */

 let validarInformacion = info => {
    if(!info.nombre || !info.numIdentificacion || !info.fechaNacimiento || !info.email || !info.telefono){
        throw {
            ok:false, 
            mensaje:"Todos los campos son obligatorios"
        };
    }
}

var listaEstudiantes = [];


/**
 * Metodo que inserta un alumbno en la estructura de datos 
 * @param {*} info 
 */
 let registrarAlumno = async info => {
    let alumno = {nombre : info.nombre, numIdentificacion: info.numIdentificacion, email: info.email, telefono: info.telefono, fechaNacimiento: info.fechaNacimiento}
    listaEstudiantes.push(alumno)
    console.log(listaEstudiantes)
    return {'status': 'ok'}
}

/**
 * Metodo que obtiene el historial de alumnos que han ingresado
 */
 let obtenerAlumnos = async () => {
     console.log(listaEstudiantes)
    return listaEstudiantes;
}

/**
 * Metodo que obtiene un alumno en especifico
 * @param {*} id 
 */
 let obtenerAlumno = async id => {
     let bandera = false
     let estudiante = ''
     listaEstudiantes.forEach(alumno => {
         if(id === alumno.numIdentificacion){
            bandera = true
            estudiante = alumno
         }
     })
     if(bandera){
        return estudiante;
     }else{
        return {'status': bandera}
     }
   
}

/**
 * Metodo que actualiza un alumno en especifico
 * @param {*} info
 * @param {*} id
 */
 let actualizarAlumno = async (id, info) => {
    let bandera = false
    listaEstudiantes.forEach(alumno => {
        if(id == alumno.numIdentificacion){
            alumno['nombre'] = info.nombre
            alumno['numIdentificacion'] = info.numIdentificacion
            alumno['email'] = info.email
            alumno['telefono'] = info.telefono
            alumno['fechaNacimiento'] = info.fechaNacimiento
            bandera = true
        }
    })
   return {'status': bandera};
}

/**
 * Metodo que elimina un alumno en especifico
 * @param {*} id 
 */
 let eliminarAlumno = async (id) => {
    let bandera = false
    listaEstudiantes.forEach(alumno => {
        if(id == alumno.numIdentificacion){
            let i = listaEstudiantes.indexOf(alumno)
            listaEstudiantes.splice(i,1)
            bandera = true
        }
    })
   return {'status': bandera};
}



module.exports = {validarInformacion,registrarAlumno,obtenerAlumnos,obtenerAlumno,actualizarAlumno,eliminarAlumno}