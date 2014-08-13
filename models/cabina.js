var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var cabina_schema = new Schema({
  nombreCabina      :   String
})

module.exports = mongoose.model('cabinas', cabina_schema)