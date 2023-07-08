import React from 'react'
import "../styles/Navbar.css"
import Tool from  "./components"

const Navbar = () => {
  return (
    <>
      <nav>
      <img src="https://www.festifyer.com/storage/system/6fYpjT6r6ugsHt5aYXOm59JeRHk7OslnDU3yktbl.png" alt="alternative"/>
        <div>
          <ul id='navbar' >
            <li><a href="/"> <Tool blogs= 'Blogs'/></a></li>
            <li><a href="/"> <Tool contacts = 'Contact'/></a></li>
          <button ><Tool login = 'Abdullah' /></button>
         
            
          </ul>
        </div>

        <div id="mobile" >
          <i id='bar' ></i>
          {/* <i class='bx bx-x'></i> */}
        </div>
      </nav>
    </>
  )
}

export default Navbar;