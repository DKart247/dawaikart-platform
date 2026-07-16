"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function SignupPage() {
  const supabase = createClient();

  const [form, setForm] = useState({
    storeName: "",
    ownerName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  async function handleSignup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      !form.storeName ||
      !form.ownerName ||
      !form.email ||
      !form.password ||
      !form.confirmPassword
    ) {
      alert("Please fill in all fields.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (form.password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: {
          store_name: form.storeName,
          owner_name: form.ownerName,
        },
      },
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert(
      "Account created successfully! Please check your email to verify your account."
    );

    setForm({
      storeName: "",
      ownerName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-center text-3xl font-bold">
          Retailer Sign Up
        </h1>

        <p className="mb-6 text-center text-gray-500">
          Create your Dawaikart Retailer Account
        </p>

        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            placeholder="Medical Store Name"
            className="w-full rounded-md border p-3"
            value={form.storeName}
            onChange={(e) =>
              setForm({ ...form, storeName: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Owner Name"
            className="w-full rounded-md border p-3"
            value={form.ownerName}
            onChange={(e) =>
              setForm({ ...form, ownerName: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-md border p-3"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-md border p-3"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full rounded-md border p-3"
            value={form.confirmPassword}
            onChange={(e) =>
              setForm({
                ...form,
                confirmPassword: e.target.value,
              })
            }
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-blue-600 p-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>
      </div>
    </main>
  );
}