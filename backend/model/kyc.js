const sql = require("../config/db");

const createKycTable = async () => {
  await sql`
      CREATE TABLE IF NOT EXISTS kyc (
      id SERIAL PRIMARY KEY,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      nin TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
      );
    `;
};

createKycTable()

module.exports = sql;
