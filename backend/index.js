const express = require("express")
const cors = require("cors")
require("dotenv").config()

const app = express()

app.use(express.json()) // Middleware parser for json
app.use(cors()) // set up cors

const PORT = process.env.PORT

// Routes
const kycRoutes = require("./routes/kycroutes")
const chatRoutes = require("./routes/chatroutes")

app.use('/kyc', kycRoutes)
app.use('/chats', chatRoutes)

// Test Route
app.get("/", (req, res) => {
    res.send("DApp Backend Running 🚀");
  });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
} )
