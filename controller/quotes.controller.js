const Quote = require("../models/quote.model");

async function getRandomQuote(req, res, next) {
    const randomQuote = await Quote.getRandomQuote();
    res.json({
        quote: randomQuote
    });
}

module.exports = {
    getRandomQuote
};