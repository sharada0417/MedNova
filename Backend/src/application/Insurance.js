import Insurance from "../infrastructure/schemas/Insurance.js";

export const createInsurance = async (req,res) => {
    try {
        const insurance = new Insurance(req.body);
        await insurance.save();
        res.status(201).json(insurance);
    } catch (error) {
        res.status(500).json({ message : error.message });
    }
}

export const getInsurances = async (req,res) => {
    const insurances = await Insurance.find().populate("patient insuranceCompany");
    res.json(insurances);
};