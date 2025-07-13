***ejs***

EJS (Embedded JavaScript) is introduced as a template engine used with Express.js.

It allows developers to render dynamic content in HTML by embedding JavaScript directly within markup.

============================================

***Setting Up EJS in Express***
You need to install EJS using:

```bash
npm install ejs
```
============================================

***Set the view engine in Express:***

```javascript
app.set('view engine', 'ejs');
```
=============================================

***Directory & File Setup***
Create a views/ folder where all EJS files will reside.

Place .ejs files inside views/, for example, index.ejs.

=============================================

***Rendering EJS Templates***

Use res.render() to serve EJS files:

```Javascript
app.get("/", (req, res) => {
    let siteName = "Adidas"
    let searchText = "Search Now"
    res.render("index",{siteName: siteName, searchText: searchText})
});
```


The second argument to render() passes dynamic data.

===============================================

***EJS Syntax Essentials***

To embed JS code: <%= variable %> for output

Example: 

```Javascript
<h1>Welcome <%= userName %></h1>
```
