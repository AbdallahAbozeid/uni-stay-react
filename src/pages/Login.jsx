import React from "react";

import "./login.css";

function Login() {
  return (
    <div className="bg-[#f8f5ef] flex justify-center items-center min-h-screen">

      <div className="container relative flex w-[90%] max-w-[1100px] h-[600px] rounded-2xl overflow-hidden shadow-lg">

        {/* LEFT SIDE */}
        <div className="flex-1 bg-[#fff9f3] flex flex-col justify-center px-12 relative z-10">

          <div className="flex items-center gap-2 mb-8">
            <div className="bg-[#c47e64]/20 p-3 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#c47e64]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9.75l9-6 9 6M4.5 10.5v10.125h15V10.5" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-[#c47e64]">UniStay</h2>
          </div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-1">Welcome Back</h3>
          <p className="text-gray-500 text-sm mb-6">Sign in to access your account</p>

          <form>

            <label className="text-sm text-gray-700 mb-1 block">Email Address</label>
            <div className="relative mb-4">
              <input type="email" placeholder="student@university.edu"
                className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:border-[#c47e64]" />
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 12H8m8 0H8m8 0c0 3.866-3.582 7-8 7s-8-3.134-8-7 3.582-7 8-7 8 3.134 8 7z" />
              </svg>
            </div>

            <label className="text-sm text-gray-700 mb-1 block">Password</label>
            <div className="relative mb-4">
              <input type="password" placeholder="••••••••"
                className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:border-[#c47e64]" />
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11c.5304 0 1.0391.2107 1.4142.5858C13.7893 11.9609 14 12.4696 14 13m0 0a2 2 0 01-4 0m4 0V9a4 4 0 10-8 0v4a4 4 0 008 0z" />
              </svg>
            </div>

            <div className="flex justify-between text-sm text-gray-600 mb-4">
              <label><input type="checkbox" className="mr-1" /> Remember Me</label>
              <a href="#" className="text-[#c47e64] hover:underline">Forgot Password?</a>
            </div>

            <button className="bg-[#c47e64] hover:bg-[#b46b52] text-white py-3 rounded-md w-full">
              Sign In
            </button>

            <div className="text-center my-5 text-gray-400 text-sm relative divider">OR</div>

            <p className="text-center text-sm">
              Don't have an account?
              <a href="/register" className="text-[#c47e64] hover:underline"> Sign Up</a>
            </p>

            <p className="text-center text-xs text-gray-400 mt-4">
              Student Housing Rental Platform
            </p>

          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="right-section flex-1 relative bg-[url('https://images.unsplash.com/photo-1580063665747-ab495581c9c1?q=80&w=1000')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center p-8">
            <div className="bg-[#c47e64]/80 p-3 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9.75l9-6 9 6M4.5 10.5v10.125h15V10.5" />
              </svg>
            </div>

            <h2 className="text-xl mb-2">Find Your Perfect Home</h2>
            <p className="text-sm text-gray-200 mb-6 max-w-xs">
              Thousands of student apartments near your university. Safe, comfortable, and affordable.
            </p>

            <div className="flex gap-6 text-sm">
              <div className="bg-white/20 backdrop-blur-md px-4 py-3 rounded-md">
                <span className="text-lg font-semibold block">+5000</span>Available Apartments
              </div>
              <div className="bg-white/20 backdrop-blur-md px-4 py-3 rounded-md">
                <span className="text-lg font-semibold block">+50</span>Universities
              </div>
              <div className="bg-white/20 backdrop-blur-md px-4 py-3 rounded-md">
                <span className="text-lg font-semibold block">+10k</span>Students
              </div>
            </div>
          </div>
        </div>

        <div className="curve-shape"></div>

      </div>
    </div>
  );
}

export default Login;
