import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { handleSignOut } from "../firebase-config";
export default function Navbar({ user, setUser }) {
  //take the location from the router and use it to set the active class
  const path = useLocation().pathname.slice(1);
  const navigate = useNavigate();
  return (
    <nav className="flex border-b">
      <Link
        className={`${
          path === "" ? "-mb-px" : ""
        } mr-1 bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-600 font-semibold hover:text-blue-900`}
        to={"/"}
      >
        Home
      </Link>
      <Link
        className={`${
          path === "about" ? "-mb-px" : ""
        } mr-1 bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-600 font-semibold hover:text-blue-900`}
        to={"/about"}
      >
        About us
      </Link>
      <Link
        className={`${
          path === "blog" ? "-mb-px" : ""
        } mr-1 bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-600 font-semibold hover:text-blue-900`}
        to={"/blog"}
      >
        Blog
      </Link>
      <Link
        className={`${
          path === "pricing" ? "-mb-px" : ""
        } mr-1 bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-600 font-semibold hover:text-blue-900`}
        to={"/pricing"}
      >
        Pricing
      </Link>
      <Link
        className={`${
          path === "contact" ? "-mb-px" : ""
        } mr-1 bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-600 font-semibold hover:text-blue-900`}
        to={"/contact"}
      >
        Contact
      </Link>
      {user && (
        <button
          className="bg-red-100  text-red-700 font-semibold py-2 px-4 border border-transparent hover:border-red-500 rounded"
          onClick={() => handleSignOut(setUser, navigate)}
        >
          Sign out
        </button>
      )}
    </nav>
  );
}
