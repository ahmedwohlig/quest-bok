const Category = require("../../models/Category");

module.exports = async (req, res, next) => {
    if (!req.params.name) {
        var data = await Category.find({});
    } else {
        var data = await Category.findOne({ categoryName: req.params.name });
    }
    console.log(data);
    if (!data || data == "")
        return res.status(404).json({
            status: 404,
            message: "not found",
            error: "no categories exists please add some category first",
        });
    res.status(200).json({ status: 200, data });
};
