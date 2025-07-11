const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about',(req,res)=>{
    res.send('hello About')
})
app.get('/contact',(req,res)=>{
    res.send('hello Contacts')
})
app.get('/blog',(req,res)=>{
    res.send('hello Blog')
})
app.get('/blog/:slug/',(req,res)=>{
    //Logic to fetch {slug} from database
    //http://localhost:3000/blog/intro?mode=dark&region=in
    console.log(req.params)//will output--> params: { slug: 'intro' }
    console.log(req.query)//will output--> query: { mode: 'dark', region: 'in' }
    res.send(`Hello ${req.params.slug}`)
})
// app.get('/blog/intro-to-js',(req,res)=>{
//     //Logic to fetch intro-to-js from database
//     res.send('hello intro-to-javascript')
// })
// app.get('/blog/intro-to-python',(req,res)=>{
//     //Logic to fetch intro-to-python from database
//     res.send('hello intro-to-python')
// })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
