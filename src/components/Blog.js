import React, { useState, useEffect } from "react";
import { getUserData } from "../firebase-config";

export default function Blog({ user }) {
  const [userData, setUserData] = useState([]);
  console.log({ userData });
  useEffect(() => {
    getUserData(setUserData, user);
  }, []);
  console.log({ userData }, ">>>>>>>>>>");
  return <div>Blog</div>;
}
