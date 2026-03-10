const prisma = require("../lib/prisma");

// ================= CREATE REEL (EDITOR) =================
exports.createReel = async (req, res) => {
    try {
        const { title, description, videoUrl, videoType } = req.body;

        if (!title || !videoUrl || !videoType) {
            return res.status(400).json({
                message: "Title, video URL and type required",
            });
        }

        const reel = await prisma.reel.create({
            data: {
                title,
                description,
                videoUrl,
                videoType,
                editorId: req.user.id,
            },
        });

        res.status(201).json(reel);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


// ================= GET ALL REELS =================
exports.getAllReels = async (req, res) => {
    try {
        const reels = await prisma.reel.findMany({
            include: {
                editor: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    },
                },
            },
            orderBy: {
                createdAt: "desc",
            },
        });

        res.status(200).json(reels);

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};