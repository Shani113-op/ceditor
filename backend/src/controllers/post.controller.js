const prisma = require("../lib/prisma");

// ================= CREATE POST (CREATOR) =================
exports.createPost = async (req, res) => {
    try {
        const { title, content } = req.body;

        if (!title || !content) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const post = await prisma.post.create({
            data: {
                title,
                content,
                authorId: req.user.id,
            },
        });

        res.status(201).json(post);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// ================= GET ALL POSTS (EDITOR) =================
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await prisma.post.findMany({
            include: {
                author: {
                    select: { name: true, email: true },
                },
            },
            orderBy: { createdAt: "desc" },
        });

        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// ================= UPDATE POST STATUS (EDITOR) =================
exports.updatePostStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const post = await prisma.post.update({
            where: { id },
            data: { status },
        });

        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};