const {response} = require('express')
const bcrypt = require('bcrypt') //Importar libreria para encriptar
const Producto = require('../models/producto')


//Consulta
const getProducto = async(req, res=response) => {
    let mensaje = ''
    try {
        //Consulta en la colección
        const productos = await Producto.find()
        mensaje = productos
    } catch (error) {
        mensaje = error
    }

   res.json({
        productos:mensaje
    })
    
}

const postProducto = async(req, res = response) =>{

    const body = req.body //Desestructuración
    let mensaje = ''
    const producto = new Producto(body) // Crear el objeto

    console.log(body)
    try {
        await producto.save()
        mensaje = 'Producto registrado exitosamente'
    } catch (error) {
        mensaje = error
    }

    res.json({
        mensaje
    })
   
}

const putProducto = async(req, res = response) =>{
    //Actualización de datos
    const body = req.body //Desestructuración
     console.log(body)

    let mensaje = ''

    try {
//      await Usuario.findOneAndUpdate({nombre:body.nombre}, {rol:body.rol, estado:body.estado})
        await Producto.findOneAndUpdate({_id:body._id}, {referencia:body.referencia, nombre:body.nombre, cantidad:body.cantidad})
        mensaje = 'Producto modificado exitosamente.'
    } catch (error) {
        mensaje = error
    }
    //console.log('---------------'+mensaje)
    res.json({
        mensaje:mensaje
    })
   
}

const deleteProducto = async(req, res = response) =>{
    //Actualización de datos
    const body = req.body//Desestructuración
    let mensaje = ''

    try {
        await Producto.deleteOne({_id:body._id})
        mensaje = 'Eliminado exitosamente'
    } catch (error) {
        mensaje = error
    }
    //console.log('---------------'+mensaje)
    res.json({
        mensaje
    })
   
}

module.exports = {
    getProducto,
    postProducto,
    putProducto,
    deleteProducto
}

/*
bcrypt

*/



/*
Enviar al email: dalopezz@sena.edu.co
El enlace de la api a testear con el
nombre de usuario y clave.
Las rutas a testear deben solicitar login
Enviar antes del domingo


*/
