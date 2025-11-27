import React from "react";

export default function FilterBar({location,setLoctaion,type,setType,min,setMin,max,setMax,typesArr}) {
  return (
    <div className="filter-section grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between items-center bg-primary/60 backdrop-blur-md rounded-lg p-8 mx-auto mb-16 shadow-md">
      <section className="relative mx-auto w-full">
        <h3 className="capitalize text-textLight font-semibold ms-2 mb-2">
          location
        </h3>
        <input
          type="text"
          name="location"
          id="filter-location"
          placeholder="search by City..."
          value={location}
          onChange={(e)=>{setLoctaion(e.target.value)}}
          className="rounded-2xl border-2 border-textDark bg-textLight placeholder:text-textDark/80 text-textDark focus:outline-none focus:border-mint ps-8 pe-2 h-10 w-full block leading-10"
        />
        <i className="fa-solid fa-location-dot text-base text-textDark absolute bottom-[7px] left-2"></i>
      </section>
      <section className="relative mx-auto w-full">
        <h3 className="capitalize text-textLight font-semibold ms-2 mb-2">
          Move-in Date
        </h3>
        <input
          type="date"
          name="date"
          id="filter-date"
          placeholder="DD/MM/YYYY"
          className="px-6 appearance-none rounded-2xl border-2 border-textDark bg-textLight placeholder:text-textDark/80 text-textDark placeholder:text-textLight/60 focus:outline-none focus:border-mint ps-8 pe-2 h-10 w-full block leading-10"
        />
        <i className="fa-solid fa-calendar-days text-base text-textDark absolute bottom-[7px] left-2"></i>
      </section>
      <section className="relative mx-auto w-full">
        <h3 className="capitalize text-textLight font-semibold ms-2 mb-2">
          Accommodation Type
        </h3>
        <select
          name="accommodation-type"
          id="filter-type"
          className="rounded-2xl border-2 border-textDark bg-textLight text-textDark focus:outline-none focus:border-mint px-3 h-10 appearance-none w-full block leading-10"
          value={type}
          onChange={(e)=>{setType(e.target.value)}}
        >
          <option value="">All Types</option>
          {typesArr.map((type,index)=>{
            return(
              <option key={index}>{type}</option>
            );
          })}
        </select>
        <i className="fa-solid fa-angle-down text-base text-textDark absolute bottom-[7px] right-2 pointer-events-none"></i>
      </section>
      <section className="relative mx-auto w-full">
        <h3 className="capitalize text-textLight font-semibold ms-2 mb-2">
          Price Range
        </h3>
        <div className="flex justify-between gap-2 w-full overflow-hidden ">
          <input
            type="text"
            name="min-price"
            id="filter-min-price"
            placeholder="Min"
            className="rounded-2xl border-2 border-textDark bg-textLight placeholder:text-textDark/80 text-textDark focus:outline-none focus:border-mint ps-2 pe-8 h-10 w-1/2 leading-10"
            value={min}
            onChange={(e)=>{setMin(e.target.value)}}
          />
          <input
            type="text"
            name="max-price"
            id="filter-max-price"
            placeholder="Max"
            className="rounded-2xl border-2 border-textDark bg-textLight placeholder:text-textDark/80 text-textDark focus:outline-none focus:border-mint ps-2 pe-8 h-10 w-1/2 leading-10"
            value={max}
            onChange={(e)=>{setMax(e.target.value)}}
          />
          <i className="fa-solid fa-angle-down text-base text-textDark absolute bottom-[7px] right-1/2 -translate-x-2"></i>
          <i className="fa-solid  fa-angle-up text-base text-textDark absolute bottom-[7px] right-2"></i>
        </div>
      </section>
      {/* <button
        id="search"
        className="bg-primary text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
      >
        <i className="fa-solid fa-search"></i> Search
      </button> */}
    </div>
  );
}
