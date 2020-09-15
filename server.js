const express = require("express");
const app = express();
const port = 5000;
const mongo = require("mongoose")
const db = require("./config/keys").mongoURI;

mongo
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected...."))
  .catch(err => console.log(err));

app.get('/', (req, res) =>{
   res.send("hi")
})


app.listen(port, () => console.log(`server listen to the ${port}`));
