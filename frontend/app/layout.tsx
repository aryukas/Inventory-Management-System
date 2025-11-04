// app/layout.tsx
import "./styles/globals.css";
import { AuthProvider } from "@/lib/auth"; // using absolute alias path for clarity
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inventory Management System",
  description: "A simple and efficient way to manage your inventory with Firebase authentication.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">
        {/* Wrap everything with AuthProvider to manage user sessions */}
        <AuthProvider>
          <main className="min-h-screen flex flex-col items-center justify-center">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
