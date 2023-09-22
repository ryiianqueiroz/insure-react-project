import Logo from '../images/logo.svg'
import MenuHamburger from '../images/icon-hamburger.svg'
import Close from '../images/icon-close.svg'
import BgPatternMobile from '../images/bg-pattern-mobile-nav.svg'
import React, { useState } from 'react'

function Nav(){
    
    const [isHamburgerActive, setIsHamburgerActive] = useState(false);

    const Hamburger = () => {
        if (isHamburgerActive === false) {
          setIsHamburgerActive(true)
        }
        else {
          setIsHamburgerActive(false)
        }
    };

    return (
        <nav>
            <img src={Logo} alt="#" ></img>

            <div className={`p-nav ${isHamburgerActive ? "nav-mobile" : ""}`}>
                <h3>HOW WE WORK</h3>
                <h3>BLOG</h3>
                <h3>ACCOUNT</h3>
                <button>VIEW PLANS</button>
                <img src={BgPatternMobile} alt="#" className='bg-pattern-mobile'/>
            </div>

            <div className="ham" onClick={Hamburger}>
                <img src={MenuHamburger} alt="#" className={isHamburgerActive ? "hidden" : "block"}/>
                <img src={Close} alt="#" className={isHamburgerActive ? "block": "hidden"}/>
            </div>
        </nav>
    )
}

export default Nav;