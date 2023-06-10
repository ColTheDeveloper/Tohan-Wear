import React from "react";
import "./RecentlyAdded.css";
import { useSelector } from "react-redux";
import SingleProduct from "../SingleProduct/SingleProduct";


const RecentlyAdded=()=>{
    
    const allProducts=useSelector(state=>state.setProduct.product)
    const recentProduct=(allProducts.slice(0,12))
    
    
    
    return(
        <div className="RecentlyAdded">
            <span>Recently Added</span>
            <div className="product-wrapper">
                {recentProduct.map((product)=>{
                    return(                        
                        <SingleProduct 
                            key={product._id}
                            _id={product._id}
                            name={product.name}
                            discount={product.discount}
                            image1={product.image1}
                            price={product.price}
                        />
                    )
                })}
            </div>


        </div>
    )
}
export default RecentlyAdded;