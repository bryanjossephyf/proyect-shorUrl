const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const {nanoid} = require("nanoid")


const urlSchema = new Schema({
    origin: {
        type: String,
        unique: true,
        required: true,
    },
    shortURL: {
        type: String,
        unique: true,
        required: true,
        default: nanoid(6),
    }
});

const Url = mongoose.model("Url", urlSchema);

module.exports = Url;

