const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.options("*", cors());

let logger = [];

app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  console.log(req);
  res.status(200).send("running perfectly");
});

app.get("/distance", async (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  const distance = await getDistance(req.headers?.url);
  res.status(200).json(distance);
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

// ------helpers------

const getDistance = async (url) => {
  try {
    const res = await axios.get(url);
    console.log(res, res?.data);
    return res.data;
  } catch (error) {
    return false;
  }
};

// https://script.google.com/macros/s/AKfycbyV-_HqWzraogVF6DN-1gQ81pjOhwiQEWRaZ2sZ3B3VViqSamgBPTcDAbn21vifmr6w/exec
// AKfycbyV-_HqWzraogVF6DN-1gQ81pjOhwiQEWRaZ2sZ3B3VViqSamgBPTcDAbn21vifmr6w
