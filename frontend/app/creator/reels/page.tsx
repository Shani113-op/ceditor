"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Reel {
    id: number;
    title: string;
    description: string;
    videoUrl: string;
    videoType: "CLOUDINARY" | "EXTERNAL";
    editor: {
        id: number;
        name: string;
        email: string;
    };
}

export default function CreatorReelsPage() {
    const router = useRouter();
    const [reels, setReels] = useState<Reel[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");

        if (!storedUser) {
            router.push("/login");
            return;
        }

        const parsed = JSON.parse(storedUser);

        if (parsed.role !== "CREATOR") {
            router.push("/login");
            return;
        }

        fetchReels();
    }, []);

    const fetchReels = async () => {
        try {
            const res = await fetch("http://localhost:5000/api/reels", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.message);
                return;
            }

            setReels(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const renderVideo = (reel: Reel) => {
        // Cloudinary / direct MP4
        if (reel.videoType === "CLOUDINARY") {
            return (
                <video controls className="w-full rounded-lg mb-3">
                    <source src={reel.videoUrl} />
                </video>
            );
        }

        const url = reel.videoUrl;

        // YouTube (watch, shorts, youtu.be)
        if (url.includes("youtube.com") || url.includes("youtu.be")) {
            let videoId = "";

            if (url.includes("watch?v=")) {
                videoId = url.split("v=")[1]?.split("&")[0];
            } else if (url.includes("shorts/")) {
                videoId = url.split("shorts/")[1]?.split("?")[0];
            } else if (url.includes("youtu.be/")) {
                videoId = url.split("youtu.be/")[1]?.split("?")[0];
            }

            if (!videoId) return null;

            return (
                <iframe
                    className="w-full h-52 rounded-lg mb-3"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            );
        }

        // Vimeo
        if (url.includes("vimeo.com")) {
            const videoId = url.split("/").pop()?.split("?")[0];

            return (
                <iframe
                    className="w-full h-52 rounded-lg mb-3"
                    src={`https://player.vimeo.com/video/${videoId}`}
                    allowFullScreen
                />
            );
        }

        // Fallback: treat as direct video
        return (
            <video controls className="w-full rounded-lg mb-3">
                <source src={url} />
            </video>
        );
    };

    if (loading) return <div>Loading reels...</div>;

    return (
        <div className="space-y-8">
            <h1 className="text-2xl font-bold">Editor Demo Reels</h1>

            {reels.length === 0 && (
                <p className="text-gray-500">No reels uploaded yet.</p>
            )}

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {reels.map((reel) => (
                    <div
                        key={reel.id}
                        className="rounded-xl border p-4 shadow-sm bg-white"
                    >
                        {renderVideo(reel)}

                        <h2 className="text-lg font-semibold">
                            {reel.title}
                        </h2>

                        {reel.description && (
                            <p className="text-sm text-gray-600 mt-1">
                                {reel.description}
                            </p>
                        )}

                        <p className="text-sm text-gray-500 mt-2">
                            Uploaded by: {reel.editor.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}