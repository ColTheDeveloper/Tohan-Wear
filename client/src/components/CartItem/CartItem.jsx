import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/cartSlice/cartSlice";
import "./CartItem.css";

const CartItem=({image,_id,name,quantity,discount,totalPrice,price})=>{
    const dispatch=useDispatch();
    const increase=()=>{
        
        dispatch(cartActions.addToCart({
            _id,
            image,
            price,
            name
        })) 
    }
    const decrease=()=>{
        dispatch(cartActions.removeFromCart(_id))
    }
    return(
        <div className="CartItem" key={_id}>
            <div className="cartProduct">
                <div>
                    <img src={`${process.env.REACT_APP_IMAGE_URL}${image}`} alt={name} />
                </div>
                <div>
                    <span>{name}</span>
                </div>
            </div>
            <div className="cartEdit">
                <div>
                    <span onClick={decrease}>-</span>
                    <span>{quantity}</span>
                    <span onClick={increase}>+</span>
                </div>
                <div>
                    <span>&#8358;{totalPrice}</span>
                </div>
            </div>
        </div>
    )
}
export default CartItem;