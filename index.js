const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.get("/home", (req,res) => {
    res.render("home.ejs");
});

app.get("/", (req,res) => {
    res.send("working");
});

app.listen(8080, () => {
    console.log("server is working");
});
