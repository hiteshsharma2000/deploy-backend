const express=require('express');

const mongoose=require('mongoose');

const NoteSchema=mongoose.Schema({
    title:{type:String,required:false},
    description:{type:String,required:false}
})

const NoteModel=mongoose.model("note",NoteSchema);

module.exports={NoteModel}