import { useSelector } from "react-redux";
import AdminAddProduct from "../../../components/AdminAddProduct/AdminAddProduct";
import ProductCard from "../../../components/ProductCard/ProductCard";
import "./AdminAllProduct.css"

const AdminAllProduct=()=>{
    const allProduct=useSelector(state=>state.setProduct.product)
    return(
        <div className="AdminAllProduct">
            <div>
                <AdminAddProduct />
                <input 
                    type="search"
                    className="inputForm searchForm" 
                    placeholder="Search"
                />
            </div>
            <div >
                {allProduct.map((product)=>{
                    return(
                        <ProductCard 
                            key={product._id}
                            _id={product._id}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            size={product.size}
                            image1={product.image1}
                            views={product.views}
                            discount={product.discount}                
                        />                    
                    )
                })}
            </div>
            
        </div>
    )
}
export default AdminAllProduct; 