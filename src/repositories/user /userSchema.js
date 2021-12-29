import mongoose from 'mongoose'
import genricVersionableSchema from '../versionable/versionableSchema'
import extendSchema from 'mongoose-extend-schema';
export const userSchema = extendSchema(genricVersionableSchema,{
    name: {type:String, require: true},
    email:{type:String, require: true, unique: true},
    password: {type:String, require:true},
    userId: {type:String, require:true},   
},{timestamps:true});
