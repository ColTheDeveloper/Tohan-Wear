import React from "react";
import { Link } from "react-router-dom";
import { BrandData } from "../../Data/BrandData.js";
import "./../Categories/Categories.css";

const Brands=()=>{
    return(
        <div className="category-wrapper">
            <span className="head">Brands</span>
            <div className="categories">
                {BrandData.map((brand)=>{
                    return(
                        <Link to={`brand/${brand.name}`} key={brand.id}>
                        <div className="category" >
                            <img src={brand.img} alt={brand.name} />
                        </div>
                        </Link>
                    )
                })}

            </div>
        </div>
    )
}
export default Brands;
