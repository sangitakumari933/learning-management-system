import mongoose, { mongo } from "mongoose";

//connect to the mongoDB database

const connectDb = async ()=>{
  console.log("Mongo URI:", process.env.MONGODB_URI);
  mongoose.connection.on('connected', ()=>console.log('Database Connected'));
  await mongoose.connect(`${process.env.MONGODB_URI}/lms`)
}

export default connectDb;