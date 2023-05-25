const express = require('express')
//Instalar el paquete dotenv

class server{
    
    constructor () {
        this.app = express()

        this.port = process.env.PORT

        this.productoPath = '/api/producto' //Ruta pública de la API

        this.middlewares()//Seguridad

        this.routes()

    }

    middlewares() //Directorio Publico
    {
        this.app.use(express.static(__dirname + "/public"));
    }

    routes()
    {
        this.app.use(this.productoPath, require('../routes/productos'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando el puerto ${this.port}`)
        })
    }
}

//Exportar la clase server
module.exports = server