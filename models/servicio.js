var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;
 
var servicio_schema = new Schema({
  nombre   :   String,
  precio   :   Number
})
module.exports = mongoose.model('servicios', servicio_schema)