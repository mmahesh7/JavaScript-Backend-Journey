import mongoose from "mongoose";
import express from "express";
import {Todo} from "./models/Todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/todo")

const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    const todo =  new Todo({desc: "This is my 1st task",isDone: false,days:5})
    todo.save();
    res.send("mongo with express")
})

app.get("/a",async (req,res) =>{
    const todo = await Todo.findOne({});
    res.json({title:todo.title, desc: todo.desc})
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})

