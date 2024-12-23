import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-700 text-white p-4 fixed top-0 w-full z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="logo-placeholder.png" // Replace with your actual logo path
            alt="Adani ACM Logo"
            className="h-10"
          />
          <h1 className="text-2xl font-bold">Adani ACM & ACM-W Chapter</h1>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#events" className="hover:underline">Events</a></li>
            <li><a href="/team" className="hover:underline">Team</a></li>
            <li><a href="#gallery" className="hover:underline">Gallery</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>

        {/* Call-to-Action Button */}
        <a
          href="#join"
          className="bg-white text-blue-700 px-4 py-2 rounded hover:bg-blue-100 transition duration-200"
        >
          Join Now
        </a>
      </div>
    </header>
  );
};

export default Header;
