var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var usuarios_schema = new Schema({
  usuario      :   String,
  contrasena  :   String
})
module.exports = mongoose.model('usuarios', usuarios_schema)