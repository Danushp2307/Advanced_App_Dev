import React from 'react';
import bigTextImage from '../assets/new.jpeg';

const Home = () => {
  return (
    <div className="relative h-screen bg-gray-200 flex items-center justify-center">
      {/* Text on the left */}
      <div className="absolute left-0 p-8">
        <h1 className="text-5xl font-bold text-white">Find Your Dream Job</h1>
        <p className="text-lg text-white mt-4">Explore thousands of job opportunities tailored for you</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-8 shadow-lg">Get Started</button>
      </div>
      
      {/* Image on the right */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <img src={bigTextImage} alt="Big Text Image" className="max-w-full h-auto" />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0  opacity-100 z-0"></div>
    </div>
  );
}

export default Home;