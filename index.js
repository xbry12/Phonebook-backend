const express = require("express");
const app = express();
// const mongoose = require("mongoose");

// const db = mongoose.connection;
// mongoose.connect(process.env.DATABASE_URL, { usedNewUrlParser: true });

// app.use(express.json());

app.get("/", (req, res) => {
  res.send({ hello: "World" });
  // why do i need the hello?
});

app.listen(3001, () => {
  console.log("server is running on port 3001");
});
