import Popup from "reactjs-popup"
import {useRef, useState} from "react"
import "./AdminAddProduct.css"
import tee from "../../images/tee.JPG"
import { uploadImage } from "../../api/UploadRequest";
import { useDispatch } from "react-redux"
import { createProduct } from "../../redux/productSlice/setProductSlice";

const AdminAddProduct=()=>{
    const dispatch=useDispatch()
    const firstImg=useRef()
    const secondImg=useRef()

    const firstImgHandler=()=>firstImg.current.click()
    const secondImgHandler=()=>secondImg.current.click()

    const [productData,setProductData]=useState({
        name:"",
        image1:"",
        image2:"",
        price:"",
        description:"",
        discount:"",
        countInStock:"",
        brand:"",
        category:[],
        size:""
    })
    const [firstImage,setFirstImage]=useState(null)
    const [secondImage,setSecondImage]=useState(null)

    const uploadHandler= async(formData)=>{
        try {
            const response=await uploadImage(formData)
            console.log(response)
        } catch (error) {
            console.log(error)
            
        }
    }

    const handleSubmit= async(e)=>{
        e.preventDefault()
        const image1Data=new FormData()
        const image2Data=new FormData()

        const image1Filename=Date.now()+"firstimage"+firstImage.name
        const image2Filename=Date.now()+"secondimage"+secondImage.name

        image1Data.append("name", image1Filename)
        image2Data.append("name", image2Filename)

        image1Data.append("image", firstImage)
        image2Data.append("image",secondImage)

        productData.image1=image1Filename
        productData.image2=image2Filename

        uploadHandler(image1Data)
        uploadHandler(image2Data)

        dispatch(createProduct(productData))
    }

    
    const firstImgChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          let pics = event.target.files[0];
          setFirstImage(pics);
          
          
        }
    };

    
    const secondImgChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          let pics = event.target.files[0];
          setSecondImage(pics);
          
        }
    };

    const handleChange=(e)=>{
        setProductData({...productData, [e.target.name]:e.target.value})
    }
    return(
        <Popup
            trigger={<span>Add New Product</span>}
            modal
            closeOnDocumentClick            
        >
            {close=>(
                <div className="modal">
                    <span className="close" onClick={close}>
                        &times;
                    </span>
                    <div>
                        <span className="modal-title">Add A New Product</span>
                        <hr className="line" />
                        <form onSubmit={handleSubmit} className="product-form">
                            <div className="product-image-section">
                                {firstImage?
                                <img onClick={firstImgHandler} src={URL.createObjectURL(firstImage)} alt="tee" />
                                :
                                <img onClick={firstImgHandler} src={tee} alt="tee" />}
                                {secondImage?
                                <img onClick={secondImgHandler} src={URL.createObjectURL(secondImage)} alt="tee" />
                                :
                                <img onClick={secondImgHandler} src={tee} alt="tee" />}
                                <input 
                                    type="file"
                                    name="image"
                                    ref={firstImg}
                                    className="inputForm"
                                    onChange={firstImgChange}
                                    
                                
                                />
                                <input 
                                    type="file"
                                    name="image"
                                    className="inputForm"
                                    ref={secondImg}
                                    onChange={secondImgChange}
                                    
                            
                                />                                
                            </div>
                            <div>
                                <input 
                                    type="text"
                                    name="name"
                                    className="inputForm"
                                    placeholder="Product Name"
                                    value={productData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="description" >Description:</label>
                                <textarea className="inputForm" onChange={handleChange} value={productData.description} name="description" rows="5" cols="50" />
                            </div>    
                            <div>
                                <input 
                                    type="number"
                                    name="price"
                                    className="inputForm"
                                    value={productData.price}
                                    onChange={handleChange}
                                    placeholder="Product Price"
                                />
                                <input 
                                    type="number"
                                    name="discount"
                                    className="inputForm"
                                    value={productData.discount}
                                    onChange={handleChange}
                                    placeholder="Discount"
                                />
                                <input 
                                    type="number"
                                    name="countInStock"
                                    className="inputForm"
                                    value={productData.countInStock}
                                    onChange={handleChange}
                                    placeholder="Count In Stock"
                                />
                            </div>
                            <div>
                                <input 
                                    type="text"
                                    name="size"
                                    className="inputForm"
                                    value={productData.size}
                                    onChange={handleChange}
                                    placeholder="Size"
                                />
                                <input 
                                    type="text"
                                    name="brand"
                                    className="inputForm"
                                    value={productData.brand}
                                    onChange={handleChange}
                                    placeholder="Product Brand Name"
                                />
                            </div>
                            <div>
                                <input 
                                    type="text" 
                                    name="category"
                                    className="inputForm"
                                    value={productData.category}
                                    onChange={handleChange}
                                    placeholder="category"
                                />
                            </div>
                            <button className="btn" type="submit">Add Product</button>


                        </form>

                    </div>
                </div>
            )}

        </Popup>
    )
}
export default AdminAddProduct;