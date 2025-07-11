//File System Module
const fs = require('fs')
// console.log(fs)
console.log("Operation starting...")
// fs.writeFileSync("mk.txt","Mahesh has started working with files...")
fs.writeFile("mk2.txt","Mahesh has start working with file modules and paths...",()=>{
    console.log("done")
    fs.readFile("mk.txt",(err, data) =>{
        console.log(err, data.toString());
    })
})

fs.appendFile("mk.txt","\nHare Krishna",(e,d)=>{
    console.log(d)
})
console.log("Ended...")

//Whenever we use writeFile, it will overwrite the file if it already exists. --> output : Operation starting... -> Ended -> done...
// Whenever writeFileSync is used, it will block the code execution until the file is written. --> output : Operation starting... -> done -> Ended...