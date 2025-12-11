import React, { useState,useEffect } from "react";
import FilterBar from "../components/FilterBar";
import NewPropertyCard from '../components/NewPropertyCard'
import { propertiesArr } from "../assets/propertiesEgypt";

export default function Gallery() {
  const [location, setLoctaion] = useState("");
  const [type, setType] = useState("");
  const [max, setMax] = useState('');
  const [min, setMin] = useState('');
  const [filtered,setFiltered]=useState(propertiesArr);
  useEffect(() => {
        document.title = "Uni-Stay | Gallary";
      }, []);
  useEffect(()=>{
    const minPrice = parseInt(min)|| 0;
    const maxPrice = parseInt(max)|| Infinity;
    const filteredProperties = propertiesArr.filter((p)=>{
      return (
      (location === '' || p.location.toLowerCase().includes(location.toLowerCase())) &&
      (type === '' || p.type === type) &&
      p.price >= minPrice &&
      p.price <= maxPrice
      )
    });
    setTimeout(() => {
      setFiltered(filteredProperties);
    }, 0);
  }, [location, min, max, type]);

  return (
    <div className="search-page bg-us-cream py-16">
      <div className="filter container mx-auto px-4">
        <FilterBar
          location={location}
          setLoctaion={setLoctaion}
          type={type}
          setType={setType}
          min={min}
          setMin={setMin}
          max={max}
          setMax={setMax}
          typesArr={[...new Set(propertiesArr.map(p => p.type))]}
        />
        <div id="properties-container" className="grid grid-cols-1 auto-rows-fr sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  mx-auto w-fit gap-6 px-4">
          {
            filtered?filtered.map((prop)=>{
              return(
                <NewPropertyCard 
                key={prop.id}
                id={prop.id}
                title={prop.title}
                type={prop.type}
                price={prop.price}
                location={prop.location}
                amenities={prop.amenities}
                rating={prop.rating}
                image={prop.image}/>
              );
            }):{}
          }
        </div>
      </div>
    </div>
  );
}
