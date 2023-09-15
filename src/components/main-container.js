import ImageIntroDesktop from '../images/image-intro-desktop.jpg'

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
                    <img src={ImageIntroDesktop} alt="#"></img>
                </div>
            </div> 
        </section>
    )
}

export default MainContainer;