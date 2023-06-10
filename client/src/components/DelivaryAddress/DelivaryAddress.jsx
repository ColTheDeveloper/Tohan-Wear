import { useContext, useState } from "react";

const DelivaryAddress=()=>{
    const [delivaryAddress, setDelivartAddress]=useState(
        {
            address:"",
            city:"",
            LGA:"",
            state:"",
            country:""
        }
    )
    const mailingAddress=useContext(delivaryAddress);

    

    const handleChange=(e)=>{
        setDelivartAddress({...delivaryAddress, [e.target.name]:e.target.value})
        console.log(delivaryAddress)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()

    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="address" 
                    placeholder="Address"
                    value={delivaryAddress.address}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    name="city" 
                    placeholder="City"
                    value={delivaryAddress.city}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    name="state" 
                    placeholder="State"
                    value={delivaryAddress.state}
                    onChange={handleChange}
                />
                <label htmlFor="LGA">LGA</label>
                <select name="LGA" onChange={handleChange}>
                    <option value="badagry" >Badagry</option>
                    <option value="lekki">Lekki</option>
                    <option value="ikorodu" >Ikorodu</option>
                </select>
                <input 
                    type="text" 
                    name="country" 
                    placeholder="Country"
                    value={delivaryAddress.country}
                    onChange={handleChange}
                />
                <button type="submit" >Next</button>
            </form>

        </div>
    )
}
export default DelivaryAddress;