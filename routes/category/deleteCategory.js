const Category = require("../../models/Category");

module.exports = async (req, res, next) => {
    const found = await Category.findOne({ categoryName: req.params.name });
    if (!found)
        return res.status(404).json({
            status: 404,
            message: "Category not found",
        });
    Category.deleteOne(found).then(
        res.status(200).json({
            status: 200,
            message: "Deleted Successfully",
        })
    );
};
