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
import SafetyGuidelines from "./pages/SafetyGuidelines";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
// صفحات Auth
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  //add admin user if not exists
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const adminExists = users.some((u) => u.role === "admin");

  if (!adminExists) {
    const adminUser = {
      fullName: "Admin User",
      email: "admin@unistay.com",
      phone: "000-000-0000",
      password: "admin123",
      role: "admin",
      avatar: "",
    };
    users.push(adminUser);
    localStorage.setItem("users", JSON.stringify(users));
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        //  الصفحة الأساسية Home
        { index: true, element: <Home /> },

        //  صفحات تسجيل الدخول
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },

        //  باقي الصفحات
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
        { path: "safety-guidelines", element: <SafetyGuidelines /> },
        { path: "coming-soon", element: <ComingSoon /> },
        { path: "terms-of-service", element: <TermsOfService /> },
        { path: "privacy-policy", element: <PrivacyPolicy /> },
        // 404
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
