import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 h-screen">
      <div className="p-4">
        <h2 className="text-2xl font-bold">Dashboard</h2>
      </div>
      <nav className="mt-6">
        <ul>
          <li>
            <Link to="/dashboard" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white">
              <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm0-18a8 8 0 100 16 8 8 0 000-16zm-2 12v-5H9v-2h1V9h2v4h2v2h-2v5h-1z"></path></svg>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/profile" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white">
              <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12 22s-8-4.5-8-8V8c0-4.5 3.5-8 8-8s8 3.5 8 8v6c0 3.5-8 8-8 8zm0-14c-2.75 0-5 2.25-5 5v4h10v-4c0-2.75-2.25-5-5-5z"></path></svg>
              Profile
            </Link>
          </li>
          {/* Add more menu items as needed */}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
