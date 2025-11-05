import "./styles/globals.css";
import React from "react";
import { AuthProvider } from "../lib/auth"; // ✅ import your AuthProvider

export const metadata = {
  title: "Inventory Management System",
  description: "Inventory tracking dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* ✅ Wrap all pages in AuthProvider */}
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
