const express = require("express");

const app = express();

const port = 8000;

app.get("/", (req, res) => {
  return res.send("Home page");
});

const admin = (req, res) => {
  return res.send("this is admin dashboard");
};

const isAdmin = (req, res, next) => {
  console.log("isAdmin is running");
  next();
};

const isloggedIn = (req, res, next) => {
  console.log("Logged in");
  next();
};

app.get("/admin", isAdmin, isloggedIn, admin);

app.get("/login", (req, res) => {
  return res.send("You are visiting login route");
});

app.get("/signin", (req, res) => {
  return res.send("You are signed in");
});

app.get("/signout", (req, res) => {
  return res.send("You are signed out");
});

app.get("/hitesh", (req, res) => {
  return res.send("Hitesh uses instagram");
});

app.listen(port, () => {
  console.log("server is up and running");
});

// const port = 3000;

// app.get("/", (req, res) => res.send("Hello World!"));

// app.listen(port, () =>
//   console.log(`Example app listening at http://localhost:${port}`)
// );
