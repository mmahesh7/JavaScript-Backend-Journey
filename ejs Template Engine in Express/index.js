const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs');
app.get("/",(req,res)=>{
    let siteName = "Adidas"
    let searchText = "Search Now"
    res.render("index",{siteName: siteName, searchText: searchText})
})

app.get("/blog/:slug",(req,res)=>{
    let blogTilte = "Adidas, Why and When?"
    let blogContent = "It's a good brand"
    res.render("blogpost",{blogTilte: blogTilte, blogContent: blogContent})
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
