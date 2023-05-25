require('dotenv').config(); //Cargar toda la importación

const Server = require('./models/server')

const server = new Server() //Creando un objeto de Server

server.listen()





/*
//Importar módulos
const express = require('express')
const app = express() 
const path = require('path') //Rutas
const hbs = require('hbs') //Archivos hbs

const puerto = 8082

//Servidor de contenido estático
app.use(express.static('public'))

//Configuración del directorio de las vistas hbs
app.set('views', path.join(__dirname+'/public/views'))
app.set('view engine', 'hbs') //Motor de plantillas

//Configuración del directorio que guardará los archivos partials hbs
hbs.registerPartials(__dirname + '/public/views/partials');

app.get('/', (req, res) => {
    res.render('home',{
        titulo: 'Home',
        nombre: 'Diego',
        rol: 'Admin'
    })
    //res.write('Home')
    //res.end()
})

app.get('/?x', (req, res) => {
    res.render('productos',{
        titulo: 'Productos XYZ',
        rol: 'Admin'
    })
    //res.write('Home')
    //res.end()
})

app.get('/cliente', (req, res) => {
    res.render('clientes',{
        titulo: 'Productos XYZ',
        rol: 'Admin'
    })
    //res.write('Home')
    //res.end()
})

app.listen(puerto, ()=>{
    console.log(`Escuchando por el puerto 
    ${puerto}`)
})

*/