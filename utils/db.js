// utils/db.js
const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGODB);

(async function connectToDB() {
  try {
    await client.connect();
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
  }
})();

module.exports = client;
