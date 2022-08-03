const express = require("express");

const app = express();

const timer = require("./Middelware/timer.js");

app.use(timer);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/pages/Navbar.html");
});

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/pages/Home.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/pages/Contact.html");
});

app.get("/services", (req, res) => {
  res.sendFile(__dirname + "/pages/Services.html");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server stared on port ${PORT}`);
});
