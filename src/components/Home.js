import React, { useState } from "react";
import { signInWithGoogle } from "../firebase-config";

export default function Home({ setUser }) {
  const [name, setName] = useState("");
  const [income, setIncome] = useState(0);
  function handleSubmit(e) {
    e.preventDefault();
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
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-name"
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
        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="gross-income"
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
    </main>
  );
}
