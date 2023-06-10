import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../ProductDetails/ProductDetails.css";
import { useParams } from "react-router-dom"
import { fetchAProduct, selectedProductActions } from "../../../redux/productSlice/selectedProductSlice";
import ProductEdit from "../../../components/ProductEdit/ProductEdit";
import OptionModal from "../../../components/OptionModal/OptionModal";
import { deleteAProduct } from "../../../api/ProductRequest";
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom";


const AdminProductDetails=()=>{
    const {productId}= useParams();
    const dispatch=useDispatch()
    const navigate=useNavigate()

    useEffect(()=>{
        dispatch(fetchAProduct(productId))
        return ()=>{
            dispatch(selectedProductActions.removeProduct())
        }
    },[dispatch, productId])


    const product=useSelector(state=>state.selectedProduct.product)
    const user=useSelector(state=>state.login.user)
    console.log(product)

    const {_id,brand,category,discount, description,name,countInStock, price,image1,image2,size}=product

    const handleDelete=async()=>{
        try {
            const response=await deleteAProduct({_id,user})
            console.log(response)
            toast.success(response.data)
            navigate("/admin/products")
        } catch (error) {
            toast.error("Product was not deleted")
            console.log(error)
            
        }
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
                    <img src={`${process.env.REACT_APP_IMAGE_URL}${image2}`} alt={name} />
                </div>
                <div className="product-details">
                    <span>{brand}</span>
                    <span>{name}</span>
                    <span>{category}</span>
                    <span>{description}</span>
                    <div>
                        <span>Sizes:32 </span>
                    </div>
                    <div className="price-section">
                        <div>
                            <span>${totalPrice}</span>
                            <span>${price}</span>
                        </div>
                        <div>
                            <span>{discount}%</span>
                        </div>
                    </div>
                    <div>
                        <ProductEdit />
                        <OptionModal 
                            trigger={<span className="btn" style={{width:"100%"}}>Delete Account</span>}
                            handler={handleDelete}
                            modalTitle="Do you want to delete this product?"
                        />
                    </div>
                    

                </div>
            </div>
        </div>
    )
}
export default AdminProductDetails;