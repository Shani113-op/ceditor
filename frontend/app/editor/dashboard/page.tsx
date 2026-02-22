"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function EditorDashboardPage() {
    const [name, setName] = useState("Editor");

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const parsed = JSON.parse(storedUser);
            setName(parsed.name.split(" ")[0]);
        }
    }, []);

    const stats = [
        { title: "Total Applications", value: 18 },
        { title: "Active Projects", value: 3 },
        { title: "Completed Projects", value: 11 },
    ];

    const projects = [
        {
            title: "Gaming YouTube Video",
            budget: "$300",
            category: "Gaming",
        },
        {
            title: "Podcast Episode Edit",
            budget: "$150",
            category: "Podcast",
        },
        {
            title: "Instagram Reel Editing",
            budget: "$100",
            category: "Short Form",
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
                    Discover projects and manage your work.
                </p>

                <Link
                    href="/projects"
                    className="mt-6 inline-block rounded-lg bg-primary px-6 py-2 text-white transition hover:opacity-90"
                >
                    Browse Projects
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

            {/* Recommended Projects */}
            <div>
                <h2 className="mb-6 text-xl font-semibold">
                    Recommended Projects
                </h2>

                <div className="grid gap-6 md:grid-cols-3">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="flex flex-col justify-between rounded-2xl bg-surface p-6 shadow-md"
                        >
                            <div>
                                <h3 className="text-lg font-semibold">
                                    {project.title}
                                </h3>
                                <p className="text-textMuted">
                                    Category: {project.category}
                                </p>
                                <p className="mt-2 font-medium text-green-500">
                                    Budget: {project.budget}
                                </p>
                            </div>

                            <button className="mt-6 rounded-lg bg-primary px-4 py-2 text-white transition hover:opacity-90">
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}