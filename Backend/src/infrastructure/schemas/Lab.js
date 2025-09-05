import mongoose from "mongoose";

const labSchema = new mongoose.Schema({
    patient : {
         type: mongoose.Schema.Types.ObjectId ,
         ref:"user" , 
         required:true 
    },

    labAssistant : { 
        type: mongoose.Schema.Types.ObjectId ,
        ref:"user" ,
        required: true
    },

    testName: {
         type:String , 
         required: true 
    },

    result: { 
        type:String ,
        enum:["Pending","Approved","Rejected"],
        default: "Pending"
    },


    createdAt : {
        type:Date ,
        default:Date.now
    }
});

export default mongoose.model("lab",labSchema)