import React from 'react'
import CategoryCard from "./CategoryCard"
import { categories } from "../assets/data";

export default function BrowseCategories() {
    return (
    <section className="bg-us-cream py-16 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl px-2 sm:text-3xl font-bold text-us-textDark mb-3">
          Browse by Category
        </h2>

        <p className="text-sm sm:text-base text-us-textDark/80 max-w-2xl px-2 mx-auto mb-10 sm:mb-14">
          Find the perfect accommodation type that fits your lifestyle and budget
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mx-auto">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              icon={cat.icon}
              title={cat.title}
              description={cat.description}
              count={cat.count}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
