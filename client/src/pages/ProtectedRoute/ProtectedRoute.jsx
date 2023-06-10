import { useSelector } from "react-redux"
import { Navigate, Outlet, useLocation } from "react-router-dom"


const UserProtectedRoute=()=>{
    const user= useSelector(state=>state.login.user)
    const location=useLocation()
    return(
        user?
            <Outlet />
        :
            <Navigate to="/login" state={{from:location}} replace />
        

    )
}

export default UserProtectedRoute

export const ProtectedRouteFromUser=()=>{
    const user= useSelector(state=>state.login.user)
    

    return(
        user?
            <Navigate to="/" />
        :
            <Outlet />    
    )
}