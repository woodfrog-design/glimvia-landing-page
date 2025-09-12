// src/firebase.js

import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

/**
 * Core Firebase app init (SSR-safe).
 * Uses only your Firebase env vars. No GA fallbacks here.
 */
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  // Optional: only if you set it in env (kept separate from GA4 ID)
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || undefined,
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

/**
 * Lazily initialize Firebase Analytics on the client.
 * - Does nothing during SSR
 * - Skips if analytics isn't supported (e.g., some browsers)
 * - Skips if no measurementId is configured
 */
let _analyticsPromise = null;

export async function initFirebaseAnalytics() {
  if (typeof window === "undefined") return null;
  if (!process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID) return null;

  if (!_analyticsPromise) {
    _analyticsPromise = (async () => {
      const { getAnalytics, isSupported } = await import("firebase/analytics");
      const supported = await isSupported();
      return supported ? getAnalytics(app) : null;
    })();
  }
  return _analyticsPromise;
}

export { app, db };
