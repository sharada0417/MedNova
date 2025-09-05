import express from "express"
import { createAppoinment, getAllAppoinment, updateAppointmentStatus} from "../application/Appoinment.js";

const appointmentRouter = express.Router();

appointmentRouter.post("/",createAppoinment)
appointmentRouter.get("/", getAllAppoinment)
appointmentRouter.put("/:id",updateAppointmentStatus);

export default appointmentRouter;