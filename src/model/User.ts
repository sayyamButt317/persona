
import mongoose, { Schema, Document, } from "mongoose";

export interface User extends Document{
    Name:string,
    Address:string,
    Mobile:string
    CNIC:string,
}

const UserSchema : Schema<User> = new Schema({
    Name: { type: String, required: true },
    CNIC: {type:String,required:true},
    Address: { type: String, required: true },
    Mobile: { type: String, required: true }
})

const UserModel = (mongoose.models.User as mongoose.Model<User> ||mongoose.model <User>("User" , UserSchema) )
export default UserModel;