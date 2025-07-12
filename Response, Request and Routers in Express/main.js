const express = require("express");
const blog = require('./routes/blog')
const shop = require("./routes/shop")
const app = express();
const port = 3000;

app.use(express.static("public"))
app.use('/blog',blog);
app.use("/shop",shop)

app.get("/", (req, res) => {
  console.log("Hey, it's a get request");
  res.send("Hello PostMan GET!");
});

app.post("/", (req, res) => {
  console.log("Hey, it's a post request");
  res.send("Hello World POST!");
});

app.put("/", (req, res) => {
  console.log("Hey, it's a put request");
  res.send("Hello World PUT!");
});

app.delete("/",(req,res)=>{
  console.log("Hey, it's is a delete request");
  res.send("Hello World DELETE!");
})

// Chaining of Requests :- Another syntax to write GET POST PUT DELETE... (i.e above uncommented code)
// app.get("/", (req, res) => {
//   console.log("Hey, it's a get request");
//   res.send("Hello World GET!");
// }).post("/", (req, res) => {
//   console.log("Hey, it's a post request");
//   res.send("Hello World POST!");
// }).put("/", (req, res) => {
//   console.log("Hey, it's a put request");
//   res.send("Hello World PUT!");
// }).delete("/",(req,res)=>{
//   console.log("Hey, it's is a delete request");
//   res.send("Hello World DELETE!");
// })

app.get("/index",(req,res)=>{
  console.log("Hey, it's a index")
  res.sendFile("/templates/index.html",{root: __dirname})
})

app.get("/api",(req,res) =>{
  res.json({a:1,b:2,c:3,d:4,e:["mmk","krsna"]})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});