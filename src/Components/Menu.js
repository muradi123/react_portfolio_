import React from 'react'
import { useState } from 'react';
import Scroll from 'react-scroll-to-element';
import Close from '../images/close.png'
const Menu = () => {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
      setActive(!isActive);
    };
    return (
        <div className="menu_container">
            <div className="background_black">
            <div className="hamburger">
                <label>MENU</label>
                <button className="hamburger_body" 
                onClick={toggleClass} >
                <span></span>
                <span></span>
                <span></span>
                </button>
               
            </div>
            </div>
            
            <div className="menu_inner"  className={isActive ? 'menu_inner active': 'menu_inner'} >
            <div className="menu_margin">
                <div className="navigation">
                    <p className="navigation_text">NAVIGATION</p>
                    <img src={Close} onClick={toggleClass}/>
                </div>
                <div className="menu_items" onClick={toggleClass}>
                <Scroll type="class" element="main_container " >
                     <span >Home</span>
                </Scroll>
                <Scroll type="class" element="about_second_title " >
                     <span>About</span>
                </Scroll>
                <Scroll type="class" element="what_whe_do_header " >
                     <span>Services</span>
                </Scroll>
                <Scroll type="class" element="recent " >
                     <span>Works</span>
                </Scroll>
                <Scroll type="class" element="slider_header " >
                     <span>Clients</span>
                </Scroll>
                <Scroll type="class" element="contact_title" >
                     <span>Contact</span>
                </Scroll>
                </div>
                <div>
                    <p className="menu_text">
                    Perspiciatis hic praesentium nesciunt. Et neque a dolorum voluptatem porro iusto sequi veritatis libero enim. Iusto id suscipit veritatis neque reprehenderit.
                    </p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Menu
