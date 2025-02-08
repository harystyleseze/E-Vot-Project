const sql = require("../model/kyc");
const { hashedNin, comparedNin } = require("../utils/hashedNIN");

// Store user KYC
const addKYC = async (req, res) => {
  const { first_name, last_name, email, nin } = req.body;
  console.log("NIN:", nin)

  if (!email || !nin || !first_name || !last_name) {
    return res.status(4000).json({ error: "Invalid Input" });
  }

  try {

    // Check if email already exists
    const emailExists = await sql`SELECT * FROM kyc WHERE email = ${email}`;
    if (emailExists.length > 0) {
      return res.status(400).json({ error: "Email already registered" });
    }

      // Check if NIN already exists
      const ninExists = await sql`SELECT * FROM kyc`;
      for (let user of ninExists) {
        const isMatch = await comparedNin(nin, user.nin); // ✅ Wait for async function
        if (isMatch) {
          return res.status(400).json({ error: "NIN already registered" });
        }
      }

    // Hash NIN for security reasons
    const encryptedNIN = hashedNin(nin);

    console.log("Hashed NIN:", encryptedNIN)

    // Store KYC in the database with hashed NIN
    const result = await sql`
        INSERT INTO kyc (first_name, last_name, email, nin) VALUES (${first_name}, ${last_name}, ${email}, ${encryptedNIN}) RETURNING *;
        `;
    res.json({result : result});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
};


// Retrieve KYC by Email
const getKYC = async (req, res) => {
    const { email, nin } = req.body; // Ensure email is passed as a route parameter

    try {
        // Fetch user data
        const result = await sql`SELECT * FROM kyc WHERE email = ${email}`;
        
        // Check if user exists
        if (result.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }

        // Extract user data
        const user = result[0];

        if (!user.nin) {
            return res.status(400).json({ error: "NIN is missing in database" });
        }

        // Compare and decrypt NIN
        const ninMatch = comparedNin(req.body.nin, user.nin); // Ensure you're passing correct nin

        // Send response
        res.json({
            user: {
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                ninMatch: ninMatch, // true if matches, false otherwise
                created_at: user.created_at
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
    }
};


module.exports = { addKYC, getKYC };