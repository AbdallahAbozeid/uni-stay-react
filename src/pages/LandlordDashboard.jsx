import React from "react";

const LandlordDashboard = () => {

  return (
    <div className="bg-us-cream min-h-screen pt-9">

      {/* ======================== PAGE TITLE ======================== */}
      <h1 className="text-3xl md:text-4xl font-bold text-[#333] ml-4 md:ml-13 mb-6 md:mb-9">
        Landlord Dashboard
      </h1>

      <div className="block md:flex">
        {/* ======================== SIDEBAR ======================== */}
        <aside className="bg-[#eee3c2f3] w-full md:w-64 h-auto md:h-60rem p-5 md:p-0">
          <h2 className="text-2xl md:text-3xl pt-2 md:pt-7 font-medium ml-0 md:ml-5 text-[#333] mb-4">
            Navigation
          </h2>
          <ul className="flex flex-col space-y-4 md:space-y-9 text-start ml-0 md:ml-5 mt-4 md:mt-9">
            <a href="">
              <li className="font-medium text-lg text-[#333]">
                <span className="bg-[#C8846C] px-1.5 py-1 rounded-md mr-4">
                  <i className="fa-solid fa-building-circle-check" style={{ color: "#f7f7f7" }}></i>
                </span>
                Bookings
              </li>
            </a>

            <a href="">
              <li className="font-medium text-lg text-[#333]">
                <span className="bg-[#C8846C] px-1.5 py-1 rounded-md mr-4">
                  <i className="fa-solid fa-file-import" style={{ color: "#ffffff" }}></i>
                </span>
                New Requests
              </li>
            </a>

            <a href="">
              <li className="font-medium text-lg text-[#333]">
                <span className="bg-[#C8846C] px-1.5 py-1 rounded-md mr-4">
                  <i className="fa-solid fa-plus" style={{ color: "#ffffff" }}></i>
                </span>
                Add Property
              </li>
            </a>

            <a href="">
              <li className="font-medium text-lg text-[#333]">
                <span className="bg-[#C8846C] px-1.5 py-1 rounded-md mr-4">
                  <i className="fa-solid fa-right-from-bracket fa-flip-horizontal" style={{ color: "#fafcff" }}></i>
                </span>
                Logout
              </li>
            </a>
          </ul>
        </aside>

        {/* ======================== MAIN CONTENT ======================== */}
        <main className="w-full p-4 md:p-0">

          {/* ===== Overview Cards ===== */}
          <section id="overview">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:flex md:flex-row md:gap-9 md:ml-9">
              <a href="#">
                <div className="flex flex-col cards text-[22px] bg-[#eee3c2f3]">
                  <h3 className="flex justify-center pt-1 px-4">My Properties</h3>
                  <p className="flex justify-center pb-7 mt-3">12</p>
                </div>
              </a>

              <a href="#">
                <div className="flex flex-col cards text-[22px] bg-[#eee3c2f3]">
                  <h3 className="flex justify-center pt-1 px-4">Currently Booked</h3>
                  <p className="flex justify-center pb-7 mt-3">8</p>
                </div>
              </a>

              <a href="#">
                <div className="flex flex-col cards text-[22px] bg-[#eee3c2f3]">
                  <h3 className="flex justify-center pt-1 px-4">New Requests</h3>
                  <p className="flex justify-center pb-7 mt-3">10</p>
                </div>
              </a>
            </div>
          </section>

          {/* ===== Properties Table ===== */}
          <section className="mt-8 md:mt-13 md:ml-9 overflow-x-auto">
            <table className="text-start w-full md:w-[670px] min-w-[600px] border-collapse">
              <thead className="text-center">
                <tr className="h-11 bg-[#eee3c2f3] border-y-3 border-[#FAF6EA]">
                  <th className="pl-3 w-1/4">Property Name</th>
                  <th className="w-1/5">Location</th>
                  <th className="w-1/6">Price</th>
                  <th className="w-1/6">Status</th>
                  <th className="w-auto">Actions</th>
                </tr>
              </thead>

              <tbody>
                {[
                  { name: "Property sample", location: "Cairo", price: "1400" },
                  { name: "Property sample", location: "Giza", price: "800" },
                  { name: "Property sample", location: "Alex", price: "2200" },
                ].map((row, index) => (
                  <tr key={index} className="h-11 bg-[#eee3c2f3] border-y-3 border-[#FAF6EA] text-center">
                    <td className="pl-3">{row.name}</td>
                    <td>{row.location}</td>
                    <td>{row.price}</td>
                    <td>Available</td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* ===== Recent Bookings ===== */}
          <section className="mt-8 md:mt-12 md:ml-9 w-full md:w-[670px] mb-12 md:mb-19">
            <h2 className="mb-5 font-semibold text-[25px]">Recent Bookings</h2>

            <div className="flex flex-col bg-[#eee3c2f3]">
              <p className="flex justify-start py-1 pl-3 border-y-3 h-11 border-[#FAF6EA]">
                Student1 - property1 - 01 Sep 2025
              </p>
              <p className="flex justify-start py-1 pl-3 border-y-3 h-11 border-[#FAF6EA]">
                Student2 - property1 - 08 Sep 2025
              </p>
              <p className="flex justify-start py-1 pl-3 border-y-3 h-11 border-[#FAF6EA]">
                Student3 - property2 - 15 Oct 2025
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default LandlordDashboard;
