/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function OwnerDashboard() {
  const [business, setBusiness] = useState({
    fullname: "Student Name",
    company: "Properties LLC",
    businessType: "Real Estate",
    years: "5",
    email: "student@example.com",
    phone: "+20 123456789",
    address: "123 Street, City",
    avatar: "https://via.placeholder.com/150",
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(business);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setBusiness(userData);
      setFormData(userData);
    } else {
      console.log("No user data found.");
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setBusiness(formData);
    localStorage.setItem("currentUser", JSON.stringify(formData));
    setEditMode(false);
  };

  const handleAvatarChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const newAvatar = URL.createObjectURL(e.target.files[0]);
      setFormData({ ...formData, avatar: newAvatar });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f4ea] font-sans flex flex-col">
      {/* Navbar */}
      <header className="flex justify-between items-center bg-[#fffaf3] shadow px-8 py-4">
        <h1 className="text-xl font-semibold text-[#c47c61]">UniStay</h1>
        <div className="flex items-center gap-4">
          <span className="text-gray-700 font-medium">{business.fullname}</span>
          <img
            src={business.avatar}
            alt="avatar"
            className="w-10 h-10 rounded-full border border-[#c47c61]"
          />
        </div>
      </header>

      <div className="flex flex-1 min-h-screen pt-6">
        {/* Sidebar */}
        <aside className="bg-[#fffaf3] w-64 flex flex-col items-center py-8 shadow-lg border-r border-[#e3dacd]">
          <div className="relative">
            <img
              src={formData.avatar}
              alt="User"
              className="w-24 h-24 rounded-full border-4 border-[#7da691]"
            />
            {editMode && (
              <label className="absolute bottom-0 right-0 bg-[#c47c61] text-white p-1 rounded-full cursor-pointer text-xs">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleAvatarChange}
                />
                ✎
              </label>
            )}
          </div>
          <h3 className="text-lg font-semibold mt-4">{formData.fullname}</h3>
          <p className="text-sm text-gray-500">{formData.company}</p>
          <p className="text-xs text-gray-400 mb-6">
            {formData.years} years in business
          </p>

          <nav className="space-y-2 w-full px-4">
            <button
              className="flex items-center gap-3 bg-[#c47c61] text-white px-4 py-2 rounded-md w-full"
              onClick={() => setEditMode(false)}
            >
              <i className="fas fa-user"></i> My Profile
            </button>
            <Link
  to="/landlord-dashboard"
  className="flex items-center gap-3 px-4 py-2 rounded-md w-full hover:bg-[#f3e5dc] transition"
>
  <i className="fas fa-bell text-[#c47c61]"></i>
  Dashboard
</Link>
            <button className="flex items-center gap-3 px-4 py-2 rounded-md w-full hover:bg-[#f3e5dc] transition">
              <i className="fas fa-gear text-[#c47c61]"></i> Settings
            </button>
            <button className="flex items-center gap-3 px-4 py-2 text-[#c47c61] border-t border-[#e3dacd] pt-4 mt-4 hover:text-[#a35c47] w-full">
              <i className="fas fa-right-from-bracket"></i> Logout
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          {/* Profile Section */}
          <section className="bg-[#fbf8f2] rounded-lg shadow-sm border border-[#e3dacd] p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[#c47c61] font-semibold text-lg">
                Business Information
              </h2>
              {!editMode && (
                <button
                  className="bg-[#c47c61] text-white px-4 py-1 rounded-md hover:bg-[#b26b56]"
                  onClick={() => setEditMode(true)}
                >
                  <i className="fas fa-edit mr-2"></i> Edit
                </button>
              )}
            </div>

            {!editMode ? (
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">Full Name:</span> {business.name}
                  </p>
                  <p>
                    <span className="font-medium">Company:</span> {business.company}
                  </p>
                  <p>
                    <span className="font-medium">Business Type:</span> {business.businessType}
                  </p>
                  <p>
                    <span className="font-medium">Years:</span> {business.years}
                  </p>
                </div>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">Email:</span> {business.email}
                  </p>
                  <p>
                    <span className="font-medium">Phone:</span> {business.phone}
                  </p>
                  <p>
                    <span className="font-medium">Address:</span> {business.address}
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <input
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    className="w-full border rounded-md px-3 py-2"
                  />
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full border rounded-md px-3 py-2"
                  />
                  <input
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full border rounded-md px-3 py-2"
                  />
                  <input
                    name="years"
                    value={formData.years}
                    onChange={handleChange}
                    className="w-full border rounded-md px-3 py-2"
                  />
                </div>
                <div className="space-y-4">
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border rounded-md px-3 py-2"
                  />
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border rounded-md px-3 py-2"
                  />
                  <input
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full border rounded-md px-3 py-2"
                  />
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={handleSave}
                      className="bg-[#7da691] text-white px-4 py-2 rounded-md"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditMode(false)}
                      className="bg-gray-300 px-4 py-2 rounded-md"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Contact Me */}
          <section className="bg-[#fbf8f2] rounded-lg shadow-sm border border-[#e3dacd] p-6">
            <h2 className="text-center text-[#c47c61] font-semibold text-lg mb-1">
              Contact for Property Inquiries
            </h2>
            <p className="text-center text-gray-500 mb-6">
              Get in touch with me for property rentals, management services, or partnerships
            </p>

            <div className="grid md:grid-cols-2 gap-6 items-start">
              {/* Left Column */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white rounded-lg border p-4">
                  <div className="bg-[#c47c61] text-white w-12 h-12 flex items-center justify-center rounded-full">
                    <i className="fas fa-envelope text-lg"></i>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-gray-500">{business.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white rounded-lg border p-4">
                  <div className="bg-[#7da691] text-white w-12 h-12 flex items-center justify-center rounded-full">
                    <i className="fas fa-phone text-lg"></i>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-gray-500">{business.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white rounded-lg border p-4">
                  <div className="bg-[#8fbf9f] text-white w-12 h-12 flex items-center justify-center rounded-full">
                    <i className="fas fa-map-marker-alt text-lg"></i>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Address</p>
                    <p className="text-sm text-gray-500">{business.address}</p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-4">
                <label className="block text-sm font-medium">Send a message</label>
                <textarea
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#7da691] resize-none"
                  rows="6"
                  placeholder="Hello ..."
                ></textarea>
                <button className="w-full bg-[#92b69e] hover:bg-[#7da691] text-white font-medium py-2 rounded-md transition flex items-center justify-center gap-2">
                  <i className="fas fa-paper-plane"></i> Send Message
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
