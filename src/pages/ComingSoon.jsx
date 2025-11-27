import React from "react";
export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-us-cream flex flex-col items-center justify-center px-6 text-center">
      {/* Icon */}
      <div className="bg-us-primary text-us-textLight rounded-full size-20 flex items-center justify-center shadow-md mb-6">
        <i className="fas fa-rocket text-4xl"></i>
      </div>

      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-us-textDark mb-4">
        Coming Soon
      </h1>

      {/* Subtext */}
      <p className="text-us-textDark/80 max-w-md text-sm md:text-base mb-8">
        We are working hard to bring you something amazing. Stay tuned — it
        won’t take long!
      </p>

      {/* Status Box */}
      <div className="bg-white border border-us-textDark/10 px-6 py-3 rounded-lg shadow-sm flex items-center gap-3">
        <i className="fas fa-clock text-us-primary text-xl"></i>
        <span className="text-us-textDark font-medium">Launching Soon...</span>
      </div>

      <a
        href="/"
        className="text-us-textDark/60 hover:text-us-textDark/90 transition-colors duration-200 text-xs mt-10"
      >
        <span>Go back to Home</span>
        <i className="fa-solid fa-fw fa-caret-right"></i>
      </a>
    </div>
  );
}
