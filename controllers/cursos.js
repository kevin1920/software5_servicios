/**
 * Validar que se llenen todos los campos en el registro de un curso
 * @param {*} info 
 */

 let validarInformacion = info => {
    if(!info.nombre || !info.horario){
        throw {
            ok:false, 
            mensaje:"Los campos nombre y horario son obligatorios"
        };
    }
}

let makeRandomId= (length) => {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
   }
   return result;
}

var listaCursos = [];


/**
 * Metodo que inserta una cursos en la estructura de datos 
 * @param {*} info 
 */
 let registrarCurso = async info => {
    let curso = {id : makeRandomId(3), nombre: info.nombre, horario:info.horario, instrumento: info.instrumento, cedulaprofesor: info.cedulaprofesor, listaAlumnos: info.listaAlumnos}
    listaCursos.push(curso)
    return {'status': 'ok'}
}

/**
 * Metodo que obtiene el historial de cursos que han ingresado
 * @param {*} info 
 */
 let obtenerCursos = async () => {
    return listaCursos;
}

/**
 * Metodo que obtiene un Curso en especifico
 * @param {*} info 
 */
 let obtenerCurso = async id => {
     let bandera = false
     let cursoAlumno = ''
     listaCursos.forEach(curso => {
         if(id === curso.id){
            bandera = true
            cursoAlumno = curso
         }
     })
     if(bandera){
        return cursoAlumno;
     }else{
        return {'status': bandera}
     }
   
}

/**
 * Metodo que actualiza un Curso en especifico
 * @param {*} info 
 */
 let actualizarCurso = async (id, info) => {
    let bandera = false
    listaCursos.forEach(curso => {
        if(id == curso.id){
            curso['nombre'] = info.nombre
            curso['horario'] = info.horario
            curso['cedulaprofesor'] = info.cedulaprofesor
            curso['instrumento'] = info.instrumento
            bandera = true
        }
    })
   return {'status': bandera};
}

/**
 * Metodo que elimina un Curso en especifico
 * @param {*} info 
 */
 let eliminarCurso = async (id) => {
    let bandera = false
    listaCursos.forEach(curso => {
        if(id == curso.id){
            let i = listaCursos.indexOf(curso)
            listaCursos.splice(i,1)
            bandera = true
        }
    })
   return {'status': bandera};
}


let profesorCurso = async (id, info) => {
    let bandera = false
    listaCursos.forEach(curso => {
        if(id == curso.id){
            curso['cedulaprofesor'] = info.cedulaprofesor
            bandera = true
        }
    })
   return {'status': bandera};
}


module.exports = {validarInformacion,registrarCurso,obtenerCursos,obtenerCurso,actualizarCurso,eliminarCurso,profesorCurso}