const express = require("express");

const app = express();

let logger = [];

app.get("/", (req, res) => {
  console.log(req);
  res.status(200).send("running perfectly");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  logger.push({
    body: JSON.stringify(req.body),
    payload: JSON.stringify(req?.payload),
    params: req?.params,
    path: req.path,
  });
  res.status(201).send(true);
});

app.get("/check", (req, res) => {
  res.status(200).send(logger);
});

app.listen(4040, () => {
  console.log("listening on port 4040");
});

// https://script.google.com/macros/s/AKfycbyV-_HqWzraogVF6DN-1gQ81pjOhwiQEWRaZ2sZ3B3VViqSamgBPTcDAbn21vifmr6w/exec
// AKfycbyV-_HqWzraogVF6DN-1gQ81pjOhwiQEWRaZ2sZ3B3VViqSamgBPTcDAbn21vifmr6w
