import { Link } from "react-router-dom"
import { categoryData } from "../../Data/CategoryData.js"
import "./Category.css";
const Category=()=>{
    return(
        <div className="Category-page-wrapper">
            {categoryData.map((category)=>{
                const {name, img, id}=category
                return(    
                    <Link to={`${name}`} key={id}>
                        <div className="category-page">
                            <img src={img} alt={name} />
                            <span>{name}</span>
                        </div>    
                    </Link>    
                    
                )
            })}

        </div>
    )
}
export default Category;