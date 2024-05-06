import mongoose from "mongoose";


export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://sudharasanson006:ROYdatabase7890@cluster0.wu8rzkh.mongodb.net/food-del')
    .then(()=>console.log("Db Connected"));
}