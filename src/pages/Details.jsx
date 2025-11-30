import React, { useState, useRef } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { propertiesArr } from '../assets/propertiesEgypt'
import { amenityIcons } from '../assets/data'
import { useFavorites } from '../context/FavoritesContext'
export default function Details() {
  const { toggleFavorite, isFavorite } = useFavorites();
  const { id } = useParams()
  const navigate = useNavigate()
  const [bookingData, setBookingData] = useState({
    university: '',
    checkIn: '',
    checkOut: '',
    guests: '1'
  })

  // Refs for date inputs
  const checkInRef = useRef(null)
  const checkOutRef = useRef(null)

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0]
  
  // Calculate min date for check-out (should be after check-in)
  const getMinCheckOutDate = () => {
    if (bookingData.checkIn) {
      const checkInDate = new Date(bookingData.checkIn)
      checkInDate.setDate(checkInDate.getDate() + 1) // At least 1 day after check-in
      return checkInDate.toISOString().split('T')[0]
    }
    return today
  }

  // Function to open date picker
  const openDatePicker = (ref) => {
    if (ref.current) {
      ref.current.showPicker?.() || ref.current.focus()
    }
  }

  // Find the property by ID
  const property = propertiesArr.find(prop => prop.id === parseInt(id))

  // If property not found, show error message
  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-us-cream px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-us-textDark mb-4">Property Not Found</h2>
          <p className="text-us-textDark/80 mb-6">The property you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="inline-block bg-us-mint text-white px-6 py-3 rounded-lg font-semibold hover:bg-us-mint/90 transition"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    )
  }

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    
    // Validate dates
    if (!bookingData.checkIn || !bookingData.checkOut) {
      alert('Please select both check-in and check-out dates');
      return;
    }
    
    if (new Date(bookingData.checkOut) <= new Date(bookingData.checkIn)) {
      alert('Check-out date must be after check-in date');
      return;
    }
    
    if (!bookingData.university) {
      alert('Please select a university');
      return;
    }
    
    navigate(`/booking?propertyId=${property.id}&university=${bookingData.university}&checkIn=${bookingData.checkIn}&checkOut=${bookingData.checkOut}&guests=${bookingData.guests}`);
  };

  return (
    <div className="min-h-screen bg-us-cream py-4 sm:py-8 px-3 sm:px-4">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb Navigation */}
        <nav className="mb-4 sm:mb-6" aria-label="Breadcrumb">
          {/* Mobile: Back button + simplified breadcrumb */}
          <div className="flex items-center gap-3 sm:hidden">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-1.5 text-us-textDark/70 hover:text-us-mint transition-colors text-sm"
            >
              <i className="fa-solid fa-arrow-left text-xs"></i>
              <span>Back</span>
            </button>
            <span className="text-us-textDark/40">|</span>
            <Link
              to="/gallery"
              className="text-us-textDark/70 hover:text-us-mint transition-colors text-sm truncate max-w-[120px]"
            >
              Gallery
            </Link>
          </div>
          
          {/* Desktop: Full breadcrumb */}
          <div className="hidden sm:flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
            <Link
              to="/"
              className="text-us-textDark/70 hover:text-us-mint transition-colors flex items-center gap-1"
            >
              <i className="fa-solid fa-home text-xs sm:text-sm"></i>
              <span>Home</span>
            </Link>
            <i className="fa-solid fa-chevron-right text-us-textDark/40 text-[10px] sm:text-xs"></i>
            <Link
              to="/gallery"
              className="text-us-textDark/70 hover:text-us-mint transition-colors"
            >
              Gallery
            </Link>
            <i className="fa-solid fa-chevron-right text-us-textDark/40 text-[10px] sm:text-xs"></i>
            <span className="text-us-textDark font-medium truncate max-w-[200px] md:max-w-none">{property.title}</span>
          </div>
        </nav>

        {/* Main Content */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
          {/* Image Section */}
          <div className="relative h-64 sm:h-96 md:h-[500px]">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-us-mint/30 backdrop-blur-md text-us-textDark text-xs sm:text-sm font-semibold px-2 py-1 sm:px-4 sm:py-2 rounded-lg">
              {property.type}
            </div>
            <button
              onClick={() => toggleFavorite(property)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-us-cream opacity-90 hover:opacity-100 transition-all duration-300 rounded-lg size-8 sm:size-10 flex items-center justify-center"
            >
              <i
                className={`${isFavorite(property.id) ? "fa-solid" : "fa-regular"} fa-heart text-us-mint text-base sm:text-xl cursor-pointer transition-all duration-200`}
              />
            </button>
          </div>

          {/* Content Section */}
          <div className="p-4 sm:p-6 md:p-8">
            {/* Title and Location */}
            <div className="mb-4 sm:mb-6">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-us-textDark mb-2 sm:mb-3">
                {property.title}
              </h1>
              <p className="text-gray-500 text-sm sm:text-base flex items-center gap-1">
                <i className="fa-solid fa-location-dot text-us-mint text-xs sm:text-sm"></i>
                {property.location}
              </p>
            </div>

            {/* Price and Rating */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-gray-200">
              <div>
                <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-us-primary">
                  ${property.price}
                </span>
                <span className="text-gray-500 text-sm sm:text-base ml-2">/mo</span>
              </div>
              <div className="flex items-center gap-1 text-sm sm:text-base text-us-textDark/60">
                <i className="fa-solid fa-star text-yellow-400"></i>
                {property.rating}
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
              {/* Right Column - Booking Sidebar (shown first on mobile) */}
              <div className="lg:col-span-1 order-2 lg:order-1">
                <div className="lg:sticky lg:top-28 bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-lg">
                  {/* Price and Rating */}
                  <div className="flex flex-wrap justify-between items-baseline gap-2 mb-4">
                    <p className="text-xl sm:text-2xl font-semibold text-us-primary">
                      ${property.price} <span className="text-sm sm:text-base font-normal text-gray-500">/mo</span>
                    </p>
                    <div className="flex items-center gap-1 text-sm sm:text-base text-us-textDark/60">
                      <i className="fa-solid fa-star text-yellow-400"></i>
                      {property.rating}
                    </div>
                  </div>

                  {/* Booking Form */}
                  <form onSubmit={handleBookingSubmit} className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-us-textDark mb-1" htmlFor="university">
                        University
                      </label>
                      <select
                        id="university"
                        value={bookingData.university}
                        onChange={(e) => setBookingData({...bookingData, university: e.target.value})}
                        className="w-full rounded-md border border-gray-300 bg-white text-us-textDark text-sm sm:text-base focus:ring-us-mint focus:border-us-mint px-2 sm:px-3 py-2"
                      >
                        <option value="">Select University</option>
                        <option value="auc">The American University in Cairo</option>
                        <option value="cairo">Cairo University</option>
                        <option value="ain-shams">Ain Shams University</option>
                        <option value="guc">German University in Cairo</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-us-textDark mb-1" htmlFor="check-in">
                        <i className="fa-solid fa-calendar-days text-us-mint mr-1.5"></i>
                        Check-in
                      </label>
                      <div className="relative">
                        <input
                          ref={checkInRef}
                          id="check-in"
                          type="date"
                          min={today}
                          value={bookingData.checkIn}
                          onClick={() => openDatePicker(checkInRef)}
                          onChange={(e) => {
                            const newCheckIn = e.target.value
                            setBookingData({
                              ...bookingData, 
                              checkIn: newCheckIn,
                              // Reset check-out if it's before the new check-in date
                              checkOut: bookingData.checkOut && new Date(bookingData.checkOut) <= new Date(newCheckIn) ? '' : bookingData.checkOut
                            })
                          }}
                          className="w-full rounded-md border border-gray-300 bg-white text-us-textDark text-sm sm:text-base focus:ring-us-mint focus:border-us-mint px-2 sm:px-3 py-2 pr-10 cursor-pointer hover:border-us-mint/50 transition-colors"
                        />
                        <button
                          type="button"
                          onClick={() => openDatePicker(checkInRef)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-us-mint transition-colors cursor-pointer z-10"
                        >
                          <i className="fa-solid fa-calendar"></i>
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-us-textDark mb-1" htmlFor="check-out">
                        <i className="fa-solid fa-calendar-days text-us-mint mr-1.5"></i>
                        Check-out
                      </label>
                      <div className="relative">
                        <input
                          ref={checkOutRef}
                          id="check-out"
                          type="date"
                          min={getMinCheckOutDate()}
                          value={bookingData.checkOut}
                          onClick={() => bookingData.checkIn && openDatePicker(checkOutRef)}
                          onChange={(e) => setBookingData({...bookingData, checkOut: e.target.value})}
                          disabled={!bookingData.checkIn}
                          className={`w-full rounded-md border border-gray-300 bg-white text-us-textDark text-sm sm:text-base focus:ring-us-mint focus:border-us-mint px-2 sm:px-3 py-2 pr-10 ${
                            !bookingData.checkIn ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:border-us-mint/50 transition-colors'
                          }`}
                        />
                        <button
                          type="button"
                          onClick={() => bookingData.checkIn && openDatePicker(checkOutRef)}
                          disabled={!bookingData.checkIn}
                          className={`absolute right-3 top-1/2 -translate-y-1/2 transition-colors z-10 ${
                            !bookingData.checkIn 
                              ? 'text-gray-300 cursor-not-allowed' 
                              : 'text-gray-400 hover:text-us-mint cursor-pointer'
                          }`}
                        >
                          <i className="fa-solid fa-calendar"></i>
                        </button>
                      </div>
                      {!bookingData.checkIn && (
                        <p className="text-xs text-gray-500 mt-1">Please select check-in date first</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-us-textDark mb-1" htmlFor="guests">
                        Students
                      </label>
                      <select
                        id="guests"
                        value={bookingData.guests}
                        onChange={(e) => setBookingData({...bookingData, guests: e.target.value})}
                        className="w-full rounded-md border border-gray-300 bg-white text-us-textDark text-sm sm:text-base focus:ring-us-mint focus:border-us-mint px-2 sm:px-3 py-2"
                      >
                        <option value="1">1 student</option>
                        <option value="2">2 students</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full flex cursor-pointer items-center justify-center overflow-hidden rounded-md h-11 sm:h-12 px-4 sm:px-5 bg-us-mint text-white text-sm sm:text-base font-bold leading-normal tracking-wide hover:bg-us-mint/90 transition-colors"
                    >
                      <span className="truncate">Book Now</span>
                    </button>
                  </form>

                  <p className="text-xs text-gray-500 text-center mt-3 sm:mt-4">You won't be charged yet</p>
                </div>
              </div>

              {/* Left Column - Main Content */}
              <div className="lg:col-span-2 order-1 lg:order-2">
                {/* About Section */}
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-us-textDark mb-3 sm:mb-4">About this space</h2>
                  <p className="text-us-textDark/80 leading-relaxed text-sm sm:text-base lg:text-lg">
                    This {property.type.toLowerCase()} in {property.location} offers a comfortable and convenient living space 
                    perfect for students. Located just a short walk from major universities, it offers easy access to classes, 
                    libraries, and student activities. The property features modern amenities and is located in a prime area 
                    with easy access to universities and city centers. With a rating of {property.rating} stars, this 
                    accommodation provides excellent value for money at ${property.price} per month.
                  </p>
                </div>

                {/* Amenities Section */}
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-us-textDark mb-3 sm:mb-4">Facilities & Amenities</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                    {property.amenities.map((amenity, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 sm:gap-3 bg-us-cream/50 p-3 sm:p-4 rounded-lg hover:bg-us-cream transition"
                      >
                        <i
                          className={`fa-solid ${amenityIcons[amenity] || 'fa-check'} text-us-mint text-lg sm:text-xl shrink-0`}
                        ></i>
                        <span className="text-us-textDark font-medium text-sm sm:text-base">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Map Section */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-us-textDark mb-3 sm:mb-4">Where you'll be</h2>
                  <div className="w-full rounded-lg overflow-hidden">
                    <iframe
                      allowFullScreen
                      className="w-full h-full aspect-video"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.37709538318!2d31.2007787498424!3d30.04441961559813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840c8f9429189%3A0x42b13511116038c!2sCairo%2C%20Cairo%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sus!4v1678886400000!5m2!1sen!2sus`}
                      style={{ border: 0 }}
                      title="Property Location"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
