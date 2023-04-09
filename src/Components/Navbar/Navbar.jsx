import React from 'react';
import { Link , NavLink } from 'react-router-dom';

export default function Navbar() {
  return <>
      <nav className="navbar navbar-expand-lg navbar-dark nav  position-fixed start-0 end-0 top-0 " >
        <div className="container">
          <Link className="navbar-brand  text-white col-md-2" to='./'><h3>START REACT</h3></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse col-md-10" id="navbarSupportedContent">

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">

              <li className="nav-item">
                <NavLink className="nav-link rounded" aria-current="page" to='./'>Home</NavLink>
              </li>
              <li className="nav-item ms-3">
                <NavLink className="nav-link rounded" to='./portofolio'>Portofolio</NavLink>
              </li>

              <li className="nav-item ms-3">
                <NavLink className="nav-link rounded" to='./about'>About</NavLink>
              </li>
              <li className="nav-item ms-3">
                <NavLink className="nav-link rounded" to='./contact'>Contact</NavLink>
              </li>

            </ul>
            
            
          </div>
        </div>
      </nav>

    </>
  
}
