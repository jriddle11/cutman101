import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './RootImages/Title.png';
import TitleGlow from './RootImages/TitleGlow.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';

import './NavBar.css';

function NavBarAlt() {

  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <Navbar bg='black' expand="lg" data-bs-theme="dark" className='altBar' sticky='top'>
      <Container>
        <Navbar.Brand href="/"><img 
        src={hover ? TitleGlow : Title} 
        alt="Title" 
        className='titleImg noSelect'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        />
        </Navbar.Brand><p className='spacer'> </p>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='altLink'><Link to="/" className='noDec' onClick={() => {window.scroll(0, 0); }}>Home</Link></Nav.Link>
            <Nav.Link className='altLink'><Link to="/how" className='noDec' onClick={() => {window.scroll(0, 0); }}>Course</Link></Nav.Link>
            {/*<Nav.Link className='altLink'><Link to="/shop" className='noDec' onClick={() => {window.scroll(0, 0); }}>Shop</Link></Nav.Link>*/}
            <Nav.Link className='altLink'><Link to="/gallery" className='noDec' onClick={() => {window.scroll(0, 0);}}>Gallery</Link></Nav.Link>
            {/*<Nav.Link className='altLink'><Link to="/faq" className='noDec' onClick={() => {window.scroll(0, 0); }}>FAQ</Link></Nav.Link>*/}
            <NavDropdown title="Contact" id="basic-nav-dropdown">
              <NavDropdown.Item>Action</NavDropdown.Item>
              <NavDropdown.Item>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarAlt;