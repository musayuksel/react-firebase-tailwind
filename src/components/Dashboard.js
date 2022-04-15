import React, { useState, useEffect } from "react";
import { getUserData, deleteUserData } from "../firebase-config";
import { useNavigate } from "react-router-dom";

export default function Dashboard({ user }) {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      return navigate("/");
    }
    getUserData(setUserData, user);
  }, [user]);
  function handleDelete(documentId) {
    deleteUserData(documentId).then(() => {
      getUserData(setUserData, user);
    });
  }
  const dataCards = userData.map((user) => {
    return (
      <div
        key={user.documentId}
        className="max-w-sm rounded overflow-hidden shadow-lg"
      >
        <button
          onClick={() => handleDelete(user.documentId)}
          className="bg-red-100  text-red-700 font-semibold py-2 px-4 border border-transparent hover:border-red-500 rounded"
        >
          X
        </button>
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
