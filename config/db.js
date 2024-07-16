import mongoose from "mongoose"

const connectdb=async()=>{
    try {
   const conn=await mongoose.connect(process.env.MONGO_URL)
    }
    catch(error){
        console.log(error)
    }
}
export  default connectdb;