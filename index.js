const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log(req);
  res.status(200).send("running");
});

app.listen(4040, () => {
  console.log("listening on port 4040");
});
