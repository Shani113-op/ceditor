"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type User = {
    fullName: string;
    role: "creator" | "editor";
};

export default function Navbar() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
        window.location.href = "/";
    };

    return (
        <header className="w-full bg-surface border-b border-border sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="text-xl font-bold text-primary">
                    CreatorEditor
                </Link>

                {/* Middle Links */}
                <nav className="hidden md:flex items-center gap-6 text-textMuted">
                    <Link href="/projects" className="hover:text-textPrimary transition">
                        Explore
                    </Link>
                    <Link href="/editor" className="hover:text-textPrimary transition">
                        Editors
                    </Link>
                    <Link href="/creator" className="hover:text-textPrimary transition">
                        Creators
                    </Link>
                </nav>

                {/* Right Side */}
                <div className="flex items-center gap-4">

                    {!user ? (
                        <>
                            <Link
                                href="/login"
                                className="text-textMuted hover:text-textPrimary transition"
                            >
                                Login
                            </Link>

                            <Link
                                href="/register"
                                className="bg-primary hover:opacity-90 transition px-4 py-2 rounded-lg text-white font-medium"
                            >
                                Register
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link
                                href={`/${user.role}`}
                                className="bg-primary hover:opacity-90 transition px-4 py-2 rounded-lg text-white font-medium"
                            >
                                {user.fullName.split(" ")[0]}'s Dashboard
                            </Link>

                            <button
                                onClick={handleLogout}
                                className="text-danger hover:underline"
                            >
                                Logout
                            </button>
                        </>
                    )}

                </div>
            </div>
        </header>
    );
}
