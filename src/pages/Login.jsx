import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // مهم للتوجيه
import "./login.css";

function Login() {
   useEffect(() => {
        document.title = "Uni-Stay | Login";
      }, []);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // جلب المستخدمين من LocalStorage (مفترض أن المستخدمين محفوظين كمصفوفة)
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // البحث عن المستخدم المطابق
    const currentUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!currentUser) {
      setError("Invalid email or password");
      return;
    }

    // حفظ المستخدم الحالي في LocalStorage
    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    // توجيه المستخدم حسب الدور
    if (currentUser.role === "student") {
      navigate("/profile"); // صفحة الطالب
    } else if (currentUser.role === "owner") {
      navigate("/owner"); // صفحة المالك
    } else if (currentUser.role === "admin") {
      navigate("/admin-dashboard"); // صفحة المسؤول
    } 
    else {
      setError("Unknown role");
    }
  };

  return (
    <div className="bg-[#f8f5ef] flex justify-center items-center min-h-screen">
      <div className="container relative flex w-[90%] max-w-[1100px] h-[600px] rounded-2xl overflow-hidden shadow-lg">
        {/* LEFT SIDE */}
        <div className="flex-1 bg-[#fff9f3] flex flex-col justify-center px-12 relative z-10">
          <div className="flex items-center gap-2 mb-8">
            <div className="bg-[#c47e64]/20 p-3 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-[#c47e64]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 9.75l9-6 9 6M4.5 10.5v10.125h15V10.5"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-[#c47e64]">UniStay</h2>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-1">
            Welcome Back
          </h3>
          <p className="text-gray-500 text-sm mb-6">
            Sign in to access your account
          </p>

          <form onSubmit={handleLogin}>
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

            <label className="text-sm text-gray-700 mb-1 block">
              Email Address
            </label>
            <div className="relative mb-4">
              <input
                type="email"
                placeholder="student@university.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:border-[#c47e64]"
              />
            </div>

            <label className="text-sm text-gray-700 mb-1 block">Password</label>
            <div className="relative mb-4">
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:border-[#c47e64]"
              />
            </div>

            <button
              type="submit"
              className="bg-[#c47e64] hover:bg-[#b46b52] text-white py-3 rounded-md w-full"
            >
              Sign In
            </button>
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="right-section flex-1 relative bg-[url('https://images.unsplash.com/photo-1580063665747-ab495581c9c1?q=80&w=1000')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center p-8">
            <div className="bg-[#c47e64]/80 p-3 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 9.75l9-6 9 6M4.5 10.5v10.125h15V10.5"
                />
              </svg>
            </div>

            <h2 className="text-xl mb-2">Find Your Perfect Home</h2>
            <p className="text-sm text-gray-200 mb-6 max-w-xs">
              Thousands of student apartments near your university. Safe,
              comfortable, and affordable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
