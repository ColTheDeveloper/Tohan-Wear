import express from "express";
import { allproduct, createProduct, deleteProduct, editProduct, getProduct, getProductByBrand, getProductByCategory } from "../controllers/ProductController.js";
const router= express.Router()

router.post("/", createProduct)
router.get("/:id", getProduct)
router.get("/", allproduct)
router.get("/brand/:brand", getProductByBrand);
router.get("/category/:category", getProductByCategory);
router.put("/:id", editProduct);
router.delete("/:id", deleteProduct);


export default router;