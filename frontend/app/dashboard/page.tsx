"use client";
import { useAuth } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login"); // redirect if not logged in
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <div className="min-h-screen p-8">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <div>
          <span className="mr-4">{user.email}</span>
          <button
            onClick={logout}
            className="px-3 py-1 border rounded hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      </header>

      <p>Welcome to your dashboard, {user.email} 👋</p>
    </div>
  );
}
