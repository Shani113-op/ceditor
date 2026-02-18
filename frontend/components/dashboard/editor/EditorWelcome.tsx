"use client";

import Link from "next/link";

export default function EditorWelcome() {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border">
            <h1 className="text-2xl font-bold mb-2">
                Welcome back 🎬
            </h1>

            <p className="text-gray-600 mb-4">
                Discover new projects and start collaborating with creators.
            </p>

            <Link
                href="/editor/profile"
                className="inline-block bg-black text-white px-5 py-2 rounded-xl hover:opacity-90 transition"
            >
                Complete Your Profile
            </Link>
        </div>
    );
}
