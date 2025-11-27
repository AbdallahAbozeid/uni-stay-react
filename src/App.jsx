import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout";
import Home from "./pages/Home";
import AddProperty from "./pages/AddProperty";
import AdminDashboard from "./pages/AdminDashboard";
import Booking from "./pages/Booking";
import BookingManagement from "./pages/BookingManagement";
import ContactUs from "./pages/ContactUs";
import Details from "./pages/Details";
import Favorites from "./pages/Favorites";
import Gallery from "./pages/Gallery";
import LandlordDashboard from "./pages/LandlordDashboard";
import Management from "./pages/Management";
import Profile from "./pages/Profile";
import Owner from "./pages/Owner";
import NotFound from "./pages/NotFound";
import ComingSoon from "./pages/ComingSoon";

// صفحات Auth
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        // 🟢 الصفحة الأساسية Home
        { index: true, element: <Home /> },

        //  صفحات تسجيل الدخول
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },

        // 🔵 باقي الصفحات
        { path: "add-property", element: <AddProperty /> },
        { path: "admin-dashboard", element: <AdminDashboard /> },
        { path: "booking", element: <Booking /> },
        { path: "booking-management", element: <BookingManagement /> },
        { path: "contact-us", element: <ContactUs /> },
        { path: "details/:id", element: <Details /> },
        { path: "favorites", element: <Favorites /> },
        { path: "gallery", element: <Gallery /> },
        { path: "landlord-dashboard", element: <LandlordDashboard /> },
        { path: "management", element: <Management /> },
        { path: "profile", element: <Profile /> },
        { path: "owner", element: <Owner /> },
        { path: "coming-soon", element: <ComingSoon />},

        // 404
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
