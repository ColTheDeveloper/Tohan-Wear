import CartItem from "../../components/CartItem/CartItem";
import "./Cart.css";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";

const Cart=()=>{
    const cartitem=useSelector(state=>state.cart.cartList)
    let total=0
    cartitem.map((item)=>{
    return(
      total+=Number(item.totalPrice)
    )
    });
    
    return(
        <div className="Cart">
            <div>
                <span>Home/Cart</span>
                <span>Your Cart</span>
            </div>
            <div>
                <hr />
                {cartitem.map((cart)=>{
                    return(
                        <CartItem 
                            _id={cart._id}
                            key={cart._id}
                            name={cart.name}
                            image={cart.image}
                            quantity={cart.quantity}
                            totalPrice={cart.totalPrice}
                            price={cart.price}
                        />
                    )
                })}
                
                <hr />
                <div className="checkout">
                    <span>&#8358;{total}</span>
                    <Link to={"/checkout"} className="btn">CheckOut</Link>
                </div>
                

            </div>

        </div>
    )
}

export default Cart;