import React from 'react'
import './navbar.css';

const Navbar = () => {
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
            </ul>
         </div>
             </nav>
    </>
  )
}

export default Navbar
