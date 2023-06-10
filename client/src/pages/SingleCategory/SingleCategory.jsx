
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SingleProduct from "../../components/SingleProduct/SingleProduct";

const SingleCategory=()=>{
    const {category}=useParams();
    const allProducts=useSelector(state=>state.setProduct.product)
    const datas=allProducts.filter(product=>product.category.includes(category))
    return(
        <div className="Product">
            <div>
                <input 
                    type="search"
                    className="inputForm searchForm" 
                    placeholder="Search"
                />
            </div>
            <div className="product-wrapper">
                {datas.map((product)=>{
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
export default SingleCategory;