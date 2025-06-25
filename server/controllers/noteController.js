import Note from "../models/Note.js";

export const getNote=async(req,res)=>{
    const notes= await Note.find();
    res.status(200).json(notes);

};

export const createNote= async(req,res)=>{
    const note= await Note.create(req.body);
    res.status(201).json({
        message:"Note created successfully",
        note
    })
};


export const editNote= async(req,res)=>{
    const updateNote= await Note.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(201).json({
        message:"Note updated successfully",
        updateNote
    })
};

export  const deleteNote= async(req,res)=>{
    const deletedNote= await Note.findByIdAndDelete(req.params.id);
    res.status(200).json({
        message:"Note deleted successfully",
        deletedNote
    })
};

