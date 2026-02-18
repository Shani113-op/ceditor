"use client";

import { useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function LoginPage() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify(form),
        });

        const data = await res.json();

        if (res.ok) {
            localStorage.setItem("user", JSON.stringify(data.user));

            if (data.user.role === "CREATOR") {
                window.location.href = "/creator";
            } else {
                window.location.href = "/editor";
            }
        } else {
            alert(data.message);
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-6">
            <div className="w-full max-w-md bg-surface border border-border rounded-xl p-8 shadow-lg">

                <h2 className="text-2xl font-bold mb-6 text-center">
                    Login to Your Account
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">

                    <div>
                        <label className="block text-sm mb-2 text-textMuted">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-2 text-textMuted">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            required
                            value={form.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary hover:opacity-90 transition py-2 rounded-lg text-white font-medium"
                    >
                        Login
                    </button>
                </form>

                <p className="text-sm text-textMuted mt-6 text-center">
                    Don't have an account?{" "}
                    <Link href="/register" className="text-primary hover:underline">
                        Register
                    </Link>
                </p>

            </div>
        </div>
    );
}
