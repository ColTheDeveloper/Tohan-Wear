import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    emailAddress:{
      type:String,
      required:[true, "Email Address is Required"],
      unique:true
    },
    password: {
      type: String,
      required:[ true,"Password is Required"] ,
    },
    profileImg:{
      type:String,
      default:"profile.jpg"
    },
    firstName: {
      type: String,
      required:[true,"First Name is Required"],
    },
    lastName:{
        type:String,
        required:[true, "Last Name is Required"]
    },
    phoneNumber:{
        type:String,
        required:[true, "Phone Number is Required"]
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("Users", UserSchema);
export default userModel;
