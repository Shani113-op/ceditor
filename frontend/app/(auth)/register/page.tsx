"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "CREATOR",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (form.password !== form.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const res = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: form.fullName,   // IMPORTANT: change fullName → name
                    email: form.email,
                    password: form.password,
                    role: form.role,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.message);
                return;
            }

            // Save token
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));

            // Redirect based on role
            window.location.href = `/${form.role.toLowerCase()}`;

        } catch (error) {
            console.error(error);
            alert("Something went wrong");
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-6">
            <div className="w-full max-w-md bg-surface border border-border rounded-xl p-8 shadow-lg">

                <h2 className="text-2xl font-bold mb-6 text-center">
                    Create an Account
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Full Name */}
                    <div>
                        <label className="block text-sm mb-2 text-textMuted">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            required
                            value={form.fullName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    {/* Email */}
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

                    {/* Role */}
                    <div>
                        <label className="block text-sm mb-2 text-textMuted">
                            Select Role
                        </label>
                        <select
                            name="role"
                            required
                            value={form.role}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                            <option value="CREATOR">Creator</option>
                            <option value="EDITOR">Editor</option>
                        </select>
                    </div>

                    {/* Password */}
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

                    {/* Confirm Password */}
                    <div>
                        <label className="block text-sm mb-2 text-textMuted">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            required
                            value={form.confirmPassword}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary hover:opacity-90 transition py-2 rounded-lg text-white font-medium"
                    >
                        Register
                    </button>
                </form>

                <p className="text-sm text-textMuted mt-6 text-center">
                    Already have an account?{" "}
                    <Link href="/login" className="text-primary hover:underline">
                        Login
                    </Link>
                </p>

            </div>
        </div>
    );
}
