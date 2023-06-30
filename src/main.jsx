import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import './index.css'
import Navbar from './Components/Navbar.jsx'
import Header from './Header.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Navbar/> */}
    {/* <Home /> */}
    <Header/>
  </React.StrictMode>,
)
