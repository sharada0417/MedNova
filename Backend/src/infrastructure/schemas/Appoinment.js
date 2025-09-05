import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({

    patient : { 
        type:mongoose.Schema.Types.ObjectId , 
        ref: "user" ,
        required:true 
    },

    doctor :  { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required:true,
    },

    date : {
        type:Date,
        required:true
    },

    time: {
        type: String,  
    },

    location: {
        type: String   
    },


    status:{
        type:String,
        enum:[ "Pending" , "Confirmed", "cancelled" ],
        default:"Pending",
    },

    createdAt : {
        type : Date,
        default : Date.now
    }
    
});
export default mongoose.model("appointment",appointmentSchema)