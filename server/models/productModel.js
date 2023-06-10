import mongoose from "mongoose";

const reviewsSchema= new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        rating:{
            type: Number,
            required:true,
            default:0
        },
        comment:{
            type:String,
            required: true
        },
        user:{
            type: mongoose.Types.ObjectId,
            required:true,
            ref: "User"
        }
    },
    {
        timestamps:true
    }
);

const productSchema= new mongoose.Schema(
    {
        name:{
            type: String,
            required:true
        },
        image1:{
            type: String,
            default:"tee.JPG"
        },
        image2:{
            type: String,
            default:"tee.JPG"
        },
        price:{
            type: Number,
            required: true,
            default:0
        },
        description:{
            type:String,
            required:true
        },
        view:{
            type:Number,
            default:0
        },
        discount:{
            type:Number,
            default:0
        },
        countInStock:{
            type:Number,
            required: true,
            default:0
        },
        category:[String],
        brand:{
            type: String
        },
        size:{
            type:String,
            required:true
        },
        numOfReviews:{
            type: Number,
            required: true,
            default:0
        },
        rating:{
            type: Number,
            required:true,
            default:0
        },
        reviews: [reviewsSchema]
    },
    {
        timestamps: true,
    }
);

const productModel= mongoose.model("Products", productSchema);
export default productModel;