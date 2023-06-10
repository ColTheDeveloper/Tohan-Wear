import { Link } from "react-router-dom";
import "./ProfileCard.css";
const ProfileCard=({_id,firstName,lastName,emailAddress,phoneNumber,profileImg})=>{
    return(
        <Link to={`/profile/${_id}`}>
        <div className="ProfileCard">
            <div>
                <img src={`${process.env.REACT_APP_IMAGE_URL}${profileImg}`} alt="John Doe" />
            </div>
            <div>
                <span>{`${firstName} ${lastName}`}</span>
                <span><i className="bi bi-envelope-fill" />{emailAddress}</span>
                <span><i className="bi bi-telephone-fill" />{phoneNumber}</span>
            </div>
            

        </div>
        </Link>
    )
}
export default ProfileCard