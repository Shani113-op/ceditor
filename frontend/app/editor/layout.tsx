"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import EditorSidebar from "@/components/layout/EditorSidebar";

export default function EditorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");

        if (!storedUser) {
            router.push("/login");
            return;
        }

        const parsedUser = JSON.parse(storedUser);

        if (parsedUser.role !== "EDITOR") {
            router.push("/login");
            return;
        }

        setLoading(false);
    }, [router]);

    if (loading) return null; // prevents UI flash

    return (
        <div className="flex min-h-screen bg-background text-textPrimary">

            {/* Sidebar */}
            <aside className="hidden w-64 border-r border-border bg-surface md:block">
                <EditorSidebar />
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-6">
                {children}
            </main>

        </div>
    );
}