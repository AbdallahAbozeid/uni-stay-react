import React from 'react'

export default function CategoryCard({ icon, title, description, count }) {
  return (
    <div className="bg-white border border-us-textDark/20 max-w-64 rounded-xl shadow-sm hover:shadow-md hover:shadow-mint/30 transition-all duration-300 p-6 mx-auto">
      <div className="flex justify-center mb-4">
        <div className="bg-us-mint p-4 rounded-full">
          <i className={`fa-solid ${icon} text-2xl text-us-textDark`}></i>
        </div>
      </div>

      <h3 className="font-semibold text-us-textDark mb-1">{title}</h3>
      <p className="text-us-textDark/80 text-sm mb-2">{description}</p>

      <p className="text-us-primary font-semibold text-sm">{count}</p>
    </div>
  );
}
