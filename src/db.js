import mongoose from "mongoose";

export const connectDB = async () =>{
    try{
        console.log(process.env.MONGOOSEDB_STRING)
        await mongoose.connect(process.env.MONGOOSEDB_STRING)
        console.log("DB Conectada")
    }catch(error){
        console.log(error)
    }
}