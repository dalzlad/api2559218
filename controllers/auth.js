const Usuario = require('../models/usuario')
const bcrypt = require('bcrypt')
const { generarJWT } = require('../helpers/generar-jwt')

async function comparePassword(plaintextPassword, hash) {
    const result = await bcrypt.compare(plaintextPassword, hash);
    return result;
}

const login = async(req, res) => {
    const { nombre, password } = req.body
    
    //Verificar si el email existe
    const usuarios = await Usuario.findOne({nombre})
    
    try {

        if(!usuarios){//Si encontró el email
            return res.status(400).json({
                msg: 'Correo electrónico no encontrado'
            })
        }
    
        if( !usuarios.estado ){
            return res.status(400).json({
                msg: 'Usuario inactivo'
            })            
        }

        resultado = await comparePassword(password, usuarios.password)

        if(resultado == true){
            const token = await generarJWT(usuarios)
            return res.status(200).json({
                //usuarios,
                token: token
            })  
        }
        else{
            return res.status(400).json({
                msg: 'La contraseña es incorrecta'
            })  
        }
        
    } catch (error) {
        return res.status(400).json({
            msg: 'Apreciado usuario contacte al administrador.'
        })
    }
}

module.exports = {
    login
}

