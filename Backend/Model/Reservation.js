const mongoose = require('mongoose')

const reservationschema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  number:{
    type:Number,
    required:true
  },
  date_and_time:{
    type:String,
    required:true
  },
  status:{
    type:String,
    default:'Booked'
  }
}) 

const Reservation = mongoose.model('Reservation',reservationschema)

module.exports = Reservation