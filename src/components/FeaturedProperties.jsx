import React, { useState } from "react";
import PropertyCard from "./PropertyCard";
import { properties } from "../assets/data";
export default function FeaturedProperties() {
const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((fav) => fav !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="py-16 text-center bg-us-cream">
      <h2 className="text-2xl px-2 sm:text-3xl font-bold text-us-textDark mb-3">
        Featured Properties
      </h2>

      <p className="text-sm sm:text-base text-us-textDark/80 max-w-2xl px-2 mx-auto mb-10 sm:mb-14">
        Discover our handpicked selection of the best student accommodations,
        carefully chosen for their quality, location, and value.
      </p>

      {/* Cards List */}
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {properties.map((prop) => (
          <PropertyCard
            key={prop.id}
            property={prop}
            isFavorite={favorites.includes(prop.id)}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>

      <a
        href="/gallery"
        className="inline-block mt-10 text-us-mint font-semibold hover:underline"
      >
        View all properties →
      </a>
    </div>
  );
}
