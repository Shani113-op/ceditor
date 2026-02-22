"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function CreatorDashboardPage() {
    const [name, setName] = useState("Creator");

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const parsed = JSON.parse(storedUser);
            setName(parsed.name.split(" ")[0]);
        }
    }, []);

    const stats = [
        { title: "Total Projects", value: 12 },
        { title: "Active Projects", value: 4 },
        { title: "Pending Proposals", value: 9 },
    ];

    const editors = [
        {
            name: "John Doe",
            specialty: "YouTube Editing",
            rating: 4.8,
        },
        {
            name: "Sarah Lee",
            specialty: "Podcast Editing",
            rating: 4.6,
        },
        {
            name: "Michael Ray",
            specialty: "Gaming Videos",
            rating: 4.9,
        },
    ];

    return (
        <div className="space-y-10">

            {/* Welcome Section */}
            <div className="rounded-2xl bg-surface p-8 shadow-md">
                <h1 className="text-2xl font-bold">
                    Welcome back, {name} 👋
                </h1>
                <p className="mt-2 text-textMuted">
                    Manage your projects and find top editors.
                </p>

                <Link
                    href="/creator/post-project"
                    className="mt-6 inline-block rounded-lg bg-primary px-6 py-2 text-white transition hover:opacity-90"
                >
                    Post New Project
                </Link>
            </div>

            {/* Stats Section */}
            <div className="grid gap-6 md:grid-cols-3">
                {stats.map((stat) => (
                    <div
                        key={stat.title}
                        className="rounded-2xl bg-surface p-6 shadow-md"
                    >
                        <p className="text-textMuted">{stat.title}</p>
                        <h2 className="mt-2 text-3xl font-bold">{stat.value}</h2>
                    </div>
                ))}
            </div>

            {/* Recommended Editors */}
            <div>
                <h2 className="mb-6 text-xl font-semibold">
                    Recommended Editors
                </h2>

                <div className="grid gap-6 md:grid-cols-3">
                    {editors.map((editor) => (
                        <div
                            key={editor.name}
                            className="flex flex-col justify-between rounded-2xl bg-surface p-6 shadow-md"
                        >
                            <div>
                                <h3 className="text-lg font-semibold">
                                    {editor.name}
                                </h3>
                                <p className="text-textMuted">
                                    {editor.specialty}
                                </p>
                                <p className="mt-2 font-medium text-yellow-500">
                                    ⭐ {editor.rating}
                                </p>
                            </div>

                            <button className="mt-6 rounded-lg bg-primary px-4 py-2 text-white transition hover:opacity-90">
                                View Profile
                            </button>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}