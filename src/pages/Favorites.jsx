import React, { useState } from "react";

const Favorites = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  // Generate 9 cards dynamically
  const cards = Array.from({ length: 9 });

  return (
    <div className="bg-[#FAF6EA] min-h-screen">
      {/* ======================= HEADER ======================= */}
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

            {/* Navigation */}
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

            {/* Icons + Sign up */}
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

      {/* ======================= PAGE TITLE ======================= */}
      <h1 className="text-3xl md:text-4xl font-bold text-[#333] mb-10 px-4 sm:px-6 lg:px-8 ml-7">
        Favorites
      </h1>

      {/* ======================= MAIN CONTENT ======================= */}
      <main className="container text-center mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {/* ====== React generated cards ====== */}
          {cards.map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transform hover:shadow-xl transition duration-300"
            >
              {/* Image Area */}
              <div className="relative h-48 bg-gray-200">
                <img
                  src="https://placehold.co/600x400/cccccc/333333?text=Room+View"
                  alt="Cozy Private Room"
                  className="w-full h-full object-cover"
                />

                {/* Badge */}
                <span className="absolute top-3 left-3 bg-white text-gray-700 text-xs font-semibold px-2 py-0.5 rounded-full shadow-md">
                  Private Room
                </span>

                {/* Favorite Heart */}
                <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md text-red-500 hover:text-red-600 transition">
                  <i className="fa-solid fa-heart"></i>
                </button>
              </div>

              {/* Details */}
              <div className="p-4">
                <h2 className="text-base font-semibold text-gray-800 mb-1">
                  Cozy Private Room near Campus
                </h2>

                {/* Location & Rating */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                  <div className="flex items-center">
                    <i className="fa-solid fa-location-dot mr-1"></i>
                    <span>Cambridge, MA</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fa-solid fa-star text-yellow-400 mr-1"></i>
                    <span>4.2</span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="flex space-x-3 text-xs text-gray-600 border-t pt-3">
                  <div className="flex items-center">
                    <i className="fa-solid fa-bed mr-1.5 text-blue-500"></i>
                    <span>x1</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fa-solid fa-kitchen-set mr-1.5 text-green-500"></i>
                    <span>Kitchen</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fa-solid fa-wifi mr-1.5 text-purple-500"></i>
                    <span>Wifi</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </main>

      {/* ======================= FOOTER ======================= */}
      <footer className="bg-[#66869F] pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 footer-text">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 border-b bg-[#66869F] text-white pb-8 md:pb-10">

            {/* Brand */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-white text-[#333] flex items-center justify-center font-extrabold text-xl rounded mr-2">U</div>
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
                  <span className="mr-3"><i className="fa-solid fa-envelope fa-lg"></i></span>
                  <a href="mailto:hello@uni-stay.com" className="footer-link">Hello@uni-stay.com</a>
                </div>
                <div className="flex items-center">
                  <span className="mr-3"><i className="fa-solid fa-phone fa-lg"></i></span>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex">
                  <span className="mr-3 mt-1"><i className="fa-solid fa-map-location-dot fa-lg"></i></span>
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

export default Favorites;
