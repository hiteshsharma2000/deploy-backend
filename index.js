const express=require('express');
 const {connection}=require('./db')
const app=express();
const dotenv=require('dotenv').config()
const port=process.env.port
const {UserModel}=require('./models/usermodel')
const {userRouter}=require('./routes/userrouter')
const {Noterouter}=require('./routes/noterouter')
const cors=require('cors')



app.use(express.json())
app.use(cors({
    origin:"*",
    credentials:true
}))

app.use('/user',userRouter)
app.use('/note' ,Noterouter)
app.get('/', async (req,res)=>{

    res.send("home screen")
})

app.listen(8080,async ()=>{
    await connection
    console.log(`live on ${port} port` );
})