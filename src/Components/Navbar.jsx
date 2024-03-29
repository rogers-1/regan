import React from "react";
import Logo from "../Assets/Reaganlogo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="shadow-md">
      <div className="flex flex-col sm:flex-row justify-between items-center py-4 px-6">
        {/* Logo */}
        <img src={Logo} alt="Reagan.com" className="w-36 sm:w-28" />

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-end gap-4 sm:gap-8 sm:ml-auto sm:mr-6">
          <li className="text-lg cursor-pointer">Blog</li>
          <li className="text-lg cursor-pointer">
            <a href="https://support.reagan.com/hc/en-us">Support</a>
          </li>
          <li className="text-lg cursor-pointer">Member Area</li>
          <li className="text-lg cursor-pointer">
            <a href="/Login">My Email</a>
          </li>
        </ul>

        {/* Join Now Button */}
        <button className="bg-blue-700 hover:bg-blue-800 text-white text-lg px-6 py-2 rounded-md">
          Join Now
        </button>
      </div>
      {/* Changes made to using git */}
    </div>
  );
}

export default Navbar;
