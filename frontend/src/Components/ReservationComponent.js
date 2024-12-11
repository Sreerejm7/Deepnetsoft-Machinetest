import React, { useState } from 'react'
import './ReservationComponent.css'
import { toast, ToastContainer } from 'react-toastify'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function ReservationComponent() {
  const [data,setData] = useState({
    name:'',
    email:'',
    number:'',
    date_and_time:''
  })

  const navigate = useNavigate()

  const handleChange =(e)=>{
    const {name,value} = e.target
    setData((data)=>({...data,[name]:value}))
  }

  const handleSubmit =async (e)=>{
    e.preventDefault()
    const{name,email,number,date_and_time} = data
    if(!name || !email || !number || !date_and_time) {
      toast.error('All Fields are Required',{autoClose:1000})
    }
    try {
      const url='https://deepnetsoftmachinetest-x9ls.onrender.com/addreservation'
      const response = await axios.post(url,{name,email,number,date_and_time})
      if(response){
        toast.success(response.data.message,{autoClose:1000})
        setTimeout(() => {
          navigate('/home')
        }, 1000);
        
      }
    } catch (error) {
      toast.error(error.response.data.message,{autoClose:1000})
    }
  }
  return (
    <div className='reservation'>
      <div className="reservationcomponent">
      <div className="reserve-title">
      <h3>Enter Your Details</h3>
      </div>
      <form className='reservation-form' onSubmit={handleSubmit}>
        <input type="text"
        name='name'
        placeholder='Enter Your Name'
        value={data.name} 
        onChange={handleChange}
        />
        <input type="email"
        name='email'
        placeholder='Enter Your Email' 
        value={data.email}
        onChange={handleChange}
        />
        <input type="number"
        name='number'
        placeholder='Enter Your Mobile Number' 
        value={data.number}
        onChange={handleChange}
        />
        <input type='datetime-local'
        name='date_and_time'
        placeholder='Enter the date and Time ' 
        value={data.date_and_time}
        onChange={handleChange}
        />

        <button className='res-button' type='submit'>CONFIRM</button>
      </form>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default ReservationComponent
