import React, { useState, useEffect } from "react";
import { getUserData } from "../firebase-config";

export default function Blog({ user }) {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    getUserData(setUserData, user);
  }, [user]);
  const dataCards = userData.map((user) => {
    return (
      <div
        key={user.documentId}
        className="max-w-sm rounded overflow-hidden shadow-lg"
      >
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{user.name}</div>
          <p className="text-gray-700 text-base">
            {`User income is ${user.income} £/year`}
          </p>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="container">{dataCards}</div>
    </>
  );
}
