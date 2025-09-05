import express from "express"
import { createAppoinment, getAllAppoinment } from "../application/Appoinment.js";

const appointmentRouter = express.Router();

appointmentRouter.post("/",createAppoinment)
appointmentRouter.get("/", getAllAppoinment)


export default appointmentRouter;