const mongoose = require("mongoose");

const tataSchema = new mongoose.Schema({
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

const tata = mongoose.model("tata", tataSchema);

module.exports = tata;