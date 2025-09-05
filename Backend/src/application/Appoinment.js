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

export const updateAppointmentStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status, date, time, location } = req.body;

        if (!["Confirmed", "Cancelled"].includes(status)) {
            return res.status(400).json({ message: "Invalid status update" });
        }

        const appointment = await Appoinment.findByIdAndUpdate(
            id,
            { status, date, time, location },
            { new: true }
        ).populate("patient doctor");

        if (!appointment) {
            return res.status(404).json({ message: "Appointment not found" });
        }

        res.json(appointment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};