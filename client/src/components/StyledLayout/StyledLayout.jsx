import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"

const StyledLayout=()=>{
    return(
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default StyledLayout;