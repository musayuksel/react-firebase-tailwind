import React, { useState, useEffect, useContext } from "react";
import { getUserData, deleteUserData } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

export default function Dashboard() {
  const { user } = useContext(AuthContext);
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
      <div className="container">
        {dataCards.length === 0 ? (
          <>
            <h2>You don't have any data </h2>
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              type="button"
              onClick={() => navigate("/")}
            >
              Start now
            </button>
          </>
        ) : (
          dataCards
        )}
      </div>
    </>
  );
}
