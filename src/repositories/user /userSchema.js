import mongoose from 'mongoose';

export const userSchema = mongoose.Schema({
    name: {type:String, require: true},
    email:{type:String, require: true, unique: true},
    password: {type:String, require:true},
    userId: {type:String, require:true},
    role: {type:String, require:true}    
},{timestamps:true});
