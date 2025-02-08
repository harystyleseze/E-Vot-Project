require("dotenv").config();
const { neon } = require("@neondatabase/serverless");

// Connect to Neon PostgreSQL
const sql = neon(process.env.DATABASE_URL);

module.exports = sql;
