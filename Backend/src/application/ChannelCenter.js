import ChannelCenter from "../infrastructure/schemas/ChannelCenter.js";

export const createChannelCenter = async (req,res) => {
    try {
        const center = new ChannelCenter(req.body);
        await center.save();
        res.status(201).json(center);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getChannelCenters = async (req,res) => {
    const centers = await ChannelCenter.find().populate("doctors");
    res.json(centers);
}