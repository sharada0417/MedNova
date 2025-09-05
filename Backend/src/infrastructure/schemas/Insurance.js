import mongoose from "mongoose";

const insuranceSchema = new mongoose.Schema({
    patient:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        requied:true,
    },

    insuranceCompany: {   
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
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
