/* eslint-disable jsx-a11y/anchor-is-valid */
// src/App.js
import React from 'react';
import { FiMail } from 'react-icons/fi'; // Import the Mail icon from react-icons

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-tr from-gray-500 to-black font-Merriweather p-4 rounded-b-full h-28 pl-8">
      <div className="container mx-auto flex justify-between items-center pt-6 text-lg">
        <ul className="flex space-x-8">
          <li>
            <a href="#" className="text-white hover:text-orange-500 transition">
              Sleep Quiz 💤
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-orange-500 transition">
              Know your Heart 🫀
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-orange-500 transition">
              Ask a Question ❓
            </a>
          </li>
        </ul>

        <button className="text-white pr-6">
          <FiMail className="inline-block text-xl mr-2" />
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
