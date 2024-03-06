const mongoose = require("mongoose");

const hynSchema = new mongoose.Schema({
    sn: {
        type: Number,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    specs: {
        type: String,
        required: true,
    },
    owner: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

const hyundai = mongoose.model("hyundai", hynSchema);

module.exports = hyundai;