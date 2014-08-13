var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var empleado_schema = new Schema({
  nombre     	:   String,
  fechaNacimiento    :   Date,
  telefono    :   String,
  direccion    :   String
})
module.exports = mongoose.model('empleados', empleado_schema)