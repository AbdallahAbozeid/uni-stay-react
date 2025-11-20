import React from "react";
import { propertiesArr } from "../assets/propertiesEgypt";
import NewPropertyCard from "./NewPropertyCard";
export default function FeaturedProperties() {

  function getRandomFour(arr) {
    const shuffled = [...arr].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 4);
  }

  const featuredProp = getRandomFour(propertiesArr);

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
        {featuredProp.map((prop) => (
          <NewPropertyCard
            key={prop.id}
            title={prop.title}
            type={prop.type}
            price={prop.price}
            location={prop.location}
            amenities={prop.amenities}
            rating={prop.rating}
            image={prop.image}
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
