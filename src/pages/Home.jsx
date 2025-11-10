import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import homeImage from "../assets/home-image.webp"; // optional illustration for right side

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-blue-50 px-6 pt-20 transition-colors duration-500">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          {/* Left Side: Header & Description */}
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700">
              User Authentication Tasks 🔐
            </h1>
            <p className="text-gray-700 text-lg md:text-xl">
              Overview of tasks required for implementing a secure and modern
              authentication system.
            </p>
            <Link to="/about">
              <button className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-indigo-700 transition transform hover:-translate-y-1">
                View Details
              </button>
            </Link>
          </div>

          {/* Right Side: Image / Illustration */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src={homeImage}
              alt="Authentication Overview"
              className="max-w-full rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Task Cards Section */}
        <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Register Card */}
          <Link to="/register" className="block">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transform transition border-t-4 border-indigo-500">
              <h2 className="text-xl font-semibold text-indigo-600 mb-2">
                🧾 Register Users
              </h2>
              <p className="text-gray-600">
                Build secure signup forms with field validation and encrypted
                password storage.
              </p>
            </div>
          </Link>

          {/* Login Card */}
          <Link to="/login" className="block">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transform transition border-t-4 border-blue-500">
              <h2 className="text-xl font-semibold text-blue-600 mb-2">
                🔑 Login System
              </h2>
              <p className="text-gray-600">
                Authenticate users via sessions or JWT tokens with proper error
                handling.
              </p>
            </div>
          </Link>

          {/* Verification Card */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transform transition border-t-4 border-purple-500">
            <h2 className="text-xl font-semibold text-purple-600 mb-2">
              📧 Verification
            </h2>
            <p className="text-gray-600">
              Add email or OTP verification to confirm user accounts and prevent
              spam signups.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
