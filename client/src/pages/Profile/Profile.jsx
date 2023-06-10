

import "./Profile.css"
import profile from "../../images/profile.jpg"
import OptionModal from "../../components/OptionModal/OptionModal";
import ProfileEdit from "../../components/ProfileEdit/ProfileEdit"
import OrderHistory from "../../components/OrderHistory/OrderHistory";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { deleteUser, getAUser } from "../../api/UserRequest";
import { useState } from "react";
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom";
import { loginActions } from "../../redux/AuthSlice/LoginSlice";
const Profile=()=>{
    const {profileId}=useParams();
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [profileData, setProfileData]=useState({})
    const user=useSelector(state=>state.login.user)
    const yourProfile=profileId===user._id
    
    useEffect(()=>{
        const profileUser= async()=>{
            const response=await getAUser(profileId)
            setProfileData(response.data)
        }
        profileUser()
    },[profileId])
    
    const deleteHandler= async()=>{
        
        try {
            const response=await deleteUser({_id,user})
            toast.success(response.data)
            navigate("/admin/users")
        } catch (error) {
            
        }

    }

    

    const userDeleteHandler= async()=>{
        
        try {
            const response=await deleteUser({_id,user})
            toast.success(response.data)
            navigate("/")
            dispatch(loginActions.logoutUser())
            
        } catch (error) {
            
        }

    }
    const {isAdmin}=user

    const {_id,firstName,lastName, emailAddress,phoneNumber,profileImg}=profileData
    return(
        <div className="Profile">
            
            <div>
                <span>Home/Profile</span>
                <span>User Profile</span>
            </div>
            <div>
                <img src={profileImg?process.env.REACT_APP_IMAGE_URL+profileImg:profile} alt="tee" />
                <span>{`${firstName} ${lastName}`}{yourProfile&&<ProfileEdit />}</span>
                <span>{emailAddress}</span>
                <span>{phoneNumber}</span>
            </div>
            <OrderHistory />
            
            
            <div>
            
                {isAdmin || yourProfile ?
                <OptionModal 
                    key={2}
                    trigger={<span className="btn">Delete Account</span>}
                    handler={isAdmin?deleteHandler:userDeleteHandler}
                    modalTitle="Do you want to delete this account?"
                />: ""}

            </div>
        </div>
    )
}
export default Profile