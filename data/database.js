const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let database;

async function initDb() {
    const client = await mongodb.MongoClient.connect("mongodb://127.0.0.1:27017");
    database = client.db("quotes");
}

function getDb() {
    if(!database) {
        throw new Error("No database connected");
    }

    return database;
}

module.exports = {
    initDb,
    getDb
}