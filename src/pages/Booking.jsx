import React, { useState } from 'react'
import { useSearchParams, useNavigate, Link } from 'react-router-dom'
import { propertiesArr } from '../assets/propertiesEgypt'

export default function Booking() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    specialRequests: ''
  })

  // Get booking details from URL params
  const propertyId = searchParams.get('propertyId')
  const university = searchParams.get('university')
  const checkIn = searchParams.get('checkIn')
  const checkOut = searchParams.get('checkOut')
  const guests = searchParams.get('guests')

  // Find the property
  const property = propertyId ? propertiesArr.find(prop => prop.id === parseInt(propertyId)) : null

  // Calculate duration in months
  const calculateDuration = () => {
    if (!checkIn || !checkOut) return 0
    const start = new Date(checkIn)
    const end = new Date(checkOut)
    const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
    return months > 0 ? months : 1
  }

  const duration = calculateDuration()
  const totalPrice = property ? property.price * duration : 0
  const serviceFee = Math.round(totalPrice * 0.1) // 10% service fee
  const totalAmount = totalPrice + serviceFee

  // University name mapping
  const universityNames = {
    'auc': 'The American University in Cairo',
    'cairo': 'Cairo University',
    'ain-shams': 'Ain Shams University',
    'guc': 'German University in Cairo'
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, you would send this data to a backend
    setIsConfirmed(true)
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  // If no property found or missing required params
  if (!property || !university || !checkIn || !checkOut) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-us-cream px-4">
        <div className="text-center max-w-md">
          <div className="mb-6">
            <i className="fa-solid fa-triangle-exclamation text-6xl text-us-primary"></i>
          </div>
          <h2 className="text-2xl font-bold text-us-textDark mb-4">Booking Information Missing</h2>
          <p className="text-us-textDark/80 mb-6">
            It looks like some booking information is missing. Please go back and complete your booking.
          </p>
          <Link
            to="/gallery"
            className="inline-block bg-us-mint text-white px-6 py-3 rounded-lg font-semibold hover:bg-us-mint/90 transition"
          >
            Browse Properties
          </Link>
        </div>
      </div>
    )
  }

  // Confirmation screen
  if (isConfirmed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-us-cream px-4 py-8">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="mb-6">
            <div className="w-20 h-20 bg-us-mint/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fa-solid fa-check text-4xl text-us-mint"></i>
            </div>
            <h2 className="text-3xl font-bold text-us-textDark mb-2">Booking Confirmed!</h2>
            <p className="text-us-textDark/70">
              Your booking request has been submitted successfully.
            </p>
          </div>

          <div className="bg-us-cream/50 rounded-lg p-6 mb-6 text-left">
            <h3 className="font-semibold text-us-textDark mb-4">Booking Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-us-textDark/70">Property:</span>
                <span className="font-medium text-us-textDark">{property.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-us-textDark/70">Check-in:</span>
                <span className="font-medium text-us-textDark">{formatDate(checkIn)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-us-textDark/70">Check-out:</span>
                <span className="font-medium text-us-textDark">{formatDate(checkOut)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-us-textDark/70">Duration:</span>
                <span className="font-medium text-us-textDark">{duration} month{duration !== 1 ? 's' : ''}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-us-textDark/70">Total Amount:</span>
                <span className="font-semibold text-us-primary">${totalAmount.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-us-textDark/70 mb-6">
            We've sent a confirmation email to <strong>{formData.email}</strong>. 
            The property owner will review your request and contact you shortly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-block bg-us-mint text-white px-6 py-3 rounded-lg font-semibold hover:bg-us-mint/90 transition"
            >
              Back to Home
            </Link>
            <Link
              to="/gallery"
              className="inline-block bg-us-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-us-primary/90 transition"
            >
              Browse More Properties
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-us-cream py-4 sm:py-8 px-3 sm:px-4">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb Navigation */}
        <nav className="mb-4 sm:mb-6" aria-label="Breadcrumb">
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
              to="/"
              className="text-us-textDark/70 hover:text-us-mint transition-colors text-sm"
            >
              Home
            </Link>
          </div>
          
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
            <span className="text-us-textDark font-medium">Booking</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Content - Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-us-textDark mb-2">Complete Your Booking</h1>
              <p className="text-us-textDark/70 mb-6">Please fill in your details to confirm your booking</p>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Personal Information */}
                <div>
                  <h2 className="text-lg font-semibold text-us-textDark mb-4">Personal Information</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-us-textDark mb-1" htmlFor="fullName">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-gray-300 bg-white text-us-textDark text-sm sm:text-base focus:ring-us-mint focus:border-us-mint px-3 sm:px-4 py-2.5"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-us-textDark mb-1" htmlFor="email">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-gray-300 bg-white text-us-textDark text-sm sm:text-base focus:ring-us-mint focus:border-us-mint px-3 sm:px-4 py-2.5"
                        placeholder="john.doe@university.edu"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-us-textDark mb-1" htmlFor="phone">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-gray-300 bg-white text-us-textDark text-sm sm:text-base focus:ring-us-mint focus:border-us-mint px-3 sm:px-4 py-2.5"
                        placeholder="+20 123 456 7890"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-us-textDark mb-1" htmlFor="specialRequests">
                        Special Requests (Optional)
                      </label>
                      <textarea
                        id="specialRequests"
                        name="specialRequests"
                        rows="4"
                        value={formData.specialRequests}
                        onChange={handleInputChange}
                        className="w-full rounded-md border border-gray-300 bg-white text-us-textDark text-sm sm:text-base focus:ring-us-mint focus:border-us-mint px-3 sm:px-4 py-2.5 resize-none"
                        placeholder="Any special requirements or questions..."
                      />
                    </div>
                  </div>
                </div>

                {/* Booking Details Review */}
                <div>
                  <h2 className="text-lg font-semibold text-us-textDark mb-4">Booking Details</h2>
                  <div className="bg-us-cream/50 rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-us-textDark/70">University:</span>
                      <span className="font-medium text-us-textDark">{universityNames[university] || university}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-us-textDark/70">Check-in:</span>
                      <span className="font-medium text-us-textDark">{formatDate(checkIn)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-us-textDark/70">Check-out:</span>
                      <span className="font-medium text-us-textDark">{formatDate(checkOut)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-us-textDark/70">Students:</span>
                      <span className="font-medium text-us-textDark">{guests} student{guests !== '1' ? 's' : ''}</span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center rounded-md h-12 px-5 bg-us-mint text-white text-base font-bold leading-normal tracking-wide hover:bg-us-mint/90 transition-colors"
                >
                  Confirm Booking
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar - Property Summary */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-28 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
              {/* Property Image */}
              <div className="relative h-48 sm:h-64">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-us-mint/30 backdrop-blur-md text-us-textDark text-xs font-semibold px-3 py-1.5 rounded-lg">
                  {property.type}
                </div>
              </div>

              {/* Property Info */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg font-semibold text-us-textDark mb-2">{property.title}</h3>
                <p className="text-gray-500 text-sm flex items-center gap-1 mb-4">
                  <i className="fa-solid fa-location-dot text-us-mint text-xs"></i>
                  {property.location}
                </p>

                <div className="flex items-center gap-1 text-sm text-us-textDark/60 mb-6">
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  {property.rating}
                </div>

                {/* Price Breakdown */}
                <div className="border-t border-gray-200 pt-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-us-textDark/70">${property.price.toLocaleString()} × {duration} month{duration !== 1 ? 's' : ''}</span>
                    <span className="font-medium text-us-textDark">${totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-us-textDark/70">Service fee</span>
                    <span className="font-medium text-us-textDark">${serviceFee.toLocaleString()}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 flex justify-between">
                    <span className="font-semibold text-us-textDark">Total</span>
                    <span className="text-xl font-bold text-us-primary">${totalAmount.toLocaleString()}</span>
                  </div>
                </div>

                <p className="text-xs text-gray-500 text-center mt-4">
                  <i className="fa-solid fa-shield-halved text-us-mint mr-1"></i>
                  You won't be charged until the booking is confirmed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
