const { response } = require('express')
const Product = require('../Model/Product')

const addproduct = async (req,res)=>{
  try {
    const {category,name,description,price} = req.body
    if(!category || !name || !description|| !price){
      return res.status(400).json({message:'Please Fill All the Feilds'})
    }
    else{
      const product = await Product.create(req.body)
      if(product){
        return res.status(200).json({message:"Product Added Sucessfully",product})
      }
    }
  } catch (error) {
    return res.status(400).json({message:"Error While Creating Products",error})
  }
}

const fetchproduct = async (req,res)=>{
  try {
    const product = await Product.find({})
    if(!product){
      return res.status(400).json({message:'No Products'})
    }
    else{
      return res.status(200).json({message:'Products Fetched Sucessfully',product})
    }
  } catch (error) {
    return res.status(400).json({message:'error while fetching the products',error})
  }
}

module.exports ={
  addproduct,
  fetchproduct
}