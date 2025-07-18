import express from 'express';
const app = express()
const port = 3000
import mongoose from 'mongoose';
import { Employee } from './models/Employee.js';
import e from 'express';
app.set('view engine','ejs')
await mongoose.connect("mongodb://localhost:27017/Company")

let nameArr = ["Harry","Shradha","Striver"];
let cityArr = ["Bengaluru","Hyderabad","Kolkatha","Mumbai"]
let language = ["Python","Java","C++","JavaScript","Ruby"];

app.get("/generate", async (req,res) => {
    // const Genr = new Generator({name:"Harry",salary:45000,language:"Python",city:"New York",isManager:false})
    // Genr.save()
    // res.json(Genr)
    await Employee.deleteMany({});
    for(let i=0; i<10; i++){
        let genr =await Employee.create({name : nameArr[Math.floor(0+Math.random()*3)],
            salary : Math.floor(1+ Math.random()*(10))*10000,
            city : cityArr[Math.floor(0+Math.random()*5)],
            language : language[Math.floor(0+Math.random()*6)],
            isManager : Math.random()<0.5? true : false
        })
        // genr.save()
        // console.log(genr)
    }
    res.render("index")
})

app.get("/",(req,res)=>{
    res.send('index')
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})