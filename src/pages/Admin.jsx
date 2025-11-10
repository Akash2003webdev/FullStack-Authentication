import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const nav = useNavigate();

  const loadUsers = async () => {
    try {
      const res = await api.get("/");
      setUsers(res.data);
      console.log(res.data);
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const deleteUser = async (id) => {
    await api.delete(`/${id}`);
    confirm("User deleted");
    loadUsers();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Admin Panel
        </h1>

        {users.length > 0 ? (
          <div className="space-y-4">
            {users.map((user) => (
              <div
                key={user._id}
                className="border border-gray-200 rounded-md p-4 flex flex-col md:flex-row justify-between items-center hover:bg-gray-100 transition"
              >
                {/* User Info with Image */}
                <div className="flex items-center gap-4 w-full md:w-auto">
                  <img
                    src={
                      user.imageUrl ||
                      "https://randomuser.me/api/portraits/men/75.jpg"
                    }
                    alt={user.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-500 shadow-sm"
                  />
                  <div>
                    <p className="text-lg font-medium text-gray-900">{user.name}</p>
                    <p className="text-sm text-gray-600">Role: {user.role}</p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-4 md:mt-0 flex gap-2">
                  <button
                    onClick={() => nav(`/edit/${user._id}`)}
                    className="bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="bg-red-600 text-white px-4 py-1.5 rounded-md hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default Admin;
