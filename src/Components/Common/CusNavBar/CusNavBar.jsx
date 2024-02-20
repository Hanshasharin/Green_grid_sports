import React from 'react'
import './CusNavBar.css'
// import i from'../../../Assets/alphabet.jpg'
import i from '@assets/alphabet.jpg'
function CusNavBar() {
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <span className="navbar-brand">Green Gr<img src={i} alt=''/>d</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto  mb-lg-0">
        <li className="nav-item">
          Home
        </li>
        <li className="nav-item">
          Features
        </li>
        <li className="nav-item">
          Pricing
        </li>
        
        
        
      </ul>
      

      <div class="nav-item dropdown">
          <span class="nav-link dropdown-toggle user-drop-down"  role="button" data-bs-toggle="dropdown" aria-expanded="true">
            User
          </span>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><span class="dropdown-item" >Action</span></li>
            <li><span class="dropdown-item" >Another action</span></li>
            <li><span class="dropdown-item" >Something else here</span></li>
          </ul>
        </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default CusNavBar
