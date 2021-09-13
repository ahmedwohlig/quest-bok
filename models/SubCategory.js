const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subCategorySchema = new Schema({
    subCategoryName: {
        type: String,
        required: true,
    },
    categoryName: {
        type: Schema.Types.ObjectId,
        ref: "Category",
    },
});

module.exports = mongoose.model("SubCategory", subCategorySchema);
