import React from 'react'
import logo from'./logo.png'
import './header.css'

function Header(){
	return (
		<nav className="container">

          <img src={logo} />
            <ul className ="ul-container">
            <li className="li-home">Home</li>
            <li className="li-about">About</li>
            <li>Services</li>
          </ul>
		</nav>
		)
		
}
export default Header