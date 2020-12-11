import firebase from "./src/firebase/config";
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");
const db = firebase.firestore();
const auth = firebase.auth();

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "./public/index.html"))
);

app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`Server listening on port ${PORT}`)
);
