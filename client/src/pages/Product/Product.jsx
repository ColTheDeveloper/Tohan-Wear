import { useSelector } from "react-redux";
import "./Product.css"
import SingleProduct from "../../components/SingleProduct/SingleProduct";
import { useState } from "react";


const Product=()=>{
    const allProducts=useSelector(state=>state.setProduct.product)

    const [query, setQuery]= useState(" ")

    console.log(query)
    const searchData=allProducts.filter(data=>data.name.includes(query))
    return(
        <div className="Product">
            <div>
                <input 
                    type="search"
                    className="inputForm searchForm" 
                    placeholder="Search"
                    value={query}
                    onChange={(e)=>setQuery(e.target.value)}
                />
            </div>
            <div className="product-wrapper">
                {searchData.map((product)=>{
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
export default Product;