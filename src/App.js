import "./App.css";
import { signInWithGoogle } from "./firebase-config";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { createContext, useState } from "react";
import About from "./components/About";
export const AuthContext = createContext({ user: null });
function App() {
  const [user, setUser] = useState(null);
  console.log({ user });
  return (
    <AuthContext.Provider value={user}>
      <Router>
        <nav>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About us</Link>
          <Link to={"/blog"}>Blog</Link>
          <Link to={"/pricing"}>Pricing</Link>
          <Link to={"/contact"}>Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<h1>HOME PAGE</h1>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <div className="App container">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <button
          onClick={() => signInWithGoogle(setUser)}
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Sing-in with Google
        </button>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
