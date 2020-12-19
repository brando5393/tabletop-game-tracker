import { db, auth } from "./src/firebase/config.js";
import express from "express";
import path from "path";
import bodyParser from "body-parser";
const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "./public")));
app.use(express.json);
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "./public/index.html"))
);

app.post("/register", (req, res) => {
  console.log(req.body);
  auth
    .createUserWithEmailAndPassword(req.body.email, req.body.password)
    .then((user) => {
      console.log(
        `A user account with the details, ${user} has been created successfully.`
      );
      db.collection("users")
        .add({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
        })
        .then(() => {
          console.log("new user document has been created successfully.");
        })
        .catch((err) => {
          console.log("Unable to create new user document.");
          console.error(err);
        });
    })
    .catch((err) => {
      console.log("Unable to register new user account.");
      console.error(err);
    });
  res.send("register success");
  // res.redirect("/dashboard");
});

app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`Server listening on port ${PORT}`)
);
