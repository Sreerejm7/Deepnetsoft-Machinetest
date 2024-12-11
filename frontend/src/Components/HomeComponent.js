import React from 'react'
import './HomeComponent.css'
import { useNavigate } from 'react-router-dom'
import food from '../Assets/food.jpg'

function HomeComponent() {
  const navigate = useNavigate()
  const handleMenu=()=>{
    navigate('/menu')
  }
  return (
    <div className='homecontainer' style={{background:`url(${food}) no-repeat center`, backgroundSize:'center'}}>
      <div className="home-info">
        <h1>DEEP NET SOFT</h1>
        <p className='homecontent'>Step into a world of flavors at Deep Net Soft, where every dish tells a story of passion and perfection. From the freshest ingredients to innovative recipes, we bring you a dining experience like no other. Savor the rich tastes of our expertly prepared dishes, designed to delight and satisfy every craving. Whether you're here for a casual meal or a special celebration, our menu promises to turn every moment into a delicious memory. <b>Dive into our menu and let your taste buds embark on an unforgettable journey</b></p>
        <button className='home-button' onClick={handleMenu}> CHECK MENU</button>
      </div>
    </div>
  )
}

export default HomeComponent