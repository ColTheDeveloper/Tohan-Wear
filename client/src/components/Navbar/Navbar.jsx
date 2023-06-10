import React from "react";
import "./Navbar.css";
import logo from "../../images/logo.png"; 
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileSubMenu from "../ProfileSubMenu/ProfileSubMenu";

const Navbar=()=>{
    const totalQuantity=useSelector(state=>state.cart.totalQuantity)
    const user=useSelector(state=>state.login.user)

    function openMenu(){
        document.getElementById("nav").style.left="0%";
    }
    const closeMenu=()=>{
        document.getElementById("nav").style.left="-1000%"
    }

    return(
        <div id="navbar">
           <nav>
            <div id="main-logo">
             <i onClick={openMenu} className="bi bi-list"></i>
             <img src={logo} alt="logo" width="100px"/>
            </div>
            <div id="nav">
             <i onClick={closeMenu} className="bi bi-x-lg"></i>
             {/* <input type="search" placeholder="Search" /> */}
             <NavLink to="/">Home</NavLink>
             <NavLink to="product">Product</NavLink>
             <NavLink to="category">Category</NavLink>
             <NavLink to="brand">Brand</NavLink>
             {user?.isAdmin &&
                <NavLink to="admin">Admin</NavLink>
            }

            </div>
            <div>
                <ProfileSubMenu /> 
                <div>
                    <Link to="cart"><i className="bi bi-cart4"></i></Link>
                    <div><span>{totalQuantity}</span></div>
                </div>
                
               
            </div>
           </nav>
        </div>
    )
}

export default Navbar;