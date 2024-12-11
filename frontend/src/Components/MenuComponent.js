import React, { useEffect, useState } from 'react'
import './MenuComponent.css'
import phone from '../Assets/bytesize_telephone.png'
import email from '../Assets/streamline_travel-map-location-pin-navigation-map-maps-pin-gps-location.png'
import location from '../Assets/bytesize_telephone.png'
import facebook from '../Assets/iconoir_facebook.png'
import youtube from '../Assets/mingcute_youtube-line.png'
import twitter from '../Assets/basil_twitter-outline.png'
import instagram from '../Assets/Frame 151.png'
import logo from "../Assets/Logo.png";
import firstimg from '../Assets/Firstimg.png'
import secondimg from '../Assets/Rectangle 107.png'
import axios from 'axios'

function MenuComponent() {

  const [product,setProduct] = useState([])
  const [category,setCatogory]= useState([])

  const [selectedCategory,setSelectedCategory] = useState('')

  const fetchdata = async ()=>{
    try {
      const url = 'http://localhost:4000/products'
      const response = await axios.get(url)
      if(response){
        const uniqueCategory=new Set(category)
        response.data.product.forEach((item)=>{
          uniqueCategory.add(item.category)
        })

        setCatogory([...uniqueCategory])
        setProduct(response.data.product)

      }
    } catch (error) {
      console.log(error.response.data.message);
      
    }
  }

  useEffect(()=>{
    fetchdata()
  },[])

  const handlecategoryFilter=(category)=>{
    setSelectedCategory(category)
  }

  const filteredProducts = selectedCategory
    ? product.filter((item) => item.category === selectedCategory) 
    : product;
  return (
    <div className='menu'>
      <div className="menu-menu" style={{background:`url(${firstimg}) no-repeat center`, backgroundSize:'cover'}}>
        <div className="menu-con">
        <h2 className='menu-first'>MENU</h2>
        <p className='menu-description'>Please take a look at our menu featuring food,drinks,and brunch. if you'd like to place an order, use the 'Order Online button below the menu</p>
        </div>
      </div>

      <div className="menu-second">
        {category && category.map((item,index)=>(
        <button key={index} onClick={()=>handlecategoryFilter(item)}>{item}</button>
      ))}
      </div>

      <div className="menu-third">
        <div className="menu-third-container">
          
          <h2 className='menu-item-name'><hr className='horizontalline' />{selectedCategory ? selectedCategory : 'OUR SPECIALS'} <hr className='horizontalline' /></h2>
          <div className="menu-items-div">
            {filteredProducts.length >0 ? (filteredProducts.map((item,index)=>(<>
            <div className="menu-item" key={index}>
              <h4>{item.name}............................${item.price}</h4>
              <p className='menu-item-detail'>{item.description}</p>
            </div>
            </>))):(<p>No Products</p>)}
          </div>
        </div>
      </div>

      <div className="menu-fourth">
        <div className="datacard1">
          <p className='connect'>CONNECT WITH US</p>
          <div className="connect-details">
            <img src={phone} alt="phone" />
            <p className='connect-detail'>+91 9567843340</p>
          </div>
          <div className="connect-details">
            <img src={email} alt="email" />
            <p className='connect-detail'>info@deepnetsoft.com</p>
          </div>
        </div>

        <div className="datacard2">
          <div className="com-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="com-name">
            <p style={{color:'#0796ef'}}>DEEP</p>
            <p style={{color:'white'}}>NET</p>
            <p style={{color:'#857878'}}>SOFT</p>
          </div>
          <div className="com-connect">
            <img src={facebook} alt="fb" />
            <img src={twitter} alt="twitter" />
            <img src={youtube} alt="youtube" />
            <img src={instagram} alt="insta" />
          </div>
        </div>

        <div className="datacard3">
        <p className='findus'>FIND US</p>
        <div className="find-details">
            <img src={location} alt="location" />
            <p className='find-detail'>First floor, Geo infopark, <br />Infopark EXPY, Kakkanad</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuComponent