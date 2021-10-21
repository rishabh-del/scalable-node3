const express = require('express')
var bodyParser = require('body-parser'); 
const { MongoClient } = require("mongodb");
const app = express()
const port = 5000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



app.post('/app3', (req, res) => {
    //mongodb+srv://medicalBlock:<password>@cluster0.qq1fv.mongodb.net/test
    // Replace the uri string with your MongoDB deployment's connection string.
    console.log(req.body, " body for app3")
const uri = "mongodb+srv://admin:admin@cluster0.xubr9.mongodb.net/test";
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    const database = client.db("node3");
    const haiku = database.collection("insert3");
    // create a document to insert
    const doc = {
      title: req.body.title,
      content: req.body.content,
    }
    const result = await haiku.insertOne(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
  res.send('Hello! from app 3. Your data is stored in our DB');
})

app.listen(port, () => {
  console.log(`Example app listening at http://0.0.0.0:${port}`)
})