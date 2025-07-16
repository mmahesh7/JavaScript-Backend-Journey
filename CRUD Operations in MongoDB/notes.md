#**🛠️ CRUD Operations in MongoDB**

#CRUD stands for:

Create → Add new data

Read → Retrieve data

Update → Modify existing data

Delete → Remove data

These are the building blocks of interacting with any database.

=========================================================

📦 *Create Operation*:
Use insertOne() or insertMany() to add documents.

Example:
>db.courses.insertOne({ name: "MongoDB Basics", price: 0 })

You can insert multiple at once with insertMany().

========================================================

🔍 *Read Operation*:
Use find() to retrieve data.

Example:
>db.courses.find({ price: 0 }) // Returns all free courses

You can use queries and filters to get specific results.

===========================================================

✏️ *Update Operation*:
Use updateOne() or updateMany() with $set.

Example:
>db.courses.updateOne({ name: "MongoDB Basics" }, { $set: { price: 199 } })

===============================================================

❌ *Delete Operation*:
Use deleteOne() or deleteMany() to remove records.

Example:
>db.courses.deleteOne({ name: "Web Dev
