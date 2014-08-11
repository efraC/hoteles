var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;
 
var cliente_schema = new Schema({
  nombre   :   String,
  fechaNacimiento   :   Date,
  telefono    :   String,
  direccion    :   String
})
module.exports = mongoose.model('clientes', cliente_schema)