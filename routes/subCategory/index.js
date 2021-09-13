const router = require("express").Router();

const addSubCategory = require("./addSubCategory");
const getSubCategory = require("./getSubCategory");
const updateSubCategory = require("./updateSubCategory");
const deleteSubCategory = require("./deleteSubCategory");

router.post("/subcategory", addSubCategory);
router.get("/subcategory/:name?", getSubCategory);
router.put("/subcategory/:name", updateSubCategory);
router.delete("/subcategory/:name", deleteSubCategory);

module.exports = router;
