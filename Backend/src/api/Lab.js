import express from "express";
import { createLabTest, getAllLabs } from "../application/Lab.js";

const Labrouter = express.Router();

Labrouter.post("/",createLabTest);
Labrouter.get("/",getAllLabs);

export default Labrouter;