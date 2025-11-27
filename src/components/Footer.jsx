import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-us-accent text-us-textLight p-8 md:p-12 lg:p-16">
      <div className="container mx-auto">
        {/* === Top Section === */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 lg:gap-8">
          {/* === Column 1: Brand & Socials === */}
          <div>
            <a href="/" className="flex items-center gap-2 mb-4">
              <img
                className="w-10 h-10"
                src="favicon.png"
                alt="Uni-Stay Logo"
              />
              <span className="text-2xl font-semibold text-white">
                Uni-Stay
              </span>
            </a>
            <p className="text-textLight/80 text-sm leading-relaxed pr-4">
              Your trusted partner in finding the perfect student accommodation.
              Making university life comfortable and affordable.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="text-us-textLight/80 hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f fa-lg"></i>
              </a>
              <a
                href="#"
                className="text-us-textLight/80 hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a
                href="#"
                className="text-us-textLight/80 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            </div>
          </div>

          {/* === Column 2: Quick Links === */}
          <div>
            <h3 className="text-lg font-semibold text-us-textLight mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3 text-us-textLight/80">
              {[
                { label: "Browse Properties", href: "/gallery" },
                { label: "How It Works", href: "/#how-it-works" },
                { label: "For Landlords", href: "/owner" },
                { label: "Student Resources", href: "/coming-soon" },
                { label: "Blog", href: "/coming-soon" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-us-textLight transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* === Column 3: Support === */}
          <div>
            <h3 className="text-lg font-semibold text-us-textLight mb-5">
              Support
            </h3>
            <ul className="space-y-3 text-us-textLight/80">
              {[
                "Help Center",
                "Contact Us",
                "Safety Guidelines",
                "Terms of Service",
                "Privacy Policy",
              ].map((label) => (
                <li key={label}>
                  <a href={label=="Contact Us" ? `/contact-us` : "/coming-soon"} className="hover:text-us-textLight transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* === Column 4: Contact Info === */}
          <div>
            <h3 className="text-lg font-semibold text-us-textLight mb-5">
              Contact Info
            </h3>
            <ul className="space-y-4 text-us-textLight/80">
              <li className="flex items-center gap-3 hover:text-us-textLight transition-colors">
                <i className="fas fa-envelope text-lg mt-1 w-5 text-center"></i>
                <a href="mailto:hello@uni-stay.com">hello@uni-stay.com</a>
              </li>
              <li className="flex items-center gap-3 hover:text-us-textLight transition-colors">
                <i className="fas fa-phone text-lg mt-1 w-5 text-center"></i>
                <a
                  href="tel:+15551234567"
                  className="hover:text-us-textLight transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3 hover:text-us-textLight transition-colors">
                <i className="fas fa-map-marker-alt text-lg mt-1 w-5 text-center"></i>
                <span>
                  123 University Ave
                  <br />
                  Student District, CA 94158
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* === Bottom Section === */}
        <div className="mt-12 pt-8 border-t border-us-primary">
          <p className="text-sm text-center text-us-textLight/80">
            © {currentYear} Uni-Stay. All rights reserved. Code Crafters @ DEPI
            R3 is making student housing simple and secure.
          </p>
        </div>
      </div>
    </footer>
  );
}
