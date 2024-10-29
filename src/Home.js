import './Home.css';
import './MainStyles.css';
import Champ from './RootImages/Champion.jpg';
import ChampTall from './RootImages/ChampionTall.jpg';
import About from './About.js';
import { Element, scroller } from 'react-scroll';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive';;

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // 1000 milliseconds = 1 second

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, []);

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

      const [imageSrc, setImageSrc] = useState(Champ);

  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    if (isMobile) {
      setImageSrc(ChampTall);
    } else {
      setImageSrc(Champ);
    }
  }, [isMobile]);

    return ( 
        <div className='homepageWrapper'>
            <div className="homeMain mainDiv">
              {isVisible ?
            <img src={imageSrc} alt="Champion" className='champImg noSelect'/>
            : null }
            </div>
        
            {/*<About name="about" id="about"/>*/}
            
        </div>
    );
}

export default Home;