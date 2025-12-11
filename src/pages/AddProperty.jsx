import React, { useState,useEffect } from 'react';


const Plus = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>;
// CheckCircle icon for success messages
const CheckCircle = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>;
// XCircle icon for error messages
const XCircle = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>;

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
  useEffect(() => {
    document.title = "Uni-Stay | Add Property";
  }, []);
  const handleChange = (e) => {
    const { name, value, options } = e.target;

    // Handle multi-select list for amenities
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

    // Simulate data submission (replace with your Firestore logic here)
    setTimeout(() => {
      if (propertyData.title && propertyData.rent) {
        setStatus('success');
        setMessage('Property added successfully! Your listing will be sent for review.');
        // Clear the form
        setPropertyData({
          title: '', address: '', rent: '', area: '', rooms: '', bathrooms: '', amenities: [], description: '',
        });
      } else {
        setStatus('error');
        setMessage('An error occurred. Please fill in the "Property Title" and "Monthly Rent" fields.');
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

  const inputClasses = "w-full p-2 border border-[#d5d5d5] rounded-lg box-border focus:ring-[#c8846c] focus:border-[#c8846c] transition duration-150";
  const labelTextClasses = "block font-semibold mb-1 text-[#333333]";
  const buttonPrimaryClasses = "px-8 py-2 rounded-xl font-bold border-none cursor-pointer ml-4 bg-[#c8846c] text-white hover:bg-[#b0745b] transition duration-150 shadow-lg"; // Primary: #c8846c
  const buttonSecondaryClasses = "px-8 py-2 rounded-xl font-bold border-none cursor-pointer bg-gray-300 text-gray-800 hover:bg-gray-400 transition duration-150 shadow-md";


  return (
    <div className="min-h-screen bg-[#fdf6e3] font-sans text-left">
      
      {/* Header */}
      <div className="w-full px-4 bg-[#ffffff] shadow-md">
          <header className="flex justify-between items-center py-4 border-b border-gray-200 max-w-7xl mx-auto">
              <div className="flex items-center">
                <span className="text-2xl font-extrabold text-[#c8846c]">uni-stay</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                {/* Dashboard button using Accent color */}
                <span className="px-4 py-2 bg-[#66869f] text-white rounded-lg cursor-pointer hover:bg-[#527086] transition duration-150 font-semibold shadow-sm">Dashboard</span>
                {/* Logout button using Primary color for consistency */}
                <span className="px-4 py-2 bg-[#c8846c] text-white rounded-lg cursor-pointer hover:bg-[#b0745b] transition duration-150 font-semibold shadow-sm">Logout</span>
              </div>
          </header>
      </div>

      {/* Main Content */}
      <div className="w-full mt-10 px-4 max-w-4xl mx-auto pb-16">
          
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl border border-gray-100">
            <h2 className="text-center text-3xl font-extrabold mb-10 text-[#333333]">
              <Plus className="inline-block align-middle mr-3 text-[#c8846c] w-7 h-7" /> Add New Property
            </h2>

            <form onSubmit={handleSubmit}>
              
              {/* 1. Title beside Address */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-6">
                  <label className="block">
                      <span className={labelTextClasses}>Property Title*</span>
                      <input type="text" name="title" value={propertyData.title} onChange={handleChange} className={inputClasses} required placeholder="Example: Shared apartment near University" />
                  </label>
                  <label className="block">
                      <span className={labelTextClasses}>Detailed Address</span>
                      <input type="text" name="address" value={propertyData.address} onChange={handleChange} className={inputClasses} placeholder="Street, District, City" />
                  </label>
              </div>

              {/* 2. Rent beside Area */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-6">
                  <label className="block">
                      <span className={labelTextClasses}>Monthly Rent (USD)*</span>
                      <input type="number" name="rent" value={propertyData.rent} onChange={handleChange} className={inputClasses} min="1" required placeholder="Example: 500" />
                  </label>
                  <label className="block">
                      <span className={labelTextClasses}>Area </span>
                      <input type="text" name="area" value={propertyData.area} onChange={handleChange} className={inputClasses} placeholder="Example: Giza" />
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
                      <p className="text-xs text-gray-500 mt-1">Maximum 5 files, 5MB each.</p>
                  </label>
                  <label className="block">
                      <span className={labelTextClasses}>Available Amenities (Ctrl/Cmd for multi-select)</span>
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
                      placeholder="Describe the neighborhood, included facilities, or specific student features..."
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
              <div className={`mt-8 p-4 rounded-lg font-bold shadow-inner flex items-center ${status === 'success' 
                ? 'bg-[#f0fff4] border border-[#95caac] text-[#1f563d]' // Using mint for success border/icon
                : 'bg-red-100 border border-red-400 text-red-700'}`}>
                  {status === 'success' 
                    ? <CheckCircle className="ml-2 w-5 h-5 text-[#95caac]" /> 
                    : <XCircle className="ml-2 w-5 h-5 text-red-600" />}
                  <p>{message}</p>
              </div>
            )}
          </div>
      </div>
      
    </div>
  );
};

export default AddProperty;
