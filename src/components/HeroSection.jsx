import React from "react";

export default function HeroSection() {
  return (
    <div className="hero min-h-screen relative">
      <div className="absolute inset-0 -z-10">
        <img
          src="hero.jpeg"
          alt="Modern student apartment building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto z-10 px-8 py-28">
        {/* HERO TEXT */}
        <section className="hero-info max-w-[300px] sm:max-w-[600px] mx-auto sm:ms-8 md:ms-20 sm:mb-20">
          <h1 className="text-2xl/[1.1] sm:text-4xl/[1.1] md:text-5xl/[1.1] font-bold text-us-textLight mb-4 sm:mb-6">
            Find Your Perfect Student Accommodation
          </h1>

          <p className="text-sm/[1.5] sm:text-base/[1.5] md:text-lg/[1.5] text-us-textLight/80 mb-10">
            Discover comfortable, affordable housing near your campus. Join
            thousands of students who found their perfect home.
          </p>
        </section>

        {/* FILTER SECTION */}
        <section className="filter-section flex gap-8 flex-col lg:flex-row flex-wrap lg-flex-nowrap justify-between items-center bg-us-cream/10 backdrop-blur-md rounded-lg p-8 mx-auto lg:ms-20 w-[320px] md:w-[400px] lg:w-fit shadow-sm">
          {/* LOCATION */}
          <section className="relative">
            <p className="capitalize text-us-textLight font-semibold ms-2 mb-2">
              location
            </p>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="city or university"
              className="rounded-2xl border border-[2px] border-us-textDark bg-us-textLight placeholder:text-us-textDark/80 text-us-textDark focus:outline-none focus:border-mint ps-8 pe-2 w-48 h-10"
            />
            <i className="fa-solid fa-location-dot text-base text-us-textDark absolute bottom-3 left-2" />
          </section>

          {/* DATE */}
          <section className="relative">
            <p className="capitalize text-us-textLight font-semibold ms-2 mb-2">
              Move-in Date
            </p>
            <input
              type="date"
              name="date"
              id="date"
              className="px-6 appearance-none rounded-2xl border-2 border-us-textDark bg-us-textLight placeholder:text-us-textDark/80 text-us-textDark focus:outline-none focus:border-mint ps-8 pe-2 w-48 h-10"
            />
            <i className="fa-solid fa-calendar-days text-base text-us-textDark absolute bottom-2.75 left-2" />
          </section>

          {/* ACCOMMODATION TYPE */}
          <section className="relative">
            <p className="capitalize text-us-textLight font-semibold ms-2 mb-2">
              Accommodation Type
            </p>
            <select
              name="accommodation"
              id="accommodation"
              defaultValue=""
              className="rounded-2xl border-2 border-us-textDark bg-us-textLight text-us-textDark focus:outline-none focus:border-mint px-3 w-48 h-10 appearance-none"
            >
              <option value="" disabled>
                Select type
              </option>
              <option value="studio">Studio</option>
              <option value="1-bedroom">Shared Room</option>
              <option value="2-bedroom">Private Room</option>
            </select>
            <i className="fa-solid fa-angle-down text-base text-us-textDark absolute bottom-3 right-2 pointer-events-none" />
          </section>

          {/* BUTTON */}
          <a
            href="/gallery"
            className="bg-us-primary text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-us-primary/90 transition-colors duration-200"
          >
            <i className="fa-solid fa-search" /> Search
          </a>
        </section>
      </div>
    </div>
  );
}
