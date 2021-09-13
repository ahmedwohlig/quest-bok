const Category = require("../../models/Category");
module.exports = async (req, res, next) => {
    const update = await Category.findOne({ categoryName: req.params.name });
    if (!update)
        return res.status(404).json({
            status: 404,
            message: "Category not found",
        });
    Category.updateOne({ categoryName: req.params.name }, req.body).then(
        res.status(200).json({
            status: 200,
            message: "updated Successfully",
        })
    );
};
