import React from 'react';
import { Twitter, Facebook, Instagram } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex">
            <a href="https://twitter.com"><Twitter size={24} color="white" className="mr-4" /></a>
            <a href="https://facebook.com"><Facebook size={24} color="white" className="mr-4" /></a>
            <a href="https://instagram.com"><Instagram size={24} color="white" /></a>
          </div>
          <div>
            <NavLink
            to={"/terms" }
            className="text-sm mr-4">Terms and Conditions
            </NavLink>
            <p className="text-sm">&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
