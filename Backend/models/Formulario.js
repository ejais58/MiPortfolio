const { Schema, model } = require("mongoose");


const FormularioSchema = Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    msg:{
        type: String,
        require: true
    }
});

module.exports = model('Formulario', FormularioSchema);