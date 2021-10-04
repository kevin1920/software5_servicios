/**
 * Validar que se llenen todos los campos en el registro de un instrumento
 * @param {*} info 
 */

 let validarInformacion = info => {
    if(!info.marca || !info.tipoInstrumento || !info.descripcion || !info.estado){
        throw {
            ok:false, 
            mensaje:"Todos los campos son obligatorios"
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

var listaInstrumentos = [];


/**
 * Metodo que inserta un instrumento en la estructura de datos 
 * @param {*} info 
 */
 let registrarInstrumento = async info => {
    let  instrumento = {id : makeRandomId(3), tipoInstrumento: info.tipoInstrumento, marca: info.marca, estado: info.estado, descripcion: info.descripcion}
    listaInstrumentos.push(instrumento)
    return {'status': 'ok'}
}

/**
 * Metodo que obtiene el historial de instrumentos que han ingresado
 * @param {*} info 
 */
 let obtenerInstrumentos = async () => {
    return listaInstrumentos;
}

/**
 * Metodo que obtiene un instrumento en especifico
 * @param {*} info 
 */
 let obtenerInstrumento = async id => {
     let bandera = false
     let instrumentoE = ''
     listaInstrumentos.forEach(instrumento => {
         if(id === instrumento.id){
            bandera = true
            instrumentoE = instrumento
         }
     })
     if(bandera){
        return instrumentoE;
     }else{
        return {'status': bandera}
     }
   
}

/**
 * Metodo que actualiza un instrumento en especifico
 * @param {*} info 
 */
 let actualizarInstrumento = async (id, info) => {
    let bandera = false
    listaInstrumentos.forEach(instrumento => {
        if(id == instrumento.id){
            instrumento['tipoInstrumento'] = info.tipoInstrumento
            instrumento['marca'] = info.marca
            instrumento['estado'] = info.estado
            instrumento['descripcion'] = info.descripcion

            
            bandera = true
        }
    })
   return {'status': bandera};
}

/**
 * Metodo que elimina un instrumento en especifico
 * @param {*} info 
 */
 let eliminarInstrumento = async (id) => {
    let bandera = false
    listaInstrumentos.forEach(instrumento => {
        if(id == instrumento.id){
            let i = listaInstrumentos.indexOf(instrumento)
            listaInstrumentos.splice(i,1)
            bandera = true
        }
    })
   return {'status': bandera};
}




module.exports = {validarInformacion,registrarInstrumento,obtenerInstrumentos,obtenerInstrumento,actualizarInstrumento,eliminarInstrumento}