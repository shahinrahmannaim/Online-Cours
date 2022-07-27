import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = () => {
    return (
       

        <div style={{left:'clear'}} className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
        <div className="container">
          <a href="/" className="navbar-brand">Coders <span>
            <i class="devicon-java-plain"></i>
          </span> <span className='text-warning' >Bootcamp</span> </a>
  
          <button className="navbar-toggler" type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="/" className="nav-link">Home</a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">What You'll Learn</a>
              </li>
              <li className="nav-item">
                <a href="/instructors" className="nav-link">Instructors</a>
              </li>
              <li className="nav-item">
                <a href="/contact" className="nav-link">Contact us</a>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link">LogIn</a>
              </li>
              <li className="nav-item">
                <a href="/signup" className="nav-link">SignUp</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  
  
  );

};

export default Header;