import React from "react";
import { useFavorites } from "../context/FavoritesContext";
import NewPropertyCard from "../components/NewPropertyCard";
const Favorites = () => {
  // Generate 9 cards dynamically
  // const cards = Array.from({ length: 9 });
  const { favorites } = useFavorites();
  return (
    <div className="bg-us-cream min-h-screen pt-9">
  
      {/* ======================= PAGE TITLE ======================= */}
      <h1 className="text-3xl md:text-4xl font-bold text-[#333] mb-10 px-4 sm:px-6 lg:px-8 ml-7">
        Favorites
      </h1>

      {/* ======================= MAIN CONTENT ======================= */}
      <main className="container text-center mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 auto-rows-fr sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {
            favorites.length === 0 ? (
              <p className="text-gray-600 col-span-full">
                You have no favorite properties yet.
              </p>
            ):
            favorites.map((property) => (
              <NewPropertyCard kery={property.id} {...property} />
            ))   
          }
          {/* ====== React generated cards ====== */}
          {/* {cards.map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transform hover:shadow-xl transition duration-300"
            >
          
              <div className="relative h-48 bg-gray-200">
                <img
                  src="https://placehold.co/600x400/cccccc/333333?text=Room+View"
                  alt="Cozy Private Room"
                  className="w-full h-full object-cover"
                />

                <span className="absolute top-3 left-3 bg-white text-gray-700 text-xs font-semibold px-2 py-0.5 rounded-full shadow-md">
                  Private Room
                </span>

                <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md text-red-500 hover:text-red-600 transition">
                  <i className="fa-solid fa-heart"></i>
                </button>
              </div>

              <div className="p-4">
                <h2 className="text-base font-semibold text-gray-800 mb-1">
                  Cozy Private Room near Campus
                </h2>

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
          ))} */}

        </div>
      </main>
    </div>
  );
};

export default Favorites;
