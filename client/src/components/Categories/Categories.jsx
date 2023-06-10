import React from "react";
import "./Categories.css";
import { categoryData } from "../../Data/CategoryData.js";
import { Link } from "react-router-dom";


const Categories=()=>{
    return(
        <div className="category-wrapper">
            <span className="head">Category</span>
            <div className="categories">
            {categoryData.map((category)=>{
                return(
                    <Link to={`/category/${category.name}`} key={category.id}>
                        <div className="category" >
                            <img src={category.img} alt={category.name} />
                            <p>{category.name}</p>
                        </div>
                    </Link>
                )
            })}

            </div>
        </div>
    )
}

export default Categories;