import express from "express";
import { createUser, getAllUsers } from "../application/user.js";

const userrouter = express.Router();
userrouter.post("/",createUser);
userrouter.get("/",getAllUsers)
export default userrouter;
