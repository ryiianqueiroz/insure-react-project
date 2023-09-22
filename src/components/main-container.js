import ImageIntroDesktop from '../images/image-intro-desktop.jpg'
import ImageIntroMobile from '../images/image-intro-mobile.jpg'
import BgLeftDesktop from '../images/bg-pattern-intro-left-desktop.svg'
import BgRightDesktop from '../images/bg-pattern-intro-right-desktop.svg'

function MainContainer() {
    return (
        <section className="main-container">
            <div className="content">   
                <div className="main-text">
                    <div className='border'></div>
                    <h1>Humanizing your insurance.</h1>
                    <p>Get your life insurance coverage easier and faster. We blend our expertise 
                    and technology to help you find the plan that’s right for you. Ensure you 
                    and your loved ones are protected.</p>
                    <button>VIEW PLANS</button>
                </div>
                
                <div className="main-image">
                    <img src={ImageIntroDesktop} alt="#" className='intro-desktop'></img>
                    <img src={ImageIntroMobile} alt="#" className='intro-mobile'/>
                </div>
            </div>

            <img src={BgLeftDesktop} alt="#" id='bg-left-desktop'/>
            <img src={BgRightDesktop} alt='#' id='bg-right-desktop'/> 
        </section>
    )
}

export default MainContainer;