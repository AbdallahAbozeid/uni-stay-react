import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar"; // Navbar الخارجي

const alertColorClasses = {
  yellow: { bg: "bg-yellow-50", border: "border-yellow-400" },
  green: { bg: "bg-green-50", border: "border-green-400" },
  blue: { bg: "bg-blue-50", border: "border-blue-400" },
};

export default function AdminDashboard() {
  useEffect(() => {
      document.title = "Uni-Stay | Admin Dashboard";
    }, []);
  const [admin] = useState({
    name: "Admin Name",
    role: "Super Admin",
    photo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  });

  const [students] = useState([
    { name: "Student 1", university: "University A", status: "Active" },
    { name: "Student 2", university: "University B", status: "Active" },
    { name: "Student 3", university: "University C", status: "Active" },
  ]);

  const [alerts] = useState([
    {
      text: "3 pending owner verifications",
      color: "yellow",
      sub: "Review required for new property owners",
    },
    { text: "System backup completed", color: "green", sub: "Last backup: 2 hours ago" },
    { text: "Monthly report available", color: "blue", sub: "March 2025 analytics ready" },
  ]);

  const [metrics] = useState({
    totalStudents: 5,
    propertyOwners: 3,
    totalProperties: 5,
    monthlyRevenue: "$45,670",
    occupancyRate: "92%",
    averageRating: 4.7,
    activeListings: 156,
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f6f2]">



      {/* ===== Layout Sidebar + Main ===== */}
      <div className="flex pt-16"> {/* pt-16 = ارتفاع Navbar الخارجي */}

        {/* ===== Sidebar ===== */}
        <aside
         className="hidden md:flex w-64 bg-white shadow-lg flex-col justify-start p-5 border-r border-gray-100
             h-[calc(100vh-4rem)] sticky top-16 space-y-4"
>
          {/* Profile */}
          <div className="text-center">
            <img
              src={admin.photo}
              className="w-20 h-20 mx-auto rounded-full border-4 border-[#b46b54]/30 mb-3"
            />
            <h2 className="font-semibold">{admin.name}</h2>
            <p className="text-sm text-gray-500">{admin.role}</p>
          </div>

          {/* Navigation */}
      <nav className="flex flex-col space-y-2 mt-6 w-full">
  <a
    href="#"
    className="flex items-center gap-3 px-4 py-2 rounded-md bg-[#c47c61] text-white hover:bg-[#b26b56]"
  >
    <i className="fas fa-home"></i> Dashboard
  </a>
  <a
    href="#"
    className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-100"
  >
    <i className="fas fa-user-graduate"></i> Students
  </a>
  <a
    href="#"
    className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-100"
  >
    <i className="fas fa-user-tie"></i> Property Owners
  </a>
  <a
    href="#"
    className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-100"
  >
    <i className="fas fa-building"></i> Properties
  </a>
  <button
    className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-100 text-left w-full"
  >
    <i className="fas fa-gear"></i> Settings
  </button>
</nav>


          <button className="bg-[#b46b54] text-white py-2 rounded mt-6">Logout</button>
        </aside>

        {/* ===== Main Content ===== */}
        <main className="flex-1 p-6 pb-10">

          {/* ===== Header داخلي مختصر ===== */}
          <header className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-semibold text-[#7b4b37]">Admin Dashboard</h1>
            <div className="flex items-center gap-3">
              <button className="relative">
                <i className="fas fa-bell text-gray-600 text-lg"></i>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
                  8
                </span>
              </button>
              <img src={admin.photo} className="w-8 h-8 rounded-full border" />
            </div>
          </header>

          {/* ===== باقي المحتوى ===== */}
          {/* Top Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white shadow p-4 rounded">
              <h3>Total Students</h3>
              <p className="text-3xl text-[#b46b54]">{metrics.totalStudents}</p>
            </div>
            <div className="bg-white shadow p-4 rounded">
              <h3>Property Owners</h3>
              <p className="text-3xl text-[#b46b54]">{metrics.propertyOwners}</p>
            </div>
            <div className="bg-white shadow p-4 rounded">
              <h3>Total Properties</h3>
              <p className="text-3xl text-[#b46b54]">{metrics.totalProperties}</p>
            </div>
            <div className="bg-white shadow p-4 rounded">
              <h3>Monthly Revenue</h3>
              <p className="text-3xl text-[#b46b54]">{metrics.monthlyRevenue}</p>
            </div>
          </div>

          {/* Students + Alerts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 shadow rounded">
              <h3 className="font-semibold text-gray-700 mb-2">Recent Student Registrations</h3>
              <div className="space-y-3">
                {students.map((s, i) => (
                  <div key={i} className="border p-3 rounded flex justify-between">
                    <div>
                      <p>{s.name}</p>
                      <p className="text-xs text-gray-500">{s.university}</p>
                    </div>
                    <span className="text-green-600 text-xs">{s.status}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-4 shadow rounded">
              <h3 className="font-semibold text-gray-700 mb-2">System Alerts</h3>
              <div className="space-y-3">
                {alerts.map((alert, i) => {
                  const c = alertColorClasses[alert.color];
                  return (
                    <div key={i} className={`${c.bg} border-l-4 ${c.border} p-3 rounded`}>
                      <p>{alert.text}</p>
                      <p className="text-xs text-gray-500">{alert.sub}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Performance */}
          <div className="bg-white p-6 shadow rounded mb-8 text-center">
            <h3 className="font-semibold text-[#b46b54] mb-2">Platform Performance</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-3xl text-[#b46b54]">{metrics.occupancyRate}</p>
                <p className="text-sm">Occupancy</p>
              </div>
              <div>
                <p className="text-3xl text-[#b46b54]">{metrics.averageRating}</p>
                <p className="text-sm">Rating</p>
              </div>
              <div>
                <p className="text-3xl text-[#b46b54]">{metrics.activeListings}</p>
                <p className="text-sm">Listings</p>
              </div>
            </div>
          </div>

          {/* Reports */}
          <section className="bg-white shadow rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-[#7b4b37] mb-2 flex items-center gap-2">
              <i className="fas fa-file-download text-[#b46b54]"></i> Download Reports
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              You can download data reports directly from the database in various formats.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="bg-[#b46b54] text-white px-3 py-2 rounded-md flex items-center gap-2">
                <i className="fas fa-file-csv"></i> CSV
              </button>
              <button className="bg-[#7b4b37] text-white px-3 py-2 rounded-md flex items-center gap-2">
                <i className="fas fa-file-pdf"></i> PDF
              </button>
              <button className="bg-[#c1846a] text-white px-3 py-2 rounded-md flex items-center gap-2">
                <i className="fas fa-file-excel"></i> Excel
              </button>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
