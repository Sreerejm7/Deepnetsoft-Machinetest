import React, { useState } from "react";
import "./Header.css";
import logo from "../../Assets/Logo.png";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Header() {
  const[sidebar,setsidebar]=useState(false)

  const navigate = useNavigate()

  const handleHome =()=>{
    navigate('/home')
  }
  const handleReservation =()=>{
    navigate('/reservation')
  }

  const handleMenu =()=>{
    navigate('/menu')
  }

  const Handlesidebar=()=>{
   setsidebar(!sidebar)
  }
  return (
    <div className='headermain'>
      <div className="headleft">
        <img className='logo' src={logo} alt="Logo" />
        <div className="Brandname">
          <div className="bfirst">
          <p style={{color:'#0796EF'}}>DEEP</p><p style={{color:'white'}}>NET</p>
        </div>
        <div className="bsecond">
        <p style={{color:'white'}}>SOFT</p>
        </div>
        </div>
        </div>
      <div className="headright">
        <ul>
          <li onClick={handleHome}>HOME</li>
          <li onClick={handleMenu}>MENU</li>
          <li onClick={handleReservation}>MAKE A RESERVATION</li>
          <li>CONTACT US</li>
        </ul>
      </div>
      <svg onClick={Handlesidebar} className='hamburger' xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="50px" fill="#857878"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
      <div className={sidebar ?'sidenavbar on':'sidenavbar'}>
        <div className='sidenavbartop'>
        < AiOutlineClose className='cross' onClick={Handlesidebar}/>
        </div>
      <ul>
          <li onClick={handleHome}>HOME</li>
          <li onClick={handleMenu}>MENU</li>
          <li onClick={handleReservation}>MAKE A RESERVATION</li>
          <li>CONTACT US</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
