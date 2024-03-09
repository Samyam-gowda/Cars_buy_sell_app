const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const honda = require("./models/honda.js");
const hyundai = require("./models/hyundai.js");
const maruthi = require("./models/maruthi.js");
const renault = require("./models/renault.js");
const tata = require("./models/tata.js");
const login = require("./models/login.js");
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"));

main()
  .then((res) => {
    console.log("connection succesful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/app");
}

app.get("/home", (req, res) => {
  res.render("home.ejs", { name: globalName });
});

// Maruthi Suzuki
app.get("/home/suzuki", async (req, res) => {
  let maruthis = await maruthi.find();
  const maruthiImage = [
    "/requirements/m1.webp",
    "/requirements/m2.webp",
    "/requirements/m3.webp",
    "/requirements/m4.webp",
    "/requirements/m5.webp",
    "/requirements/m6.webp",
  ];
  res.render("suzuki.ejs", { maruthis, maruthiImage, name: globalName });
});

// Hyundai
app.get("/home/hyundai", async (req, res) => {
  let hyundais = await hyundai.find();
  const hyundaiImage = [
    "/requirements/hy1.webp",
    "/requirements/hy2.webp",
    "/requirements/hy3.webp",
    "/requirements/hy4.webp",
    "/requirements/hy5.webp",
    "/requirements/hy6.webp",
  ];
  res.render("hyundai.ejs", { hyundais, hyundaiImage, name: globalName });
});

// Honda
app.get("/home/honda", async (req, res) => {
  let hondas = await honda.find();
  const hondaImage = [
    "/requirements/h1.webp",
    "/requirements/h2.webp",
    "/requirements/h3.webp",
    "/requirements/h4.webp",
    "/requirements/h5.webp",
    "/requirements/h6.webp",
  ];
  res.render("honda.ejs", { hondas, hondaImage, name: globalName });
});

// Renault
app.get("/home/renault", async (req, res) => {
  let renaults = await renault.find();
  const renaultImage = [
    "/requirements/r1.webp",
    "/requirements/r2.webp",
    "/requirements/r3.webp",
    "/requirements/r4.webp",
    "/requirements/r5.webp",
    "/requirements/r6.webp",
  ];
  res.render("renault.ejs", { renaults, renaultImage, name: globalName });
});

// Tata
app.get("/home/tata", async (req, res) => {
  let tatas = await tata.find();
  const tataImage = [
    "/requirements/t1.webp",
    "/requirements/t2.webp",
    "/requirements/t3.webp",
    "/requirements/t4.webp",
    "/requirements/t5.webp",
    "/requirements/t6.webp",
  ];
  res.render("tata.ejs", { tatas, tataImage, name: globalName });
});

app.get("/home/login", (req, res) => {
  res.render("login.ejs");
});

let globalName = "";

app.post("/home", async (req, res) => {
  try {
    let { name, password } = req.body;
    let newUser = new login({
      name: name,
      password: password,
    });
    await newUser.save();
    console.log("New User created");
    globalName = name;
    console.log(globalName);
    res.redirect("/home");
  } catch (error) {
    console.error("Error creating new user:", error);
    res.status(500).send("Error creating new user");
  }
});

app.post("/home/suzuki", async (req, res) => {
  try {
    let { sn, model, specs, owner, price } = req.body;
    let newCar = new maruthi({
      sn: sn,
      model: model,
      specs: specs,
      owner: owner,
      price: price,
    });
    await newCar.save();
    console.log("New Car Added");

    let maruthis = await maruthi.find();

    const maruthiImage = [
      "/requirements/m1.webp",
      "/requirements/m2.webp",
      "/requirements/m3.webp",
      "/requirements/m4.webp",
      "/requirements/m5.webp",
      "/requirements/m6.webp",
      "/requirements/m7.webp",
      "/requirements/m8.webp",
      "/requirements/m9.webp",
    ];
    res.render("suzuki.ejs", { maruthis, maruthiImage, name: globalName });
  } catch (error) {
    console.error("Error adding new car:", error);
    res.status(500).send("Error adding new car");
  }
});

app.post("/home/tata", async (req, res) => {
  try {
    let { sn, model, specs, owner, price } = req.body;
    let newCar = new tata({
      sn: sn,
      model: model,
      specs: specs,
      owner: owner,
      price: price,
    });
    await newCar.save();
    console.log("New Car Created");

    let tatas = await tata.find();

    const tataImage = [
      "/requirements/t1.webp",
      "/requirements/t2.webp",
      "/requirements/t3.webp",
      "/requirements/t4.webp",
      "/requirements/t5.webp",
      "/requirements/t6.webp",
      "/requirements/t7.webp",
      "/requirements/t8.webp",
      "/requirements/t9.webp",
    ];
    res.render("tata.ejs", { tatas, tataImage, name: globalName });
  } catch (error) {
    console.error("Error adding new car:", error);
    res.status(500).send("Error adding new car");
  }
});

app.post("/home/honda", async (req, res) => {
  try {
    let { sn, model, specs, owner, price } = req.body;
    let newCar = new honda({
      sn: sn,
      model: model,
      specs: specs,
      owner: owner,
      price: price,
    });
    await newCar.save();
    console.log("New Car Created");

    let hondas = await honda.find();
    const hondaImage = [
      "/requirements/h1.webp",
      "/requirements/h2.webp",
      "/requirements/h3.webp",
      "/requirements/h4.webp",
      "/requirements/h5.webp",
      "/requirements/h6.webp",
      "/requirements/h7.webp",
      "/requirements/h8.webp",
      "/requirements/h9.webp",
    ];
    res.render("honda.ejs", { hondas, hondaImage, name: globalName });
  } catch (error) {
    console.error("Error adding new car:", error);
    res.status(500).send("Error adding new car");
  }
});

app.post("/home/hyundai", async (req, res) => {
  try {
    let { sn, model, specs, owner, price } = req.body;
    let newCar = new hyundai({
      sn: sn,
      model: model,
      specs: specs,
      owner: owner,
      price: price,
    });
    await newCar.save();
    console.log("New Car Created");

    let hyundais = await hyundai.find();
    const hyundaiImage = [
      "/requirements/hy1.webp",
      "/requirements/hy2.webp",
      "/requirements/hy3.webp",
      "/requirements/hy4.webp",
      "/requirements/hy5.webp",
      "/requirements/hy6.webp",
      "/requirements/hy7.webp",
      "/requirements/hy8.webp",
      "/requirements/hy9.webp",
    ];
    res.render("hyundai.ejs", { hyundais, hyundaiImage, name: globalName });
  } catch (error) {
    console.error("Error adding new car:", error);
    res.status(500).send("Error adding new car");
  }
});

app.post("/home/renault", async (req, res) => {
  try {
    let { sn, model, specs, owner, price } = req.body;
    let newCar = new renault({
      sn: sn,
      model: model,
      specs: specs,
      owner: owner,
      price: price,
    });
    await newCar.save();
    console.log("New Car Created");

    let renaults = await renault.find();
    const renaultImage = [
      "/requirements/r1.webp",
      "/requirements/r2.webp",
      "/requirements/r3.webp",
      "/requirements/r4.webp",
      "/requirements/r5.webp",
      "/requirements/r6.webp",
      "/requirements/r7.webp",
      "/requirements/r8.webp",
      "/requirements/r9.webp",
    ];
    res.render("renault.ejs", { renaults, renaultImage, name: globalName });
  } catch (error) {
    console.error("Error adding new car:", error);
    res.status(500).send("Error adding new car");
  }
});

app.get("/home/suzuki/add", (req, res) => {
  res.render("add_suzuki.ejs");
});

app.get("/home/honda/add", (req, res) => {
  res.render("add_honda.ejs");
});

app.get("/home/hyundai/add", (req, res) => {
  res.render("add_hyundai.ejs");
});

app.get("/home/tata/add", (req, res) => {
  res.render("add_tata.ejs");
});

app.get("/home/renault/add", (req, res) => {
  res.render("add_renault.ejs");
});

app.delete("/home/suzuki/:id", async (req, res) => {
  let { id } = req.params;
  await maruthi.findByIdAndDelete(id);
  res.redirect("/home/suzuki");
});

app.delete("/home/honda/:id", async (req, res) => {
  let { id } = req.params;
  await honda.findByIdAndDelete(id);
  res.redirect("/home/honda");
});

app.delete("/home/tata/:id", async (req, res) => {
  let { id } = req.params;
  await tata.findByIdAndDelete(id);
  res.redirect("/home/tata");
});

app.delete("/home/hyundai/:id", async (req, res) => {
  let { id } = req.params;
  await hyundai.findByIdAndDelete(id);
  res.redirect("/home/hyundai");
});

app.delete("/home/renault/:id", async (req, res) => {
  let { id } = req.params;
  await renault.findByIdAndDelete(id);
  res.redirect("/home/hyundai");
});

app.get("/", (req, res) => {
  res.send("working");
});

app.listen(8080, () => {
  console.log("server is working");
});
