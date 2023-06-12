import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import ProductRoute from "./route/ProductRoute.js";
import AuthRoute from "./route/AuthRoute.js";
import UserRoute from "./route/UserRoute.js";
import ImageUploadRoute from "./route/ImageUploadRoute.js";
import cookieParser from "cookie-parser";

const app=express();
dotenv.config();

app.use(bodyParser.json({limit: "30mb" ,extended:true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}));
app.use(
   cors({
      origin:["http://localhost:3000","https://tohan-wear.vercel.app"],
      methods:["GET","POST","PUT","DELETE"],
      credentials:true
   })
);
app.use(express.static("public"));
app.use("/images", express.static("images"));
app.use(cookieParser())

const PORT= process.env.PORT;
const CONNECTION= process.env.MONGODB_CONNECTION;

mongoose
   .connect(CONNECTION,{ useNewUrlParser: true, useUnifiedTopology: true })
   .then(()=>app.listen(8000, ()=>console.log(`Listening on port ${PORT}`)))
   .catch((error)=>console.log(`${error} did not connect`)
);
app.get("/", (req,res)=>{
   res.send(`API is Running on port ${PORT}`);
});

app.use("/product", ProductRoute);
app.use("/auth", AuthRoute);
app.use("/user", UserRoute);
app.use("/upload", ImageUploadRoute);