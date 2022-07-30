import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
       

        <div style={{left:'clear'}} className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
        <div className="container">
          <NavLink to="/" className="navbar-brand">Coders <span>
            <i class="devicon-java-plain"></i>
          
          </span> <span className='text-warning' >Bootcamp</span> </NavLink>
  
          <button className="navbar-toggler" type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/courses" className="nav-link">What You'll Learn</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/instructors" className="nav-link">Instructors</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">Contact us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">LogIn</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link">Register</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
  
  
  );

};

export default Header;