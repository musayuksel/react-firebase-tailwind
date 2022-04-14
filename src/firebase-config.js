// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const provider = new GoogleAuthProvider();
//add google auth provider
export async function signInWithGoogle(setUser) {
  try {
    const result = await signInWithPopup(auth, provider); //will return a promise
    const user = {
      displayName: result.user.displayName,
      email: result.user.email,
      photoURL: result.user.photoURL,
      uid: result.user.uid,
    };
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  } catch (error) {
    console.error({ error });
  }
}

export function handleSignOut(setUser, navigate) {
  signOut(auth);
  localStorage.removeItem("user");
  setUser(null);
  navigate("/");
}
