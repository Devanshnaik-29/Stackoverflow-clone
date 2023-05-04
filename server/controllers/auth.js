import jwt from "jsonwebtoken"
import bcrypt from 'bcryptjs'
import users from '../models/auth.js'

export const signup = async (req , res) =>{

    const { name , email , password } = req.body;
    try{
        const existinguser = await users.findOne({ email });
        if (existinguser){
            console.log(existinguser)
            
            return res.status(404).json({ message : "User already exists."})
        }
        const hashedPassword = await bcrypt.hash(password , 12)
        const newUser = await users.create({ name , email , password : hashedPassword})
        const token = jwt.sign({email : newUser.email , id : newUser._id} , 'test' , { expiresIn :"1h"});
        res.status(200).json({ result : newUser , token })

    }catch(error){
        res.status(500).json("Something went wrong")
        console.log(error)
    }   
}

export const login = async (req , res) =>{
    try {
        const { email , password } = req.body;
        const existinguser = await users.findOne({ email });
    if(!existinguser){
        res.status(404).json({ message : "User dont exists."})
        
    }

    const isPasswordCrt = await bcrypt.compare(password ,existinguser.password)
    if(!isPasswordCrt){
        res.status(400).json({ message : "Invalid Password Entered"})
        const token = jwt.sign({email : newUser.email , id : newUser._id} , 'test' , { expiresIn :"1h"});
        res.status(200).json({ result : newUser , token })
    }
    } catch (error) {
        res.status(500).json("Something went wrong")
        
    }

}