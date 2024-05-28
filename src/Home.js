import './Home.css';
import './MainStyles.css';
import Champ from './Images/Champion.png';
import Quote from './Images/Quote.png';
import About from './About.js';
import { Element, scroller } from 'react-scroll';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
          const id = location.hash.replace('#', '');
          scroller.scrollTo(id, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            offset: -160
          });
        }
      }, [location]);

    return ( 
        <div className='homepageWrapper'>
            <div className="homeMain mainDiv">
            <img src={Champ} alt="Champion" className='champImg noSelect'/>
            <img src={Quote} alt="Quote" className='quoteImg noSelect'/>
            </div>
        
            <About name="about" id="about"/>
            
        </div>
    );
}

export default Home;