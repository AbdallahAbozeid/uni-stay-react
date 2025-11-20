import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet, useLocation } from 'react-router-dom'

export default function Layout() {

  const location = useLocation();

  // الصفحات اللي مش عايزة فيها Navbar & Footer
  const hideLayoutPages = ["/login", "/register"];

  // هل الصفحة الحالية واحدة منهم؟
  const hideLayout = hideLayoutPages.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}

      <Outlet />

      {!hideLayout && <Footer />}
    </>
  );
}
