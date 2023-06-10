import { Link } from "react-router-dom"
import { BrandData } from "../../Data/BrandData"
const Brand=()=>{
    return(
        <div className="Category-page-wrapper">
            {BrandData.map((brand)=>{
                const {name, img, id}=brand;
                return(
                    <Link to={`${name}`} key={id}>
                        <div className="category-page">
                            <img src={img} alt={name} />
                        </div>    
                    </Link>
                )
            })}
            
        </div>
    )
}
export default Brand;