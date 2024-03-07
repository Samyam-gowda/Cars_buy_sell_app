const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const honda = require("./models/honda.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/home", (req, res) => {
  res.render("home.ejs");
});

// Maruthi Suzuki
app.get("/home/suzuki", (req, res) => {
  res.render("suzuki.ejs");
});

// Hyundai
app.get("/home/hyundai", (req, res) => {
  res.render("hyundai.ejs");
});

// Honda
app.get("/home/honda", async (req, res) => {
  let hondas = await honda.find();
  const hondaImage = [];
  console.log(hondas);
  res.render("honda.ejs", { hondas, hondaImage });
});

// Renault
app.get("/home/renault", (req, res) => {
  res.render("renault.ejs");
});

// Tata
app.get("/home/tata", (req, res) => {
  res.render("tata.ejs");
});

app.get("/", (req, res) => {
  res.send("working");
});

app.listen(8080, () => {
  console.log("server is working");
});
