import React, { useState, useContext } from "react";
import { db, signInWithGoogle } from "../firebase-config";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";
export default function Home() {
  const { user, setUser } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [income, setIncome] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    const postCollectionRef = collection(db, "user_forms");
    const result = await addDoc(postCollectionRef, {
      name,
      income: +income,
      author: { email: user.email, id: user.uid },
    });
    if (result) {
      setIsSubmitting(false);
      navigate("/dashboard");
    }
  }
  return (
    <main className="App container">
      <h1 className="text-3xl font-bold underline">
        Welcome {user ? user.displayName : "!!!"}
      </h1>
      {!user ? (
        <button
          onClick={() => signInWithGoogle(setUser)}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Sign-in with Google
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-name"
          >
            First Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white"
            type="text"
            value={name}
            id="grid-name"
            placeholder="Enter your name"
            required
          />
          {/* <p className="text-red-500 text-xs italic">
            Please fill out this field.
          </p> */}
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="gross-income"
          >
            Gross income
          </label>
          <input
            onChange={(e) => setIncome(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            value={income}
            type="number"
            id="gross-income"
            placeholder="Enter your gross income"
            required
          />
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            type="submit"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </form>
      )}
    </main>
  );
}
