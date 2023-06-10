import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ProductDetails.css";
import { useParams } from "react-router-dom"
import { fetchAProduct, selectedProductActions } from "../../redux/productSlice/selectedProductSlice";
//import Rating from "../../components/Rating/Rating";
import { cartActions } from "../../redux/cartSlice/cartSlice";
import { useState } from "react";

const ProductDetails=()=>{
    const {productId}= useParams();
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(fetchAProduct(productId))
        return ()=>{
            dispatch(selectedProductActions.removeProduct())
        }
    },[dispatch, productId])


    const product=useSelector(state=>state.selectedProduct.product)
    

    const {_id,brand,category,discount, description,image1,image2,name,countInStock, price,size}=product

    const changeImg=()=>{
        if(imageIndex===0){
            setImageIndex(1)
        }else if (imageIndex===1){
            setImageIndex(0)
        }
        
    }

    const [imageIndex,setImageIndex]=useState(0)
    const image=[image1,image2]
    const [productSize,setProductSize]=useState("none")

    const handleChange=(e)=>{
        setProductSize(e.target.value)
        
    }
    console.log(productSize)
    

    const addToCart=()=>{
        dispatch(cartActions.addToCart({
            _id,
            image:image1,
            price,
            name
        }))
    }
    const discountPrice=((discount/100)*price);
    const totalPrice=price-discountPrice;

    
    return(
        <div className="ProductDetails">
            <div>
                <span>Home/Shop</span>
                <span>Product Detail</span>
            </div>
            <div>
                <div className="product-img">
                    <i onClick={changeImg} className="img-left-btn bi bi-chevron-left"></i>
                    <img  src={`${process.env.REACT_APP_IMAGE_URL}${image[imageIndex]}`} alt={name} />
                    <i onClick={changeImg} className="img-right-btn bi bi-chevron-right"></i>
                </div>
                <div className="product-details">
                    <span>{brand}</span>
                    <span>{name}</span>
                    <span>{category}</span>
                    <span>{description}</span>
                    <div>
                        <label htmlFor="productSize">Size:</label>
                        <select value={productSize} onChange={handleChange} name="ProductSize">
                            <option value="32">32</option>
                            <option value="40">40</option>
                            <option value="38">38</option>
                        </select>
                    </div>
                    
                    <div className="price-section">
                        <div>
                            <span>&#8358;{totalPrice}</span>
                            <span>&#8358;{price}</span>
                        </div>
                        <div>
                            <span>{discount}%</span>
                        </div>
                        
                    </div>
                    <div>
                        <button onClick={addToCart} className="btn">Add To Cart</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default ProductDetails;