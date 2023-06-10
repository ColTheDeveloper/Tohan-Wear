import { useRef, useState } from "react"
import Popup from "reactjs-popup"
import profile from "../../images/profile.jpg"
import "./AdminRegisterUser.css"

const AdminRegisterUser=()=>{
    const [data, setData]=useState({
        firstName:"",
        lastName:"",
        phoneNumber:"",
        emailAddress:"",
        password:""
    })
    const [img,setImage]=useState()
    const imageRef=useRef()
    const handleChange=(e)=>{
        setData({...data, [e.target.name]:e.target.value})
    }
    const changeImage=()=>{
        imageRef.current.click()
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          let pics = event.target.files[0];
          setImage(pics);
        }
    };
    return(
        <Popup 
            trigger={
                <div>
                    <span>+ New User</span>
                </div>
            }
            modal
            closeOnDocumentClick
            
        >
        {close =>(
            <div className="modal">
                <button className="close" onClick={close}>&times;</button>
                <div>
                    <span className="modal-title">Register a new User</span>
                    <hr className="line" />
                    <form onSubmit={handleSubmit} className="profile-form">
                                <div className="profile-picture-section">
                                    {img ?
                                        <img onClick={changeImage} src={URL.createObjectURL(img)} alt="preview" />
                                        :
                                        <img onClick={changeImage} src={profile} alt="preview" />
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
                                <div> 
                                    <input 
                                        type="text" 
                                        name="password"
                                        className="inputForm"
                                        onChange={handleChange}
                                        value={data.password}
                                        placeholder="Password"
                                    />
                                </div>
                                
                                <button type="submit" className="btn">Save</button>
                            </form>
                </div>

            </div>
        )}

        </Popup>
    )
}
export default AdminRegisterUser