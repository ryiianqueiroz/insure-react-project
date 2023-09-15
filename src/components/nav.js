import Logo from '../images/logo.svg'

function Nav(){
    return (
        <nav>
            <img src={Logo} alt="#" ></img>

            <div className="p-nav">
                <h3>HOW WE WORK</h3>
                <h3>BLOG</h3>
                <h3>ACCOUNT</h3>
                <button>VIEW PLANS</button>
            </div>
        </nav>
    )
}

export default Nav;