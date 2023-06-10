import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { fetchUser } from "../../redux/AuthSlice/LoginSlice";
import "./LogIn.css";

const LogIn=()=>{
    const dispatch=useDispatch()
    const initialState={
        emailAddress:"",
        password:""
    }
    
    const [data , setData]=useState(initialState)
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(fetchUser(data))
    }
    const handleChange=(e)=>{
        setData({ ...data, [e.target.name]: e.target.value });
    }
    return(
        <div className="login">
            <div>
                <form className="form" onSubmit={handleSubmit}>
                    <h3>Log in Account</h3>
                    <div>
                        <input 
                            type="email"
                            className="inputForm"
                            name="emailAddress"
                            placeholder="Email" 
                            required
                            value={data.emailAddress}
                            onChange={handleChange}

                        />
                    </div>
                    <div>
                        <input 
                            className="inputForm"
                            type="password"
                            name="password"
                            placeholder="password"
                            required
                            value={data.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="submit-section">
                        <button className="btn" type="submit">Log In</button>
                        <span>Want to create an Account?<Link to="/register" className="anchor"> Register</Link></span>
                    </div>
                    

                </form>
            </div>
        </div>
    )
};

export default LogIn;