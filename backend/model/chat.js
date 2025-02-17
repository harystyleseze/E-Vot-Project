const sql = require("../config/db");

const createchatTable = async () => {
  await sql`
      CREATE TABLE IF NOT EXISTS chat (
      id SERIAL PRIMARY KEY,
      sender TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
      );
    `;
};

createchatTable()

module.exports = sql;
