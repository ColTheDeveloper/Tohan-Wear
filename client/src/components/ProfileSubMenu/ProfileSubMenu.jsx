import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup"
import { loginActions } from "../../redux/AuthSlice/LoginSlice";
import "./ProfileSubMenu.css"


const ProfileSubMenu=()=>{
    const dispatch=useDispatch()
    const logOut=()=>{
        dispatch(loginActions.logoutUser())
        
    }
    const user=useSelector(state=>state.login.user)
    if(user===null){
        return(
            <Link to="/register" className="inversebtn">register</Link>     
        )
    }else{
        const {_id,firstName, lastName, emailAddress,profileImg}=user
    return(
        <Popup    
            trigger={open => (
                <div className="toolkit-button">
                    <img src={`${process.env.REACT_APP_IMAGE_URL}${profileImg}`} alt="prfile" />
                    <i className="bi bi-caret-down-fill"></i>
                </div>
            )}    
            position="bottom center"    
            closeOnDocumentClick  >    
            <div className="profile-body">
                <div>                    
                    <img src={`${process.env.REACT_APP_IMAGE_URL}${profileImg}`} alt={`${firstName} ${lastName}`} width="80" />                                        
                    <span>{`${firstName} ${lastName}`}</span>
                    <span>{emailAddress}</span>                    
                </div>
                <hr className="line"/>
                <div>
                    <Link to={`/profile/${_id}`}><i class="bi bi-person-fill"></i>My Profile</Link>
                    <Link><i class="bi bi-list-ul"></i>Order History</Link>
                    <hr className="line"/>
                    <span onClick={logOut}><i class="bi bi-door-open-fill"></i>Log Out</span>
                </div>

            </div>  
        </Popup>
    )}
    
}
export default ProfileSubMenu;