import React, { useState } from 'react'
import './AdditemComponent.css'
import { toast, ToastContainer } from 'react-toastify'
import axios, {} from 'axios'
import food from '../Assets/food.jpg'

function AdditemComponent() {
  const [input,setInput] = useState({
    category:'',
    name:'',
    description:'',
    price:''
  })

  const handleChange = (e)=>{
    const {name,value } = e.target
    setInput((input)=>({...input,[name]:value}))
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()

    const {category ,name,description,price} = input
    if(!category || !name || !description || !price){
      toast.error('Please Fill Al, the Fields',{autoClose:1500})
    }
    try {
      const url = 'http://localhost:4000/addproduct'
      const response = await axios.post(url,{category,name,description,price})
      if(response){
        toast.success(response.data.message,{autoClose:1500})
        setInput({
          category:'',
          name:'',
          description:'',
          price:''
        })
      }
    } catch (error) {
      toast.error(error.response.data.message,{autoClose:1500})
    }
  }
  return (
    <div className='additemcomponent' style={{background:`url(${food}) no-repeat center`,backgroundSize:'cover'}}>
      <div className="additem">
        <h2>Enter the Details of Products</h2>
        <form className='additemform' onSubmit={handleSubmit}>
          <div className="formitem">
            <label htmlFor="category">Enter Product Category(IN BLOCK LETTERS)</label>
            <input type="text" placeholder='Product Category' name='category' value={input.category} onChange={handleChange} />
          </div>

          <div className="formitem">
            <label htmlFor="name">Enter Product Name</label>
            <input type="text" placeholder='Product Name' name='name' value={input.name} onChange={handleChange} />
          </div>

          <div className="formitem">
            <label htmlFor="description">Enter Product Description</label>
            <textarea placeholder='Product Description' name='description' value={input.description} onChange={handleChange} />
          </div>

          <div className="formitem">
            <label htmlFor="price">Enter Product Name</label>
            <input type="number" placeholder='Product Price' name='price'  value={input.price} onChange={handleChange}/>
          </div>

          <button type='submit' className='additembutton'>UPLOAD</button>
        </form>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default AdditemComponent