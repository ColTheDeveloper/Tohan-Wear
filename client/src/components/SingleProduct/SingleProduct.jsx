import { Link } from "react-router-dom"
import "./SingleProduct.css"


const SingleProduct=({_id,name,price,discount, image1,})=>{
    
    const discountPrice=((discount/100)*price);
    const totalPrice=price-discountPrice;
    if(discount>0){
        return(
            <Link to={`/product/${_id}`}>
                <div className="SingleProduct">
                    <div className="imageWrapper">
                            <img src={`${process.env.REACT_APP_IMAGE_URL}${image1}`} alt={name}/>
                        <span>{discount}%</span>
                    </div>
                    <div className="SingleProductDetails">
                        <span>{name}</span>
                        <span>&#8358;{totalPrice}</span>
                        <span>&#8358;{price}</span>
                    </div>
                    {/* <Rating 
                        rating="3"
                        numReviews="4"
                    /> */}
                    
                </div>
            </Link>
        )
    }else{
        return(
            <Link to={`/product/${_id}`}>
                <div className="SingleProduct">
                    <div className="imageWrapper">
                        <img src={`${process.env.REACT_APP_IMAGE_URL}${image1}`} alt={name}/>
                    </div>
                    <div className="SingleProductDetails">
                        <span>{name}</span>
                        <span>&#8358;{price}</span>
                    </div>
                </div>
            </Link>
        )
    }
    
}

export default SingleProduct;