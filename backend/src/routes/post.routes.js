const express = require("express");
const router = express.Router();

const {
    createPost,
    getAllPosts,
    updatePostStatus,
} = require("../controllers/post.controller");

const {
    verifyToken,
    requireEditor,
} = require("../middleware/auth.middleware");

// Creator creates post
router.post("/", verifyToken, createPost);

// Editor views all posts
router.get("/", verifyToken, requireEditor, getAllPosts);

// Editor updates status
router.put("/:id", verifyToken, requireEditor, updatePostStatus);

module.exports = router;