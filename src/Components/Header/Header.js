import React from 'react';
import { FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4">
            <img
        src="https://res.cloudinary.com/dmpposta9/image/upload/v1716289787/beyond/daviskicapital/The_Data_Detectiv_removeb_preview_whk6dc.png"
        alt="logo"
        className="w-[150px]"
      />

      <div className="flex items-center space-x-2">
        <FaEnvelope className="text-blue-600" />
        <a href="mailto:detective@daviskicapital.com" className="text-blue-600">detective@daviskicapital.com</a>
      </div>
      <div className="flex items-center space-x-2">
        <FaPhone className="text-blue-600" />
        <a href="tel:+254797713396" className="text-blue-600">+254797713396</a>
      </div>
      <div className="flex space-x-4">
        <a href="https://www.facebook.com" className="text-blue-600 hover:text-blue-800">
          <FaFacebookF className="w-6 h-6" />
        </a>
        <a href="https://www.twitter.com" className="text-blue-600 hover:text-blue-800">
          <FaTwitter className="w-6 h-6" />
        </a>
        <a href="https://www.instagram.com" className="text-blue-600 hover:text-blue-800">
          <FaInstagram className="w-6 h-6" />
        </a>
        <a href="https://www.pinterest.com" className="text-blue-600 hover:text-blue-800">
          <FaPinterest className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}

export default Header;
