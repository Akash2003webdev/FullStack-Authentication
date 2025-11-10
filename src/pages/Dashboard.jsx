import { useEffect, useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState([]);

  const loadUsers = async () => {
    try {
      const res = await api.get("/");
      setUser(res.data);
      console.log(res.data);
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  // If user is a normal user
  if (user.role === "user") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-50 via-white to-blue-50 text-gray-800 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl text-center w-full max-w-md transform transition hover:-translate-y-1 hover:shadow-2xl">
          <img
            src={user.imageUrl || "https://via.placeholder.com/100"}
            alt="User"
            className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-blue-500 object-cover shadow"
          />
          <h1 className="text-3xl font-semibold mb-2 text-indigo-700">
            User Dashboard
          </h1>
          <p className="text-gray-600 mb-3">
            Welcome,{" "}
            <span className="font-medium text-blue-600">{user.name}</span>
          </p>
          <p className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md inline-block font-medium">
            Role: {user.role}
          </p>
        </div>
      </div>
    );
  }

  // For admin view
  const userArr = user?.filter((u) => u._id === localStorage.getItem("id"));
  console.log(userArr);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-50 via-white to-blue-50 text-gray-800 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg text-center transform transition hover:-translate-y-1 hover:shadow-2xl">
        <h1 className="text-3xl font-semibold mb-6 text-indigo-700">
          Admin Dashboard
        </h1>

        {userArr.length > 0 ? (
          <div className="space-y-4">
            {userArr.map((user) => (
              <div
                key={user._id}
                className="p-4 border border-gray-200 rounded-lg hover:bg-gray-100 transition"
              >
                <img
                  src={user.imageUrl || "https://via.placeholder.com/100"}
                  alt="Admin"
                  className="w-24 h-24 rounded-full mx-auto mb-3 object-cover border-4 border-blue-400 shadow"
                />
                <p className="text-lg font-medium text-gray-800">{user.name}</p>
                <p className="text-sm text-gray-500 font-medium">
                  Role: {user.role}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No user found</p>
        )}

       <div className="mt-6">
  <Link to="/admin">
    <button className="px-6 py-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
      Go to Admin Panel
    </button>
  </Link>
</div>

      </div>
    </div>
  );
};

export default Dashboard;
