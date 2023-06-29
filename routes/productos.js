const {Router} = require('express')

const route = Router()

//Importar el controlador
const {getProducto, postProducto, putProducto, deleteProducto} = require('../controllers/Producto')
const  {isAuthenticated}  = require('../controllers/auth')


route.get('/', isAuthenticated, getProducto)

route.post('/', isAuthenticated, postProducto)

route.put('/', putProducto)

route.delete('/', deleteProducto)


module.exports = route   
