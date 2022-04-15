import React, { useState } from "react";
import { db, signInWithGoogle } from "../firebase-config";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
export default function Home({ user, setUser }) {
  const [name, setName] = useState("");
  const [income, setIncome] = useState(0);
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    const postCollectionRef = collection(db, "user_forms");
    const result = await addDoc(postCollectionRef, {
      name,
      income: +income,
      author: { email: user.email, id: user.uid },
    });
    navigate("/dashboard");
  }
  return (
    <main className="App container">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button
        onClick={() => signInWithGoogle(setUser)}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Sign-in with Google
      </button>
      {user && (
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-name"
          >
            First Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            value={name}
            id="grid-name"
            placeholder="Enter your name"
          />
          <p className="text-red-500 text-xs italic">
            Please fill out this field.
          </p>
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="gross-income"
          >
            Gross income
          </label>
          <input
            onChange={(e) => setIncome(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={income}
            type="number"
            id="gross-income"
            placeholder="Enter your gross income"
          />
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            type="submit"
          >
            Submit
          </button>
        </form>
      )}
    </main>
  );
}
