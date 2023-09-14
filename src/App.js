import './App.css';
import Logo from './images/logo.svg'
import ImageIntroDesktop from './images/image-intro-desktop.jpg'
import IconAffordable from './images/icon-affordable-prices.svg'
import IconPeople from './images/icon-people-first.svg'
import IconSnappy from './images/icon-snappy-process.svg'
import Facebook from './images/icon-facebook.svg'
import Twitter from './images/icon-twitter.svg'
import Pinterest from './images/icon-pinterest.svg'
import Instagram from './images/icon-instagram.svg'

function App() {
  return (
    <div className="App">
      <nav>
        <img src={Logo}></img>

        <div className="p-nav">
          <h3>HOW WE WORK</h3>
          <h3>BLOG</h3>
          <h3>ACCOUNT</h3>
          <button>VIEW PLANS</button>
        </div>
      </nav>

      <section className="main-container">
        <div className="main-text">
          <h1>Humanizing your insurance.</h1>
          <p>Get your life insurance coverage easier and faster. We blend our expertise 
          and technology to help you find the plan that’s right for you. Ensure you 
          and your loved ones are protected.</p>
          <button>VIEW PLANS</button>
        </div>
        
        <div className="main-image">
          <img src={ImageIntroDesktop}></img>
        </div>
      </section>

      <div className="container-middle">
        <h1>We’re different</h1>

        <div className="card-middle">
          <div className="card1">
            <img src={IconSnappy}></img>
            <h4>Snappy Process</h4>
            <p>Our application process can be completed in minutes, not hours. Don’t get 
            stuck filling in tedious forms.</p>
          </div>
          <div className="card2">
            <img src={IconAffordable}></img>
            <h4>Affordable Prices</h4>
            <p>We don’t want you worrying about high monthly costs. Our prices may be low, 
            but we still offer the best coverage possible.</p>
          </div>
          <div className="card3">
            <img src={IconPeople}></img>
            <h4>People First</h4>
            <p>Our plans aren’t full of conditions and clauses to prevent payouts. We make 
            sure you’re covered when you need it.</p>
          </div>
        </div>
        
        <div className="find-more">
          <h1>Find out more about how we work</h1>
          <button>HOW WE WORK</button>
        </div>
      </div>

      <footer>
        <div className="top">
          <img src={Logo}></img>

          <div className="social-media">
            <img src={Facebook}></img>
            <img src={Twitter}></img>
            <img src={Pinterest}></img>
            <img src={Instagram}></img>
          </div>
        </div>

        <div className="bottom">
          <div className="bt1">
            <p>Our company</p>
            <p>How we work</p>
            <p>Why Insure?</p>
            <p>View plans</p>
            <p>Reviews</p>
          </div>
          <div className="bt1">
            <p>Help me</p>
            <p>FAQ</p>
            <p>Terms of use</p>
            <p>Privacy policy</p>
            <p>Cookies</p>
          </div>
          <div className="bt1">
            <p>Contact</p>
            <p>Sales</p>
            <p>Support</p>
            <p>Live chat</p>
          </div>
          <div className="bt1">
            <p>Others</p>
            <p>Careers</p>
            <p>Press</p>
            <p>Licenses</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;