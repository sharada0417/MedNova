import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String , required:true },

    email:{type:String , required:true },

    password: { type: String, required: true },

    role:{
        type:String,
        enum:["Patient","Doctor","LabAssistant","InsuranceComapny","Admin"],
        required:true
    },
    
    //DOCTOR
    doctorRegistrationNumber:String,
    clinicDetails: String,
    channelCenterLocation: String,

    //Lab assitent
    labRegistationNumber:String,
    labLocation:String,

    //insurance comapny
    insuranceRegistrationNumber : String,

    createdAt: { type : Date , default : Date.now},
});

export default mongoose.model("user",userSchema);

