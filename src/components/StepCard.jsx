import React from 'react'

export default function StepCard({ icon, iconType = "solid", title, description }) {
  return (
    <div className="flex flex-col items-center text-center border p-4 rounded-2xl border-us-mint/40">
      <div className="bg-us-primary text-us-textLight rounded-full p-4 mb-4">
        <i
          className={`fa-${iconType} ${icon} text-2xl`}
        ></i>
      </div>

      <h3 className="font-semibold text-us-textDark mb-2">{title}</h3>

      <p className="text-sm/[1.4] text-us-textDark/80 max-w-[220px]">
        {description}
      </p>
    </div>
  );
}
