const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    category: {
        type: String,
        required: true,
    },
    subCategory: String,
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: mongoose.Schema.Types.Array,
        required: true,
    },
});

module.exports = mongoose.model("Question", questionSchema);
