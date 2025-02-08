const express = require("express")
const { addKYC, getKYC } = require("../controllers/kycController")

const router = express.Router()

// KYC routes
router.post("/", addKYC)

router.get("/email", getKYC)

module.exports = router