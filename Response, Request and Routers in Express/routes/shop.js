const express = require('express')
const router = express.Router()

router.get("/",(req,res)=>{
    res.send("Shop Home Page");
})
router.get("/groceries",(req,res)=>{
    res.send("Groceries");
})
router.get("/groceries/:slug",(req,res) =>{
    res.send(`Fetching Groceries for ${req.params.slug}`)
})

module.exports = router;