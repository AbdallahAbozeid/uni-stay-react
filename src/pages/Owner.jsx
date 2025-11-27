import React, { useEffect, useState } from "react";

export default function Owner() {
  const [user, setUser] = useState({
    name: "user Name",
    email: "user@gmail.com",
    address: "",
    university: "",
    phone: "+20 123456789",
    avatar: "https://via.placeholder.com/150",
  });

  const [previewAvatar, setPreviewAvatar] = useState(user.avatar);

useEffect(() => {
  const storedUser = localStorage.getItem("currentUser");
  if (storedUser) {
    const userData = JSON.parse(storedUser);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setUser({
      name: userData.name || "user Name",
      email: userData.email || "user@gmail.com",
      address: userData.address || "",
      university: userData.university || "",
      phone: userData.phone || "+20 123456789",
      avatar: userData.avatar || "https://via.placeholder.com/150",
    });
    setPreviewAvatar(userData.avatar || "https://via.placeholder.com/150");
  }
}, []);


  // عند تغيير الصورة
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewAvatar(reader.result); // عرض الصورة مباشرة
        setUser({ ...user, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-[#faf6ec] font-sans flex flex-col">
      {/* Navbar */}
      <header className="flex justify-between items-center bg-white shadow px-8 py-4">
        <h1 className="text-lg font-semibold text-[#c47b5a]">UniStay</h1>
        <div className="flex items-center gap-4">
          <button className="relative">
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">3</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <div className="flex items-center gap-2">
            <img src={previewAvatar} className="w-8 h-8 rounded-full" alt="avatar" />
            <span className="text-gray-700 font-medium">{user.name}</span>
          </div>
        </div>
      </header>

      <div className="flex flex-1 min-h-screen">
        {/* Sidebar */}
        <aside className="bg-white w-64 p-6 shadow-lg">
          <div className="text-center mb-6 relative">
            {/* الصورة مع زر تعديل */}
            <img src={previewAvatar} className="w-24 h-24 mx-auto rounded-full mb-3 object-cover" alt="avatar" />
            <label
              htmlFor="avatarInput"
              className="absolute bottom-0 right-1 bg-[#c47b5a] text-white text-xs px-2 py-1 rounded-full hover:bg-[#a86245] cursor-pointer"
            >
              ✏️
            </label>
            <input
              id="avatarInput"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleAvatarChange}
            />
            <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
            <p className="text-sm text-gray-500">{user.university}</p>
          </div>
          <nav className="space-y-2">
            <button className="flex items-center gap-3 w-full text-left bg-[#c47b5a] text-white px-4 py-2 rounded-lg">
              Profile
            </button>
            <button className="flex items-center gap-3 w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100">
               Favorites <span className="ml-auto bg-green-500 text-white text-xs px-2 rounded-full">3</span>
            </button>
            <button className="flex items-center gap-3 w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100">
               Notifications <span className="ml-auto bg-red-500 text-white text-xs px-2 rounded-full">3</span>
            </button>
            <button className="flex items-center gap-3 w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100">
               Settings
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">My Profile</h2>
            <button
              className="bg-[#c47b5a] text-white px-4 py-2 rounded-lg hover:bg-[#a86245] flex items-center gap-2 shadow-md transition duration-200"
              onClick={() => {
                document.getElementById("profileInfo").classList.add("hidden");
                document.getElementById("editForm").classList.remove("hidden");
                document.getElementById("editName").value = user.name;
                document.getElementById("editEmail").value = user.email;
                document.getElementById("editAddress").value = user.address;
                document.getElementById("editUniversity").value = user.university;
                document.getElementById("editPhone").value = user.phone;
              }}
            >
              ✏️ Edit Profile
            </button>
          </div>

          {/* Profile Info Card */}
          <div id="profileInfo" className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Personal Information</h3>
            <p className="text-sm text-gray-500 mb-6">Your account details and contact information</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#fdf6e3] p-4 rounded-lg shadow-sm hover:shadow-md transition duration-200">
                <p className="text-gray-700"><span className="font-medium">Full Name:</span> {user.name}</p>
                <p className="text-gray-700"><span className="font-medium">Email:</span> {user.email}</p>
                <p className="text-gray-700"><span className="font-medium">Address:</span> {user.address}</p>
              </div>
              <div className="bg-[#fdf6e3] p-4 rounded-lg shadow-sm hover:shadow-md transition duration-200">
                <p className="text-gray-700"><span className="font-medium">University:</span> {user.university}</p>
                <p className="text-gray-700"><span className="font-medium">Phone:</span> {user.phone}</p>
              </div>
            </div>

            <div className="flex gap-3 mb-4">
              <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-200">
                📧 Contact Me
              </button>
              <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-200">
                📞 Call Me
              </button>
            </div>

            {/* Contact Details */}
            <div className="bg-[#fdf6e3] p-4 rounded-lg shadow-inner">
              <p className="text-gray-700"><span className="font-medium">Email:</span> {user.email}</p>
              <p className="text-gray-700"><span className="font-medium">Phone:</span> {user.phone}</p>
              <p className="text-gray-700"><span className="font-medium">Address:</span> {user.address}</p>
            </div>
          </div>

          {/* Edit Form Card */}
          <div id="editForm" className="hidden bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Edit Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <label className="block font-medium text-gray-700">Full Name</label>
                <input id="editName" type="text" className="border rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-[#c47b5a]" />

                <label className="block font-medium text-gray-700">Email</label>
                <input id="editEmail" type="email" className="border rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-[#c47b5a]" />

                <label className="block font-medium text-gray-700">Address</label>
                <input id="editAddress" type="text" className="border rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-[#c47b5a]" />
              </div>

              <div className="space-y-4">
                <label className="block font-medium text-gray-700">University</label>
                <input id="editUniversity" type="text" className="border rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-[#c47b5a]" />

                <label className="block font-medium text-gray-700">Phone</label>
                <input id="editPhone" type="text" className="border rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-[#c47b5a]" />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                id="saveBtn"
                className="bg-[#c47b5a] text-white px-4 py-2 rounded-lg hover:bg-[#a86245] transition duration-200"
                onClick={() => {
                  const updatedUser = {
                    name: document.getElementById("editName").value,
                    email: document.getElementById("editEmail").value,
                    address: document.getElementById("editAddress").value,
                    university: document.getElementById("editUniversity").value,
                    phone: document.getElementById("editPhone").value,
                    avatar: previewAvatar,
                  };
                  setUser(updatedUser);
                  document.getElementById("editForm").classList.add("hidden");
                  document.getElementById("profileInfo").classList.remove("hidden");
                }}
              >
                Save
              </button>
              <button
                id="cancelBtn"
                className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-200"
                onClick={() => {
                  document.getElementById("editForm").classList.add("hidden");
                  document.getElementById("profileInfo").classList.remove("hidden");
                }}
              >
                Cancel
              </button>
            </div>
          </div>

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
        </main>
      </div>
    </div>
  );
}
