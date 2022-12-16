const { model, Schema } = require('mongoose');

const NotaSchema = Schema(   {
    parcial:{
        type: String,
        required: [ true, 'El campo parcial debe ser requerido'],
       
    },
    nota:{
        type: String,
        required: [ true, 'El campo nota debe ser requerido'],
    },
    observacion:{
        type: String,
        required: [ true, 'El campo observacion debe ser requerido'],
    },
    estado:{
        type: String,
        required: [ true, 'El campo estado debe ser requerido'],
    },
}
);

module.exports = model('Nota', NotaSchema );
