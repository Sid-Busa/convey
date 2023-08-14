import React, { useState } from "react";
import './style.css'
const Header = () => {
  const [active, setActive]  = useState('home')
  
  const handleActive = (item) => {
    setActive(item)
  }

  return <div className="header-container" >
     <div className="hambergun-menu"> 
      <img src='/Hambergun.png' alt='Finnovationz' height='25px' />
    </div> 
    <div className="header-logo"> 
      <img src='/Finnovationz.png' alt='Finnovationz' height='25px' />
    </div>
    <div className="header-nav">
      <div className={`header-nav-item ${active === 'home' && 'active'}`} onClick={() => handleActive('home')} > Home </div>
      <div className={`header-nav-item ${active === 'option' && 'active'}`} onClick={() => handleActive('option')} > Option  </div>
      <div className={`header-nav-item ${active === 'brockrage' && 'active'}`} onClick={() => handleActive('brockrage')} > Brockrage comparision </div>
      <div className={`header-nav-item ${active === 'finclub' && 'active'}`} onClick={() => handleActive('finclub')} > Finclub</div>
      <div className={`header-nav-item ${active === 'product' && 'active'}`} onClick={() => handleActive('product')} > Product </div>
    </div>
  </div>;
};

export default Header;
