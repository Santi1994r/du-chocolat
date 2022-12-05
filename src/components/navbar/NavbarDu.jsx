import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import logo from '../../assets/images/Logo.png'
import './styleNavbar.css'

function NavbarDu() {
  return (
    <header>
             
      <Navbar expand="sm" className='navbarDu'>
      <Container fluid> 
         <Navbar.Brand className='containerLogoMobile'>
            <img className='logoMobile' src={logo} alt="" />
            <p className='titMobile'>Reposteria Artesanal</p>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
         </Navbar.Brand>
      
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 d-flex justify-content-center align-items-center">
            <div className='lineaNav'></div> 
            <a href="#seccion-1" className="linkNav">Inicio</a>
            <a href="#seccion-2" className="linkNav">Nosotros</a>
            <img className='logoNavbar' src={logo} alt="" />
            <a href="#seccion-3" className="linkNav">Carta</a>
            <a href="#seccion-4" className="linkNav">Contacto</a>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default NavbarDu