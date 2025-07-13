***Middlewares in express***

Middleware helps manage request and response cycle.

It allows developers to modify requests/responses and perform tasks before handing over control to the next handler.

Middlewares run automatically without any need of call, ie they run whenever a request is sent to the server.
We can use multiple middlewares before handling control to next header.

Note: If any of the middleware is not called through next() or not given control by previous middleware. This results in request hanging , simply the server keeps on loading and doesnot send a response.

==================================================

***Syntax for writing a middleware***

```JavaScript
app.use((req, res, next) => {
    console.log('Middleware Activated')
    next()
})
```
==================================================

Execution Flow:

Middlewares run in sequence and must call next() to proceed to the next function.

Skipping next() causes the request to hang.

Middleware Use Cases:

Used for logging, request validation, modifying request objects, checking headers, and authentication.

=====================================================

Types of Middlewares:

Application-level: Defined using app.use(), applies to entire app.

Router-level: Scoped to specific routers via router.use().

Built-in: Examples include express.static.

Third-party: Packages like body-parser, cookie-parser.

Error-handling: Captures and handles exceptions in the flow.

=============================================

Whenever a response is send by a middleware using res.send() , ensure that next() to other middleware is not called.
This will result in error.

Example :

```JavaScript
app.use((req, res, next) => {
    console.log('Middleware 1 Activated');
    res.send('Hacked by Middleware 1);
    next() --> ***Do not call this since its response is already sent*** 
})
app.use((req, res, next) => {
    console.log('Middleware 2 Activated')
    next()
})
```

=============================================

We can create middleswares for routing files whose control is limited to that particular file.
This is explained by using blog file in routes folder.