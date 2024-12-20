const mongoose = require('mongoose')

const productschema = new mongoose.Schema({
  category:{
    type:String,
    required:true
  },
  name:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true
  },

})

const Product = mongoose.model('Product',productschema)
module.exports = Product