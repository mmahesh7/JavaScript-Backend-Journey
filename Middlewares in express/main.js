const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs')
const blog = require('./routes/blog');

app.use(express.static('public'));

app.use('/blog', blog);

//Middleware ! - Logger for our application
app.use((req, res, next) => {
    console.log('Middleware 1 Activated')
    // fs.writeFileSync('log.txt', `This was created by Logger at: ${new Date().toISOString()}\n`)
    fs.appendFileSync('log.txt', `This was created by Logger at: ${new Date().toISOString()}\n`)
    // res.send('Hacked by Middleware 1');
    next()
})
app.use((req, res, next) => {
    console.log('Middleware 2 Activated')
    next()
})

app.get('/', (req, res) => {
    res.send('GET REQUEST');
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})