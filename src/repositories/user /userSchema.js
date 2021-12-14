import mongoose from 'mongoose';


export const userSchema = mongoose.Schema({
    name: String,
    email:String,
    password: String,
    userId:String,
    role:String    
});