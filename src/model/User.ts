
import mongoose, { Schema, Document, Mongoose } from "mongoose";

export interface User extends Document{
    username:string,
    address:string,
    phoneNumber:string
}

const UserSchema : Schema<User> = new Schema({
    username: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: String, required: true }
})

const UserModel = (mongoose.models.User as mongoose.Model<User> ||mongoose.model <User>("User" , UserSchema) )
export default UserModel;