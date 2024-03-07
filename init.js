const mongoose = require("mongoose");
const honda = require("./models/honda.js");
const hyundai = require("./models/hyundai.js");
const maruthi = require("./models/maruthi.js");
const renault = require("./models/renault.js");
const tata = require("./models/tata.js");

main()
  .then((res) => {
    console.log("connection succesful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/app");
}

let hondaCars = [
  {
    sn: 0,
    model: "2012 Honda City 1.5L I-VTE V",
    specs: "Petrol | Manual | 60,298 KM",
    owner: "2nd owoner",
    price: 4.43,
  },
  {
    sn: 1,
    model: "2019 Honda City 1.5L I-DTE V",
    specs: "DIESEL| manual | 1,60,298 KM",
    owner: "1st owoner",
    price: 9.5,
  },
  {
    sn: 2,
    model: "2017 Honda BR-V 1.5L I-VTEC SManual",
    specs: "Petrol | Manual | 28,297 KM",
    owner: "3rd owoner",
    price: 6.41,
  },
  {
    sn: 3,
    model: "2019 Honda Amaze 1.2L I-VTEC V CVTAutomatic",
    specs: "DIESEL | Automatic | 19,495 KM",
    owner: "1st owoner",
    price: 6.18,
  },
  {
    sn: 4,
    model: "2012 Honda City 1.5L I-VTEC CORPORATE MTManual",
    specs: "Petrol | Manual |1,80,000 KM",
    owner: "2nd owoner",
    price: 3.93,
  },
  {
    sn: 5,
    model: "22017 Honda WR-V 1.2L I-VTEC VX MTManual",
    specs: "Petrol | Manual | 40,298 KM",
    owner: "2nd owoner",
    price: 7.29,
  },
];

let maruthicars= [
  {
    sn: 0,
    model: "2018 Maruti Swift VXI AMTAutomatic",
    specs: "petrol | manual |23,298 KM",
    owner: "1st owoner",
    price: 5.83
  },
  {
    sn: 1,
    model: "2016 Maruti Baleno ZETA PETROL 1.2 Manual",
    specs: "DIESEL| manual |60,298 KM",
    owner: "2nd owoner",
    price: 5.37
  },
  {
    sn: 2,
    model: "2012 Maruti Ertiga VDIManual",
    specs: "DIESEL| manual | 1,28,297 KM",
    owner: "3rd owoner",
    price: 6.13,
  },
  {
    sn: 3,
    model: "2017 Maruti IGNIS ZETA 1.2 AMT",
    specs: "PETROL | Automatic |19,495 KM",
    owner: "1st owoner",
    price: 6.12,
  },
  {
    sn: 4,
    model: "2018 Maruti Vitara Brezza ZDI PLUS AMTAutomatic",
    specs: "DIESEL | Automatic |56,000 KM",
    owner: "1st owoner",
    price: 7.93,
  },
  {
    sn: 5,
    model: "2017 Maruti Ciaz SIGMA 1.4 MT PETROLManual",
    specs: "petrol | manual |76,298 KM",
    owner: "2nd owoner",
    price: 5.89,
  },
];

let hyundaicars= [
  {
    sn: 0,
    model: "2019 Hyundai Elite i20 ASTA (O) CVTAutomatic",
    specs: "petrol | Automatic |23,298 KM",
    owner: "1st owoner",
    price: 7.71
  },
  {
    sn: 1,
    model: "2016 Maruti Baleno ZETA PETROL 1.2 Manual",
    specs: "DIESEL| manual |60,298 KM",
    owner: "2nd owoner",
    price: 5.37
  },
  {
    sn: 2,
    model: "2012 Maruti Ertiga VDIManual",
    specs: "DIESEL| manual | 1,28,297 KM",
    owner: "3rd owoner",
    price: 6.13,
  },
  {
    sn: 3,
    model: "2017 Maruti IGNIS ZETA 1.2 AMT",
    specs: "PETROL | Automatic |19,495 KM",
    owner: "1st owoner",
    price: 6.12,
  },
  {
    sn: 4,
    model: "2018 Maruti Vitara Brezza ZDI PLUS AMTAutomatic",
    specs: "DIESEL | Automatic |56,000 KM",
    owner: "1st owoner",
    price: 7.93,
  },
  {
    sn: 5,
    model: "2017 Maruti Ciaz SIGMA 1.4 MT PETROLManual",
    specs: "petrol | manual |76,298 KM",
    owner: "2nd owoner",
    price: 5.89,
  },
];