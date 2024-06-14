import mongoose from "mongoose";


export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://foodshreya:foodshreya@cluster0.xhacehr.mongodb.net/food-del').then(() =>console.log("DB Connected"));

}