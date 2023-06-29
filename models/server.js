const cookieParser = require('cookie-parser');
const express = require('express')
const cors  = require('cors');//Implementar seguridad
const bodyParser = require('body-parser')//Recibir datos de formularios html

const dbConection = require('../database/config')
//Instalar el paquete dotenv

class server{
    
    constructor () {
        this.app = express()

        this.port = process.env.PORT

        this.usuarioPath = '/api/usuario' //Ruta pública de la API
        this.authPath = '/api/auth' //Ruta pública de la API
        this.productoPath = '/api/producto'

        this.middlewares()//Seguridad

        this.routes()

        this.dbConectar()

    }

    middlewares() //Directorio Publico
    {
        this.app.use(cookieParser()); 
        this.app.use(express.static(__dirname + "/public"));
        this.app.use( cors() );
        this.app.use(bodyParser.json()) // for parsing application/json
    }

    routes()
    {
        this.app.use(this.usuarioPath, require('../routes/usuarios'))
        this.app.use(this.authPath, require('../routes/auth'))
        this.app.use(this.productoPath, require('../routes/productos'))

    }

    async dbConectar(){
        await dbConection()
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando el puerto ${this.port}`)
        })
    }
}

//Exportar la clase server
module.exports = server