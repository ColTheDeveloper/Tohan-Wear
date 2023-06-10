import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
import { allUser } from "../../api/UserRequest";
import { categoryData } from "../../Data/CategoryData";
import {BrandData} from "../../Data/BrandData";
import "./Admin.css";
const Admin=()=>{
    const user=useSelector(state=>state.login.user)
    //  FOR TOTAL USER
    const [numOfUser, setNumOfUser]=useState()
    const [numOfAdmin,setNumOfAdmin]=useState()
    const getNumOfUser= async ()=>{
        const response=await allUser(user)
        setNumOfUser(response.data.length)
        const Admins=response.data.filter(each=>each.isAdmin)
        setNumOfAdmin(Admins.length)
    }
    //  FOR ALL PRODUCT
    const numOfProduct=useSelector(state=>state.setProduct.product.length)
    useEffect(()=>{
        getNumOfUser()
    })

    //FOR ALL CATEGORY
    const categoryLength=categoryData.length
    

    //FOR ALL BRAND
    const brandLength=BrandData.length

    return(
        <div className="Admin">
            <Link to="/admin/users">
                <div className="admin-div">
                    <span>User</span>
                    <span>{numOfUser}</span>
                </div>
            </Link>
            <Link to="/admin/all">
                <div className="admin-div">
                    <span>Admin</span>
                    <span>{numOfAdmin}</span>
                </div>
            </Link>
            <Link to="/admin/products">
                <div className="admin-div">
                    <span>Product</span>
                    <span>{numOfProduct}</span>
                </div>
            </Link>
            <Link to="/profile">
                <div className="admin-div">
                    <span>Pending Order</span>
                    <span>5</span>
                </div>
            </Link>
            <Link to="/category">
                <div className="admin-div">
                    <span>Category</span>
                    <span>{categoryLength}</span>
                </div>
            </Link>
            <Link to="/brand">
                <div className="admin-div">
                    <span>Brand</span>
                    <span>{brandLength}</span>
                </div>
            </Link>
            <Link to="/profile">
                <div className="admin-div">
                    <span>Order Summary</span>
                    <span>26</span>
                </div>
            </Link>
            <div className="admin-div">
                <span>Total Revenue</span>
                <span>$480</span>
            </div>

            
        </div>
    )
}
export default Admin;