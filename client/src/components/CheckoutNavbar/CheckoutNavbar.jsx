import logo from "../../images/logo.png"; 
import "./CheckoutNavbar.css"

const CheckoutNavbar=()=>{
    return(
        <div className="CheckoutNavbar">
            <div>
                <a href="/"><img src={logo} alt="tohan" width="100px"/></a>
            </div>
            <div>
                <a href="http://wa.me/2348143139120">Contact US</a>
                <p>Secured Payment</p>
            </div>
        </div>
    )
}

export default CheckoutNavbar;