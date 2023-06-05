//Importar el esquema mongoose
const {Schema, model} = require('mongoose') 

//Definir la estructura de la colección
const UsuarioSchema = Schema({
    nombre: {
        type: String,
        //unique: true,//Evitar valor duplicados
        required: [true, 'El nombre es obligatorio']
    },

    password: {
        type: String,
        required: [true, 'El password es obligatorio'],
        minlength: [3, 'Mínimo debe digitar 3 caracteres'],
        maxlength: [7, 'Máximo debe digitar 7 caracteres']
        /*
        min: [3, 'El valor minimo que se acepta es de 3'],
        max: [1000, 'El valor máximo que se acepta es de 1000'],
        */
    },

    rol: {
        type: String,
        enum: ['Admin', 'Asesor'],
        required: [true, 'El rol es obligatorio']
    },

    estado: {
        type: Boolean,
        default: true,
        required: [true, 'El estado es obigatorio']
    }
})

module.exports = model('Usuario', UsuarioSchema)
