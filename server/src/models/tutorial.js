const mongoose = require('mongoose');
      schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const Tutorial = new schema({
   title: { type : String, trim : true, required : true, unique : true },
   description: { type : String, trim : true, required: true },
   published: { type : String, default: false },
})

module.exports = mongoose.model('Tutorial', Tutorial); 
