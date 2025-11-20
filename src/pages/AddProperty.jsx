import React, { useState } from 'react';

import { Plus, CheckCircle, XCircle } from 'lucide-react'; 

const availableAmenities = [
  'Wi-Fi', 'Parking', 'Laundry Room', 'Gym', 'Security', 'Pool'
];

const AddProperty = () => {
  const [propertyData, setPropertyData] = useState({
    title: '',
    address: '',
    rent: '',
    area: '',
    rooms: '',
    bathrooms: '',
    amenities: [], 
    description: '',
  });

  const [status, setStatus] = useState(null); 
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, options } = e.target;

    if (name === 'amenities') {
      const selectedAmenities = Array.from(options)
        .filter(option => option.selected)
        .map(option => option.value);
      setPropertyData({ ...propertyData, [name]: selectedAmenities });
    } else {
      setPropertyData({ ...propertyData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');
    setStatus(null);

    setTimeout(() => {
      if (propertyData.title && propertyData.rent) {
        setStatus('success');
        setMessage('Property added successfully');
        // Clear the form
        setPropertyData({
          title: '', address: '', rent: '', area: '', rooms: '', bathrooms: '', amenities: [], description: '',
        });
      } else {
        setStatus('error');
        setMessage('An error occurred. Please fill in the Property Title and Monthly Rent Price.');
      }
    }, 1000);
  };

  const handleCancel = () => {
    setPropertyData({
      title: '', address: '', rent: '', area: '', rooms: '', bathrooms: '', amenities: [], description: '',
    });
    setStatus(null);
    setMessage('');
  };

  // Tailwind CSS classes
  const inputClasses = "w-full p-2 border border-gray-250 rounded-md box-border focus:ring-blue-500 focus:border-blue-500";
  const labelTextClasses = "block font-bold mb-1 text-gray-700";
  const buttonPrimaryClasses = "px-8 py-2 rounded-xl font-bold border-none cursor-pointer mr-4 bg-blue-600 text-white hover:bg-blue-700 transition duration-150 shadow-lg";
  const buttonSecondaryClasses = "px-8 py-2 rounded-xl font-bold border-none cursor-pointer bg-gray-300 text-gray-800 hover:bg-gray-400 transition duration-150 shadow-md";


  return (
    <div className="min-h-screen #fdf6e3 font-sans">
      
      {/* Header */}
      <div className="w-full px-4 #fdf6e3 shadow-md">
          <header className="flex justify-between items-center py-4 border-b border-gray-100 max-w-7xl mx-auto">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-gray-800">uni-stay</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="px-4 py-2 bg-[#C8846C] text-gray-900 rounded-lg cursor-pointer hover:bg-[#C8846C] transition duration-150 font-semibold shadow-sm">Dashboard</span>
                <span className="px-4 py-2 bg-[#C8846C] text-white rounded-lg cursor-pointer hover:bg-[#C8846C] transition duration-150 font-semibold shadow-sm">Logout</span>
              </div>
          </header>
      </div>

      {/* Main Content */}
      <div className="w-full mt-10 px-4 max-w-4xl mx-auto">
          
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl border border-gray-100">
            <h2 className="text-center text-3xl font-extrabold mb-10 text-gray-800">
              {/* تم استبدال FaPlus بأيقونة Plus */}
              <Plus className="inline-block align-middle mr-3 text-blue-600 text-3xl" /> Add New Property
            </h2>

            <form onSubmit={handleSubmit}>
              
              {/* 1. Title beside Address */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-6">
                  <label className="block">
                      <span className={labelTextClasses}>Property Title*</span>
                      <input type="text" name="title" value={propertyData.title} onChange={handleChange} className={inputClasses} required />
                  </label>
                  <label className="block">
                      <span className={labelTextClasses}>Detailed Address</span>
                      <input type="text" name="address" value={propertyData.address} onChange={handleChange} className={inputClasses} />
                  </label>
              </div>

              {/* 2. Rent beside Area */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-6">
                  <label className="block">
                      <span className={labelTextClasses}>Monthly Rent Price (USD)*</span>
                      <input type="number" name="rent" value={propertyData.rent} onChange={handleChange} className={inputClasses} min="1" required />
                  </label>
                  <label className="block">
                      <span className={labelTextClasses}>Area (sq. meters or sq. feet)</span>
                      <input type="text" name="area" value={propertyData.area} onChange={handleChange} className={inputClasses} placeholder="e.g. 500 sq. ft." />
                  </label>
              </div>

              {/* 3. Rooms beside Bathrooms */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-6">
                  <label className="block">
                      <span className={labelTextClasses}>Number of Rooms</span>
                      <select name="rooms" value={propertyData.rooms} onChange={handleChange} className={inputClasses}>
                        <option value="">Select</option>
                        {[...Array(6).keys()].map(i => <option key={i + 1} value={i + 1}>{i + 1}</option>)}
                      </select>
                  </label>
                  <label className="block">
                      <span className={labelTextClasses}>Number of Bathrooms</span>
                      <select name="bathrooms" value={propertyData.bathrooms} onChange={handleChange} className={inputClasses}>
                        <option value="">Select</option>
                        {[...Array(5).keys()].map(i => <option key={i + 1} value={i + 1}>{i + 1}</option>)}
                      </select>
                  </label>
              </div>

              {/* 4. Images beside Amenities */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-6">
                  <label className="block">
                      <span className={labelTextClasses}>Upload Property Images</span>
                      <input type="file" multiple className={`${inputClasses} h-10 pt-1.5`} />
                      <p className="text-xs text-gray-500 mt-1">Max 5 files, 5MB each.</p>
                  </label>
                  <label className="block">
                      <span className={labelTextClasses}>Available Amenities (Hold Ctrl/Cmd to select multiple)</span>
                        <select
                          name="amenities"
                          multiple={true}
                          value={propertyData.amenities}
                          onChange={handleChange}
                          className={`${inputClasses} h-28`}
                        >
                          {availableAmenities.map(amenity => (
                              <option key={amenity} value={amenity}>{amenity}</option>
                          ))}
                        </select>
                  </label>
              </div>
              
              {/* Description Field (Full Width) */}
              <div className="mb-8">
                  <label className="block">
                    <span className={labelTextClasses}>Additional Description</span>
                    <textarea
                      name="description"
                      value={propertyData.description}
                      onChange={handleChange}
                      rows="4"
                      className={inputClasses}
                      placeholder="Describe the neighborhood, included utilities, or specific student features..."
                    ></textarea>
                  </label>
              </div>


              {/* Submit and Cancel Buttons */}
              <div className="flex justify-center mt-10 pt-6 border-t border-gray-100">
                <button type="submit" className={buttonPrimaryClasses}>
                  Save Property
                </button>
                <button type="button" onClick={handleCancel} className={buttonSecondaryClasses}>
                  Cancel
                </button>
              </div>
            </form>

            {/* Success/Error Messages */}
            {status && (
              <div className={`mt-8 p-4 rounded-lg font-bold shadow-inner ${status === 'success' ? 'bg-green-100 border border-green-400 text-green-700' : 'bg-red-100 border border-red-400 text-red-700'}`}>
                <p className="flex items-center">
                  {/* تم استبدال FaCheckCircle و FaTimesCircle بأيقونات CheckCircle و XCircle */}
                  {status === 'success' 
                    ? <CheckCircle className="mr-2 w-5 h-5" /> 
                    : <XCircle className="mr-2 w-5 h-5" />}
                  {message}
                </p>
              </div>
            )}
          </div>
      </div>
      
      {/* Footer - تحسين التصميم قليلاً */}
      <footer className="mt-16 bg-gray-800 text-white py-8 text-sm leading-relaxed w-full">
          <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
              
              {/* Column 1: Uni-Stay Info */}
              <div>
                  <h4 className="mb-3 text-base font-bold text-white">Uni-Stay</h4>
                  <p className='text-gray-300'>Your trusted partner in finding the perfect student housing for a comfortable university life, affordable and accessible.</p>
                  <div className="mt-4 flex space-x-3 text-gray-400">
                    {/* Placeholder Icons - يمكنك استبدالها بأيقونات وسائل التواصل الاجتماعي */}
                    <CheckCircle className="w-4 h-4" />
                    <XCircle className="w-4 h-4" />
                  </div>
              </div>
              
              {/* Column 2: Quick Links */}
              <div>
                  <h4 className="mb-3 text-base font-bold text-white">Quick Links</h4>
                  <ul className="list-none p-0 space-y-2 text-gray-300">
                      <li className='hover:text-white cursor-pointer'>For Landlords</li>
                      <li className='hover:text-white cursor-pointer'>Student Resources</li>
                      <li className='hover:text-white cursor-pointer'>Blog</li>
                  </ul>
              </div>
              
              {/* Column 3: Support */}
              <div>
                  <h4 className="mb-3 text-base font-bold text-white">Support</h4>
                  <ul className="list-none p-0 space-y-2 text-gray-300">
                      <li className='hover:text-white cursor-pointer'>Help Center</li>
                      <li className='hover:text-white cursor-pointer'>Contact Us</li>
                      <li className='hover:text-white cursor-pointer'>Safety Guidelines</li>
                      <li className='hover:text-white cursor-pointer'>Terms of Service</li>
                  </ul>
              </div>
              
              {/* Column 4: Contact Info */}
              <div>
                  <h4 className="mb-3 text-base font-bold text-white">Contact Info</h4>
                  <p className='text-gray-300'>hello@uni-stay.com</p>
                  <p className='text-gray-300'>+(123) 123-4567</p>
                  <p className='text-gray-300'>123 Main Street, Modern District, CA 94035</p>
              </div>

          </div>
          <div className="text-center mt-8 pt-4 border-t border-gray-700 mx-auto max-w-4xl px-4 text-gray-400">
            © 2025 uni-stay. All rights reserved.
          </div>
      </footer>

    </div>
  );
};

export default AddProperty;