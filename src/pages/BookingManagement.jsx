import React, { useState, useEffect } from 'react';



const svgProps = { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" };

const LayoutDashboard = (props) => <svg {...props} {...svgProps}><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>;
const LogOut = (props) => <svg {...props} {...svgProps}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>;
const Search = (props) => <svg {...props} {...svgProps}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
const ChevronDown = (props) => <svg {...props} {...svgProps}><polyline points="6 9 12 15 18 9"/></svg>;
const Calendar = (props) => <svg {...props} {...svgProps}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;
const Home = (props) => <svg {...props} {...svgProps}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
const Facebook = (props) => <svg {...props} {...svgProps}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const Instagram = (props) => <svg {...props} {...svgProps}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
const Twitter = (props) => <svg {...props} {...svgProps}><path d="M22.54 6.42a9.38 9.38 0 0 1-2.67.73A4.77 4.77 0 0 0 16 4a4.83 4.83 0 0 0-4.8 4.8 13.9 13.9 0 0 0 7.8 4 4.77 4.77 0 0 1-2.4 1.7 9.53 9.53 0 0 1-4.9 0 4.77 4.77 0 0 0 4.4 3.3 9.4 9.4 0 0 1-5.9 2.1 13.9 13.9 0 0 0 7.5 2.2c9 0 13.9-7.5 13.9-13.9a13.67 13.67 0 0 0 .32-3.34z"/></svg>;
const Mail = (props) => <svg {...props} {...svgProps}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const Phone = (props) => <svg {...props} {...svgProps}><path d="M22 16.9v3a2 2 0 0 1-2 2h-1c-2.8 0-5.5-.9-8-3-2.6-2.4-4.5-5.1-4.9-8-.2-2.5-1.1-5.1-3-7-1.4-1.4-3.5-2.2-5.6-2.2-2.1 0-4.2.8-5.6 2.2L2 5c-1.4 1.4-2.2 3.5-2.2 5.6 0 2.1.8 4.2 2.2 5.6l3 3c3 3 7 4.5 11.1 4.5s8-1.5 11.1-4.5l3-3c1.4-1.4 2.2-3.5 2.2-5.6 0-2.1-.8-4.2-2.2-5.6l-3-3c-1.4-1.4-3.5-2.2-5.6-2.2-2.1 0-4.2.8-5.6 2.2L2 5.6"/><line x1="17.8" y1="5.2" x2="20.5" y2="7.9"/></svg>;
const MapPin = (props) => <svg {...props} {...svgProps}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>;



const initialBookings = [
  { id: 1, studentName: 'Mona Ahmed', property: 'Modern Apartment', date: 'June 12, 2024', duration: '11 months', status: 'Pending' },
  { id: 2, studentName: 'Nada Mahmoud', property: 'Cozy Studio', date: 'August 12, 2024', duration: '6 months', status: 'Pending' },
  { id: 3, studentName: 'Mona Ashraf', property: 'Shared Room', date: 'January 10, 2024', duration: '10 months', status: 'Pending' },
  { id: 4, studentName: 'Omar Khan', property: 'Modern Apartment', date: 'September 12, 2024', duration: '6 months', status: 'Pending' },
  { id: 5, studentName: 'Khaled Ali', property: 'Cozy Studio', date: 'October 01, 2024', duration: '12 months', status: 'Approved' },
  { id: 6, studentName: 'Layla Hassan', property: 'Shared Room', date: 'July 20, 2024', duration: '9 months', status: 'Pending' },
  { id: 7, studentName: 'Tariq Nabil', property: 'Luxury Penthouse', date: 'November 05, 2024', duration: '12 months', status: 'Pending' },
  { id: 8, studentName: 'Samira Kamal', property: 'Single Room', date: 'December 15, 2024', duration: '6 months', status: 'Approved' },
  { id: 9, studentName: 'Fahd Zaki', property: 'Cozy Studio', date: 'January 22, 2025', duration: '10 months', status: 'Pending' },
];

const ITEMS_PER_PAGE = 4;

const UniStayLogo = ({ size = 'xl', color = '#66869f' }) => (
    <div className="flex items-center space-x-1" dir="ltr"> 
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
                            className="px-4 py-2 bg-[#66869f] text-white font-bold text-sm rounded-xl hover:bg-[#c8846c] transition duration-150 shadow-md flex items-center space-x-1"
                        >
                            <LayoutDashboard size={18} className="mr-1" />
                            <span>Dashboard</span>
                        </button>
                        <button
                            onClick={() => console.log("Logout clicked")}
                            className="px-4 py-2 bg-[#c8846c] text-white font-bold text-sm rounded-xl hover:bg-[#66869f] transition duration-150 shadow-md flex items-center space-x-1"
                        >
                            <LogOut size={18} className="mr-1" />
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

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filterStatus]);
  useEffect(() => {
        document.title = "Uni-Stay | Booking Management";
      }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-extrabold mb-10 text-[#333333] text-center  pb-4">
        <Calendar className="inline-block align-middle mr-3 text-[#66869f] w-7 h-7" /> Booking Management
      </h1>

      {/* Filter and Search Controls */}
      <div className="flex flex-col md:flex-row justify-start items-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
        
        {/* Search Bar */}
        <div className="flex items-center space-x-2 border border-gray-300 rounded-xl p-3 bg-white shadow-inner w-full md:w-80 order-1">
          <Search className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search by Name or Property..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="focus:outline-none w-full text-[#333333] placeholder-gray-500"
          />
        </div>

        {/* Status Filter */}
        <div className="relative order-2 w-full md:w-auto">
            <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="block appearance-none border border-gray-300 rounded-xl py-3 pl-4 pr-12 bg-white text-[#333333] shadow-sm focus:ring-[#66869f] focus:border-[#66869f] transition duration-150 w-full"
            >
                <option value="All">All Statuses</option>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#333333]">
                <ChevronDown className="h-5 w-5" />
            </div>
        </div>
        
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
              {/* Changed text-right to text-left for table headers */}
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
                      {/* Changed text-right to text-left for table cells */}
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-[#333333] text-left">{booking.studentName}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-left flex items-center">
                        <Home className="w-4 h-4 mr-2 text-[#66869f]" />
                        {booking.property}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-left">{booking.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-left">{booking.duration}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-left">
                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full transition-colors duration-200 shadow-sm ${
                            booking.status === 'Pending' 
                              ? 'bg-yellow-100 text-yellow-800' 
                              : 'bg-[#95caac]/30 text-[#66869f]' 
                          }`}>
                          {booking.status}
                        </span>
                      </td>
                     
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-bold">
                        {booking.status === 'Pending' ? (
                          <button
                            onClick={() => handleApprove(booking.id)}
                            className="text-[#c8846c] hover:text-[#66869f] transition duration-150 focus:outline-none focus:ring-2 focus:ring-[#c8846c] focus:ring-offset-2 rounded-lg p-2"
                          >
                            Approve
                          </button>
                        ) : (
                          <span className="text-[#66869f] font-bold">Approved</span>
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

      {totalItems > 0 && totalPages > 1 && (
          <div className="flex justify-end mt-8">
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
                  // Primary Color: #c8846c
                  className={`relative inline-flex items-center px-4 py-3 text-sm font-bold transition duration-150 ${currentPage === page ? 'bg-[#c8846c] text-white shadow-inner' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
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
  
  const linkStyle = "text-[#e6eef5] hover:text-white transition duration-150";

  return (
    <footer className="bg-[#66869f] text-white mt-16 shadow-inner">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-400/50 pb-8">
          
          <div className="col-span-2 md:col-span-1">
            <UniStayLogo size="base" color="white" />
            <p className="mt-4 text-sm text-[#e6eef5]">
              Your trusted partner in finding the perfect student accommodations. Let's make university life comfortable and affordable.
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
            <h4 className="text-lg font-bold mb-3">Contact Information</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2 text-[#e6eef5]">
                <Mail className="w-5 h-5" />
                <span>hello@uni-stay.com</span>
              </li>
              <li className="flex items-center space-x-2 text-[#e6eef5]">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2 text-[#e6eef5]">
                <MapPin className="w-5 h-5 mt-1" />
                <span>123 University Ave<br/>Student District, CA 94158</span>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="mt-8 text-center text-sm text-[#e6eef5]">
          © 2025 Uni-Stay. All rights reserved.
        </div>
      </div>
    </footer>
  );
};


const BookingManagement = () => {
   
    return (
        <div className="min-h-screen flex flex-col bg-[#fdf6e3] font-sans">
            <Header />
            <main className="grow">
                <BookingDashboard />
            </main>
            <Footer />
        </div>
    );
};

export default BookingManagement;