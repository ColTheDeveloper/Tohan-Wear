import Popup from "reactjs-popup";
import { useState,useRef } from "react";
import "./ProfileEdit.css"
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../redux/AuthSlice/LoginSlice";
import { uploadImage } from "../../api/UploadRequest";

const ProfileEdit=()=>{
    const dispatch=useDispatch()
    const user=useSelector(state=>state.login.user)
    const {_id,firstName,lastName,phoneNumber,emailAddress,profileImg}=user
    const [data,setData]=useState({
        _id,
        firstName,
        lastName,
        phoneNumber,
        emailAddress,
        profileImg
        
    })


    const [img,setImage]=useState(null)
    const imageRef = useRef();


    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          let pics = event.target.files[0];
          setImage(pics);
        }
    };

    const uploadHandler= async(formData)=>{
        try {
            const response=await uploadImage(formData)
            console.log(response)
        } catch (error) {
            console.log(error)
            
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(img){
            const formData= new FormData()
            const fileName= Date.now()+user.firstName+user.lastName+img.name;
            formData.append("name", fileName)
            formData.append("image",img)
            data.profileImg=fileName
            uploadHandler(formData)
        }
        
        dispatch(editUser({data,_id}))
        
    }
    
    
    const changeImage=()=>{
        imageRef.current.click()
    };
    const handleChange=(e)=>{
        setData({...data, [e.target.name]:e.target.value})
    }
    


    return(
        <Popup trigger={open => (  <i className="bi bi-pencil"></i>  )} modal closeOnDocumentClick > 
                {close =>(<div className="modal">
                    <span className="close" onClick={close} >
                        &times;
                    </span>
                    <div className="user-form">
                        <span>My Details</span>
                        <div className="profile-edit-section">
                            <span>Personal Information</span>
                            <hr className="line" />
                            <form onSubmit={handleSubmit} className="profile-form">
                                <div className="profile-picture-section">
                                    {img ?
                                        <img onClick={changeImage} name="image" src={URL.createObjectURL(img)} alt="preview" />
                                        :
                                        <img onClick={changeImage} src={`${process.env.REACT_APP_IMAGE_URL}${profileImg}`} alt="preview" />
                                    }
                                    
                                    <input 
                                        type="file"
                                        name="image"
                                        ref={imageRef}
                                        value={data.image}
                                        onChange={handleImageChange}
                                        className="inputForm"
                                    />
                                </div>                                
                                <div>
                                    <input 
                                        type="text" 
                                        name="firstName"
                                        className="inputForm"
                                        onChange={handleChange}
                                        value={data.firstName}
                                        placeholder="First Name"
                                    />
                                    <input 
                                        type="text" 
                                        name="lastName"
                                        className="inputForm"
                                        value={data.lastName}
                                        onChange={handleChange}
                                        placeholder="Last Name"
                                    />
                                </div>
                                <div>
                                    <input 
                                        type="email" 
                                        name="emailAddress"
                                        className="inputForm"
                                        value={data.emailAddress}
                                        onChange={handleChange}
                                        placeholder="E-mail"
                                    />
                                </div>
                                <div> 
                                    <input 
                                        type="text" 
                                        name="phoneNumber"
                                        className="inputForm"
                                        onChange={handleChange}
                                        value={data.phoneNumber}
                                        placeholder="Phone Number"
                                    />
                                </div>
                                
                                <button type="submit" className="btn">Save</button>
                            </form>
                        </div>
                        <div className="profile-edit-section">
                            <span>Password</span>
                            <hr className="line"/>
                            <form onSubmit={handleSubmit} className="profile-form">                                
                                <div>
                                    <input 
                                        type="password" 
                                        name="firstName"
                                        className="inputForm"
                                        placeholder="First Name"
                                    />
                                    
                                </div>
                                <div>
                                    <input 
                                        type="password" 
                                        name="firstName"
                                        className="inputForm"
                                        placeholder="First Name"
                                    />
                                </div>
                                <div>
                                    <input 
                                        type="password" 
                                        name="firstName"
                                        className="inputForm"
                                        placeholder="Phone Number"
                                    />
                                </div>
                                <button type="submit" className="btn">Save</button>
                            </form>
                            
                        </div>                        
                    </div>
                </div>   
                )}   
            </Popup>
    )
}
export default ProfileEdit;