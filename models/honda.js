const mongoose = require("mongoose");

const hondaSchema = new mongoose.Schema({
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

const honda = mongoose.model("honda", hondaSchema);

module.exports = honda;