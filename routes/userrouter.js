const express= require('express');
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const userRouter=express.Router();
const {UserModel}=require('../models/usermodel')



userRouter.post('/register',async (req,res)=>{
    const {username,email,password}=req.body;
 try {
    bcrypt.hash(password, 5,async function(err, hash) {
       if(err){
        res.send('someething went wrong in hashing');

       }else{
        
       const user= new UserModel({username,email,password:hash})
        await user.save()
       res.send('new user is register')
       }
    });
 } catch (error) {
    console.log({"msg":error})
 }



})


userRouter.post('/login',async (req,res)=>{
    const {email,password}=req.body;
    try {
      const user=await UserModel.findOne({email});
      if(user){
        bcrypt.compare(password, user.password,function(err, result) {
           if(result){
            const token = jwt.sign({userId:user._id ,username:user.username }, 'masai',{expiresIn:"5m"})
            // localStorage.setItem("token",token)
            res.send({"msg":"login succesful","token":token})
           }else{
            res.send("invalid password")
           }
        });
      }else{
         res.send("invalid user")

      }


    } catch (error) {
        console.log(error);
    }
})

userRouter.patch('/update/:userid',async (req,res)=>{

 

})

module.exports ={userRouter}