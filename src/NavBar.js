import './NavBar.css';
import './MainStyles.css';
import React from "react";
import { Link } from 'react-router-dom';
import Title from './RootImages/Title.png';

function NavBar(){
    return (
      <div className="navMain">
        <header className="navTitle">
          <Link to="/" onClick={() => {window.scroll(0, 0); }}>
          <img src={Title} alt="Title" className='titleImg noSelect'/>
          </Link>
        </header>
        <div className='navLinksDiv noSelect'>
            <p>
                <Link to="/how" className='navLink' onClick={() => {window.scroll(0, 0); }}>Course</Link>
                <Link to="/gallery" className='navLink' onClick={() => {window.scroll(0, 0); }}>Gallery</Link>
                <Link to="/shop" className='navLink' onClick={() => {window.scroll(0, 0); }}>Shop</Link>
                <Link to="/faq" className='navLink' onClick={() => {window.scroll(0, 0); }}>FAQ</Link>
                <Link to="/#about" className='navLink'>About</Link>
            </p>
        </div>
      </div>
    );
  }
  
  export default NavBar;