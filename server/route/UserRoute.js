import express from "express";
import { allUsers, deleteUser, editUser, getUser } from "../controllers/UserController.js";

const router=express.Router();

router.get("/:id", getUser);
router.put("/:id", editUser);
router.delete("/:id", deleteUser);
router.post("/", allUsers);



export default router;