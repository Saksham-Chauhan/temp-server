const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log(req);
  res.status(200).send("running perfectly");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.status(201).send(true);
});

app.listen(4040, () => {
  console.log("listening on port 4040");
});
