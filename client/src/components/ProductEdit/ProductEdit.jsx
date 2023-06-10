import React, { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Popup from "reactjs-popup"
import { editAProduct } from "../../api/ProductRequest"
import { uploadImage } from "../../api/UploadRequest"
import { editProduct } from "../../redux/productSlice/selectedProductSlice"
import "../AdminAddProduct/AdminAddProduct.css"



const ProductEdit=()=>{
    const product=useSelector(state=>state.selectedProduct.product)
    const user=useSelector(state=>state.login.user)

    const {_id,brand,category,discount, description,name,countInStock, price,image1,image2,size}=product

    const dispatch=useDispatch()
    const firstImg=useRef()
    const secondImg=useRef()

    const firstImgHandler=()=>firstImg.current.click()
    const secondImgHandler=()=>secondImg.current.click()

    const [productData,setProductData]=useState({
        name,
        image1,
        image2,
        price,
        description,
        discount,
        countInStock,
        brand,
        category,
        size
    })

    const [firstImage,setFirstImage]=useState(null)
    const [secondImage,setSecondImage]=useState(null)

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
        if(firstImage){
            const image1Data=new FormData()
            
            const image1Filename=Date.now()+"firstimage"+firstImage.name
            
            image1Data.append("name", image1Filename)
            
            image1Data.append("image", firstImage)
            
            productData.image1=image1Filename
            
            uploadHandler(image1Data)
            
        }
        if(secondImage){
            const image2Data=new FormData()

            const image2Filename=Date.now()+"secondimage"+secondImage.name

            image2Data.append("name", image2Filename)

            image2Data.append("image",secondImage)

            productData.image2=image2Filename

            uploadHandler(image2Data)
        }
        dispatch(editProduct({_id,user,productData}))

        
        
    }

    const handleChange=(e)=>{
        setProductData({...productData, [e.target.name]:e.target.value})
    }
    return(
        <Popup
            trigger={<span className="btn">Edit Product</span>}
            modal
            closeOnDocumentClick            
        >
            {close=>(
                <div className="modal">
                    <span className="close" onClick={close}>
                        &times;
                    </span>
                    <div>
                        <span className="modal-title">Edit Product</span>
                        <hr className="line" />
                        <form onSubmit={handleSubmit} className="product-form">
                        <div className="product-image-section">
                                {firstImage?
                                <img onClick={firstImgHandler} src={URL.createObjectURL(firstImage)} alt="tee" />
                                :
                                <img onClick={firstImgHandler} src={`${process.env.REACT_APP_IMAGE_URL}${image1}`} alt="tee" />}
                                {secondImage?
                                <img onClick={secondImgHandler} src={URL.createObjectURL(secondImage)} alt="tee" />
                                :
                                <img onClick={secondImgHandler} src={`${process.env.REACT_APP_IMAGE_URL}${image2}`} alt="tee" />}
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
                                    value={productData.name}
                                    onChange={handleChange}
                                    placeholder="Product Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="description" >Description:</label>
                                <textarea className="inputForm" value={productData.description} name="description" onChange={handleChange} rows="5" cols="50" />
                            </div>    
                            <div>
                                <input 
                                    type="number"
                                    name="price"
                                    className="inputForm"
                                    onChange={handleChange}
                                    value={productData.price}
                                    placeholder="Product Price"
                                />
                                <input 
                                    type="number"
                                    name="discount"
                                    className="inputForm"
                                    onChange={handleChange}
                                    value={productData.discount}
                                    placeholder="Discount"
                                />
                                <input 
                                    type="number"
                                    name="countInStock"
                                    className="inputForm"
                                    onChange={handleChange}
                                    value={productData.countInStock}
                                    placeholder="Count In Stock"
                                />
                            </div>
                            <div>
                                <input 
                                    type="text"
                                    name="size"
                                    className="inputForm"
                                    onChange={handleChange}
                                    value={productData.size}
                                    placeholder="Size"
                                />
                                <input 
                                    type="text"
                                    name="brand"
                                    className="inputForm"
                                    onChange={handleChange}
                                    value={productData.brand}
                                    placeholder="Product Brand Name"
                                />
                            </div>
                            <div>
                                <input 
                                    type="text" 
                                    name="category"
                                    className="inputForm"
                                    onChange={handleChange}
                                    value={productData.category}
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
export default ProductEdit;