"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type User = {
    name: string;
    role: "CREATOR" | "EDITOR";
};

export default function Navbar() {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
        router.push("/");
    };

    const getDashboardLink = () => {
        if (!user) return "/";
        return user.role === "CREATOR"
            ? "/creator/dashboard"
            : "/editor/dashboard";
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-surface">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* Logo */}
                <Link href="/" className="text-xl font-bold text-primary">
                    CreatorEditor
                </Link>

                {/* Middle Links */}
                <nav className="hidden items-center gap-6 text-textMuted md:flex">
                    <Link
                        href="/projects"
                        className="transition hover:text-textPrimary"
                    >
                        Explore
                    </Link>

                    <Link
                        href="/editor/dashboard"
                        className="transition hover:text-textPrimary"
                    >
                        Editors
                    </Link>

                    <Link
                        href="/creator/dashboard"
                        className="transition hover:text-textPrimary"
                    >
                        Creators
                    </Link>
                </nav>

                {/* Right Side */}
                <div className="flex items-center gap-4">
                    {!user ? (
                        <>
                            <Link
                                href="/login"
                                className="transition hover:text-textPrimary text-textMuted"
                            >
                                Login
                            </Link>

                            <Link
                                href="/register"
                                className="rounded-lg bg-primary px-4 py-2 font-medium text-white transition hover:opacity-90"
                            >
                                Register
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link
                                href={getDashboardLink()}
                                className="rounded-lg bg-primary px-4 py-2 font-medium text-white transition hover:opacity-90"
                            >
                                {user.name.split(" ")[0]}'s Dashboard
                            </Link>

                            <button
                                onClick={handleLogout}
                                className="text-danger transition hover:underline"
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