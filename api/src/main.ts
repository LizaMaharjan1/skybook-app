import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import authRoute from '../routes/auth'
import authUsers from '../routes/users'
import authHotels from '../routes/hotels'
import authRooms from '../routes/rooms'

const app = express();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO!);
    console.log("Connected to mongo DB");
  } catch (error) {
    throw error;
  }
}

app.get('/', (req, res) => {
  res.send("Hello!")
})


//Middlewares
app.use(cookieParser())
app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/users", authUsers)
app.use("/api/hotels", authHotels)
app.use("/api/rooms", authRooms)


app.use((error:any, req:any, res:any, next:any) => {
  const errorStatus = error.status || 500;
  const errorMessage = error.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: error.stack,
  })
})

app.listen(process.env.PORT, () => {
  connect();
  console.log("Connected to backend");
})