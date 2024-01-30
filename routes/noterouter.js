const {NoteModel}=require('../models/notemodel')
const express=require('express');
const Noterouter=express.Router();
const {auth}=require('../middleware/auth')

Noterouter.post('/create',auth,async (req,res)=>{
const {title,description}=req.body;
try {
    const newNote= new NoteModel({title,description})    
    await newNote.save()
    res.send("notes is created")
} catch (error) {
    res.send({"err":error})
}
    
})
Noterouter.get('/',auth,async (req,res)=>{
    try {
        const data=await NoteModel.find()
        await res.send(data)
        
    } catch (error) {
        
    }
})

Noterouter.patch('/update/:userid',auth,async (req,res)=>{
const {userid}=req.params;
try {
    const user=await NoteModel.findByIdAndUpdate({_id:userid},req.body)
    await res.send("note has been updated")

} catch (error) {
    console.log(error);
    
}

})
Noterouter.delete('/delete/:userid',auth,async (req,res)=>{
const {userid}=req.params;
try {
    const user=await NoteModel.findByIdAndDelete({_id:userid})
    await res.send("note has been deleted")

} catch (error) {
    console.log(error);
    
}

})

module.exports= {Noterouter}