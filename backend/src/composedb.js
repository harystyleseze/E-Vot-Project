// Import the ComposeClient class from the ComposeDB client package
const { ComposeClient } = require("@composedb/client"); 

// Import the generated ComposeDB definition schema
const definition = require("../__generated__/definition");

// Ensure environment variable is set, otherwise log a warning
const ceramicUrl = process.env.CERAMIC_URL || "http://localhost:7007";
if (!process.env.CERAMIC_URL) {
  console.warn("Warning: CERAMIC_URL is not set. Using default: http://localhost:7007");
}

// Initialize the ComposeClient with Ceramic network settings
const composeClient = new ComposeClient({
  ceramic: ceramicUrl,
  definition, // The schema definition for ComposeDB
});

// Export the ComposeClient instance for use in other parts of the application
module.exports = { composeClient };
