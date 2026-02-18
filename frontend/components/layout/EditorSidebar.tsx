"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
    { name: "Dashboard", href: "/editor" },
    { name: "Projects", href: "/editor/projects" },
    { name: "Earnings", href: "/editor/earnings" },
    { name: "Messages", href: "/editor/messages" },
    { name: "Profile", href: "/editor/profile" },
];

export default function EditorSidebar() {
    const pathname = usePathname();

    return (
        <div className="h-screen flex flex-col justify-between p-5">

            {/* Top Section */}
            <div>
                <h2 className="text-xl font-bold mb-8 text-primary">
                    Editor Panel
                </h2>

                <nav className="space-y-2">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`block px-4 py-2 rounded-lg transition-all duration-200
                  ${isActive
                                        ? "bg-primary text-white"
                                        : "text-textMuted hover:bg-border hover:text-textPrimary"
                                    }
                `}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Bottom Section */}
            <div>
                <button className="w-full bg-danger hover:opacity-90 transition px-4 py-2 rounded-lg text-white">
                    Logout
                </button>
            </div>
        </div>
    );
}
