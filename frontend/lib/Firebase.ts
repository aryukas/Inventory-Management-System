// lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAg7PMpr16vp951zcfwMRMw5B80xXjcoWs",
  authDomain: "inventory-management-sys-757f3.firebaseapp.com",
  projectId: "inventory-management-sys-757f3",
  storageBucket: "inventory-management-sys-757f3.appspot.com", // ✅ fixed
  messagingSenderId: "994164545280",
  appId: "1:994164545280:web:8496a43101dfd20067c5e5",
  measurementId: "G-83MWQ2YCQB",
};

// Prevent re-initialization during Next.js hot reload
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
