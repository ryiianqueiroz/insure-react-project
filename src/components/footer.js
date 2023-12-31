import Facebook from '../images/icon-facebook.svg'
import Twitter from '../images/icon-twitter.svg'
import Pinterest from '../images/icon-pinterest.svg'
import Instagram from '../images/icon-instagram.svg'
import Logo from '../images/logo.svg'
import BgFooterDesktop from '../images/bg-pattern-footer-desktop.svg'

function Footer() {
    return(
        <footer>
            <img src={BgFooterDesktop} alt="#" id='bg-footer-desktop'/>

            <div className="top">
                <img src={Logo} alt="#"></img>

                <div className="social-media">
                    <img src={Facebook} alt="#"></img>
                    <img src={Twitter} alt="#"></img>
                    <img src={Pinterest} alt="#"></img>
                    <img src={Instagram} alt="#"></img>
                </div>
            </div>

            <div className="bottom">
                <div className="bt">
                    <p>Our company</p>
                    <p>How we work</p>
                    <p>Why Insure?</p>
                    <p>View plans</p>
                    <p>Reviews</p>
                </div>
                <div className="bt">
                    <p>Help me</p>
                    <p>FAQ</p>
                    <p>Terms of use</p>
                    <p>Privacy policy</p>
                    <p>Cookies</p>
                </div>
                <div className="bt">
                    <p>Contact</p>
                    <p>Sales</p>
                    <p>Support</p>
                    <p>Live chat</p>
                </div>
                <div className="bt">
                    <p>Others</p>
                    <p>Careers</p>
                    <p>Press</p>
                    <p>Licenses</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;