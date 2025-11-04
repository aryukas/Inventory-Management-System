"use client";
import { useEffect } from "react";
import { db } from "@/lib/Firebase";
import { collection, getDocs } from "firebase/firestore";

export default function TestFirebase() {
  useEffect(() => {
    const testConnection = async () => {
      try {
        const snapshot = await getDocs(collection(db, "products"));
        console.log(`✅ Firebase connected! Found: ${snapshot.size} products`);
      } catch (err) {
        console.error("❌ Firebase connection failed:", err);
      }
    };
    testConnection();
  }, []);

  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-semibold text-green-600">
        Testing Firebase Connection...
      </h1>
      <p className="text-gray-600 mt-2">
        Open your browser console to see the result (F12 → Console)
      </p>
    </div>
  );
}
