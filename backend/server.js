require("dotenv").config();
const express = require("express");
const cors = require("cors");
const prisma = require("./src/lib/prisma");

const authRoutes = require("./src/routes/auth.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("API is running...");
});

// DB Connection Check
prisma.$connect()
    .then(() => console.log("Database connected successfully ✅"))
    .catch((err) => console.error("Database connection failed ❌", err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
