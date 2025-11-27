import React,{useState} from 'react'
import {amenityIcons} from '../assets/data'

export default function PropertyCard({ title,type,price,location,amenities,rating,image}) {
  const[isFavorite,setIsFavorite]=useState(false);
  
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-64 hover:shadow-xl hover:shadow-mint/60 transition cursor-pointer">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover"
        />

        <div className="absolute top-2 left-2 bg-us-mint/30 backdrop-blur-md text-us-textDark text-sm font-semibold px-3 py-1 rounded-lg">
          {type}
        </div>

        <div
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-2 right-2 bg-us-cream opacity-80 hover:opacity-100 transition-all duration-300 rounded-lg size-7 flex items-center justify-center"
        >
          <i
            className={`${isFavorite ? "fa-solid" : "fa-regular"} fa-heart text-us-mint cursor-pointer transition-all duration-200`}
          />
        </div>
      </div>

      <div className="p-4 text-left">
        <h3 className="font-semibold text-sm mb-1">{title}</h3>

        <p className="text-gray-500 text-sm flex items-center gap-1">
          <i className="fa-solid fa-location-dot text-us-mint"></i>
          {location}
        </p>

        <div className="flex justify-between items-center mt-3">
          <span className="text-us-primary font-semibold">
            ${price} <span className="text-gray-500 text-sm">/mo</span>
          </span>

          <span className="flex items-center gap-1 text-sm text-us-textDark/60">
            <i className="fa-solid fa-star text-yellow-400"></i>
            {rating}
          </span>
        </div>

        <div className="flex items-center gap-2 mt-6 text-sm">
          {amenities.map((f, idx) => (
            <span key={idx} className='flex items-center justify-start gap-0.5 transition-all duration-200 overflow-hidden hover:overflow-visible text-sm'>
              <i
                className={`fa-solid ${amenityIcons[f]} text-us-textDark/60`}
              ></i>{" "}
              <span className="text-xs text-us-textDark/60 truncate">
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
