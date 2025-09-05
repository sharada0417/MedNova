import express from "express";
import { createUser } from "../application/user.js";

const userrouter = express.Router();
userrouter.post("/",createUser);

export default userrouter;
