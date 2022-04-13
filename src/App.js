import "./App.css";
import { signInWithGoogle } from "./firebase-config";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import About from "./components/About";
import Blog from "./components/Blog";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
export const AuthContext = createContext({ user: null });
function App() {
  const [user, setUser] = useState(null);
  console.log({ user });
  return (
    <AuthContext.Provider value={user}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>HOME PAGE</h1>} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
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
