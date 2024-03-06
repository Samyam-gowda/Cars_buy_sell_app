const mongoose = require("mongoose");

const msSchema = new mongoose.Schema({
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

const maruthi = mongoose.model("maruthi", msSchema);

module.exports = maruthi;