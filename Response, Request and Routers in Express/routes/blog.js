const express = require('express')
const router = express.Router()

router.get("/",(req,res)=>{
    res.send("Blog Home Page")
})

router.get("/about",(req,res)=>{
    res.send("About Blog")
})

router.get("/blogpost/:slug",(req,res)=>{
    res.send(`Fetch BlogPost for ${req.params.slug}`)
})

module.exports = router;