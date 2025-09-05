import mongoose from "mongoose";

const insuranceSchema = new mongoose.Schema({
    patient:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        requied:true,
    },

    insuranceComapny:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        requied:true,
    },

    policyNumber:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        requied:true
    },

    status:{
        type:String,
        enum:["Pending","Approved","Rejected"],
        default:"Pending"
    },

    createdAt: { 
        type:Date,
        default:Date.now
    }

});

export default mongoose.model("insurance",insuranceSchema);