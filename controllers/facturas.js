/**
 * Validar que se llenen todos los campos en el registro de una factura
 * @param {*} info 
 */

 let validarInformacion = info => {
    if(!info.fecha || !info.valor || !info.cedulaEstudiante){
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

var listaFacturas = [];


/**
 * Metodo que inserta una factura en la estructura de datos 
 * @param {*} info 
 */
 let registrarFactura = async info => {
    let factura = {id : makeRandomId(3), fecha: info.fecha, valor:info.valor, cedulaEstudiante: info.cedulaEstudiante}
    listaFacturas.push(factura)
    return {'status': 'ok'}
}

/**
 * Metodo que obtiene el historial de facturas que han ingresado
 */
 let obtenerFacturas = async () => {
    return listaFacturas;
}

/**
 * Metodo que obtiene una Factura en especifico
 * @param {*} id 
 */
 let obtenerFactura = async id => {
     let bandera = false
     let facturaAlumno = ''
     listaFacturas.forEach(factura => {
         if(id === factura.id){
            bandera = true
            facturaAlumno = factura
         }
     })
     if(bandera){
        return facturaAlumno;
     }else{
        return {'status': bandera}
     }
   
}

/**
 * Metodo que actualiza una factura en especifico
 * @param {*} info 
 * @param {*} id
 */
 let actualizarFactura = async (id, info) => {
    let bandera = false
    listaFacturas.forEach(factura => {
        if(id == factura.id){
            factura['fecha'] = info.fecha
            factura['valor'] = info.valor
            factura['cedulaEstudiante'] = info.cedulaEstudiante
            bandera = true
        }
    })
   return {'status': bandera};
}

/**
 * Metodo que elimina una factura en especifico
 * @param {*} id
 */
 let eliminarFactura= async (id) => {
    let bandera = false
    listaFacturas.forEach(factura => {
        if(id == factura.id){
            let i = listaFacturas.indexOf(factura)
            listaFacturas.splice(i,1)
            bandera = true
        }
    })
   return {'status': bandera};
}

module.exports = {validarInformacion,registrarFactura,obtenerFacturas,obtenerFactura,actualizarFactura,eliminarFactura}