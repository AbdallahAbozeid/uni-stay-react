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
import Login from "./pages/Login";
import Management from "./pages/Management";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Owner from "./pages/Owner";
import NotFound from "./pages/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "add-property", element: <AddProperty /> },
        { path: "admin-dashboard", element: <AdminDashboard /> },
        { path: "booking", element: <Booking /> },
        { path: "booking-management", element: <BookingManagement /> },
        { path: "contact-us", element: <ContactUs /> },
        { path: "details/:id", element: <Details /> },
        { path: "favorites", element: <Favorites /> },
        { path: "gallery", element: <Gallery /> },
        { path: "landlord-dashboard", element: <LandlordDashboard /> },
        { path: "login", element: <Login /> },
        { path: "management", element: <Management /> },
        { path: "profile", element: <Profile /> },
        { path: "register", element: <Register /> },
        { path: "owner", element: <Owner /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
  <>
  <RouterProvider router={router} />
  </>
  );
}

export default App;