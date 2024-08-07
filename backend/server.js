import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
//import path from 'path';

//app config
const app = express()
const port =process.env.PORT || 4000;

//const __dirname = path.resolve();

//middleware 
app.use(express.json())
app.use(cors())


//db connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter);
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter);

//app.use(express.static(path.join(__dirname,'/frontend/dist')));
//app.get('*', (req, res) =>{
//    res.sendFile(path.join(__dirname,'frontend','dist', 'server.html'));
//})

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://foodshreya:foodshreya@cluster0.xhacehr.mongodb.net/?