import "./App.css";
import { signInWithGoogle } from "./firebase-config";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { createContext, useState } from "react";
import About from "./components/About";
import Blog from "./components/Blog";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
export const AuthContext = createContext({ user: null });
function App() {
  const [user, setUser] = useState(null);
  console.log({ user });
  return (
    <AuthContext.Provider value={user}>
      <Router>
        <nav className="flex border-b">
          <Link
            className="-mb-px mr-1 bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
            to={"/"}
          >
            Home
          </Link>
          <Link
            className="mr-1 bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
            to={"/about"}
          >
            About us
          </Link>
          <Link
            className="mr-1 bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
            to={"/blog"}
          >
            Blog
          </Link>
          <Link
            className="mr-1 bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
            to={"/pricing"}
          >
            Pricing
          </Link>
          <Link
            className="mr-1 bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
            to={"/contact"}
          >
            Contact
          </Link>
        </nav>
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
