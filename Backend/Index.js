require('dotenv').config();
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('./Database/database')
const route = require('./Router/Router')


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use('/',route)

app.get('/',(req,res)=>{
  res.send('hello all')
})
const port = process.env.PORT

app.listen(port,()=>{
  console.log(`server is running on port ${port}`);
  
})