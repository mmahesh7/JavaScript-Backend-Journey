use("crudDb")

console.log(db);

//Creation of a new collection
db.createCollection("courses");


//Insert a document into the collection
// db.courses.insertOne({
//     name: "MongoDB Basics",
//     price:0,
//     assignments: 12,
//     projects:10
// })

//Insert multiple documents into the collection
// db.courses.insertMany([
//   {
//     name: "MongoDB Basics",
//     price: 0,
//     assignments: 12,
//     projects: 10
//   },
//   {
//     name: "Express Essentials",
//     price: 199,
//     assignments: 15,
//     projects: 5
//   },
//   {
//     name: "Java Mastery",
//     price: 299,
//     assignments: 20,
//     projects: 8
//   },
//   {
//     name: "Python for Data Structures",
//     price: 0,
//     assignments: 18,
//     projects: 6
//   },
//   {
//     name: "Frontend with React",
//     price: 249,
//     assignments: 10,
//     projects: 4
//   },
//   {
//     name: "Node.js Bootcamp",
//     price: 199,
//     assignments: 16,
//     projects: 7
//   },
//   {
//     name: "Algorithms Deep Dive",
//     price: 0,
//     assignments: 25,
//     projects: 12
//   },
//   {
//     name: "Data Structures with C++",
//     price: 179,
//     assignments: 14,
//     projects: 5
//   },
//   {
//     name: "Web Dev Crash Course",
//     price: 99,
//     assignments: 8,
//     projects: 3
//   },
//   {
//     name: "Fullstack Dev Practice",
//     price: 349,
//     assignments: 22,
//     projects: 9
//   }
// ])

//READ - Search for documents in the collection
// let a = db.courses.find({price:0});
// console.log(a);
// console.log("Total documents found: " + a.count());
// Convert the cursor to an array and print it
// console.log(a.toArray());

// UPDATE 
// db.courses.updateOne({price:0}, {$set: {price: 100}});

//update many documents
// db.courses.updateMany({price:0}, {$set: {price: 99}});

//DELETE
// db.courses.deleteOne({name: "MongoDB Basics"})

//Delete many documents
db.courses.deleteMany({price:99})