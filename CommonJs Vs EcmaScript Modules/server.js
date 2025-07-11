//The below code is for commonjs ---->
// const { createServer } = require('node:http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World</h1>');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


//Importing module for named exports---
// import {a,b,c,d} from "./mymodule.js"
// console.log(a,b,c,d)

//Importing for default exports---
// import anyname from "./mymodule.js"
// console.log(anyname)


//The below is for module ie., Ecmascriptjs ----->
//import http from "http"

const a = require('./mymodule2.js')
console.log(a)