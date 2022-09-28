import React from 'react'
import './Header.css'
import logo from '../../image/logo.png'

const Header = () => {
  return (
    <div className='header'>
        <div className='logo-container'>
            <img className='logo' src={logo} alt="" />
            <h3>The Muscle Center</h3>
        </div>
        <div>
            <a href="/#">Home</a>
            <a href="/#">Blog</a>
        </div>
    </div>
  )
}

export default Header