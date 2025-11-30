import React, { useEffect } from 'react'

export default function NotFound() {
   useEffect(() => {
        document.title = "Uni-Stay | NotFound !";
      }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-us-cream text-us-textDark">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-8">Oops! The page you're looking for doesn't exist.</p>
      <a href="/" className="px-6 py-3 bg-us-primary text-white rounded hover:bg-us-primaryDark transition">
        Go Back Home 
      </a>
    </div>
  )
}
