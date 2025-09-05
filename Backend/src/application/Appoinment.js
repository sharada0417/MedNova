import Appoinment from "../infrastructure/schemas/Appoinment.js";

export const createAppoinment = async (req,res) => {
    try {
        const appointment = new Appoinment(req.body);
        await appointment.save();
        res.status(201).json(appointment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllAppoinment = async (req,res) => {
    const appoinments = await Appoinment.find().populate("patient doctor");
    res.json(appoinments);
}