import React from 'react'
import './navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const [btnName,setBtnName]=useState("Login");
  return (
    <>
      <nav className='container'>
      
         <div className='left-side-icon'>
            Youtube
         </div>
         <div className='right-side-list-items'>
            <ul className='list-items'>
                <li>Home</li>
                <li>Service</li>
                <li>Contact us</li>
                <li>Career</li>
                <button onClick={()=>{
                  btnName==="Login"?setBtnName("Logout"):setBtnName("Login")
                }}>{btnName}</button>
            </ul>
         </div>
             </nav>
    </>
  )
}

export default Navbar
