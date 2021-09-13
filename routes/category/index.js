const router = require("express").Router();

const addCategory = require("./addCategory");
const getCategory = require("./getCategory");
const updateCategory = require("./updateCategory");
const deleteCategory = require("./deleteCategory");

router.post("/category", addCategory);
router.get("/category/:name?", getCategory);
router.put("/category/:name", updateCategory);
router.delete("/category/:name", deleteCategory);

module.exports = router;
