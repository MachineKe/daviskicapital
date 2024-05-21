import React from "react";

const Navbar = () => {
  return (
    <div className="text-black flex justify-between items-center px-4 h-20">
      {/* Logo */}
      <img
        src="https://res.cloudinary.com/dmpposta9/image/upload/v1716289787/beyond/daviskicapital/The_Data_Detectiv_removeb_preview_whk6dc.png"
        alt="logo"
        className="w-[150px]"
      />

      {/* Navigation Links */}
      <ul className="flex space-x-8">
        <li className="hover:text-gray-200">
          <a href="#">Home</a>
        </li>
        <li className="hover:text-gray-200">
          <a href="#">About</a>
        </li>
        <li className="hover:text-gray-200">
          <a href="#">Services</a>
        </li>
        <li className="hover:text-gray-200">
          <a href="#">Blog</a>
        </li>
        <li className="hover:text-gray-200">
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Get Started
            </button>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
