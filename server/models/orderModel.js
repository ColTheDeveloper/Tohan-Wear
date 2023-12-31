import mongoose from "mongoose";

const orderSchema= new mongoose.Schema(
    {
        user:{
            type:mongoose.Types.ObjectId,
            required:true,
            ref:"Users"
        },
        orderedItems:[
            {
                name:{
                    type:String,
                    required:true
                },
                qty:{
                    type:Number,
                    required:true
                },
                image:{
                    type:String,
                    required:true
                },
                price:{
                    type:String,
                    required:true
                },
                category:[String],
                countInStock:{
                    type:Number
                },
                product:{
                    type:mongoose.Types.ObjectId,
                    required:true,
                    ref: "products"
                }
            }
        ],
        shippingAddress:{
            address:{
                type:String,
                required:true
            },
            city:{
                type:String,
                required:true
            },
            postalCode:{
                type:String,
                required:true
            },
            country:{
                type:String,
                required:true
            }
        },
        paymentMethod:{
            type:String,
            required: true
        },
        paymentResult:{
            id:{
                type:String
            },
            status:{
                type: String
            },
            updateTime:{
                type:String
            },
            emailAddress:{
                type:String
            },
            receipt_email:{
                type:String
            },
            receipt_url:{
                type:String
            }
        },
        itemsPrice:{
            type: Number,
            required: true,
            default:0.00
        },
        taxPrice:{
            type:Number,
            required:true,
            default:0.00
        },
        totalPrice:{
            type: Number,
            required:true,
            default:0.00
        },
        isPaid:{
            type:Boolean,
            required:true,
            default:false
        },
        paidAt:{
            type:Date
        },
        isDelivered:{
            type:Boolean,
            required:true,
            default:false
        },
        deliveredAt:{
            type:Date
        }

    },
    {
        timestamps:true
    }
);

const orderModel= mongoose.model("Orders", orderSchema);
export default orderModel;