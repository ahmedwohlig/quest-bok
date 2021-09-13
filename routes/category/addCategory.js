const Category = require("../../models/Category");

module.exports = async (req, res, next) => {
    const message = "category";
    const found = await Category.findOne(req.body);
    console.log(found);
    if (found)
        return res.status(400).json({
            status: 400,
            message: "Bad request",
            error: `${message} already exists`,
        });
    const newCategory = new Category({
        categoryName: req.body.categoryName,
    });
    newCategory
        .save()
        .then(
            res
                .status(201)
                .json({ status: 201, message: "Category created successfully" })
        )
        .catch((err) => {
            console.log(err);
        });
};
