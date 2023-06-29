const {Router} = require('express')

const route = Router()

//Importar el controlador
const {getUsuario, postUsuario, putUsuario, deleteUsuario} = require('../controllers/usuario')
const  {isAuthenticated}  = require('../controllers/auth')


route.get('/', isAuthenticated, getUsuario)

route.post('/', isAuthenticated, postUsuario)

route.put('/', putUsuario)

route.delete('/', deleteUsuario)


module.exports = route   
