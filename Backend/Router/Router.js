const express = require('express')
const { addproduct, fetchproduct } = require('../Controller/ProductController')
const {addreservation,fetchreservation, deletereservation} = require('../Controller/ReservationController')
const route = express.Router()

route.post('/addproduct',addproduct)
route.get('/products',fetchproduct)
route.post('/addreservation',addreservation)
route.get('/reservations', fetchreservation)
route.delete('/reservations/:id',deletereservation)

module.exports = route