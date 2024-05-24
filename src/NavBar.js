import './NavBar.css';
import React from "react";
import { Link } from 'react-router-dom';


function NavBar(){
    return (
      <div className="navMain">
        <header className="navTitle">
          <h1>Cutman 101</h1>
        </header>
        <div className='navLinksDiv'>
            <p>
                <Link to="/" className='navLink' onClick={() => {window.scroll(0, 0); }}>Home</Link>
                <Link to="/how" className='navLink' onClick={() => {window.scroll(0, 0); }}>How To</Link>
                <Link to="/gallery" className='navLink' onClick={() => {window.scroll(0, 0); }}>Gallery</Link>
                <Link to="/about" className='navLink' onClick={() => {window.scroll(0, 0); }}>About</Link>
                <Link to="/contact" className='navLink' onClick={() => {window.scroll(0, 0); }}>Contact</Link>
            </p>
        </div>
      </div>
    );
  }
  
  export default NavBar;