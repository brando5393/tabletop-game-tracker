import firebase from "./src/firebase/config.js";
import express from "express";
import path from "path";
import bodyParser from "body-parser";
const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();
const db = firebase.firestore();
const auth = firebase.auth();

bodyParser.urlencoded({ extended: true });

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "./public/index.html"))
);

// app.post("/register", (req, res) => {
//   auth
//     .createUserWithEmailAndPassword(req.body.emailInput, req.body.passwordInput)
//     .then((err, result) => {
//       if (err) {
//         console.error(err);
//       } else {
//         // res.redirect("/");
//         console.log(result);
//         res.send("User Created Successfully");
//       }
//     });
// });

app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`Server listening on port ${PORT}`)
);
