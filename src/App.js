import "./App.css";
import { signInWithGoogle } from "./firebase-config";
// import { Routes, Route, Link } from "react-router-dom";
import { createContext, useState } from "react";
export const AuthContext = createContext({ user: null });
function App() {
  const [user, setUser] = useState(null);
  console.log({ user });
  return (
    <AuthContext.Provider value={user}>
      <div className="App container">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <button
          onClick={() => signInWithGoogle(setUser)}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Sing-in with goole
        </button>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
