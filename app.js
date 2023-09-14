const express = require("express");

const app = express();

const quoteRoutes = require("./routes/quotes.routes");
const db = require("./data/database");

app.use("/quote", quoteRoutes);

app.use((error, req, res, next) => {
    res.status(500).json({
        message: "Something went wrong!"
    });
});

db.initDb().then(() => {
    app.listen(3000);
}).catch((error) => {
    console.log("Connection to the database failed");
});