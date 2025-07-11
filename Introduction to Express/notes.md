***URL Parameters:***

We have 4 methods for making requests and responses namely, ***GET, PUT, POST, DELETE***.

By using 'req.params' object we can generate variable urls for routing.

Example:

app.get('/blog/:slug',(req,res)=>{
    res.send(`Hello ${req.params.slug}`);
})

--> Here slug is the variable url parameter...

===============================================================

We can also generate multi-level variable urls!
Ex:

app.get('/log/:first/:second',(req,res) =>{
    res.send(`Hello ${req.params.first} ${req.params.second}`);
})

--> Here first and second are the variable url parameters...

***This slugs helps the server to fetch required data from database by making routing paths variable...***

==============================================

app.use(express.static('public'))

***The above command makes any file publicly available for all users on internet which are present in public folder***