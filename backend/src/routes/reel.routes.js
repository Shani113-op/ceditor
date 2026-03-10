const express = require("express");
const router = express.Router();

const { createReel, getAllReels } = require("../controllers/reel.controller");
const { verifyToken } = require("../middleware/auth.middleware");

// Editor uploads reel
router.post("/", verifyToken, createReel);

// Anyone logged in can view reels (or protect later if needed)
router.get("/", verifyToken, getAllReels);

module.exports = router;