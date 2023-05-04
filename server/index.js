import  express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import UserRouter from './routes/users.js'

const app = express();
app.use(express.json({limit:"30mb", extended:true }))
app.use(express.urlencoded({limit:"30mb", extended:true }))
app.use(cors())

app.get("/" , (req , res)=>{
    res.send("This is a stack Overflow clone API");
})

app.use('/user', UserRouter)
const PORT = process.env.PORT || 5000 

let con_url = "mongodb+srv://admin:admin@stack-overflow-clone.f0uiozz.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(con_url , { UseNewUrlParser : true , useUnifiedTopology : true})
    .then(() => app.listen(PORT,() => { console.log(`Server running on port ${PORT}`)}))
    .catch((err)=> console.log(err.message))