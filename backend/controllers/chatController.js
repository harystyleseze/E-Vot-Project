const sql = require("../model/chat");


// Store user chat
const addchat = async (req, res) => {
  const { sender, message } = req.body;

  if (!sender || !message) {
    return res.status(4000).json({ error: "Invalid Input" });
  }

  try {

    // Store chat in the database
    const result = await sql`
        INSERT INTO chat (sender, message) VALUES (${sender}, ${message}) RETURNING *;
        `;
    res.json({result : result});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
};


// Retrieve chats
const getChats = async (req, res) => {
    try {
        // Get all chats
        const result = await sql`SELECT * FROM chat`;

        if(!result) {
            return res.status(404).json({ error: "No chats found" });  // Return 404 if no chats found in the database
        }
        
        // Send response
        res.json({
            result
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
    }
};

// Delete Chat
const deleteChat = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ error: "Invalid Input" });
    }
    
    try {
        // Delete chat from the database
        const result = await sql`DELETE FROM chat WHERE id = ${id} RETURNING *;`;
        
        if(!result || result.length === 0) {
            return res.status(404).json({ error: "No chat found to delete" });  // Return 404 if no chat found to delete in the database
        }

        // Send response
        res.json({
            message : "Chat deleted successful"
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
    }
}

module.exports = { addchat, getChats, deleteChat };