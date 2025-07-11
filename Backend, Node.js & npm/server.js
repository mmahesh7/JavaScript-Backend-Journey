// console.log("Hello, World!");

var slugify = require("slugify");
let a = slugify('some string here')// by default, removes special characters and replaces spaces with hyphens
let b = slugify('enter URL','_');
let c = slugify('Th!is is$ ju&&*ly %^&2025');

console.log(a); 
console.log(b); 
console.log(c);