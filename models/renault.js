const mongoose = require("mongoose");

const renSchema = new mongoose.Schema({
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

const renault = mongoose.model("renault", renSchema);

module.exports = renault;