import mongoose from "mongoose";

const channelCenterSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true
    },
    doctors:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }],
    createdAt:{
        type:Date,
        default:Date.now
    }
})

export default channelCenterSchema;