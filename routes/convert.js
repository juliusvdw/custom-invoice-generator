const express = require("express");
const router = express.Router();
const convert = require("../controllers/convert");

//Create Route To convert html containing users input to PDF
router.get("/", convert);

module.exports = router;
