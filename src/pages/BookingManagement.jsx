import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, Calendar, Home, Users, LogOut, LayoutDashboard, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'; 

const initialBookings = [
  { id: 1, studentName: 'Mona Ahmed', property: 'Modern Apartment', date: 'June 12, 2024', duration: '11 months', status: 'Pending' },
  { id: 2, studentName: 'Nada Mahmoud', property: 'Cozy Studio', date: 'Aug 12, 2024', duration: '6 months', status: 'Pending' },
  { id: 3, studentName: 'Mona Ashraf', property: 'Modern Apartment', date: 'Jan 10, 2024', duration: '10 months', status: 'Pending' },
  { id: 4, studentName: 'Mona Ahmed', property: 'Modern Apartment', date: 'Sept 12, 2024', duration: '6 months', status: 'Pending' },
  { id: 5, studentName: 'Khaled Ali', property: 'Cozy Studio', date: 'Oct 01, 2024', duration: '12 months', status: 'Approved' },
  { id: 6, studentName: 'Layla Hassan', property: 'Shared Room', date: 'July 20, 2024', duration: '9 months', status: 'Pending' },
  { id: 7, studentName: 'Tariq Nabil', property: 'Luxury Penthouse', date: 'Nov 05, 2024', duration: '12 months', status: 'Pending' },
  { id: 8, studentName: 'Samira Kamal', property: 'Single Room', date: 'Dec 15, 2024', duration: '6 months', status: 'Approved' },
  { id: 9, studentName: 'Fahd Zaki', property: 'Cozy Studio', date: 'Jan 22, 2025', duration: '10 months', status: 'Pending' },
];

const ITEMS_PER_PAGE = 4;

const UniStayLogo = ({ size = 'xl', color = '#6D8B95' }) => (
    <div className="flex items-center space-x-1">
        {/* Adjusted color for better visibility against light background */}
        <span className={`bg-[${color === 'white' ? '#4A6269' : color}] text-white p-2 rounded-lg font-bold text-lg`}>U</span> 
        <span className={`text-[${color === 'white' ? 'white' : color}] font-semibold text-${size}`}>uni-stay</span>
    </div>
);


const Header = () => {
    return (
        <header className="bg-white shadow-lg sticky top-0 z-10 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <UniStayLogo size="xl" />
                    <div className="flex space-x-3">
                        <button
                            onClick={() => console.log("Dashboard clicked")}
                            className="px-4 py-2 bg-[#D8A69E] text-white font-bold text-sm rounded-xl hover:bg-[#B68981] transition duration-150 shadow-md flex items-center space-x-1"
                        >
                            <LayoutDashboard size={18} />
                            <span>Dashboard</span>
                        </button>
                        <button
                            onClick={() => console.log("Logout clicked")}
                            className="px-4 py-2 bg-[#B68981] text-white font-bold text-sm rounded-xl hover:bg-[#D8A69E] transition duration-150 shadow-md flex items-center space-x-1"
                        >
                            <LogOut size={18} />
                            <span>Logout</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};


function BookingDashboard() {
  const [bookings, setBookings] = useState(initialBookings);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterDateRange, setFilterDateRange] = useState(''); 

  const handleApprove = (id) => {
    const updatedBookings = bookings.map(booking => 
      booking.id === id ? { ...booking, status: 'Approved' } : booking
    );
    setBookings(updatedBookings);
  };
  
  // Filtering and Searching Logic
  let filteredAndSearchedBookings = bookings;

  if (filterStatus !== 'All') {
    filteredAndSearchedBookings = filteredAndSearchedBookings.filter(
      (booking) => booking.status === filterStatus
    );
  }

  if (searchTerm) {
    filteredAndSearchedBookings = filteredAndSearchedBookings.filter((booking) =>
      booking.studentName.toLowerCase().includes(searchTerm.toLowerCase()) || 
      booking.property.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  
  // Pagination Logic
  const totalItems = filteredAndSearchedBookings.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const firstPageIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const lastPageIndex = firstPageIndex + ITEMS_PER_PAGE;
  const currentTableData = filteredAndSearchedBookings.slice(firstPageIndex, lastPageIndex);
  
  const goToPage = (pageNumber) => setCurrentPage(pageNumber);
  const goNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goPrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  
  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }
    return pages;
  };

  // Reset page when filters/search terms change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filterStatus]);


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-extrabold mb-10 text-gray-800 text-center border-b pb-4">
        <Calendar className="inline-block align-middle mr-3 text-[#6D8B95] w-7 h-7" /> Booking Management
      </h1>

      {/* Filter and Search Controls */}
      <div className="flex flex-col md:flex-row justify-start items-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
        
        {/* Search Bar */}
        <div className="flex items-center space-x-2 border border-gray-300 rounded-xl p-3 bg-white shadow-inner w-full md:w-80 order-1">
          <Search className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search by student or property..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="focus:outline-none w-full text-gray-700 placeholder-gray-500"
          />
        </div>

        {/* Status Filter */}
        <div className="relative order-2 w-full md:w-auto">
            <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="block appearance-none border border-gray-300 rounded-xl py-3 pl-4 pr-12 bg-white text-gray-700 shadow-sm focus:ring-[#6D8B95] focus:border-[#6D8B95] transition duration-150 w-full"
            >
                <option value="All">All Statuses</option>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                <ChevronDown className="h-5 w-5" />
            </div>
        </div>
        
        {/* Date Range Placeholder */}
        <div className="border border-gray-300 rounded-xl p-3 text-gray-500 bg-white shadow-sm flex items-center cursor-pointer hover:bg-gray-50 transition duration-150 order-3 w-full md:w-auto justify-center md:justify-start">
            <Calendar className="w-5 h-5 mr-2" />
            <span>Select Date Range</span>
        </div>

      </div>

      {/* Bookings Table */}
      <div className="bg-white shadow-2xl rounded-xl overflow-x-auto border border-gray-100">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#F3F4F6] border-b border-gray-200">
            <tr>
              {['Student Name', 'Property', 'Date', 'Duration', 'Status', 'Actions'].map((header) => (
                <th
                  key={header}
                  className="px-6 py-4 text-left text-xs font-extrabold uppercase tracking-wider text-gray-600"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {currentTableData.length > 0 ? (
                currentTableData.map((booking) => (
                    <tr key={booking.id} className="hover:bg-blue-50/50 transition duration-150">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 text-left">{booking.studentName}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-left flex items-center">
                        <Home className="w-4 h-4 mr-2 text-[#6D8B95]" />
                        {booking.property}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-left">{booking.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-left">{booking.duration}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-left">
                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full transition-colors duration-200 shadow-sm ${booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                          {booking.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-bold">
                        {booking.status === 'Pending' ? (
                          <button
                            onClick={() => handleApprove(booking.id)}
                            className="text-[#B68981] hover:text-[#D8A69E] transition duration-150 focus:outline-none focus:ring-2 focus:ring-[#B68981] focus:ring-offset-2 rounded-lg p-2"
                          >
                            Approve
                          </button>
                        ) : (
                          <span className="text-green-600 font-bold">Approved</span>
                        )}
                      </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan="6" className="text-center py-10 text-gray-500 text-lg">
                        No bookings match the search or filter criteria.
                    </td>
                </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalItems > 0 && totalPages > 1 && (
          <div className="flex justify-center md:justify-end mt-8">
            <nav className="relative z-0 inline-flex rounded-xl shadow-xl border border-gray-200 bg-white" aria-label="Pagination">
              
              <button
                onClick={goPrev}
                disabled={currentPage === 1}
                className={`relative inline-flex items-center px-4 py-3 rounded-l-xl text-sm font-bold transition duration-150 ${currentPage === 1 ? 'text-gray-400 bg-gray-50 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Previous
              </button>
              
              {getPageNumbers().map(page => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`relative inline-flex items-center px-4 py-3 text-sm font-bold transition duration-150 ${currentPage === page ? 'bg-[#D8A69E] text-white shadow-inner' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={goNext}
                disabled={currentPage >= totalPages}
                className={`relative inline-flex items-center px-4 py-3 rounded-r-xl text-sm font-bold transition duration-150 ${currentPage >= totalPages ? 'text-gray-400 bg-gray-50 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
              >
                Next
              </button>
            </nav>
          </div>
      )}
    </div>
  );
}


const Footer = () => {
  const linkStyle = "text-gray-300 hover:text-white transition duration-150";

  return (
    <footer className="bg-[#6D8B95] text-white mt-16 shadow-inner">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-400/50 pb-8">
          
          <div className="col-span-2 md:col-span-1">
            <UniStayLogo size="base" color="white" />
            <p className="mt-4 text-sm text-gray-300">
              Your trusted partner in finding the perfect student accommodations. Making university life comfortable and affordable.
            </p>
            <div className="flex space-x-4 mt-4">
                <a href="#" aria-label="Facebook" className={linkStyle}><Facebook size={20} /></a>
                <a href="#" aria-label="Twitter" className={linkStyle}><Twitter size={20} /></a>
                <a href="#" aria-label="Instagram" className={linkStyle}><Instagram size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className={linkStyle}>Browse Properties</a></li>
              <li><a href="#" className={linkStyle}>How It Works</a></li>
              <li><a href="#" className={linkStyle}>For Landlords</a></li>
              <li><a href="#" className={linkStyle}>Student Resources</a></li>
              <li><a href="#" className={linkStyle}>Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className={linkStyle}>Help Center</a></li>
              <li><a href="#" className={linkStyle}>Contact Us</a></li>
              <li><a href="#" className={linkStyle}>Safety Guidelines</a></li>
              <li><a href="#" className={linkStyle}>Terms of Service</a></li>
              <li><a href="#" className={linkStyle}>Privacy Policy</a></li>
            </ul>
          </div>
          
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-lg font-bold mb-3">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-5 h-5" />
                <span>hello@uni-stay.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-300">
                <MapPin className="w-5 h-5 mt-1" />
                <span>123 University Ave<br/>Student District, CA 94158</span>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          © 2025 Uni-Stay. All rights reserved. Code Crafters @ DEP1 R3. Is making student housing simple and secure.
        </div>
      </div>
    </footer>
  );
};


const BookingManagement = () => { // تم تغيير اسم المكون الرئيسي
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 font-sans" dir="ltr">
            <Header />
            <main className="grow">
                <BookingDashboard />
            </main>
            <Footer />
        </div>
    );
};

export default BookingManagement;