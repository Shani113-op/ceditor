"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UploadReelPage() {
    const router = useRouter();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [externalUrl, setExternalUrl] = useState("");
    const [loading, setLoading] = useState(false);

    // 🔥 Upload to Cloudinary
    const uploadToCloudinary = async (file: File) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "ceditor");

        const res = await fetch(
            "https://api.cloudinary.com/v1_1/dmex9rkih/video/upload",
            {
                method: "POST",
                body: formData,
            }
        );

        const data = await res.json();

        if (!res.ok) {
            console.error(data);
            throw new Error("Cloudinary upload failed");
        }

        return data.secure_url;
    };

    // 🔥 Handle Submit
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        let finalUrl = "";
        let finalType = "";

        try {
            setLoading(true);

            if (file) {
                finalUrl = await uploadToCloudinary(file);
                finalType = "CLOUDINARY";
            } else if (externalUrl) {
                finalUrl = externalUrl;
                finalType = "EXTERNAL";
            } else {
                alert("Please upload a file or provide a video URL");
                setLoading(false);
                return;
            }

            const res = await fetch("http://localhost:5000/api/reels", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify({
                    title,
                    description,
                    videoUrl: finalUrl,
                    videoType: finalType,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.message);
                return;
            }

            alert("Reel uploaded successfully 🚀");
            router.push("/editor");

        } catch (error) {
            console.error(error);
            alert("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-xl mx-auto space-y-6">
            <h1 className="text-2xl font-bold">Upload Demo Reel</h1>

            <form onSubmit={handleSubmit} className="space-y-5">

                {/* Title */}
                <div>
                    <label className="block mb-1 font-medium">Title</label>
                    <input
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block mb-1 font-medium">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>

                {/* Upload File */}
                <div>
                    <label className="block mb-1 font-medium">
                        Upload Video File (Cloudinary)
                    </label>
                    <input
                        type="file"
                        accept="video/*"
                        onChange={(e) => {
                            setFile(e.target.files ? e.target.files[0] : null);
                            setExternalUrl(""); // Clear URL if file selected
                        }}
                        className="w-full"
                    />
                </div>

                <div className="text-center text-gray-500 font-semibold">
                    OR
                </div>

                {/* External URL */}
                <div>
                    <label className="block mb-1 font-medium">
                        Paste External Video URL
                    </label>
                    <input
                        type="text"
                        placeholder="https://youtube.com/... or any mp4 link"
                        value={externalUrl}
                        onChange={(e) => {
                            setExternalUrl(e.target.value);
                            setFile(null); // Clear file if URL entered
                        }}
                        className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary text-white py-2 rounded hover:opacity-90 transition"
                >
                    {loading ? "Uploading..." : "Upload Reel"}
                </button>
            </form>
        </div>
    );
}