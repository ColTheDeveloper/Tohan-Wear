import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { allUser } from "../../../api/UserRequest";
import AdminRegisterUser from "../../../components/AdminRegisterUser/AdminRegisterUser";
import ProfileCard from "../../../components/ProfileCard/ProfileCard";
import "./AdminAllUser.css";

const AdminAllUser=()=>{
    const [AllUser,setAllUser]=useState([])
    const user=useSelector(state=>state.login.user)
    
    
    useEffect(()=>{
        const getAllUser= async()=>{
            const response=await allUser(user)
            setAllUser(response.data)
    
        }
        getAllUser()
    },[user])

    return(
        <div className="AdminAllUser">
            <div>
                <AdminRegisterUser />
                <input type="search" 
                    placeholder="Search" 
                    className="inputForm searchForm"
                />     
                           
            </div>
            <div>
            {AllUser.map((users)=>{
                return(
                    <ProfileCard 
                        key={users._id}
                        _id={users._id}
                        firstName={users.firstName}
                        lastName={users.lastName}
                        phoneNumber={users.phoneNumber}
                        emailAddress={users.emailAddress}
                        isAdmin={users.isAdmin}
                        profileImg={users.profileImg}
                    />
                    
                )
            })}
            </div>
            
        </div>
    )
}
export default AdminAllUser