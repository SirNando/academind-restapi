const express = require("express");
const router = express.Router();

const quoteRoutes = require("../controller/quotes.controller");

router.get("/", quoteRoutes.getRandomQuote);

module.exports = router;