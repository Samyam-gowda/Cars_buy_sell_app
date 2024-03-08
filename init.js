const mongoose = require("mongoose");
const honda = require("./models/honda.js");
const hyundai = require("./models/hyundai.js");
const maruthi = require("./models/maruthi.js");
const renault = require("./models/renault.js");
const tata = require("./models/tata.js");

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/app");
    console.log("Connected to MongoDB");

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

    let maruthiCars = [
      {
        sn: 0,
        model: "2018 Maruti Swift VXI AMTAutomatic",
        specs: "petrol | manual |23,298 KM",
        owner: "1st owoner",
        price: 5.83,
      },
      {
        sn: 1,
        model: "2016 Maruti Baleno ZETA PETROL 1.2 Manual",
        specs: "DIESEL| manual |60,298 KM",
        owner: "2nd owoner",
        price: 5.37,
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

    let hyundaiCars = [
      {
        sn: 0,
        model: "2019 Hyundai Elite i20 ASTA (O) CVTAutomatic",
        specs: "petrol | Automatic |23,298 KM",
        owner: "1st owoner",
        price: 7.71,
      },
      {
        sn: 1,
        model: "2017 Hyundai Grand i10 MAGNA 1.2 KAPPA VTVTManual",
        specs: "PETROL| manual | 60,298 KM",
        owner: "3rd owoner",
        price: 4.05,
      },
      {
        sn: 2,
        model: "2021 Hyundai NEW I20 SPORTZ 1.5 MTManual",
        specs: "DIESEL| manual | 77,297 KM",
        owner: "1st owoner",
        price: 7.84,
      },
      {
        sn: 3,
        model: "2011 Hyundai i20 MAGNA (O) 1.2Manual",
        specs: "PETROL | Manual| 1,19,495 KM",
        owner: "3rd owoner",
        price: 2.52,
      },
      {
        sn: 4,
        model: "2014 Hyundai Verna FLUIDIC 1.6 CRDI EXManual",
        specs: "DIESEL | Manual |1,56,000 KM",
        owner: "2nd owoner",
        price: 4.93,
      },
      {
        sn: 5,
        model: "2016 Hyundai Creta SX PLUS 1.6 PETROLManual",
        specs: "petrol | manual | 76,298 KM",
        owner: "2nd owoner",
        price: 7.95,
      },
    ];

    let renaultCars = [
      {
        sn: 0,
        model: "2014 Renault Duster 85 PS RXE DIESELManual",
        specs: "DIESEL | manual| 1,19,298 KM",
        owner: "1st owoner",
        price: 4.22,
      },
      {
        sn: 1,
        model: "2019 Renault TRIBER RXZManual",
        specs: "PETROL| manual | 60,298 KM",
        owner: "1st owoner",
        price: 6.27,
      },
      {
        sn: 2,
        model: "2019 Renault Kwid CLIMBER 1.0 AMTAutomatic",
        specs: "DIESEL| Automatic17,297 KM",
        owner: "2nd owoner",
        price: 3.84,
      },
      {
        sn: 3,
        model: "2016 Renault Duster RXL PETROLManual",
        specs: "PETROL | Manual|79,495 KM",
        owner: "1st owoner",
        price: 6.43,
      },
      {
        sn: 4,
        model: "2014 Renault Pulse RX L DIESELManual",
        specs: "DIESEL | Manual |83,000 KM",
        owner: "1st owoner",
        price: 3.01,
      },
      {
        sn: 5,
        model: "2018 Renault Duster RXS CVTAutomatic",
        specs: "DIESEL | Automatic|36,298 KM",
        owner: "2nd owoner",
        price: 8.32,
      },
    ];

    let tataCars = [
      {
        sn: 0,
        model: "2020 Tata Tiago XZ PLUS DUAL TONE PETROLManual ",
        specs: "petrol | manual | 60,298 KM",
        owner: "2nd owoner",
        price: 6.43,
      },
      {
        sn: 1,
        model: "2019 Tata NEXON XZA PLUS DIESELAutomatic",
        specs: "DIESEL| manual | 1,60,298 KM",
        owner: "1st owoner",
        price: 9.5,
      },
      {
        sn: 2,
        model: "2019 Tata Harrier  XZ 2.0LManuall",
        specs: "DIESEL | manual | 28,297 KM",
        owner: "1st owoner",
        price: 12.41,
      },
      {
        sn: 3,
        model: "2017 Tata Bolt XM QUADRAJET Manual",
        specs: "DIESEL | manual | 89,495 KM",
        owner: "1st owoner",
        price: 3.18,
      },
      {
        sn: 4,
        model: "2019 Tata NEXON  XZA PLUS DIESEL Automatic",
        specs: "petrol | Automatic|1,80,000 KM",
        owner: "2nd owoner",
        price: 8.93,
      },
      {
        sn: 5,
        model: "2019 Tata TIGOR XM (O) PETROL Manual",
        specs: "petrol | manual | 40,298 KM",
        owner: "2nd owoner",
        price: 4.29,
      },
    ];

    await honda.insertMany(hondaCars);
    await maruthi.insertMany(maruthiCars);
    await hyundai.insertMany(hyundaiCars);
    await renault.insertMany(renaultCars);
    await tata.insertMany(tataCars);

    console.log("Documents inserted successfully");
  } catch (error) {
    console.error("Error inserting documents:", error);
  } finally {
    mongoose.disconnect();
  }
}

main();
