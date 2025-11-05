// app/page.tsx
import Link from "next/link";
import "./styles/dashboard.css"; // keep your theme consistent

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold mb-4 text-blue-700 drop-shadow-sm">
          Inventory Management System
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Manage your stock, invoices, and products efficiently.
        </p>

        <div className="flex gap-6 justify-center">
          <Link
            href="/login"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg shadow-md hover:bg-blue-600 hover:text-white hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </main>
  );
}
