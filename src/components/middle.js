import IconAffordable from '../images/icon-affordable-prices.svg'
import IconPeople from '../images/icon-people-first.svg'
import IconSnappy from '../images/icon-snappy-process.svg'

function Middle() {
    return(
        <div className="container-middle">
            <div className="content">   
                <div className='border-middle'></div>
                <h1 className='h1-different'>We’re different</h1>

                <div className="card-middle">
                    <div className="card">
                        <img src={IconSnappy} alt="#"></img>
                        <h4>Snappy Process</h4>
                        <p>Our application process can be completed in minutes, not hours. Don’t get 
                        stuck filling in tedious forms.</p>
                    </div>
                    <div className="card">
                        <img src={IconAffordable} alt="#"></img>
                        <h4>Affordable Prices</h4>
                        <p>We don’t want you worrying about high monthly costs. Our prices may be low, 
                        but we still offer the best coverage possible.</p>
                    </div>
                    <div className="card">
                        <img src={IconPeople} alt="#"></img>
                        <h4>People First</h4>
                        <p>Our plans aren’t full of conditions and clauses to prevent payouts. We make 
                        sure you’re covered when you need it.</p>
                    </div>
                </div>
                
                <div className="find-more">
                    <div className="content-find-more">
                        <h1>Find out more about how we work</h1>
                        <button>HOW WE WORK</button>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Middle;