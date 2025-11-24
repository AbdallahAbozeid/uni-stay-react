import React, { useState } from "react";

const LandlordDashboard = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <div className="bg-[#FAF6EA] min-h-screen">
      {/* ======================== HEADER ======================== */}
      <header>
        <nav className="bg-[#FAF6EA] py-2.5 border-b border-gray-300 shadow-md mb-8 md:mb-13">
          <div className="flex justify-between items-center container mx-auto px-4 md:px-10 leading-normal">

            {/* Logo */}
            <div className="flex items-center">
              <a href="#Home">
                <span className="border-0 rounded-md px-3 bg-[#66869F] text-white font-extrabold text-2xl leading-normal">
                  U
                </span>
                <span className="text-[#66869F] font-bold text-2xl ml-3">
                  <i>Uni-Stay</i>
                </span>
              </a>
            </div>

            {/* Desktop Nav */}
            <div
              id="navbarNav"
              className={`${
                navOpen ? "block" : "hidden"
              } absolute top-full left-0 w-full bg-[#FAF6EA] border-b md:static md:flex md:w-auto md:border-b-0 md:justify-items-center md:mx-auto z-10`}
            >
              <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 p-4 md:p-0 space-x-0 md:space-x-4 lg:space-x-9 text-[#333333] font-bold text-md">
                <li><a href="#" className="block p-2">Browse</a></li>
                <li><a href="#" className="block p-2">How it works</a></li>
                <li><a href="#" className="block p-2">About</a></li>
                <li><a href="#" className="block p-2">For Landlords</a></li>
              </ul>
            </div>

            {/* Right Buttons */}
            <div className="flex items-center">
              <span><a href="#"><i className="fa-solid fa-heart"></i></a></span>
              <span className="mx-2 md:mx-3"><a href="#"><i className="fa-solid fa-user"></i></a></span>

              <button className="text-white bg-[#C8846C] rounded-md px-2 py-1 md:px-3 font-medium text-sm md:text-base">
                <a href="#">Sign Up</a>
              </button>

              {/* Mobile Toggle */}
              <button
                onClick={toggleNav}
                className="md:hidden ml-3 text-[#333] focus:outline-none"
                aria-label="Toggle navigation"
              >
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* ======================== PAGE TITLE ======================== */}
      <h1 className="text-3xl md:text-4xl font-bold text-[#333] ml-4 md:ml-13 mb-6 md:mb-9">
        Landlord Dashboard
      </h1>

      <div className="block md:flex">
        {/* ======================== SIDEBAR ======================== */}
        <aside className="bg-[#eee3c2f3] w-full md:w-64 h-auto md:h-60rem p-5 md:p-0">
          <h2 className="text-2xl md:text-3xl pt-2 md:pt-7 font-medium ml-0 md:ml-5 text-[#333] mb-4">
            Navigation
          </h2>
          <ul className="flex flex-col space-y-4 md:space-y-9 text-start ml-0 md:ml-5 mt-4 md:mt-9">
            <a href="">
              <li className="font-medium text-lg text-[#333]">
                <span className="bg-[#C8846C] px-1.5 py-1 rounded-md mr-4">
                  <i className="fa-solid fa-building-circle-check" style={{ color: "#f7f7f7" }}></i>
                </span>
                Bookings
              </li>
            </a>

            <a href="">
              <li className="font-medium text-lg text-[#333]">
                <span className="bg-[#C8846C] px-1.5 py-1 rounded-md mr-4">
                  <i className="fa-solid fa-file-import" style={{ color: "#ffffff" }}></i>
                </span>
                New Requests
              </li>
            </a>

            <a href="">
              <li className="font-medium text-lg text-[#333]">
                <span className="bg-[#C8846C] px-1.5 py-1 rounded-md mr-4">
                  <i className="fa-solid fa-plus" style={{ color: "#ffffff" }}></i>
                </span>
                Add Property
              </li>
            </a>

            <a href="">
              <li className="font-medium text-lg text-[#333]">
                <span className="bg-[#C8846C] px-1.5 py-1 rounded-md mr-4">
                  <i className="fa-solid fa-right-from-bracket fa-flip-horizontal" style={{ color: "#fafcff" }}></i>
                </span>
                Logout
              </li>
            </a>
          </ul>
        </aside>

        {/* ======================== MAIN CONTENT ======================== */}
        <main className="w-full p-4 md:p-0">

          {/* ===== Overview Cards ===== */}
          <section id="overview">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:flex md:flex-row md:gap-9 md:ml-9">
              <a href="#">
                <div className="flex flex-col cards text-[22px] bg-[#eee3c2f3]">
                  <h3 className="flex justify-start pl-3 pt-1">My Properties</h3>
                  <p className="flex justify-center pb-7 my-auto">12</p>
                </div>
              </a>

              <a href="#">
                <div className="flex flex-col cards text-[22px] bg-[#eee3c2f3]">
                  <h3 className="flex justify-start pl-3 pt-1">Currently Booked</h3>
                  <p className="flex justify-center pb-7 my-auto">8</p>
                </div>
              </a>

              <a href="#">
                <div className="flex flex-col cards text-[22px] bg-[#eee3c2f3]">
                  <h3 className="flex justify-start pl-3 pt-1">New Requests</h3>
                  <p className="flex justify-center pb-7 my-auto">10</p>
                </div>
              </a>
            </div>
          </section>

          {/* ===== Properties Table ===== */}
          <section className="mt-8 md:mt-13 md:ml-9 overflow-x-auto">
            <table className="text-start w-full md:w-[670px] min-w-[600px] border-collapse">
              <thead className="text-left">
                <tr className="h-11 bg-[#eee3c2f3] border-y-3 border-[#FAF6EA]">
                  <th className="pl-3 w-1/4">Property Name</th>
                  <th className="w-1/4">Location</th>
                  <th className="w-1/6">Price</th>
                  <th className="pl-3 md:pl-12 w-1/6">Status</th>
                  <th className="w-auto">Actions</th>
                </tr>
              </thead>

              <tbody>
                {[
                  { name: "Property sample", location: "Cairo", price: "1400" },
                  { name: "Property sample", location: "Giza", price: "800" },
                  { name: "Property sample", location: "Alex", price: "2200" },
                ].map((row, index) => (
                  <tr key={index} className="h-11 bg-[#eee3c2f3] border-y-3 border-[#FAF6EA]">
                    <td className="pl-3">{row.name}</td>
                    <td>{row.location}</td>
                    <td>{row.price}</td>
                    <td className="pl-3 md:pl-12">Available</td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* ===== Recent Bookings ===== */}
          <section className="mt-8 md:mt-12 md:ml-9 w-full md:w-[670px] mb-12 md:mb-19">
            <h2 className="mb-5 font-semibold text-[25px]">Recent Bookings</h2>

            <div className="flex flex-col bg-[#eee3c2f3]">
              <p className="flex justify-start py-1 pl-3 border-y-3 h-11 border-[#FAF6EA]">
                Student1 - property1 - 01 Sep 2025
              </p>
              <p className="flex justify-start py-1 pl-3 border-y-3 h-11 border-[#FAF6EA]">
                Student2 - property1 - 08 Sep 2025
              </p>
              <p className="flex justify-start py-1 pl-3 border-y-3 h-11 border-[#FAF6EA]">
                Student3 - property2 - 15 Oct 2025
              </p>
            </div>
          </section>
        </main>
      </div>

      {/* ======================== FOOTER ======================== */}
      <footer className="bg-[#66869F] pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 footer-text">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 border-b bg-[#66869F] text-white pb-8 md:pb-10">

            {/* Brand */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-white text-[#333] flex items-center justify-center font-extrabold text-xl rounded mr-2">
                  U
                </div>
                <span className="text-2xl font-semibold">Uni-Stay</span>
              </div>

              <p className="text-sm leading-relaxed mb-4">
                Your trusted partner in finding the perfect student accommodation. Making university life comfortable and affordable.
              </p>

              <div className="flex space-x-4 text-xl">
                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-medium mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="footer-link">Browse Properties</a></li>
                <li><a href="#" className="footer-link">How It Works</a></li>
                <li><a href="#" className="footer-link">For Landlords</a></li>
                <li><a href="#" className="footer-link">Student Resources</a></li>
                <li><a href="#" className="footer-link">Blog</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-medium mb-4 text-white">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="footer-link">Help Center</a></li>
                <li><a href="#" className="footer-link">Contact Us</a></li>
                <li><a href="#" className="footer-link">Safety Guidelines</a></li>
                <li><a href="#" className="footer-link">Terms of Service</a></li>
                <li><a href="#" className="footer-link">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-medium mb-4 text-white">Contact Info</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-center">
                  <span className="mr-3">
                    <i className="fa-solid fa-envelope fa-lg"></i>
                  </span>
                  <a href="mailto:hello@uni-stay.com" className="footer-link">Hello@uni-stay.com</a>
                </div>

                <div className="flex items-center">
                  <span className="mr-3">
                    <i className="fa-solid fa-phone fa-lg"></i>
                  </span>
                  <span>+1 (555) 123-4567</span>
                </div>

                <div className="flex">
                  <span className="mr-3 mt-1">
                    <i className="fa-solid fa-map-location-dot fa-lg"></i>
                  </span>
                  <div>
                    <span>123 University Ave</span><br />
                    <span>Student District, CA 94158</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Footer Bottom */}
          <div className="pt-6 text-center text-xs text-white opacity-98 font-semibold">
            <p>
              <i>
                © 2025 Uni-stay. All rights reserved. Code Crafters @ DEPI R3 — Making student housing simple and secure.
              </i>
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default LandlordDashboard;
