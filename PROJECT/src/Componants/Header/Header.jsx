import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.css'
const Header = () => {
    const Navigate=useNavigate();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container  Container2"> 
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse List-center" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="">
          <a className="nav-link active"><img src="./profie.png" alt="" className=" active" id="profile" /></a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page"  onClick={()=>{Navigate("./")}}><i class="fa-solid fa-house"></i> Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page"  onClick={()=>{Navigate("/aboutus")}}><img></img> About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page"  onClick={()=>{Navigate("/Projects")}}>Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page"  onClick={()=>{Navigate("/Contactus")}}><i class="fa-solid fa-address-book"></i>Contact</a>
          </li>
         
         
        
        </ul>
       
      </div>
    </div>
  </nav> 
  )
}

export default Header
