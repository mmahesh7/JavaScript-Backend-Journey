#  Installing Mongoose & Using it with Express

In this, I understood how to integrate **Mongoose** with an **Express.js** server to connect with a **MongoDB** database.

---

##  Step 1: Install Dependencies

```bash
npm install mongoose express
```

##  Step 2: Project Setup

Create a folder (e.g., mongooseExpressApp)

Run npm init -y

Create a file named index.js

## Step 3: Import Modules
```js
const express = require("express");
const mongoose = require("mongoose");
```
## Step 4: Connect to MongoDB
```js
mongoose.connect("mongodb://localhost:27017/dbName
```

## Step 5: Setup Express Server
```js
const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

## Step 6: Create a Mongoose Schema
Define a schema for your data:

```js
const userSchema = new mongoose.Schema({
  name: String,
  email: String
});
```

Create a model:
```
const User = mongoose.model('User', userSchema);
```

## Step 7: Create a GET Route to Fetch Data
```js
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.send(users);
});
```
