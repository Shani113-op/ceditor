"use client";

import Link from "next/link";

export default function CreatorWelcome() {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border">
            <h1 className="text-2xl font-bold mb-2">
                Welcome back 👋
            </h1>

            <p className="text-gray-600 mb-4">
                Find the best editors for your next project.
            </p>

            <Link
                href="/creator/post-project"
                className="inline-block bg-black text-white px-5 py-2 rounded-xl hover:opacity-90 transition"
            >
                Post New Project
            </Link>
        </div>
    );
}
