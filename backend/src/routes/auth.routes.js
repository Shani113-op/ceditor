const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/auth.controller");
const { verifyToken } = require("../middleware/auth.middleware");

// ================= PUBLIC ROUTES =================

// Register
router.post("/register", register);

// Login
router.post("/login", login);


// ================= PROTECTED ROUTE (TEST) =================

// This route checks if JWT works
router.get("/me", verifyToken, (req, res) => {
    res.status(200).json({
        message: "Token valid",
        user: req.user,
    });
});

module.exports = router;