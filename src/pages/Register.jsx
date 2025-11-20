import React from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";

import bgImage from "../assets/image.png";

function Register() {
  const navigate = useNavigate();

  // دالة عرض الصورة بعد رفعها
  const previewPhoto = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const previewImage = document.getElementById("preview-image");
    const icon = document.querySelector(".fa-user");

    if (file.type === "image/png" || file.type === "image/jpeg") {
      const reader = new FileReader();
      reader.onload = (e) => {
        previewImage.src = e.target.result;
        previewImage.classList.remove("hidden");
        icon.classList.add("hidden");
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a PNG or JPG image only.");
    }
  };

  // دالة التسجيل
  const handleRegister = (e) => {
    e.preventDefault();

    const fullName = e.target.fullName.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    // التحقق من ملء جميع الحقول
    if (!fullName || !email || !phone || !password || !confirmPassword) {
      alert("Please fill in all fields!");
      return;
    }

    // التحقق من تطابق كلمة السر
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // التحقق من أن الإيميل غير مسجل مسبقاً
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const emailExists = users.some((u) => u.email === email);

    if (emailExists) {
      alert("Email already exists!");
      return;
    }

    // حفظ المستخدم الجديد
    const newUser = {
      fullName,
      email,
      phone,
      password,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully!");

    navigate("/");
  };

  return (
    <div className="min-h-screen flex main-container relative font-sans bg-white">
      {/* Left Section */}
      <div className="w-1/2 bg-[#f8f4ea] flex flex-col justify-center px-20 relative left-panel pt-10">
        <div className="flex items-center mb-6">
          <div className="bg-[#c47c61] w-10 h-10 flex items-center justify-center rounded-lg text-white text-xl mr-2">
            <i className="fas fa-home"></i>
          </div>
          <h1 className="text-2xl font-semibold text-[#c47c61]">UniStay</h1>
        </div>

        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Create Account
        </h2>
        <p className="text-gray-500 mb-6">
          Join thousands of students finding their perfect home
        </p>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleRegister}>
          {/* Profile Photo */}
          <div className="flex flex-col items-center mb-4">
            <label htmlFor="profile-photo" className="relative cursor-pointer">
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-4xl overflow-hidden hover:bg-gray-300 transition">
                <i className="fas fa-user"></i>
                <img
                  id="preview-image"
                  className="hidden w-full h-full object-cover"
                  alt="Profile Preview"
                />
              </div>
              <input
                type="file"
                id="profile-photo"
                accept="image/png, image/jpeg"
                className="hidden"
                onChange={previewPhoto}
              />
            </label>
            <p className="text-sm text-gray-500 mt-2">
              Upload your photo (PNG or JPG)
            </p>
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              name="fullName"
              type="text"
              placeholder="John Doe"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#c47c61]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              name="email"
              type="email"
              placeholder="student@university.edu"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#c47c61]"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              name="phone"
              type="text"
              placeholder="01 234-567"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#c47c61]"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              name="password"
              type="password"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#c47c61]"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Confirm Password
            </label>
            <input
              name="confirmPassword"
              type="password"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#c47c61]"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#c47c61] text-white py-2 rounded-md hover:bg-[#b06c56] transition"
          >
            Create Account
          </button>
        </form>

        {/* OR */}
        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="mx-2 text-gray-400">OR</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-[#c47c61] hover:underline cursor-pointer"
          >
            Sign In
          </span>
        </p>
      </div>

      {/* Right Section */}
      <div
        className="w-1/2 relative flex flex-col justify-center items-center text-center text-white bg-cover bg-center right-panel"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>

        <div className="relative z-10">
          <div className="bg-[#92b69e] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-home text-white text-2xl"></i>
          </div>

          <h2 className="text-2xl font-semibold mb-3">
            Modern Student Apartment
          </h2>
          <h3 className="text-lg font-medium text-gray-200 mb-3">
            Your Dream Student Apartment Awaits
          </h3>

          <p className="max-w-sm mx-auto text-gray-100 mb-6 leading-relaxed">
            Discover comfortable, affordable housing near your campus. Join
            thousands of students who found their perfect home.
          </p>
        </div>
      </div>

      <div className="curve-shape"></div>
    </div>
  );
}

export default Register;
