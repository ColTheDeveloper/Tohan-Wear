import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { registerUser } from "../../redux/AuthSlice/LoginSlice"


const Register=()=>{
    const dispatch=useDispatch()
    const initialState={
        emailAddress:"",
        password:"",
        firstName:"",
        lastName:"",
        phoneNumber:""
    }
    const [data, setData]=useState(initialState)
    const navigate=useNavigate()
    const location=useLocation()

    const from= location.state?.from?.pathname || "/"

    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(registerUser(data))
        navigate(from,{replace:true})
        
    }
    const handleChange=(e)=>{
        setData({ ...data, [e.target.name]: e.target.value });
    }
    return(
        <div className="login">
            <div>
                <h3>Register Account</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input 
                            name="emailAddress"
                            className="inputForm"
                            placeholder="Email"
                            value={data.emailAddress}
                            type="email"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input 
                            name="firstName"
                            className="inputForm"
                            placeholder="First Name"
                            value={data.firstName}
                            type="text"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input 
                            name="lastName"
                            className="inputForm"
                            placeholder="Last Name"
                            value={data.lastName}
                            type="text"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input 
                            name="phoneNumber"
                            className="inputForm"
                            placeholder="Phone Number"
                            value={data.phoneNumber}
                            type="number"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input 
                            name="password"
                            className="inputForm"
                            placeholder="password"
                            value={data.password}
                            type="password"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="submit-section">
                        <button className="btn" type="submit">Register</button>
                        <span>Already have an Account? <Link className="anchor" to="/login">Log In</Link></span>
                    </div>
                    
                </form>
            </div>

        </div>
    )
}
export default Register;