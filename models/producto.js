//Importar el esquema mongoose
const {Schema, model} = require('mongoose') 

//Definir la estructura de la colección
const ProductoSchema = Schema({
    referencia: {
        type: Number,
        required:true
    },
    
    nombre: {
        type: String,
        //unique: true,//Evitar valor duplicados
        required: [true, 'El nombre es obligatorio']
    },

    cantidad: {
        type: Number,
        min:0,
        max:100
    },
})

module.exports = model('Producto', ProductoSchema)
