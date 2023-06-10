import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import SingleProduct from "../../components/SingleProduct/SingleProduct"

const SingleBrand=()=>{
    const {brand}=useParams()
    const allProducts=useSelector(state=>state.setProduct.product)
    const datas=allProducts.filter(product=>product.brand===brand)
    
    return(
        <div>
            <div className="NewOrder">
                <span>New Order</span>
                <div className="product-wrapper">
                    {datas.map((product)=>{
                        return(                        
                            <SingleProduct 
                                key={product._id}
                                id={product._id}
                                name={product.name}
                                discount={product.discount}
                                image={product.image}
                                price={product.price}
                            />
                        )
                    })}
                </div>
            </div>

        </div>

    )
}
export default SingleBrand;