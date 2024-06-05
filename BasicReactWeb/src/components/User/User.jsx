import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { user } = useParams();
  return (
    <div className="text-center bg-gray-600 text-white text-3xl p-4">
      User: {user}{" "}
    </div>
  );
}

export default User;
