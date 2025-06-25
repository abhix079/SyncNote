import mongoose, { mongo } from "mongoose";

const msgSchema= mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,

    },
    message:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
});
const contactMsg= mongoose.model("Contact",msgSchema);
export default contactMsg;