import { Outlet } from "react-router-dom";
import CheckoutNavbar from "../../components/CheckoutNavbar/CheckoutNavbar";

const Checkout=()=>{
    return(
        <div className="Checkout">
            <CheckoutNavbar />
            <Outlet />

        </div>
    )
}

export default Checkout;