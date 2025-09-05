import Lab from '../infrastructure/schemas/Lab.js'

export const createLabTest = async (req,res) => {
    try {
        const lab = new Lab(req.body);
        await lab.save();
        res.status(201).json(lab);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

export const getAllLabs = async (req ,res) => {
    const labs = await Lab.find().populate("patient labAssistant");
    res.json(labs);
}