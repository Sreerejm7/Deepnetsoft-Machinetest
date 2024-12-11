import React, { useEffect, useState } from 'react'
import './Footer.css'
const Footer = () => {

  const [winwidth, setWinWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => {
      setWinWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='footermain'>
      {winwidth > 426 ? <>
      <div className="footleft">
      <p>&copy; 2024 Deepnetsoft Solutions. All rights reserved.</p> 
      </div>
      <div className="footright">
       <p>Terms & Conditions</p> 
       <p>Privacy Policy</p>
      </div>
      </>
      : <>
      <div className="footleft">
      <p>&copy; 2024 Bar & Grill. Developed by Deepnetsoft Solutions.</p> 
      </div>
      <div className="footright">
       <p>Terms & Conditions</p> 
       <p>Privacy Policy</p>
      </div>
      </>}
    </div>
  )
}

export default Footer