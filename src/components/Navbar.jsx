import React from 'react'
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 64);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
    const navLinks = [
      { name: "Browse", href: "/gallery" },
      { name: "How it works", href: "/#how-it-works" },
      { name: "For landlords", href: "/owner" },
      { name: "Help", href: "/coming-soon" },
    ];

  return (
    <header
      id="navbar"
      className={`navbar sticky top-0 left-0 w-full h-16 z-50 transition-all duration-200 ${scrolled ? "bg-us-accent/60 shadow-md backdrop-blur-md" : "bg-us-accent"}`}
    >
      <nav className="container flex flex-1 items-center justify-between h-full mx-auto px-4 gap-2">
        {/* Logo Section */}
        <div className="logo-section flex items-center gap-2">
          <img src="favicon.png" alt="Uni-Stay Logo" className="h-10" />
          <a href="/" className="font-bold text-2xl text-us-textLight">
            Uni-Stay
          </a>
        </div>

        {/* Hamburger (mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-us-textLight focus:outline-none"
        >
          <i className="fa-solid fa-bars text-2xl"></i>
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen
              ? `flex flex-col absolute top-16 left-0 w-full ${scrolled ? 'bg-us-accent/60 backdrop-blur-md ' :   'bg-us-accent '} shadow-md md:hidden`
              : "hidden md:flex"
          } items-center justify-center gap-4 py-2 md:py-0`}
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-us-textLight text-base font-semibold hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <a href="/favorites">
            <i className="fa-solid fa-heart text-us-mint text-lg hover:scale-110 transition-transform duration-150"></i>
          </a>
          <a href="/profile">
            <i className="fa-solid fa-user text-us-mint text-lg hover:scale-110 transition-transform duration-150"></i>
          </a>
          <a href="/register">
            <button className="bg-us-primary text-white py-1 px-3 rounded hover:bg-us-primary/90 duration-200">
              Sign up
            </button>
          </a>
        </div>
      </nav>
    </header>
  );
}
